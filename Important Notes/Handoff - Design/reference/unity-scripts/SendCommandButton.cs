using TMPro;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class SendCommandButton : MonoBehaviour, IPointerDownHandler
{
    private string buttonName;
    [SerializeField] private TMP_Text tmpText;

    public void Initialize(string name)
    {
        buttonName = name;
        tmpText.text = name;
    }

    public void OnButtonClicked()
    {
        // Press-down is the authoritative trigger path.
        // Keep this method for prefab compatibility, but do not send on release.
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        TrySendCommand();
    }

    private void TrySendCommand()
    {
        if (string.IsNullOrEmpty(buttonName))
            return;

        var draggable = GetComponent<DraggableUIBase>();
        if (draggable != null && draggable.IsEditModeEnabled)
            return;

        AppManager.Instance.SendButtonCommandToBLEDevice(buttonName);
    }

    public string GetCommandName()
    {
        return buttonName;
    }
}
