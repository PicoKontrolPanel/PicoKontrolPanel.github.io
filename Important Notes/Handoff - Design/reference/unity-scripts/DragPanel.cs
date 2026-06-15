using UnityEngine;
using UnityEngine.EventSystems;

public class DragPanel : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public DragManager controller;

    [Header("Multi-panel Support")]
    public RectTransform[] pages;         // Each page (e.g., My Devices Area, Other Devices Area)
    public RectTransform[] contentPanels; // Content inside each page (scrollable)

    [Header("Scroll Behavior")]
    public float dragThreshold = 10f;
    public float bounceMargin = 100f;
    public float swipeThresholdSpeed = 1000f;
    public float verticalSnapDuration = 0.25f;

    [Header("Inertia Settings")]
    public float verticalFriction = 3000f;
    public float maxVerticalVelocity = 5000f;

    private RectTransform rectTransform; // This is "Devices" (the moving container)
    private RectTransform content;       // Currently active content panel

    private Vector2 startTouchPos;
    private Vector2 startDevicesPos;
    private Vector2 startContentPos;
    private float dragStartTime;

    private float contentMinY;
    private float contentMaxY = 0f; // Always 0, top-aligned

    private bool isHorizontal = false;
    private bool isVertical = false;
    private bool dragDirectionDecided = false;

    private bool isContentSnapping = false;
    private Vector2 contentSnapStart, contentSnapTarget;
    private float contentSnapElapsed = 0f;

    private float verticalVelocity = 0f;
    private bool isInertialScrolling = false;

    private int currentPageIndex = 0;

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
    }

    void Update()
    {
        if (isContentSnapping)
        {
            contentSnapElapsed += Time.deltaTime;
            float t = Mathf.Clamp01(contentSnapElapsed / verticalSnapDuration);
            t = Mathf.SmoothStep(0, 1, t);

            content.anchoredPosition = Vector2.Lerp(contentSnapStart, contentSnapTarget, t);

            if (t >= 1f)
                isContentSnapping = false;
        }

        if (isInertialScrolling)
    {
        float delta = verticalVelocity * Time.deltaTime;
        float newY = content.anchoredPosition.y + delta;

        // Apply friction
        float frictionStep = verticalFriction * Time.deltaTime;
        if (verticalVelocity > 0)
            verticalVelocity = Mathf.Max(0, verticalVelocity - frictionStep);
        else
            verticalVelocity = Mathf.Min(0, verticalVelocity + frictionStep);

        // Stop if inside legal scroll area and nearly stopped
        bool insideLegalRange = newY >= 0f && newY <= contentMinY;
        bool lowVelocity = Mathf.Abs(verticalVelocity) < 10f;

        // Also stop if attempting to move further out-of-bounds
        bool hittingTopEdge = newY <= -bounceMargin && verticalVelocity < 0;
        bool hittingBottomEdge = newY >= contentMinY + bounceMargin && verticalVelocity > 0;

        if ((insideLegalRange && lowVelocity) || hittingTopEdge || hittingBottomEdge)
        {
            isInertialScrolling = false;
            StartContentSnap();
        }
        else
        {
            // Still in motion
            newY = Mathf.Clamp(newY, -bounceMargin, contentMinY + bounceMargin);
            content.anchoredPosition = new Vector2(content.anchoredPosition.x, newY);
        }
    }
    }

    public void OnBeginDrag(PointerEventData eventData)
    {
        controller.CancelSnapping();

        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent as RectTransform,
            eventData.position,
            eventData.pressEventCamera,
            out startTouchPos
        );

        startDevicesPos = rectTransform.anchoredPosition;
        dragStartTime = Time.time;

        isHorizontal = false;
        isVertical = false;
        dragDirectionDecided = false;

        UpdateCurrentPage();
        startContentPos = content.anchoredPosition;

        // Calculate vertical scroll range dynamically
        float contentHeight = content.rect.height;
        float viewHeight = ((RectTransform)content.parent).rect.height;
        contentMinY = Mathf.Max(0f, contentHeight - viewHeight);
    }

    public void OnDrag(PointerEventData eventData)
    {
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent as RectTransform,
            eventData.position,
            eventData.pressEventCamera,
            out Vector2 currentTouchPos
        );

        Vector2 delta = currentTouchPos - startTouchPos;

        if (!dragDirectionDecided)
        {
            if (Mathf.Abs(delta.x) > dragThreshold)
            {
                isHorizontal = true;
                dragDirectionDecided = true;
            }
            else if (Mathf.Abs(delta.y) > dragThreshold)
            {
                isVertical = true;
                dragDirectionDecided = true;
            }
        }

        if (isHorizontal)
        {
            float newX = Mathf.Clamp(startDevicesPos.x + delta.x,
                controller.contentMinX - controller.contentDragMargin,
                controller.contentMaxX + controller.contentDragMargin);

            rectTransform.anchoredPosition = new Vector2(newX, rectTransform.anchoredPosition.y);
            controller.OnPanelDragged(newX);
        }
        else if (isVertical)
        {
            float newY = Mathf.Clamp(startContentPos.y + delta.y, -bounceMargin, contentMinY + bounceMargin);
            float deltaY = newY - content.anchoredPosition.y;

            verticalVelocity = deltaY / Time.deltaTime;
            content.anchoredPosition = new Vector2(content.anchoredPosition.x, newY);
        }
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        float dragDuration = Time.time - dragStartTime;

        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent as RectTransform,
            eventData.position,
            eventData.pressEventCamera,
            out Vector2 endTouchPos
        );

        float deltaX = endTouchPos.x - startTouchPos.x;
        float speed = Mathf.Abs(deltaX / dragDuration);

        if (isHorizontal)
        {
            if (speed > swipeThresholdSpeed)
            {
                if (deltaX > 0)
                    controller.SnapToPrevious();
                else
                    controller.SnapToNext();
            }
            else
            {
                controller.SnapPanelToNearest();
            }
        }
        else if (isVertical)
        {
            if (Mathf.Abs(verticalVelocity) > 100f)
            {
                verticalVelocity = Mathf.Clamp(verticalVelocity, -maxVerticalVelocity, maxVerticalVelocity);
                isInertialScrolling = true;
            }
            else
            {
                StartContentSnap();
            }
        }

        isHorizontal = false;
        isVertical = false;
        dragDirectionDecided = false;
    }

    private void StartContentSnap()
    {
        float clampedY = Mathf.Clamp(content.anchoredPosition.y, 0f, contentMinY);
        contentSnapStart = content.anchoredPosition;
        contentSnapTarget = new Vector2(content.anchoredPosition.x, clampedY);
        contentSnapElapsed = 0f;
        isContentSnapping = true;
    }

    private void UpdateCurrentPage()
    {
        float minDistance = float.MaxValue;
        int closestIndex = 0;
        Vector2 currentPos = rectTransform.anchoredPosition;

        for (int i = 0; i < pages.Length; i++)
        {
            float dist = Mathf.Abs(pages[i].anchoredPosition.x + currentPos.x);
            if (dist < minDistance)
            {
                minDistance = dist;
                closestIndex = i;
            }
        }

        currentPageIndex = closestIndex;
        content = contentPanels[currentPageIndex];
    }
}
