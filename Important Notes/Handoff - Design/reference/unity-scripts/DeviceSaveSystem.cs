using System.Collections.Generic;
using System.IO;
using UnityEngine;

public static class DeviceSaveSystem
{
    private static string savePath = Path.Combine(Application.persistentDataPath, "SavedDevices.json");

    public static void SaveDevices(DeviceDataList data)
    {
        string json = JsonUtility.ToJson(data, true);
        File.WriteAllText(savePath, json);

        // Log the updated save file contents
        AppManager.Instance.LogDebug(json);
    }

    public static void DeleteDeviceByID(string deviceID)
    {
        DeviceDataList dataList = LoadDevices();
        dataList.devices.RemoveAll(device => device.deviceID == deviceID);
        SaveDevices(dataList);
        
        // Log the updated save file contents
        string updatedJson = JsonUtility.ToJson(dataList, true);
        AppManager.Instance.LogDebug(updatedJson);
    }

    public static DeviceDataList LoadDevices()
    {
        if (!File.Exists(savePath))
            return new DeviceDataList();

        string json = File.ReadAllText(savePath);
        return JsonUtility.FromJson<DeviceDataList>(json);
    }
}

[System.Serializable]
public class DeviceDataList
{
    public List<DeviceData> devices = new List<DeviceData>();
}

[System.Serializable]
public class DeviceData
{
    public string deviceID;
    public string deviceName;       // base BLE advertised name (no |0 or |1 suffix)
    public int deviceIconID;
    public bool canOthersConnect;
    public bool canOthersEdit;      
    public bool isOwnedByMe;        // whether this Unity user owns the device
}
