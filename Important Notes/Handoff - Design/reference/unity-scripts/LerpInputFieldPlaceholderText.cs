using TMPro;
using UnityEngine;

public class LerpInputFieldPlaceholderText : MonoBehaviour
{
    [SerializeField] private Vector2 activeOffset;
    private Vector2 initialLocalPosition;

    [SerializeField] private Vector3 activeScale = Vector3.one * 0.8f;
    private Vector3 initialScale;

    [SerializeField] private float activeAlpha = 1f;
    private float initialAlpha;

    [SerializeField] private RectTransform placeholderText;
    [SerializeField] private TMP_Text placeholderTMP;
    [SerializeField] private TMP_InputField inputField;

    [SerializeField] private float lerpSpeed = 10f;

    private bool isFocused = false;
    private Vector2 targetPosition;
    private Vector3 targetScale;

    void Start()
    {
        initialLocalPosition = placeholderText.anchoredPosition;
        initialScale = placeholderText.localScale;

        initialAlpha = placeholderTMP.color.a;
    }

    void Update()
    {
        bool hasText = !string.IsNullOrEmpty(inputField.text);
        float targetAlpha;

        // Determine target position, scale, and alpha
        if (isFocused || hasText)
        {
            targetPosition = activeOffset;
            targetScale = activeScale;
            targetAlpha = activeAlpha;
        }
        else
        {
            targetPosition = initialLocalPosition;
            targetScale = initialScale;
            targetAlpha = initialAlpha;
        }

        // Lerp position and scale
        placeholderText.anchoredPosition = Vector2.Lerp(placeholderText.anchoredPosition, targetPosition, Time.deltaTime * lerpSpeed);
        placeholderText.localScale = Vector3.Lerp(placeholderText.localScale, targetScale, Time.deltaTime * lerpSpeed);

        // Lerp alpha
        Color currentColor = placeholderTMP.color;
        currentColor.a = Mathf.Lerp(currentColor.a, targetAlpha, Time.deltaTime * lerpSpeed);
        placeholderTMP.color = currentColor;
    }

    public void OnInputFieldSelected()
    {
        isFocused = true;
    }

    public void OnInputFieldDeselected()
    {
        isFocused = false;
    }
}
