using System;
using System.Runtime.InteropServices;
using UnityEngine;

// Cross-platform BLE bridge that mirrors your Android plugin API.
public class BleBridge
{
#if UNITY_ANDROID && !UNITY_EDITOR
    private AndroidJavaObject java;

    public BleBridge()
    {
        java = new AndroidJavaObject("com.teknologiskolen.bleplugin.AndroidPicoBle");
    }

    public string onScanner() => java.Call<string>("onScanner");

    public string[] getFoundDeviceNames() => java.Call<string[]>("getFoundDeviceNames");

    public void connectToDeviceByName(string name) => java.Call("connectToDeviceByName", name);

    public bool AreNotificationsReadyWithSettle(int settleMs) => java.Call<bool>("AreNotificationsReadyWithSettle", settleMs);

    public void ClearRxBuffer() => java.Call("ClearRxBuffer");

    public sbyte[] UpdateRead() => java.Call<sbyte[]>("UpdateRead");

    public bool Command(sbyte[] data) => java.Call<bool>("Command", data);

    public string Disconnect() => java.Call<string>("Disconnect");

    public string Quit() => java.Call<string>("Quit");

#elif UNITY_IOS && !UNITY_EDITOR
    private const string DLL = "__Internal";

    [DllImport(DLL)] private static extern void   PicoBle_onScanner();
    [DllImport(DLL)] private static extern int    PicoBle_getFoundCount();
    [DllImport(DLL)] private static extern IntPtr PicoBle_getFoundNameAt(int index);
    [DllImport(DLL)] private static extern void   PicoBle_connectToDeviceByName(string name);
    [DllImport(DLL)] private static extern bool   PicoBle_areNotificationsReadyWithSettle(int settleMs);
    [DllImport(DLL)] private static extern void   PicoBle_clearRxBuffer();
    [DllImport(DLL)] private static extern int    PicoBle_updateRead(IntPtr dest, int maxLen);
    [DllImport(DLL)] private static extern bool   PicoBle_command(sbyte[] data, int len);
    [DllImport(DLL)] private static extern void   PicoBle_disconnect();
    [DllImport(DLL)] private static extern void   PicoBle_quit();

    private byte[] tempBuffer = new byte[1024];

    public BleBridge() {}

    public string onScanner()
    {
        PicoBle_onScanner();
        return "Scanning...";
    }

    public string[] getFoundDeviceNames()
    {
        int n = PicoBle_getFoundCount();
        if (n <= 0) return Array.Empty<string>();
        var list = new string[n];
        for (int i = 0; i < n; i++)
        {
            IntPtr ptr = PicoBle_getFoundNameAt(i);
            list[i] = Marshal.PtrToStringAnsi(ptr) ?? "";
        }
        return list;
    }

    public void connectToDeviceByName(string name) => PicoBle_connectToDeviceByName(name);

    public bool AreNotificationsReadyWithSettle(int settleMs) => PicoBle_areNotificationsReadyWithSettle(settleMs);

    public void ClearRxBuffer() => PicoBle_clearRxBuffer();

    public sbyte[] UpdateRead()
    {
        // Pull up to tempBuffer.Length bytes per poll. Increase if you need larger bursts.
        int copied;
        // allocate unmanaged buffer to get bytes
        int max = tempBuffer.Length;
        IntPtr unmanaged = Marshal.AllocHGlobal(max);
        try
        {
            copied = PicoBle_updateRead(unmanaged, max);
            if (copied <= 0) return Array.Empty<sbyte>();
            Marshal.Copy(unmanaged, tempBuffer, 0, copied);
        }
        finally
        {
            Marshal.FreeHGlobal(unmanaged);
        }

        var outS = new sbyte[copied];
        Buffer.BlockCopy(tempBuffer, 0, outS, 0, copied);
        return outS;
    }

    public bool Command(sbyte[] data) => PicoBle_command(data, data?.Length ?? 0);

    public string Disconnect()
    {
        PicoBle_disconnect();
        return "ok";
    }

    public string Quit()
    {
        PicoBle_quit();
        return "finished";
    }
#else
    // Editor/no platform: safe stubs to avoid null refs
    public BleBridge() { }
    public string onScanner() => "N/A";
    public string[] getFoundDeviceNames() => Array.Empty<string>();
    public void connectToDeviceByName(string name) { }
    public bool AreNotificationsReadyWithSettle(int settleMs) => false;
    public void ClearRxBuffer() { }
    public sbyte[] UpdateRead() => Array.Empty<sbyte>();
    public bool Command(sbyte[] data) => false;
    public string Disconnect() => "ok";
    public string Quit() => "finished";
#endif
}
