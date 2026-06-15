using UnityEngine;

public class SidePanelController : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private RectTransform sidePanelRect;
    [SerializeField] private GameObject blurBackground;

    [Header("Settings")]
    [SerializeField] private float lerpDuration = 0.3f;
    [SerializeField] private float hiddenPositionX = 100f;
    [SerializeField] private float shownPositionX = -100f;

    private bool isPanelActive = false;
    private bool isLerping = false;
    private float lerpElapsed = 0f;
    private Vector2 lerpStart;
    private Vector2 lerpTarget;

    void Start()
    {
        Vector2 startPos = new Vector2(hiddenPositionX, sidePanelRect.anchoredPosition.y);
        sidePanelRect.anchoredPosition = startPos;

        if (blurBackground != null)
            blurBackground.SetActive(false);
    }

    void Update()
    {
        if (isLerping)
        {
            lerpElapsed += Time.deltaTime;
            float t = Mathf.Clamp01(lerpElapsed / lerpDuration);
            t = Mathf.SmoothStep(0, 1, t);

            sidePanelRect.anchoredPosition = Vector2.Lerp(lerpStart, lerpTarget, t);

            if (t >= 1f)
            {
                isLerping = false;
            }
        }
    }

    public void TogglePanel()
    {
        if (isPanelActive)
            ClosePanel();
        else
            OpenPanel();
    }

    public void OpenPanel()
    {
        if (blurBackground != null)
            blurBackground.SetActive(true);

        StartLerp(shownPositionX);
        isPanelActive = true;
    }

    public void ClosePanel()
    {
        if (blurBackground != null)
            blurBackground.SetActive(false);

        StartLerp(hiddenPositionX);
        isPanelActive = false;
    }

    private void StartLerp(float toX)
    {
        lerpStart = sidePanelRect.anchoredPosition;
        lerpTarget = new Vector2(toX, lerpStart.y); // Keep current Y
        lerpElapsed = 0f;
        isLerping = true;
    }


    public void ForceTogglePanel()
    {
        if (isPanelActive)
            ForceClosePanel();
        else
            ForceOpenPanel();
    }

    public void ForceOpenPanel()
    {
        if (blurBackground != null)
            blurBackground.SetActive(true);

        sidePanelRect.anchoredPosition = new Vector2(shownPositionX, sidePanelRect.anchoredPosition.y);
        isPanelActive = true;
    }

    public void ForceClosePanel()
    {
        if (blurBackground != null)
            blurBackground.SetActive(false);

        sidePanelRect.anchoredPosition = new Vector2(hiddenPositionX, sidePanelRect.anchoredPosition.y);
        isPanelActive = false;
    }
}
