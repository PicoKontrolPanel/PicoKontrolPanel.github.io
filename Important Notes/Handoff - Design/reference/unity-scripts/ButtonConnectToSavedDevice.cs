using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ButtonConnectToSavedDevice : MonoBehaviour
{
    private string deviceID;
    private string deviceName;

    [SerializeField] private TMP_Text deviceNameText;
    [SerializeField] private Image deviceImage;

    [SerializeField] private Image statusIcon;
    [SerializeField] private Color colorAvailable = Color.green;
    [SerializeField] private Color colorUnavailable = Color.gray;

    public void Initialize(DeviceData data)
    {
        deviceID = data.deviceID;
        deviceName = data.deviceName;

        SetIcon(data.deviceIconID);

        if (deviceNameText != null)
            deviceNameText.text = GetDashboardDisplayName(deviceName);
    }

    public void SetIcon(int iconId)
    {
        if (deviceImage == null)
            return;

        deviceImage.sprite = AppManager.Instance.GetSpriteIconsSafe(iconId);
    }

    private static string GetDashboardDisplayName(string rawName)
    {
        return AppManager.GetDisplayDeviceName(rawName);
    }

    public string GetDeviceID()
    {
        return deviceID;
    }

    public string GetDeviceName()
    {
        return deviceName;
    }

    public void SetAvailabilityStatus(bool available)
    {
        statusIcon.color = available ? colorAvailable : colorUnavailable;
        GetComponent<Button>().interactable = available;
    }

    public void OnButtonPressed()
    {
        AppManager.Instance.ConnectToSavedBLEDevice(deviceName);
    }

    public void OnDeletePressed()
    {
        AppManager.Instance.DeleteButtonToConnectToSavedDevice(deviceID);
        Destroy(gameObject);
    }
}
