using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using System.Collections.Generic;
using System.Collections;

/// <summary>
/// Base class for draggable, grid-snapping UI controls.
/// This version includes:
/// - Grid step/margins configuration from the grid generator
/// - Center-on-middle-dot (first time) placement
/// - Default grid span sizing (device-independent)
/// - Public APIs to set grid span, set center at (col,row), set rotation
/// - Collision coloring + bounds clamping
/// </summary>
public abstract class DraggableUIBase : MonoBehaviour,
    IBeginDragHandler, IDragHandler, IEndDragHandler, IPointerClickHandler
{
    public enum ResizeHandleDirection
    {
        Right,
        Left,
        Up,
        Down
    }

    public static readonly List<DraggableUIBase> AllDraggables = new List<DraggableUIBase>();

    public RectTransform RectTransform => rectTransform;
    public RectTransform ParentRectTransform => parentRectTransform;
    public bool IsEditModeEnabled => canDrag;
    public bool IsMarkedForDeletion => markedForDeletion;

    protected RectTransform rectTransform;
    protected RectTransform parentRectTransform;

    [SerializeField] private GameObject editUI;

    protected bool isSelected = false;
    protected bool canDrag = false;

    // drag state
    private Vector3 pointerOffset;
    private bool isDragging = false;
    private int activePointerId = -1;

    // original transform/state
    protected Vector2 originalPosition;
    protected Quaternion originalRotation;
    protected bool markedForDeletion = false;

    // colors
    [SerializeField] protected Color defaultMainColor = new Color(0.7764707f, 0.3137255f, 0.3098039f, 1f);
    [SerializeField] protected Color collisionMainColor = Color.gray;
    [SerializeField] protected Color defaultBackgroundColor = Color.white;

    protected readonly List<Image> mainImagesToColor = new List<Image>();
    protected readonly List<Image> backgroundImagesToColor = new List<Image>();

    // collisions
    private HashSet<DraggableUIBase> currentlyCollidingWith = new HashSet<DraggableUIBase>();

    [Header("Grid Snap (optional)")]
    [SerializeField] protected bool useGridSnap = true;
    [SerializeField] protected Vector2 gridCellSize = new Vector2(50f, 50f);
    [SerializeField] protected Vector2 gridMargins = Vector2.zero;   // inset from each side in anchored space

    // === NEW: Grid span + first-time center placement control ===
    [Header("Grid Spans (defaults in grid cells)")]
    [SerializeField] protected int defaultGridSpanX = 4;   // how many grid columns the control should span
    [SerializeField] protected int defaultGridSpanY = 5;   // how many grid rows the control should span
    [SerializeField] protected bool placeAtCenterOnFirstConfigure = true;
    [SerializeField] private float collisionTolerance = 0.5f; // 0.5–1.0 is usually good

    // Remember last grid counts to compute center cell + clamping ranges
    protected int lastCols;
    protected int lastRows;

    private bool hasRunFirstCenterPlacement = false;

    private bool EnsureTransformReferences()
    {
        if (rectTransform == null)
            rectTransform = GetComponent<RectTransform>();

        if (parentRectTransform == null)
            parentRectTransform = transform.parent != null ? transform.parent.GetComponent<RectTransform>() : null;

        return rectTransform != null;
    }

    public bool UseGridSnap
    {
        get => useGridSnap;
        set => useGridSnap = value;
    }

    // Optional accessor for other helpers (e.g., resizers)
    public Vector2 GridStep() => gridCellSize;

    protected virtual void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
        parentRectTransform = transform.parent?.GetComponent<RectTransform>();

        // Pivot checks – grid snapping math assumes center pivots
        if (rectTransform.pivot != new Vector2(0.5f, 0.5f))
            Debug.LogWarning($"{name}: Snap assumes center pivot (0.5,0.5).");
        if (parentRectTransform && parentRectTransform.pivot != new Vector2(0.5f, 0.5f))
            Debug.LogWarning($"{name}: Snap assumes parent pivot (0.5,0.5).");

        // Common main image: if this object has an Image and is a Button, tint that Image by default
        var btn = GetComponent<Button>();
        var img = GetComponent<Image>();
        if (btn != null && img != null)
            mainImagesToColor.Add(img);

        AllDraggables.Add(this);
    }

    protected virtual void Start()
    {
        originalPosition = rectTransform.anchoredPosition;
        originalRotation = rectTransform.localRotation;
    }

    protected virtual void OnDestroy()
    {
        AllDraggables.Remove(this);
    }

    #region Edit Mode
    public virtual void SetEditMode(bool enabled)
    {
        canDrag = enabled;

        // Disable interactable on Selectable-derived controls while editing
        var selectable = GetComponent<Selectable>();
        if (selectable != null)
            selectable.interactable = !enabled;

        if (enabled)
        {
            originalPosition = rectTransform.anchoredPosition;
            originalRotation = rectTransform.localRotation;
            OnEnterEditMode();
        }
        else
        {
            OnExitEditMode();
        }
    }

    // Hooks for subclasses
    protected virtual void OnEnterEditMode() { }
    protected virtual void OnExitEditMode() { }
    #endregion

    #region EventSystem handlers
    public virtual void OnPointerClick(PointerEventData eventData)
    {
        if (!canDrag) return;
        AppManager.Instance?.DeselectAll();
        SelectThis();
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (!canDrag || isDragging) return;

        isDragging = true;
        activePointerId = eventData.pointerId;

        rectTransform.SetAsLastSibling();

        RectTransformUtility.ScreenPointToWorldPointInRectangle(
            rectTransform, eventData.position, eventData.pressEventCamera, out Vector3 worldPointerPosition);

        pointerOffset = rectTransform.position - worldPointerPosition;
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!canDrag || !isDragging || eventData.pointerId != activePointerId) return;

        if (RectTransformUtility.ScreenPointToWorldPointInRectangle(
            parentRectTransform, eventData.position, eventData.pressEventCamera, out Vector3 worldPointerPosition))
        {
            Vector3 targetWorldPosition = worldPointerPosition + pointerOffset;
            rectTransform.position = targetWorldPosition;

            // Keep inside bounds, but DO NOT snap while dragging.
            ClampIntoBounds();
            UpdateCollisionStates();
        }
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (!canDrag || !isDragging || eventData.pointerId != activePointerId) return;

        isDragging = false;
        activePointerId = -1;

        // Snap when releasing the drag (center to nearest dot)
        if (useGridSnap) SnapToGridNow();

        UpdateCollisionStates();
    }
    #endregion

    #region Selection / Delete
    public virtual void SelectThis()
    {
        isSelected = true;
        if (editUI != null) editUI.SetActive(true);
    }

    public virtual void Deselect()
    {
        isSelected = false;
        if (editUI != null) editUI.SetActive(false);
    }

    public virtual void DeleteThis()
    {
        markedForDeletion = true;
        gameObject.SetActive(false);
    }

    public void DeleteAndReturnToAddMenu()
    {
        if (!canDrag)
            return;

        if (TryGetControlIdentity(out string controlType, out string controlName))
            AppManager.Instance?.RegisterControlAsUninitialized(controlType, controlName);

        DeleteThis();
        Deselect();
    }

    public void FinalizeDelete()
    {
        if (markedForDeletion) Destroy(gameObject);
    }
    #endregion

    #region Bounds / Collisions
    protected bool ClampIntoBoundsReturningMoved()
    {
        if (parentRectTransform == null) return false;

        Vector3[] worldCorners = new Vector3[4];
        rectTransform.GetWorldCorners(worldCorners);

        Vector3[] parentCorners = new Vector3[4];
        parentRectTransform.GetWorldCorners(parentCorners);

        Vector2 parentMin = parentCorners[0];
        Vector2 parentMax = parentCorners[2];

        Vector2 move = Vector2.zero;

        foreach (var corner in worldCorners)
        {
            if (corner.x < parentMin.x)
                move.x = Mathf.Max(move.x, parentMin.x - corner.x);
            if (corner.x > parentMax.x)
                move.x = Mathf.Min(move.x, parentMax.x - corner.x);

            if (corner.y < parentMin.y)
                move.y = Mathf.Max(move.y, parentMin.y - corner.y);
            if (corner.y > parentMax.y)
                move.y = Mathf.Min(move.y, parentMax.y - corner.y);
        }

        if (move != Vector2.zero)
        {
            rectTransform.position += (Vector3)move;

            // Only snap if we're NOT actively dragging (prevents mid-drag snapping)
            if (useGridSnap && !isDragging) SnapToGridNow();

            return true;
        }
        return false;
    }

    // keep the old non-returning version if other calls use it
    protected void ClampIntoBounds()
    {
        ClampIntoBoundsReturningMoved();
    }

    protected void UpdateCollisionStates()
    {
        HashSet<DraggableUIBase> newColliding = new HashSet<DraggableUIBase>();

        foreach (var draggable in AllDraggables)
        {
            if (draggable == null || draggable == this) continue;
            // pass tolerance so touching edges isn't counted
            if (IsOverlapping(this.rectTransform, draggable.rectTransform, collisionTolerance))
                newColliding.Add(draggable);
        }

        if (newColliding.Count > 0)
        {
            SetImagesColor(collisionMainColor, collisionMainColor);
        }
        else
        {
            SetImagesColor(defaultMainColor, defaultBackgroundColor);
        }

        foreach (var other in currentlyCollidingWith)
        {
            if (!newColliding.Contains(other))
                other.CheckIfStillColliding();
        }

        foreach (var other in newColliding)
        {
            if (!currentlyCollidingWith.Contains(other))
                other.CheckIfStillColliding();
        }

        currentlyCollidingWith = newColliding;

        AppManager.Instance?.SetEditConfirmationState(!AnyCollisionExists());
    }

    private bool AnyCollisionExists()
    {
        foreach (var a in AllDraggables)
        {
            if (a == null) continue;

            foreach (var b in AllDraggables)
            {
                if (b == null || b == a) continue;
                // pass tolerance here as well
                if (IsOverlapping(a.rectTransform, b.rectTransform, collisionTolerance))
                    return true;
            }
        }
        return false;
    }

    public void CheckIfStillColliding()
    {
        bool stillColliding = false;

        foreach (var draggable in AllDraggables)
        {
            if (draggable == null || draggable == this) continue;
            // pass tolerance so edge-touch doesn't trip collision color
            if (IsOverlapping(this.rectTransform, draggable.rectTransform, collisionTolerance))
            {
                stillColliding = true;
                break;
            }
        }

        SetImagesColor(stillColliding ? collisionMainColor : defaultMainColor,
                    stillColliding ? collisionMainColor : defaultBackgroundColor);
    }

    public static bool IsOverlapping(RectTransform a, RectTransform b, float tol)
    {
        Vector3[] ac = new Vector3[4], bc = new Vector3[4];
        a.GetWorldCorners(ac); b.GetWorldCorners(bc);
        Vector2[] axes = {
            (ac[1]-ac[0]).normalized, (ac[3]-ac[0]).normalized,
            (bc[1]-bc[0]).normalized, (bc[3]-bc[0]).normalized
        };
        foreach (var axis in axes)
            if (!IsAxisOverlap(ac, bc, axis, tol)) return false;
        return true;
    }

    private static bool IsAxisOverlap(Vector3[] ac, Vector3[] bc, Vector2 axis, float tol)
    {
        ProjectCorners(ac, axis, out float aMin, out float aMax);
        ProjectCorners(bc, axis, out float bMin, out float bMax);
        float overlap = Mathf.Min(aMax, bMax) - Mathf.Max(aMin, bMin);
        return overlap > tol; // touching (≈0) is NOT overlapping
    }

    private static void ProjectCorners(Vector3[] corners, Vector2 axis, out float min, out float max)
    {
        min = Vector2.Dot((Vector2)corners[0], axis);
        max = min;

        for (int i = 1; i < corners.Length; i++)
        {
            float proj = Vector2.Dot((Vector2)corners[i], axis);
            min = Mathf.Min(min, proj);
            max = Mathf.Max(max, proj);
        }
    }
    #endregion

    #region Visuals
    protected void SetImagesColor(Color mainColor, Color backgroundColor)
    {
        foreach (var img in mainImagesToColor)
            if (img != null) img.color = mainColor;

        foreach (var img in backgroundImagesToColor)
            if (img != null) img.color = backgroundColor;
    }
    #endregion

    #region Transform Ops / Restore
    public virtual void Rotate90()
    {
        rectTransform.Rotate(0f, 0f, -90f);
        ClampIntoBounds();
        if (useGridSnap) SnapToGridNow();   // ensure a neat grid alignment after rotation
        UpdateCollisionStates();
    }

    public void RotateEditAction()
    {
        if (!canDrag || markedForDeletion)
            return;

        Rotate90();
    }

    public virtual void RestoreOriginalState()
    {
        markedForDeletion = false;
        gameObject.SetActive(true);

        // let subclasses restore their own captured state
        RestoreSubclassState();

        StartCoroutine(AnimateRestore(originalPosition, originalRotation, 0.3f));
    }

    protected virtual void RestoreSubclassState() { }

    protected IEnumerator AnimateRestore(Vector2 targetPosition, Quaternion targetRotation, float duration)
    {
        Vector2 startPos = rectTransform.anchoredPosition;
        Quaternion startRot = rectTransform.localRotation;
        float elapsed = 0f;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = Mathf.Clamp01(elapsed / duration);
            rectTransform.anchoredPosition = Vector2.Lerp(startPos, targetPosition, t);
            rectTransform.localRotation = Quaternion.Slerp(startRot, targetRotation, t);
            yield return null;
        }

        rectTransform.anchoredPosition = targetPosition;
        rectTransform.localRotation = targetRotation;
        SetImagesColor(defaultMainColor, defaultBackgroundColor);
        AppManager.Instance?.OnDraggableAnimationComplete();
        UpdateCollisionStates();
    }
    #endregion

    #region Snapping & Grid helpers

    /// <summary>Snap immediately to nearest grid dot (center-based), respecting margins/bounds.</summary>
    public void SnapToGridNow()
    {
        if (!EnsureTransformReferences()) return;
        if (!useGridSnap || parentRectTransform == null) return;
        if (gridCellSize.x <= 0f || gridCellSize.y <= 0f) return; // safety

        Vector2 current = rectTransform.anchoredPosition;
        Vector2 halfSize = GetRotatedHalfExtents();
        Vector2 snapped = SnapAnchoredToGrid(current, halfSize);
        rectTransform.anchoredPosition = snapped;
    }

    /// <summary>Compute half extents of the axis-aligned bounds of the rotated rect (in anchored units).</summary>
    private Vector2 GetRotatedHalfExtents()
    {
        Vector2 size = rectTransform.rect.size;

        float z = rectTransform.localEulerAngles.z * Mathf.Deg2Rad;
        float c = Mathf.Abs(Mathf.Cos(z));
        float s = Mathf.Abs(Mathf.Sin(z));

        float halfW = size.x * 0.5f;
        float halfH = size.y * 0.5f;

        float extX = c * halfW + s * halfH;
        float extY = s * halfW + c * halfH;

        return new Vector2(extX, extY);
    }

    /// <summary>Bottom-left of parent in anchored space (assumes pivot center).</summary>
    private Vector2 ParentBottomLeftAnchored()
    {
        Vector2 parentSize = parentRectTransform.rect.size;
        return new Vector2(-parentSize.x * 0.5f, -parentSize.y * 0.5f);
    }

    /// <summary>Grid origin (anchored space): first grid dot (bottom-left intersection).</summary>
    private Vector2 GridOriginAnchored()
    {
        Vector2 bl = ParentBottomLeftAnchored();
        return bl + gridMargins; // bottom-left dot
    }

    /// <summary>Core snap to nearest dot with extents-aware clamping.</summary>
    private Vector2 SnapAnchoredToGrid(Vector2 targetAnchored, Vector2 halfExtents)
    {
        // Parent rect edges in anchored space
        Vector2 parentSize = parentRectTransform.rect.size;
        Vector2 parentMin = ParentBottomLeftAnchored();                 // no margin for clamping
        Vector2 parentMax = new Vector2(parentSize.x * 0.5f, parentSize.y * 0.5f);

        // 1) Clamp the center so the whole rect stays inside the parent (no extra margin)
        Vector2 clampedCenter = new Vector2(
            Mathf.Clamp(targetAnchored.x, parentMin.x + halfExtents.x, parentMax.x - halfExtents.x),
            Mathf.Clamp(targetAnchored.y, parentMin.y + halfExtents.y, parentMax.y - halfExtents.y)
        );

        // 2) Snap that clamped center to the nearest grid DOT (origin uses gridMargins)
        Vector2 origin = GridOriginAnchored();                          // = ParentBottomLeft + gridMargins
        float gx = Mathf.Round((clampedCenter.x - origin.x) / gridCellSize.x);
        float gy = Mathf.Round((clampedCenter.y - origin.y) / gridCellSize.y);

        Vector2 snapped = origin + new Vector2(gx * gridCellSize.x, gy * gridCellSize.y);

        // 3) Final safety clamp to parent edges (still no extra margin)
        snapped = new Vector2(
            Mathf.Clamp(snapped.x, parentMin.x + halfExtents.x, parentMax.x - halfExtents.x),
            Mathf.Clamp(snapped.y, parentMin.y + halfExtents.y, parentMax.y - halfExtents.y)
        );

        return snapped;
    }

    /// <summary>Configure from the same counts/margins the dot grid uses.</summary>
    public void ConfigureGridFromCounts(RectTransform panel, int cols, int rows, float edge)
    {
        if (panel == null) return;

        var size = panel.rect.size;
        float usableW = Mathf.Max(0f, size.x - 2f * edge);
        float usableH = Mathf.Max(0f, size.y - 2f * edge);

        float stepX = (cols > 1) ? usableW / (cols - 1) : 0f;
        float stepY = (rows > 1) ? usableH / (rows - 1) : 0f;

        collisionTolerance = 0.01f * Mathf.Min(stepX, stepY); // 1% of a cell

        gridMargins  = new Vector2(edge, edge);   // same as edgeMargin used by dots
        gridCellSize = new Vector2(stepX, stepY); // same as stepX/stepY used by dots

        // Remember counts so we can center on the true middle dot and clamp col/row later
        lastCols = cols;
        lastRows = rows;

        // If requested, do the one-time center placement now (used when newly spawned)
        if (placeAtCenterOnFirstConfigure)
            PlaceAtGridCenterIfFirstTime();
    }

    /// <summary>Resize the RectTransform so its sizeDelta matches default spans * current gridCellSize.</summary>
    public void ApplyDefaultGridSpanScale()
    {
        if (gridCellSize.x <= 0f || gridCellSize.y <= 0f) return;

        int spanX = Mathf.Max(1, defaultGridSpanX);
        int spanY = Mathf.Max(1, defaultGridSpanY);

        rectTransform.anchorMin = rectTransform.anchorMax = new Vector2(0.5f, 0.5f);
        rectTransform.pivot = new Vector2(0.5f, 0.5f);

        Vector2 newSize = new Vector2(spanX * gridCellSize.x, spanY * gridCellSize.y);
        rectTransform.sizeDelta = newSize;

        ClampIntoBounds();
    }

    /// <summary>Move the center of this control to the middle grid dot (once).</summary>
    public void PlaceAtGridCenterIfFirstTime()
    {
        if (!placeAtCenterOnFirstConfigure || hasRunFirstCenterPlacement) return;
        if (parentRectTransform == null) return;
        if (gridCellSize.x <= 0f || gridCellSize.y <= 0f) return;

        int midX = Mathf.RoundToInt((lastCols - 1) * 0.5f);
        int midY = Mathf.RoundToInt((lastRows - 1) * 0.5f);

        Vector2 origin = GridOriginAnchored();
        Vector2 target = origin + new Vector2(midX * gridCellSize.x, midY * gridCellSize.y);

        Vector2 snapped = SnapAnchoredToGrid(target, GetRotatedHalfExtents());
        rectTransform.anchoredPosition = snapped;

        hasRunFirstCenterPlacement = true;
    }

    /// <summary>Reset the "first time" flag so the next configure can center again if requested.</summary>
    public void ResetFirstCenterPlacementFlag()
    {
        hasRunFirstCenterPlacement = false;
    }

    /// <summary>Size this control to spanX × spanY grid cells.</summary>
    public void SetGridSpan(int spanX, int spanY)
    {
        if (!EnsureTransformReferences()) return;
        if (gridCellSize.x <= 0f || gridCellSize.y <= 0f) return;
        int sx = Mathf.Max(1, spanX);
        int sy = Mathf.Max(1, spanY);

        rectTransform.anchorMin = rectTransform.anchorMax = new Vector2(0.5f, 0.5f);
        rectTransform.pivot = new Vector2(0.5f, 0.5f);

        rectTransform.sizeDelta = new Vector2(sx * gridCellSize.x, sy * gridCellSize.y);
        ClampIntoBounds();
    }

    /// <summary>Place the center exactly on grid cell (col,row) dot.</summary>
    public void SetCenterAtGridCell(int col, int row)
    {
        if (!EnsureTransformReferences()) return;
        if (parentRectTransform == null) return;
        if (gridCellSize.x <= 0f || gridCellSize.y <= 0f) return;

        int maxCol = Mathf.Max(0, lastCols - 1);
        int maxRow = Mathf.Max(0, lastRows - 1);
        int c = Mathf.Clamp(col, 0, maxCol);
        int r = Mathf.Clamp(row, 0, maxRow);

        Vector2 origin = GridOriginAnchored();
        Vector2 pos = origin + new Vector2(c * gridCellSize.x, r * gridCellSize.y);

        Vector2 snapped = SnapAnchoredToGrid(pos, GetRotatedHalfExtents());
        rectTransform.anchoredPosition = snapped;
    }

    /// <summary>Set rotation in degrees and keep it neat w/ clamp + optional snap.</summary>
    public void SetRotationDegrees(float zDegrees)
    {
        if (!EnsureTransformReferences()) return;
        rectTransform.localEulerAngles = new Vector3(0f, 0f, zDegrees);
        ClampIntoBounds();
        if (useGridSnap) SnapToGridNow();
    }

    public void ResizeFromHandle(ResizeHandleDirection direction, int dotSteps)
    {
        if (!canDrag || dotSteps == 0)
            return;

        if (!TryGetGridState(out int centerX2, out int centerY2, out int spanX, out int spanY))
            return;

        int directionSign = dotSteps > 0 ? 1 : -1;
        int iterations = Mathf.Abs(dotSteps);

        for (int i = 0; i < iterations; i++)
        {
            bool changed = ApplySingleResizeStep(direction, directionSign, ref centerX2, ref centerY2, ref spanX, ref spanY);
            if (!changed)
                break;
        }

        ApplyGridState(centerX2, centerY2, spanX, spanY);
        UpdateCollisionStates();
    }

    public void CommitHandleResize()
    {
        if (!TryGetGridState(out int centerX2, out int centerY2, out int spanX, out int spanY))
            return;

        SnapGridStateToLegal(ref centerX2, ref centerY2, spanX, spanY);
        ApplyGridState(centerX2, centerY2, spanX, spanY);
        UpdateCollisionStates();
    }

    private bool TryGetControlIdentity(out string controlType, out string controlName)
    {
        controlType = null;
        controlName = null;

        var button = GetComponent<SendCommandButton>();
        if (button != null)
        {
            controlType = "button";
            controlName = button.GetCommandName();
            return !string.IsNullOrWhiteSpace(controlName);
        }

        var slider = GetComponent<SendCommandSlider>();
        if (slider != null)
        {
            controlType = "slider";
            controlName = slider.GetCommandName();
            return !string.IsNullOrWhiteSpace(controlName);
        }

        return false;
    }

    private bool TryGetGridState(out int centerX2, out int centerY2, out int spanX, out int spanY)
    {
        centerX2 = 0;
        centerY2 = 0;
        spanX = 1;
        spanY = 1;

        if (!EnsureTransformReferences())
            return false;

        if (parentRectTransform == null || gridCellSize.x <= 0f || gridCellSize.y <= 0f)
            return false;

        Vector2 origin = GridOriginAnchored();
        Vector2 center = rectTransform.anchoredPosition;

        float centerDotX = (center.x - origin.x) / gridCellSize.x;
        float centerDotY = (center.y - origin.y) / gridCellSize.y;

        centerX2 = Mathf.RoundToInt(centerDotX * 2f);
        centerY2 = Mathf.RoundToInt(centerDotY * 2f);
        spanX = Mathf.Max(1, Mathf.RoundToInt(rectTransform.sizeDelta.x / gridCellSize.x));
        spanY = Mathf.Max(1, Mathf.RoundToInt(rectTransform.sizeDelta.y / gridCellSize.y));
        return true;
    }

    private void ApplyGridState(int centerX2, int centerY2, int spanX, int spanY)
    {
        if (!EnsureTransformReferences())
            return;

        spanX = Mathf.Max(1, spanX);
        spanY = Mathf.Max(1, spanY);

        Vector2 origin = GridOriginAnchored();
        float centerDotX = centerX2 * 0.5f;
        float centerDotY = centerY2 * 0.5f;

        rectTransform.sizeDelta = new Vector2(spanX * gridCellSize.x, spanY * gridCellSize.y);
        rectTransform.anchoredPosition = origin + new Vector2(centerDotX * gridCellSize.x, centerDotY * gridCellSize.y);
        ClampIntoBounds();
    }

    private bool ApplySingleResizeStep(
        ResizeHandleDirection direction,
        int directionSign,
        ref int centerX2,
        ref int centerY2,
        ref int spanX,
        ref int spanY)
    {
        int nextCenterX2 = centerX2;
        int nextCenterY2 = centerY2;
        int nextSpanX = spanX;
        int nextSpanY = spanY;

        switch (direction)
        {
            case ResizeHandleDirection.Right:
                nextSpanX += directionSign;
                nextCenterX2 += directionSign;
                break;
            case ResizeHandleDirection.Left:
                nextSpanX += directionSign;
                nextCenterX2 -= directionSign;
                break;
            case ResizeHandleDirection.Up:
                nextSpanY += directionSign;
                nextCenterY2 += directionSign;
                break;
            case ResizeHandleDirection.Down:
                nextSpanY += directionSign;
                nextCenterY2 -= directionSign;
                break;
        }

        if (nextSpanX < 1 || nextSpanY < 1)
            return false;

        if (!IsGridStateInsideBounds(nextCenterX2, nextCenterY2, nextSpanX, nextSpanY))
            return false;

        centerX2 = nextCenterX2;
        centerY2 = nextCenterY2;
        spanX = nextSpanX;
        spanY = nextSpanY;
        return true;
    }

    private bool IsGridStateInsideBounds(int centerX2, int centerY2, int spanX, int spanY)
    {
        if (lastCols <= 0 || lastRows <= 0)
            return false;

        int maxX2 = (lastCols - 1) * 2;
        int maxY2 = (lastRows - 1) * 2;

        int halfExtentX2 = spanX - 1;
        int halfExtentY2 = spanY - 1;

        int leftX2 = centerX2 - halfExtentX2;
        int rightX2 = centerX2 + halfExtentX2;
        int bottomY2 = centerY2 - halfExtentY2;
        int topY2 = centerY2 + halfExtentY2;

        return leftX2 >= 0 && rightX2 <= maxX2 && bottomY2 >= 0 && topY2 <= maxY2;
    }

    private void SnapGridStateToLegal(ref int centerX2, ref int centerY2, int spanX, int spanY)
    {
        int maxX2 = Mathf.Max(0, (lastCols - 1) * 2);
        int maxY2 = Mathf.Max(0, (lastRows - 1) * 2);

        int minCenterX2 = spanX - 1;
        int maxCenterX2 = maxX2 - (spanX - 1);
        int minCenterY2 = spanY - 1;
        int maxCenterY2 = maxY2 - (spanY - 1);

        centerX2 = Mathf.Clamp(centerX2, minCenterX2, Mathf.Max(minCenterX2, maxCenterX2));
        centerY2 = Mathf.Clamp(centerY2, minCenterY2, Mathf.Max(minCenterY2, maxCenterY2));

        centerX2 = SnapCenterToSpanParity(centerX2, spanX, minCenterX2, Mathf.Max(minCenterX2, maxCenterX2));
        centerY2 = SnapCenterToSpanParity(centerY2, spanY, minCenterY2, Mathf.Max(minCenterY2, maxCenterY2));
    }

    private static int SnapCenterToSpanParity(int center2, int span, int minCenter2, int maxCenter2)
    {
        int requiredParity = (span % 2 == 1) ? 0 : 1;
        if ((center2 & 1) == requiredParity)
            return center2;

        int lower = center2 - 1;
        int upper = center2 + 1;
        bool canUseLower = lower >= minCenter2;
        bool canUseUpper = upper <= maxCenter2;

        if (canUseLower && ((lower & 1) == requiredParity))
            return lower;
        if (canUseUpper && ((upper & 1) == requiredParity))
            return upper;

        return Mathf.Clamp(center2, minCenter2, maxCenter2);
    }

    #endregion
}
