using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Button draggable — no special behavior beyond base right now.
/// </summary>
public class DraggableUIButton : DraggableUIBase
{
    protected override void Awake()
    {
        base.Awake();

        // Already added Image (if present) in base for Button main tint.
        // If your button has background images to tint, register them here, e.g.:
        // var bg = transform.Find("Background")?.GetComponent<Image>();
        // if (bg) backgroundImagesToColor.Add(bg);
    }

    // No extra edit/restore/rotate logic needed for Button right now.
}
