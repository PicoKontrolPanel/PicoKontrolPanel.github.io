using System.IO;
using UnityEngine;

[System.Serializable]
public class UserData
{
    public string username;
    public string userID;
}

public static class UserSaveSystem
{
    private static readonly string savePath = Path.Combine(Application.persistentDataPath, "userdata.json");

    public static void SaveUser(UserData data)
    {
        string json = JsonUtility.ToJson(data, prettyPrint: true);
        try
        {
            File.WriteAllText(savePath, json);
            Debug.Log($"User data saved to: {savePath}");
        }
        catch (IOException e)
        {
            Debug.LogError($"Failed to save user data: {e.Message}");
        }
    }

    public static UserData LoadUser()
    {
        if (File.Exists(savePath))
        {
            try
            {
                string json = File.ReadAllText(savePath);
                UserData data = JsonUtility.FromJson<UserData>(json);
                return data;
            }
            catch (IOException e)
            {
                Debug.LogError($"Failed to load user data: {e.Message}");
            }
        }
        else
        {
            Debug.Log("User data file not found. A new one will be created.");
        }

        return null;
    }
}
