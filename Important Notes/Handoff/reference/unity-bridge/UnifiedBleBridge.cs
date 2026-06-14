using System;
using System.Runtime.InteropServices;
using UnityEngine;

/// <summary>
/// Script-side BLE bridge used by AppManager.
/// Keeps Android parity while improving iOS read capacity without changing native plugin sources.
/// </summary>
public class UnifiedBleBridge
{
#if UNITY_ANDROID && !UNITY_EDITOR
    private readonly AndroidJavaObject java;

    public UnifiedBleBridge()
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

    [DllImport(DLL)] private static extern void PicoBle_warmup();
    [DllImport(DLL)] private static extern void PicoBle_onScanner();
    [DllImport(DLL)] private static extern int PicoBle_getFoundCount();
    [DllImport(DLL)] private static extern IntPtr PicoBle_getFoundNameAt(int index);
    [DllImport(DLL)] private static extern void PicoBle_connectToDeviceByName(string name);
    [DllImport(DLL)] private static extern bool PicoBle_areNotificationsReadyWithSettle(int settleMs);
    [DllImport(DLL)] private static extern void PicoBle_clearRxBuffer();
    [DllImport(DLL)] private static extern int PicoBle_updateRead(IntPtr dest, int maxLen);
    [DllImport(DLL)] private static extern bool PicoBle_command(sbyte[] data, int len);
    [DllImport(DLL)] private static extern void PicoBle_disconnect();
    [DllImport(DLL)] private static extern void PicoBle_quit();

    // Larger than the legacy Assets/Plugins bridge buffer to avoid truncation of burst notifications.
    private const int IosReadBufferSize = 16 * 1024;
    private readonly byte[] tempBuffer = new byte[IosReadBufferSize];

    public UnifiedBleBridge()
    {
        // Eagerly construct CBCentralManager at app start so iOS fires the
        // Bluetooth permission prompt immediately rather than on first Scan press.
        PicoBle_warmup();
    }

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
            list[i] = Marshal.PtrToStringAnsi(ptr) ?? string.Empty;
        }
        return list;
    }

    public void connectToDeviceByName(string name) => PicoBle_connectToDeviceByName(name);

    public bool AreNotificationsReadyWithSettle(int settleMs) => PicoBle_areNotificationsReadyWithSettle(settleMs);

    public void ClearRxBuffer() => PicoBle_clearRxBuffer();

    public sbyte[] UpdateRead()
    {
        IntPtr unmanaged = Marshal.AllocHGlobal(IosReadBufferSize);
        try
        {
            int copied = PicoBle_updateRead(unmanaged, IosReadBufferSize);
            if (copied <= 0)
                return Array.Empty<sbyte>();

            Marshal.Copy(unmanaged, tempBuffer, 0, copied);
            var outS = new sbyte[copied];
            Buffer.BlockCopy(tempBuffer, 0, outS, 0, copied);
            return outS;
        }
        finally
        {
            Marshal.FreeHGlobal(unmanaged);
        }
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
    public UnifiedBleBridge() { }
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
