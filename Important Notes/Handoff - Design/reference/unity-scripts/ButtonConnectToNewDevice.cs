using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ButtonConnectToNewDevice : MonoBehaviour
{
    [SerializeField] private TMP_Text deviceNameText;

    private string deviceName;
    private string displayName;

    public void Initialize(string name)
    {
        deviceName = name;
        displayName = AppManager.GetDisplayDeviceName(name);
        deviceNameText.text = displayName;
    }

    public void OnConnectClicked()
    {
        AppManager.Instance.ConnectToNewDevice(deviceName);
    }
}
