using UnityEngine;

public class DragManager : MonoBehaviour
{
    [Header("References")]
    public RectTransform contentPanel;  // The sliding panel container (e.g., Background)
    public RectTransform handle;        // Visual handle that follows the panel

    [Header("Position Ranges")]
    public float contentMinX = -640f;
    public float contentMaxX = 640f;
    public float handleMinX = -250f;
    public float handleMaxX = 250f;

    [Header("Interaction")]
    public float contentDragMargin = 100f;

    [Header("Snapping")]
    public float snapDuration = 0.25f;

    private Vector2 panelLerpStart, panelLerpTarget;
    private Vector2 handleLerpStart, handleLerpTarget;
    private float snapElapsed;
    private bool isSnapping = false;

    private int currentPanelIndex = 0;
    [Tooltip("Number of horizontal panels - 1. For 2 panels, set this to 1.")]
    public int maxPanelIndex = 1;

    void Update()
    {
        if (isSnapping)
        {
            snapElapsed += Time.deltaTime;
            float t = Mathf.Clamp01(snapElapsed / snapDuration);
            t = Mathf.SmoothStep(0, 1, t); // ease in-out

            contentPanel.anchoredPosition = Vector2.Lerp(panelLerpStart, panelLerpTarget, t);
            handle.anchoredPosition = Vector2.Lerp(handleLerpStart, handleLerpTarget, t);

            if (t >= 1f)
            {
                isSnapping = false;
            }
        }
    }

    public void CancelSnapping()
    {
        isSnapping = false;
    }

    public void OnPanelDragged(float panelX)
    {
        // contentMinX = -640, contentMaxX = 640 → flip range
        float t = Mathf.InverseLerp(contentMaxX, contentMinX, panelX);
        float mappedHandleX = Mathf.Lerp(handleMinX, handleMaxX, t);
        handle.anchoredPosition = new Vector2(mappedHandleX, handle.anchoredPosition.y);
    }

    public void OnHandleDragged(float handleX)
    {
        // handleMinX = -250, handleMaxX = 250
        float t = Mathf.InverseLerp(handleMinX, handleMaxX, handleX);
        float mappedPanelX = Mathf.Lerp(contentMaxX, contentMinX, t);
        contentPanel.anchoredPosition = new Vector2(mappedPanelX, contentPanel.anchoredPosition.y);
    }

    public void SnapPanelToNearest()
    {
        float currentX = contentPanel.anchoredPosition.x;
        float t = Mathf.InverseLerp(contentMaxX, contentMinX, currentX); // flipped
        int targetIndex = Mathf.RoundToInt(t * maxPanelIndex);
        SnapToPanelIndex(targetIndex);
    }

    public void SnapHandleToNearest()
    {
        float currentX = handle.anchoredPosition.x;
        float t = Mathf.InverseLerp(handleMinX, handleMaxX, currentX);
        int targetIndex = Mathf.RoundToInt(t * maxPanelIndex);
        SnapToPanelIndex(targetIndex);
    }

    public void SnapToNext()
    {
        int next = Mathf.Clamp(currentPanelIndex + 1, 0, maxPanelIndex);
        SnapToPanelIndex(next);
    }

    public void SnapToPrevious()
    {
        int prev = Mathf.Clamp(currentPanelIndex - 1, 0, maxPanelIndex);
        SnapToPanelIndex(prev);
    }

    public void SnapToPanelIndex(int index)
    {
        currentPanelIndex = Mathf.Clamp(index, 0, maxPanelIndex);
        float t = currentPanelIndex / (float)maxPanelIndex;

        float targetHandleX = Mathf.Lerp(handleMinX, handleMaxX, t);
        float targetPanelX = Mathf.Lerp(contentMaxX, contentMinX, t); // flipped

        handleLerpStart = handle.anchoredPosition;
        handleLerpTarget = new Vector2(targetHandleX, handle.anchoredPosition.y);

        panelLerpStart = contentPanel.anchoredPosition;
        panelLerpTarget = new Vector2(targetPanelX, contentPanel.anchoredPosition.y);

        snapElapsed = 0f;
        isSnapping = true;
    }

    // Optional: public getter for current index
    public int GetCurrentPanelIndex() => currentPanelIndex;
}
