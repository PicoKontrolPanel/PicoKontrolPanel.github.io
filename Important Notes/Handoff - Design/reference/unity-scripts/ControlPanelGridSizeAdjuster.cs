using UnityEngine;

public class ControlPanelGridSizeAdjuster : MonoBehaviour
{
    [SerializeField] private RectTransform controlsArea; // parent of draggables
    [SerializeField] private RectTransform dotsGrid;     // sibling that holds dots
    [SerializeField] private GameObject dotPrefab;

    [SerializeField] private int currentGridSizeX = 11; // columns (dot intersections)
    [SerializeField] private int currentGridSizeY = 31; // rows    (dot intersections)
    [SerializeField] private float edgeMargin = 50f;

    // Add these read-only props in ControlPanelGridSizeAdjuster
    public int GridCols => currentGridSizeX;
    public int GridRows => currentGridSizeY;
    public float EdgeMargin => edgeMargin;
    public RectTransform ControlsArea => controlsArea;
    private bool gridBuilt = false;

    private void Start()
    {
        BuildGridIfNeeded();
    }

    public void EnsureGridBuilt()
    {
        BuildGridIfNeeded();
    }

    public void SetDotsVisible(bool visible)
    {
        if (visible)
            BuildGridIfNeeded();

        if (dotsGrid != null)
            dotsGrid.gameObject.SetActive(visible);
    }

    private void BuildGridIfNeeded()
    {
        if (controlsArea == null || dotsGrid == null || dotPrefab == null)
            return;

        // If the panel has not been laid out yet (e.g. inactive at startup), retry later.
        Canvas.ForceUpdateCanvases();
        float width = controlsArea.rect.width;
        float height = controlsArea.rect.height;
        if (width <= 1f || height <= 1f)
            return;

        if (gridBuilt && dotsGrid.childCount > 0)
            return;

        // Rebuild dots if something cleared them while keeping this component alive.
        for (int i = dotsGrid.childCount - 1; i >= 0; i--)
            Destroy(dotsGrid.GetChild(i).gameObject);

        float usableW = Mathf.Max(0f, width - 2f * edgeMargin);
        float usableH = Mathf.Max(0f, height - 2f * edgeMargin);

        float stepX = (currentGridSizeX > 1) ? usableW / (currentGridSizeX - 1) : 0f;
        float stepY = (currentGridSizeY > 1) ? usableH / (currentGridSizeY - 1) : 0f;

        Vector2 bottomLeft = new Vector2(-width * 0.5f + edgeMargin, -height * 0.5f + edgeMargin);

        // Build dots using the same panel (controlsArea) dimensions
        for (int ix = 0; ix < currentGridSizeX; ix++)
        {
            for (int iy = 0; iy < currentGridSizeY; iy++)
            {
                var dotGO = Instantiate(dotPrefab, dotsGrid);
                dotGO.SetActive(true);
                var dotRT = dotGO.GetComponent<RectTransform>();
                dotRT.anchorMin = dotRT.anchorMax = new Vector2(0.5f, 0.5f);
                dotRT.pivot = new Vector2(0.5f, 0.5f);
                dotRT.anchoredPosition = bottomLeft + new Vector2(ix * stepX, iy * stepY);
            }
        }

        // Now configure all draggables that live under controlsArea
        foreach (var d in DraggableUIBase.AllDraggables)
        {
            if (d == null) continue;
            if (d.transform.IsChildOf(controlsArea))
                d.ConfigureGridFromCounts(controlsArea, currentGridSizeX, currentGridSizeY, edgeMargin);
        }

        gridBuilt = true;
    }
    
    public void ConfigureDraggableForGrid(DraggableUIBase d, bool centerOnMiddleDot, bool applyDefaultSpanSize)
    {
        if (d == null) return;

        // Same config as you already do on Start()
        d.ConfigureGridFromCounts(controlsArea, currentGridSizeX, currentGridSizeY, edgeMargin);

        if (applyDefaultSpanSize)
            d.ApplyDefaultGridSpanScale();

        if (centerOnMiddleDot)
        {
            d.ResetFirstCenterPlacementFlag();
            d.PlaceAtGridCenterIfFirstTime();
        }

        d.SnapToGridNow();
    }
}
