using UnityEngine;
using UnityEngine.EventSystems;

public class DragHandle : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    public DragManager controller;

    [Header("Handle UI")]
    public RectTransform whiteTexts; // child of handle that stays visually fixed

    [Header("White Text Movement")]
    private const float handleMin = -250f;
    private const float handleMax = 250f;
    private readonly Vector2 whiteTextLeft = new Vector2(250f, 5f);
    private readonly Vector2 whiteTextRight = new Vector2(-250f, 5f);

    [Header("Swipe Settings")]
    public float swipeThresholdSpeed = 1000f;

    private RectTransform rectTransform;
    private Vector2 startTouchPos;
    private Vector2 startPos;
    private float dragStartTime;

    void Awake()
    {
        rectTransform = GetComponent<RectTransform>();
    }

    void LateUpdate()
    {
        // Lock whiteTexts to appear visually fixed while handle moves
        float handleX = rectTransform.anchoredPosition.x;
        float t = Mathf.InverseLerp(handleMin, handleMax, handleX);
        whiteTexts.anchoredPosition = Vector2.Lerp(whiteTextLeft, whiteTextRight, t);
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
        startPos = rectTransform.anchoredPosition;
        dragStartTime = Time.time;
    }

    public void OnDrag(PointerEventData eventData)
    {
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent as RectTransform,
            eventData.position,
            eventData.pressEventCamera,
            out Vector2 currentTouch
        );

        Vector2 delta = currentTouch - startTouchPos;
        float newX = Mathf.Clamp(startPos.x + delta.x, controller.handleMinX, controller.handleMaxX);
        rectTransform.anchoredPosition = new Vector2(newX, rectTransform.anchoredPosition.y);

        controller.OnHandleDragged(newX);
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        float dragDuration = Time.time - dragStartTime;

        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            rectTransform.parent as RectTransform,
            eventData.position,
            eventData.pressEventCamera,
            out Vector2 endTouch
        );

        float deltaX = endTouch.x - startTouchPos.x;
        float speed = Mathf.Abs(deltaX / dragDuration);

        if (speed > swipeThresholdSpeed)
        {
            if (deltaX > 0)
                controller.SnapToNext();
            else
                controller.SnapToPrevious();
        }
        else
        {
            controller.SnapHandleToNearest();
        }
    }
}
