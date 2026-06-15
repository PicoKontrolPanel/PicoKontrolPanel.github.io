using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class DeviceSettingsManager : MonoBehaviour
{
    [Header("Functions References")]
    [SerializeField] private GameObject modalSelectIcon;
    [SerializeField] private Image currentIconImage;
    [SerializeField] private GameObject toggleAccess;
    [SerializeField] private GameObject handleAccess;
    [SerializeField] private GameObject toggleEdit;
    [SerializeField] private GameObject handleEdit;
    [SerializeField] private RectTransform whiteTextAccess;
    [SerializeField] private RectTransform whiteTextEdit;
    [SerializeField] private float lerpDuration = 0.3f;
    [SerializeField] private Button confirmButton;

    private Coroutine accessHandleRoutine;
    private Coroutine editHandleRoutine;
    private Coroutine editToggleRoutine;

    private Vector2 handleLeft = new Vector2(-190, -10);
    private Vector2 handleRight = new Vector2(190, -10);
    private Vector2 toggleEditHidden = new Vector2(0, -1200);
    private Vector2 toggleEditVisible = new Vector2(0, -1500);

    private Vector2 whiteTextLeft = new Vector2(0, 5);
    private Vector2 whiteTextRight = new Vector2(-380, 5);

    [Space(20), Header("Device Settings")]
    [SerializeField] private int deviceIconID;
    [SerializeField] private string deviceName;       // not used here; we take from AppManager when needed
    [SerializeField] private bool deviceAccessStatus = false; // false = private, true = public
    [SerializeField] private bool deviceEditStatus = false;   // when public: others can edit?

    void LateUpdate()
    {
        float tAccess = Mathf.InverseLerp(handleLeft.x, handleRight.x, handleAccess.GetComponent<RectTransform>().anchoredPosition.x);
        whiteTextAccess.anchoredPosition = Vector2.Lerp(whiteTextLeft, whiteTextRight, tAccess);

        float tEdit = Mathf.InverseLerp(handleLeft.x, handleRight.x, handleEdit.GetComponent<RectTransform>().anchoredPosition.x);
        whiteTextEdit.anchoredPosition = Vector2.Lerp(whiteTextLeft, whiteTextRight, tEdit);
    }

    public void OpenModalSelectIcon() => modalSelectIcon.SetActive(true);
    public void CloseModalSelectIcon() => modalSelectIcon.SetActive(false);

    public void SelectIconImage(int i)
    {
        modalSelectIcon.SetActive(false);
        currentIconImage.sprite = AppManager.Instance.GetSpriteIcons(i);
        deviceIconID = i;
    }

    public void OnAccessPrivateButtonPressed()
    {
        if (!deviceAccessStatus) return;

        if (accessHandleRoutine != null) StopCoroutine(accessHandleRoutine);
        accessHandleRoutine = StartCoroutine(LerpPosition(handleAccess.GetComponent<RectTransform>(), handleRight, handleLeft, lerpDuration));

        // Hide edit toggle when private
        if (editToggleRoutine != null) StopCoroutine(editToggleRoutine);
        editToggleRoutine = StartCoroutine(LerpPosition(toggleEdit.GetComponent<RectTransform>(), toggleEditVisible, toggleEditHidden, lerpDuration));

        deviceAccessStatus = false;

        // When private, others can never edit
        ForceEditOffUI();
    }

    public void OnAccessPublicButtonPressed()
    {
        if (deviceAccessStatus) return;

        if (accessHandleRoutine != null) StopCoroutine(accessHandleRoutine);
        accessHandleRoutine = StartCoroutine(LerpPosition(handleAccess.GetComponent<RectTransform>(), handleLeft, handleRight, lerpDuration));

        // Show edit toggle when public
        if (editToggleRoutine != null) StopCoroutine(editToggleRoutine);
        editToggleRoutine = StartCoroutine(LerpPosition(toggleEdit.GetComponent<RectTransform>(), toggleEditHidden, toggleEditVisible, lerpDuration));

        deviceAccessStatus = true;
        // Keep deviceEditStatus as chosen by the user via toggle
    }

    public void OnEditNoButtonPressed()
    {
        if (!deviceEditStatus) return;
        if (editHandleRoutine != null) StopCoroutine(editHandleRoutine);
        editHandleRoutine = StartCoroutine(LerpPosition(handleEdit.GetComponent<RectTransform>(), handleRight, handleLeft, lerpDuration));
        deviceEditStatus = false;
    }

    public void OnEditYesButtonPressed()
    {
        if (deviceEditStatus) return;
        if (editHandleRoutine != null) StopCoroutine(editHandleRoutine);
        editHandleRoutine = StartCoroutine(LerpPosition(handleEdit.GetComponent<RectTransform>(), handleLeft, handleRight, lerpDuration));
        deviceEditStatus = true;
    }

    private void ForceEditOffUI()
    {
        // visually move handle to "No"
        if (editHandleRoutine != null) StopCoroutine(editHandleRoutine);
        editHandleRoutine = StartCoroutine(LerpPosition(handleEdit.GetComponent<RectTransform>(), handleEdit.GetComponent<RectTransform>().anchoredPosition, handleLeft, lerpDuration));
        deviceEditStatus = false;
    }

    private IEnumerator LerpPosition(RectTransform target, Vector2 from, Vector2 to, float duration)
    {
        float elapsed = 0f;
        while (elapsed < duration)
        {
            target.anchoredPosition = Vector2.Lerp(from, to, elapsed / duration);
            elapsed += Time.deltaTime;
            yield return null;
        }
        target.anchoredPosition = to;
    }

    public void OnConfirmButtonPressed()
    {
        // Pull user identity from persistent store
        var user = UserSaveSystem.LoadUser();
        if (user == null || string.IsNullOrWhiteSpace(user.userID) || string.IsNullOrWhiteSpace(user.username))
        {
            AppManager.Instance.LogDebug("Missing user identity. Please set your name first.", "error");
            return;
        }

        // Enforce permission pair (private => no edit)
        int canConnect = deviceAccessStatus ? 1 : 0;
        int canEdit = deviceAccessStatus ? (deviceEditStatus ? 1 : 0) : 0;
        if (canConnect == 0) canEdit = 0;

        string ownerID = user.userID.Trim();
        string ownerName = user.username.Trim();
        int iconID = deviceIconID;

        // Send CREATE to Pico (grid-only protocol context)
        string createMsg = $"create,{ownerID},{ownerName},{iconID},{canConnect},{canEdit}\n";
        AppManager.Instance.LogDebug($"Sending create settings: {createMsg.Trim()}");
        AppManager.Instance.SetPendingCreateDeviceIconId(iconID);
        AppManager.Instance.SendReliableCommandToBLEDevice(createMsg);

        AppManager.Instance.ConfirmCreateDevice();
    }
}
