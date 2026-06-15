using UnityEngine;
using UnityEngine.UI;
using TMPro;

/// <summary>
/// Slider draggable with child-rotation and vertical-text handling on 90° rotations.
/// Works with the grid helpers in DraggableUIBase.
/// </summary>
public class DraggableUISlider : DraggableUIBase
{
    // Stored slider-specific state
    private string originalMainText;
    private string originalMaskedText;
    private Vector2 originalMainTextSize;
    private Vector2 originalMaskedTextSize;
    private Quaternion[] originalChildRotations;

    // Cached key children (follow your existing hierarchy)
    private RectTransform MainTextRect =>
        rectTransform.GetChild(1).GetChild(0).GetComponent<RectTransform>();
    private RectTransform MaskedTextRect =>
        rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(0).GetComponent<RectTransform>();

    private TextMeshProUGUI MainTMP => MainTextRect.GetComponent<TextMeshProUGUI>();
    private TextMeshProUGUI MaskedTMP => MaskedTextRect.GetComponent<TextMeshProUGUI>();

    protected override void Awake()
    {
        base.Awake();

        // Color targets specific to your slider prefab structure
        // Fill image (commonly under Fill Area/Fill)
        if (transform.childCount > 1)
        {
            Transform fillArea = transform.GetChild(1);
            if (fillArea.childCount > 3)
            {
                var fillImage = fillArea.GetChild(3).GetComponent<Image>();
                if (fillImage) mainImagesToColor.Add(fillImage);
            }

            // Background image at index 0
            var background = transform.GetChild(0).GetComponent<Image>();
            if (background) backgroundImagesToColor.Add(background);
        }
    }

    protected override void OnEnterEditMode()
    {
        // capture transform already handled in base
        // capture slider text/size and child rotations
        if (MainTMP != null && MaskedTMP != null)
        {
            originalMainText = MainTMP.text;
            originalMaskedText = MaskedTMP.text;
            originalMainTextSize = MainTextRect.sizeDelta;
            originalMaskedTextSize = MaskedTextRect.sizeDelta;
        }

        originalChildRotations = new Quaternion[6];
        originalChildRotations[0] = rectTransform.GetChild(1).GetChild(0).localRotation;
        originalChildRotations[1] = rectTransform.GetChild(1).GetChild(1).localRotation;
        originalChildRotations[2] = rectTransform.GetChild(1).GetChild(2).localRotation;
        originalChildRotations[3] = rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(0).localRotation;
        originalChildRotations[4] = rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(1).localRotation;
        originalChildRotations[5] = rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(2).localRotation;
    }

    protected override void RestoreSubclassState()
    {
        // restore texts/sizes
        if (MainTMP != null && MaskedTMP != null)
        {
            MainTMP.text = originalMainText;
            MaskedTMP.text = originalMaskedText;
            MainTextRect.sizeDelta = originalMainTextSize;
            MaskedTextRect.sizeDelta = originalMaskedTextSize;
        }

        // restore rotations
        if (originalChildRotations != null && originalChildRotations.Length == 6)
        {
            rectTransform.GetChild(1).GetChild(0).localRotation = originalChildRotations[0];
            rectTransform.GetChild(1).GetChild(1).localRotation = originalChildRotations[1];
            rectTransform.GetChild(1).GetChild(2).localRotation = originalChildRotations[2];
            rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(0).localRotation = originalChildRotations[3];
            rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(1).localRotation = originalChildRotations[4];
            rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(2).localRotation = originalChildRotations[5];
        }
    }

    public override void Rotate90()
    {
        Rotate90Slider();        // rotate + child adjustments + ClampIntoBounds() + UpdateCollisionStates()
        if (useGridSnap) SnapToGridNow();   // align after rotation
        UpdateCollisionStates();            // refresh after the snap
    }

    public void Rotate90Slider()
    {
        rectTransform.Rotate(0f, 0f, -90f);

        // rotate affected children
        rectTransform.GetChild(1).GetChild(0).Rotate(0f, 0f, 90f);
        rectTransform.GetChild(1).GetChild(1).Rotate(0f, 0f, 90f);
        rectTransform.GetChild(1).GetChild(2).Rotate(0f, 0f, 90f);
        rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(0).Rotate(0f, 0f, 90f);
        rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(1).Rotate(0f, 0f, 90f);
        rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(2).Rotate(0f, 0f, 90f);

        // vertical text handling
        if (MainTMP != null && MaskedTMP != null)
        {
            string cleanMain = MainTMP.text.Replace("\n", "");
            string cleanMasked = MaskedTMP.text.Replace("\n", "");

            float zRot = rectTransform.localEulerAngles.z % 360f;
            bool vertical = (Mathf.Abs(zRot - 90f) < 45f || Mathf.Abs(zRot - 270f) < 45f);

            if (vertical)
            {
                MainTMP.text = string.Join("\n", cleanMain.ToCharArray());
                MaskedTMP.text = string.Join("\n", cleanMasked.ToCharArray());
                SwapRectSize(MainTextRect);
                SwapRectSize(MaskedTextRect);
            }
            else
            {
                MainTMP.text = cleanMain;
                MaskedTMP.text = cleanMasked;
                SwapRectSize(MainTextRect);
                SwapRectSize(MaskedTextRect);
            }
        }

        ClampIntoBounds();
        UpdateCollisionStates();
    }

    public void ApplyRotationLayoutFixIfNeeded()
    {
        float zRot = rectTransform.localEulerAngles.z % 360f;
        bool isVertical = Mathf.Abs(zRot - 90f) < 1f || Mathf.Abs(zRot - 270f) < 1f;

        var c1 = rectTransform.GetChild(1).GetChild(0);
        var c2 = rectTransform.GetChild(1).GetChild(1);
        var c3 = rectTransform.GetChild(1).GetChild(2);
        var c4 = rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(0);
        var c5 = rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(1);
        var c6 = rectTransform.GetChild(1).GetChild(3).GetChild(0).GetChild(2);

        if (isVertical)
        {
            c1.localEulerAngles = new Vector3(0, 0, 90);
            c2.localEulerAngles = new Vector3(0, 0, 90);
            c3.localEulerAngles = new Vector3(0, 0, 90);
            c4.localEulerAngles = new Vector3(0, 0, 90);
            c5.localEulerAngles = new Vector3(0, 0, 90);
            c6.localEulerAngles = new Vector3(0, 0, 90);

            SwapRectSize(MainTextRect);
            SwapRectSize(MaskedTextRect);

            if (MainTMP != null)
                MainTMP.text = string.Join("\n", MainTMP.text.Replace("\n", "").ToCharArray());
            if (MaskedTMP != null)
                MaskedTMP.text = string.Join("\n", MaskedTMP.text.Replace("\n", "").ToCharArray());
        }
        else
        {
            c1.localEulerAngles = Vector3.zero;
            c2.localEulerAngles = Vector3.zero;
            c3.localEulerAngles = Vector3.zero;
            c4.localEulerAngles = Vector3.zero;
            c5.localEulerAngles = Vector3.zero;
            c6.localEulerAngles = Vector3.zero;

            SwapRectSize(MainTextRect);
            SwapRectSize(MaskedTextRect);

            if (MainTMP != null)
                MainTMP.text = MainTMP.text.Replace("\n", "");
            if (MaskedTMP != null)
                MaskedTMP.text = MaskedTMP.text.Replace("\n", "");
        }
    }

    private void SwapRectSize(RectTransform rect)
    {
        Vector2 size = rect.sizeDelta;
        rect.sizeDelta = new Vector2(size.y, size.x);
    }
}
