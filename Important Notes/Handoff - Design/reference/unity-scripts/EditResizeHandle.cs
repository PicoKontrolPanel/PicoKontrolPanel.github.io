using UnityEngine;
using UnityEngine.EventSystems;

public class EditResizeHandle : MonoBehaviour, IPointerDownHandler, IDragHandler, IPointerUpHandler
{
    public enum HandleDirection
    {
        Right,
        Left,
        Up,
        Down
    }

    [SerializeField] private HandleDirection direction;
    [SerializeField] private DraggableUIBase target;

    private bool isDragging;
    private Vector2 lastLocalPoint;
    private float dragRemainderDots;

    private void Awake()
    {
        if (target == null)
            target = GetComponentInParent<DraggableUIBase>();
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        if (!CanResize())
            return;

        var parent = target.ParentRectTransform;
        if (parent == null)
            return;

        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(parent, eventData.position, eventData.pressEventCamera, out lastLocalPoint))
            return;

        dragRemainderDots = 0f;
        isDragging = true;
    }

    public void OnDrag(PointerEventData eventData)
    {
        if (!isDragging || !CanResize())
            return;

        var parent = target.ParentRectTransform;
        if (parent == null)
            return;

        if (!RectTransformUtility.ScreenPointToLocalPointInRectangle(parent, eventData.position, eventData.pressEventCamera, out Vector2 currentLocalPoint))
            return;

        Vector2 delta = currentLocalPoint - lastLocalPoint;
        lastLocalPoint = currentLocalPoint;

        Vector2 step = target.GridStep();
        float axisDelta = 0f;
        float stepSize = 1f;

        switch (direction)
        {
            case HandleDirection.Right:
                axisDelta = delta.x;
                stepSize = Mathf.Max(step.x, 0.0001f);
                break;
            case HandleDirection.Left:
                axisDelta = -delta.x;
                stepSize = Mathf.Max(step.x, 0.0001f);
                break;
            case HandleDirection.Up:
                axisDelta = delta.y;
                stepSize = Mathf.Max(step.y, 0.0001f);
                break;
            case HandleDirection.Down:
                axisDelta = -delta.y;
                stepSize = Mathf.Max(step.y, 0.0001f);
                break;
        }

        dragRemainderDots += axisDelta / stepSize;
        int wholeSteps = (int)dragRemainderDots;
        if (wholeSteps == 0)
            return;

        dragRemainderDots -= wholeSteps;
        target.ResizeFromHandle(ToResizeDirection(direction), wholeSteps);
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        if (!isDragging)
            return;

        isDragging = false;
        dragRemainderDots = 0f;

        if (CanResize())
            target.CommitHandleResize();
    }

    private bool CanResize()
    {
        return target != null && target.IsEditModeEnabled && !target.IsMarkedForDeletion;
    }

    private static DraggableUIBase.ResizeHandleDirection ToResizeDirection(HandleDirection handleDirection)
    {
        switch (handleDirection)
        {
            case HandleDirection.Left:
                return DraggableUIBase.ResizeHandleDirection.Left;
            case HandleDirection.Up:
                return DraggableUIBase.ResizeHandleDirection.Up;
            case HandleDirection.Down:
                return DraggableUIBase.ResizeHandleDirection.Down;
            default:
                return DraggableUIBase.ResizeHandleDirection.Right;
        }
    }
}
