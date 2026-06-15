using UnityEngine;
using System;
using TMPro;
using System.Collections;
using UnityEngine.UI;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using System.Linq;

public class AppManager : MonoBehaviour
{
    public static AppManager Instance { get; private set; }

    [Space(10), Header("User References")]
    [SerializeField] private GameObject menuCreateUser;
    [SerializeField] private TMP_InputField usernameInputField;
    private string username;
    private string userID;
    public string GetUsername() => username;
    public string GetUserID() => userID;

    [Space(10), Header("Dashboard References")]
    [SerializeField] private GameObject modalConnectToDevice;
    [SerializeField] private Transform listConnectToMyDevices;
    [SerializeField] private Transform listConnectToOtherDevices;
    [SerializeField] private GameObject prefabConnectToSavedDevice;
    [SerializeField] private GameObject connectToDeviceLoadingIcons;

    [Space(10), Header("BLE Connect References")]
    [SerializeField] private GameObject buttonConnectToNewDevicePrefab;
    [SerializeField] private GameObject connectToNewDeviceScrollviewContent;
    private UnifiedBleBridge bleJava;
    private string currentlyConnectedDeviceName;
    private List<ButtonConnectToSavedDevice> savedDeviceButtons = new List<ButtonConnectToSavedDevice>();
    private bool activeRequested;
    private bool isScanRunning;

    [Space(10), Header("Control Panel References")]
    [SerializeField] private GameObject introductionScreen;
    [SerializeField] private GameObject createDeviceScreen;
    [SerializeField] private GameObject dashboardScreen;
    [SerializeField] private GameObject controlPanelScreen;
    [SerializeField] private GameObject connectModal;
    [SerializeField] private GameObject buttonSendCommandPrefab;
    [SerializeField] private GameObject sliderSendCommandPrefab;
    [SerializeField] private Transform controlsArea;
    [SerializeField] private GameObject buttonAddButtonPrefab;
    [SerializeField] private GameObject buttonAddSliderPrefab;
    [SerializeField] private Transform buttonAddButtonScrollViewParent;
    [SerializeField] private Transform buttonAddSliderScrollViewParent;
    [SerializeField] private Button confirmEdits;
    [SerializeField] private Transform addModal;
    [SerializeField] private GameObject controlPanelLoadingIcon;
    [SerializeField] private Button buttonEnterEditMode;

    [Space(10), Header("Connection Status References")]
    [SerializeField] private GameObject connectionStatusScreen;
    [SerializeField] private TMP_Text connectionStatusDeviceNameText;
    [SerializeField] private Image connectionStatusDeviceIconImage;
    [SerializeField] private TMP_Text connectionStatusStepText;
    [SerializeField] private Slider connectionStatusProgressSlider;

    // Hook to the grid generator/normalizer (assign in Inspector)
    [SerializeField] private ControlPanelGridSizeAdjuster gridAdjuster;

    [Space(10), Header("Sprites for Connection Buttons")]
    [SerializeField] private Sprite[] allIconImages;

    [Space(10), Header("Debug")]
    [SerializeField] private GameObject debugTerminal;
    [SerializeField] private TMP_Text debugTerminalText;

    private int draggablesAnimating = 0;
    private bool isDiscardingChanges = false;
    private bool waitingForLayout = false;
    private bool layoutConfirmed = false;
    private bool layoutReceivedThisRequest = false;
    private string inboundLineBuffer = "";
    private readonly HashSet<string> layoutControlNamesSeen = new HashSet<string>();
    private readonly Dictionary<int, string> inboundReliableParts = new Dictionary<int, string>();
    private readonly Queue<string> inboundDecodedLines = new Queue<string>();
    private readonly Dictionary<string, string> outboundReliableFrameCache = new Dictionary<string, string>();
    private readonly HashSet<int> inboundReliableRequestedMisses = new HashSet<int>();
    private int connectionSessionGeneration = 0;
    private Coroutine handshakeRoutine;
    private Coroutine layoutRequestRoutine;
    private int connectionProgressValue = 0;
    private int outboundStreamCounter = 0;
    private int outboundActiveStreamId = 0;
    private bool blockControlCommands = false;
    private readonly Queue<string> outboundControlCommandQueue = new Queue<string>();
    private Coroutine outboundControlCommandRoutine;

    private const int HandshakeMaxAttempts = 3;
    private const int BleSendMaxAttempts = 3;
    private const float NotificationReadyTimeoutSec = 8f;
    private const float HandshakeAttemptTimeoutSec = 3f;
    private const int LayoutRequestMaxAttempts = 3;
    private const float LayoutAttemptTimeoutSec = 5f;
    private const float BufferedChunkDelaySec = 0.12f;
    private const float ControlCommandGapSec = 0.03f;

    private const int ProgressConnecting = 5;
    private const int ProgressNotificationsReady = 18;
    private const int ProgressHelloSent = 26;
    private const int ProgressHelloAcked = 34;
    private const int ProgressOwnershipRequested = 44;
    private const int ProgressOwnershipReceived = 56;
    private const int ProgressPermissionRequested = 66;
    private const int ProgressPermissionGranted = 76;
    private const int ProgressLayoutRequested = 84;
    private const int ProgressLayoutReceivingStart = 88;
    private const int ProgressLayoutReceivingMax = 96;
    private const int ProgressDataReceived = 100;
    private const int ProgressLayoutReady = 100;

    // Ownership/permissions for the current session
    private bool canEditThisSession = false;
    private string ownerIdOnDevice = null;   // learned via "owned,<id>"
    private int pendingCreateDeviceIconId = -1;
    private int ownerIconIdOnDevice = -1;
    private int inboundReliableExpectedTotal = 0;
    private bool inboundReliableStreamActive = false;
    private int inboundReliableStreamId = 0;

    // Small helper to gate edit mode from UI elsewhere if you need it
    public bool CanEditThisSession() => canEditThisSession;

    // logdebug variables
    private const int MaxLogLines = 200;
    private readonly Queue<string> logQueue = new Queue<string>(MaxLogLines);


    private void Awake()
    {
        if (Instance != null && Instance != this) return;
        Instance = this;

        // Hide bars for launch/splash; Start() restores visible colored bars.
        SetSystemBarsHiddenNow();
    }

    private void SetSystemBarsHiddenNow()
    {
#if UNITY_ANDROID && !UNITY_EDITOR
        try
        {
            using (var unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
            {
                var activity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
                if (activity == null)
                    return;

                activity.Call("runOnUiThread", new AndroidJavaRunnable(() =>
                {
                    try
                    {
                        using (var unityPlayerInner = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
                        using (var activityInner = unityPlayerInner.GetStatic<AndroidJavaObject>("currentActivity"))
                        {
                            if (activityInner == null)
                                return;

                            using (var window = activityInner.Call<AndroidJavaObject>("getWindow"))
                            {
                                if (window == null)
                                    return;

                                using (var decorView = window.Call<AndroidJavaObject>("getDecorView"))
                                {
                                    if (decorView == null)
                                        return;

                                    const int FLAG_FULLSCREEN = 0x00000400;
                                    const int SYSTEM_UI_FLAG_FULLSCREEN = 0x00000004;
                                    const int SYSTEM_UI_FLAG_HIDE_NAVIGATION = 0x00000002;
                                    const int SYSTEM_UI_FLAG_IMMERSIVE_STICKY = 0x00001000;

                                    window.Call("addFlags", FLAG_FULLSCREEN);
                                    decorView.Call(
                                        "setSystemUiVisibility",
                                        SYSTEM_UI_FLAG_FULLSCREEN |
                                        SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                                        SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                                    );
                                }
                            }
                        }
                    }
                    catch (Exception innerEx)
                    {
                        Debug.LogWarning("Failed to hide status/nav bars on UI thread: " + innerEx.Message);
                    }
                }));

                activity.Dispose();
            }
        }
        catch (Exception ex)
        {
            Debug.LogWarning("Failed to hide status/nav bars: " + ex.Message);
        }
#endif
    }

    private void SetSystemBarsVisibleNow()
    {
#if UNITY_ANDROID && !UNITY_EDITOR
        try
        {
            using (var unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
            {
                var activity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
                if (activity == null)
                    return;

                activity.Call("runOnUiThread", new AndroidJavaRunnable(() =>
                {
                    try
                    {
                        using (var unityPlayerInner = new AndroidJavaClass("com.unity3d.player.UnityPlayer"))
                        using (var activityInner = unityPlayerInner.GetStatic<AndroidJavaObject>("currentActivity"))
                        {
                            if (activityInner == null)
                                return;

                            using (var window = activityInner.Call<AndroidJavaObject>("getWindow"))
                            {
                                if (window == null)
                                    return;

                                using (var decorView = window.Call<AndroidJavaObject>("getDecorView"))
                                {
                                    if (decorView == null)
                                        return;

                                    const int FLAG_FULLSCREEN = 0x00000400;
                                    const int FLAG_TRANSLUCENT_STATUS = 0x04000000;
                                    const int FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS = unchecked((int)0x80000000);
                                    const int SYSTEM_UI_FLAG_VISIBLE = 0;
                                    const int STATUS_BAR_COLOR = unchecked((int)0xFFC6504E); // AARRGGBB
                                    const int NAVIGATION_BAR_COLOR = unchecked((int)0xFFFFFFFF); // white

                                    window.Call("clearFlags", FLAG_FULLSCREEN);
                                    window.Call("clearFlags", FLAG_TRANSLUCENT_STATUS);
                                    window.Call("addFlags", FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
                                    window.Call("setStatusBarColor", STATUS_BAR_COLOR);
                                    window.Call("setNavigationBarColor", NAVIGATION_BAR_COLOR);
                                    decorView.Call("setSystemUiVisibility", SYSTEM_UI_FLAG_VISIBLE);
                                }
                            }
                        }
                    }
                    catch (Exception innerEx)
                    {
                        Debug.LogWarning("Failed to show status/nav bars on UI thread: " + innerEx.Message);
                    }
                }));

                activity.Dispose();
            }
        }
        catch (Exception ex)
        {
            Debug.LogWarning("Failed to show status/nav bars: " + ex.Message);
        }
#endif
    }

    private void Start()
    {
        // Immediate fallback if Awake timing is too early on some devices.
        SetSystemBarsVisibleNow();

        if (connectionStatusProgressSlider != null)
        {
            connectionStatusProgressSlider.minValue = 0;
            connectionStatusProgressSlider.maxValue = 100;
            connectionStatusProgressSlider.wholeNumbers = true;
            connectionStatusProgressSlider.value = 0;
        }

        bleJava = new UnifiedBleBridge();
        LogDebug($"BLE bridge {(bleJava == null ? "failed to initialize" : "initialized")}.", $"{(bleJava == null ? "warn" : "success")}");
        // try to load user from savefile
        var existingUser = UserSaveSystem.LoadUser();
        if (existingUser != null &&
            !string.IsNullOrWhiteSpace(existingUser.username) &&
            !string.IsNullOrWhiteSpace(existingUser.userID))
        {
            username = existingUser.username;
            userID = existingUser.userID;

            LogDebug($"User exists as {username} with userID: {userID}");

            // Skip the first-time UI
            menuCreateUser.SetActive(false);
            dashboardScreen.SetActive(true);
        }

        LoadSavedDevicesToDashboard();
        StartCoroutine(ScanQueueController());
    }

    private void OnApplicationFocus(bool hasFocus)
    {
        if (hasFocus)
            SetSystemBarsVisibleNow();
    }

    private void OnApplicationPause(bool pauseStatus)
    {
        if (!pauseStatus)
            SetSystemBarsVisibleNow();
    }

    private void LoadSavedDevicesToDashboard()
    {
        DeviceDataList savedDevices = DeviceSaveSystem.LoadDevices();

        foreach (DeviceData device in savedDevices.devices)
            CreateButtonToConnectToSavedDevice(device.isOwnedByMe, device);

        LogDebug($"Loaded {savedDevices.devices.Count} saved devices to dashboard.");
    }

    public void SetUsernameAndID()
    {
        if (usernameInputField != null && !string.IsNullOrWhiteSpace(usernameInputField.text))
        {
            username = usernameInputField.text.Trim();
            userID = Guid.NewGuid().ToString("N");

            var userData = new UserData
            {
                username = username,
                userID = userID
            };

            UserSaveSystem.SaveUser(userData);

            introductionScreen.SetActive(false);
            dashboardScreen.SetActive(true);
            LogDebug($"Created new user → Username: {username}, UserID: {userID}");
        }
        else
        {
            LogDebug("Username input is empty or invalid.", "error");
        }
    }

    // Ensure we always have an identity before connecting/creating.
    // Returns true if identity is present (loaded or created).
    private bool EnsureUserIdentity()
    {
        if (!string.IsNullOrWhiteSpace(username) && !string.IsNullOrWhiteSpace(userID))
            return true;

        LogDebug("No stored user was found..!", "warn");
        return false;
    }

    public void RequestActiveScan()
    {
        activeRequested = true;

        foreach (Transform child in connectToNewDeviceScrollviewContent.transform)
            Destroy(child.gameObject);

        connectToDeviceLoadingIcons.SetActive(true);
    }

    public void RequestStopActiveScan() { }

    public IEnumerator ScanQueueController()
    {
        while (true)
        {
            while (dashboardScreen.activeSelf)
            {
                if (activeRequested)
                {
                    isScanRunning = true;
                    StartScanner(isActive: true);
                    yield return new WaitForSeconds(5f); // delay to let scanner complete scan - later make loops that display results as they're found, once the user presses a connect to device button - stop scanner
                    DisplayDevicesActiveScan();
                    yield return new WaitUntil(() => !isScanRunning);
                    activeRequested = false;
                }
                else
                {
                    isScanRunning = true;
                    StartScanner(isActive: false);
                    yield return new WaitForSeconds(5f); // delay to let scanner complete scan - later make loops that display results as they're found, once the user presses a connect to device button - stop scanner
                    DisplayDevicesPassiveScan();
                    yield return new WaitUntil(() => !isScanRunning);
                }
                yield return new WaitForSeconds(5f);
            }
            yield return new WaitForSeconds(10f);
        }
    }

    private void StartScanner(bool isActive)
    {
        LogDebug($"Starting BLE for {(isActive? "active" : "passive")} scan...");
        string scanResult = bleJava.onScanner();
        // LogDebug($"onScanner called → result: {scanResult}");
    }

    private void DisplayDevicesActiveScan()
    {
        try
        {
            string[] deviceNames = PollFoundDevices();

            // Clear your single scrollview content (you said you updated the UI)
            foreach (Transform child in connectToNewDeviceScrollviewContent.transform)
                Destroy(child.gameObject);

            foreach (string deviceName in deviceNames)
            {
                // One button type that calls ConnectToNewDevice via the existing script
                GameObject btn = Instantiate(buttonConnectToNewDevicePrefab, connectToNewDeviceScrollviewContent.transform);
                btn.GetComponent<ButtonConnectToNewDevice>().Initialize(deviceName);
            }

            connectToDeviceLoadingIcons.SetActive(false);

            isScanRunning = false;
        }
        catch (Exception ex)
        {
            LogDebug("Error while getting devices: " + ex.Message, "error");
        }
    }

    private void DisplayDevicesPassiveScan()
    {
        try
        {
            string[] deviceNames = PollFoundDevices();
            var found = new HashSet<string>(deviceNames);

            var savedDataList = DeviceSaveSystem.LoadDevices();

            foreach (var btn in savedDeviceButtons)
                btn.SetAvailabilityStatus(false);

            foreach (var saved in savedDataList.devices)
            {
                bool available = found.Contains(saved.deviceName);
                foreach (var btn in savedDeviceButtons)
                {
                    if (btn.GetDeviceName() == saved.deviceName)
                    {
                        btn.SetAvailabilityStatus(available);
                        break;
                    }
                }
            }

            isScanRunning = false;
        }
        catch (Exception ex)
        {
            LogDebug("Error while getting devices: " + ex.Message, "error");
        }
    }

    private string[] PollFoundDevices()
    {
        string[] deviceNames = bleJava.getFoundDeviceNames(); // maybe try to loop this, so results come in gradually - but then prepare for premature connection attempts by users. (TO DO set up logic to stop scanner when user attempts a connection with a gradually found device)
        LogDebug($"Devices found: {deviceNames.Length}");
        return deviceNames;
    }

    private void StopActiveConnectionCoroutines()
    {
        if (handshakeRoutine != null)
        {
            StopCoroutine(handshakeRoutine);
            handshakeRoutine = null;
        }

        if (layoutRequestRoutine != null)
        {
            StopCoroutine(layoutRequestRoutine);
            layoutRequestRoutine = null;
        }
    }

    private int BeginNewConnectionSession()
    {
        connectionSessionGeneration++;
        StopActiveConnectionCoroutines();
        ClearQueuedControlCommands();

        waitingForLayout = false;
        layoutReceivedThisRequest = false;
        inboundLineBuffer = "";
        layoutControlNamesSeen.Clear();

        if (bleJava != null)
            bleJava.ClearRxBuffer();

        connectionProgressValue = 0;

        return connectionSessionGeneration;
    }

    private bool IsSessionCurrent(int sessionId)
    {
        return sessionId == connectionSessionGeneration;
    }

    private void StartHandshakeForCurrentSession(int sessionId)
    {
        if (!IsSessionCurrent(sessionId))
            return;

        StopActiveConnectionCoroutines();
        handshakeRoutine = StartCoroutine(HandshakeThenRequestLayout(sessionId));
    }

    private void StartLayoutRequestForCurrentSession(int sessionId)
    {
        if (!IsSessionCurrent(sessionId))
            return;

        if (layoutRequestRoutine != null)
            StopCoroutine(layoutRequestRoutine);

        layoutRequestRoutine = StartCoroutine(RequestLayoutFromDevice(sessionId));
    }

    private IEnumerator SendReliableSingleMessage(string payload, int sessionId)
    {
        var lines = new List<string>(1) { payload };
        yield return StartCoroutine(SendReliableStream(lines, sessionId));
    }

    private IEnumerator SendReliableStream(List<string> payloadLines, int sessionId)
    {
        if (!IsSessionCurrent(sessionId))
            yield break;

        int total = Mathf.Max(1, payloadLines.Count);
        int streamId = ++outboundStreamCounter;
        outboundActiveStreamId = streamId;
        outboundReliableFrameCache.Clear();
        yield return StartCoroutine(SendCommandToBLEDeviceBlocking($"prep,{total},{streamId}\n"));

        bool gotPrepAck = false;
        yield return StartCoroutine(ReadLineUntil(1.5f, line =>
        {
            if (line == "ack:prep" || line == "ACK:PREP" || line == $"ack:prep,{streamId}" || line == $"ACK:PREP,{streamId}")
            {
                gotPrepAck = true;
                return true;
            }

            if (line.StartsWith("miss,"))
            {
                HandleMissRequest(line);
                return false;
            }

            if (line == "disconnect")
            {
                HandleRemoteDisconnect();
                return true;
            }

            return false;
        }, sessionId));

        if (!IsSessionCurrent(sessionId))
            yield break;

        if (!gotPrepAck)
            LogDebug("No prep acknowledgement received before reliable stream; continuing for compatibility.", "warn");

        for (int i = 0; i < total; i++)
        {
            if (!IsSessionCurrent(sessionId))
                yield break;

            string payload = payloadLines[i] ?? string.Empty;
            string frame = $"{i + 1}-{payload}";
            outboundReliableFrameCache[$"{streamId}:{i + 1}"] = frame;
            yield return StartCoroutine(SendCommandToBLEDeviceBlocking(frame + "\n"));
        }
    }

    // NEW: single entry point for any newly found device
    public void ConnectToNewDevice(string deviceName)
    {
        if (!EnsureUserIdentity()) return;

        int sessionId = BeginNewConnectionSession();

        LogDebug("Connecting to device: " + deviceName);
        bleJava.connectToDeviceByName(deviceName);
        currentlyConnectedDeviceName = deviceName;

        ShowConnectionStatusScreenForDevice(deviceName);
        UpdateConnectionStatus("Connecting to BLE device...", ProgressConnecting);

        // UI – you said you’ve already wired the single modal; we just leave the dashboard
        dashboardScreen.SetActive(false);
        modalConnectToDevice.SetActive(false);
        controlPanelScreen.SetActive(false);
        createDeviceScreen.SetActive(false);
        debugTerminal.SetActive(false);

        // Handshake decides: Create screen vs Control Panel
        StartHandshakeForCurrentSession(sessionId);
    }

    /*public void CreateBLEDevice(string deviceName)
    {
        // Require identity before proceeding
        if (!EnsureUserIdentity()) return;

        LogDebug("Connecting to device: " + deviceName);
        bleJava.Call("connectToDeviceByName", deviceName);
        currentlyConnectedDeviceName = StripOwnershipSuffix(deviceName);
        menuCreate.SetActive(false);
        menuConnect.SetActive(false);
        connectModal.SetActive(false);
        menuCreateOrConnect.SetActive(true);
        modalCreateOrConnect.SetActive(false);
        dashboardScreen.SetActive(false);
        createDeviceScreen.SetActive(true);
    }

    public void ConnectToBLEDevice(string deviceName)
    {
        // Require identity before proceeding
        if (!EnsureUserIdentity()) return;

        LogDebug("Connecting to device: " + deviceName);
        bleJava.Call("connectToDeviceByName", deviceName);
        currentlyConnectedDeviceName = StripOwnershipSuffix(deviceName);

        // UI
        menuCreate.SetActive(false);
        menuConnect.SetActive(false);
        connectModal.SetActive(false);
        menuCreateOrConnect.SetActive(true);
        modalCreateOrConnect.SetActive(false);
        dashboardScreen.SetActive(false);

        // Start handshake (owned/public/edit)
        StartCoroutine(HandshakeThenRequestLayout());
    }*/

    public void ConnectToSavedBLEDevice(string deviceName)
    {
        // Require identity before proceeding
        if (!EnsureUserIdentity()) return;

        int sessionId = BeginNewConnectionSession();

        LogDebug("Connecting to device: " + deviceName);
        bleJava.connectToDeviceByName(deviceName);
        currentlyConnectedDeviceName = deviceName;

        ShowConnectionStatusScreenForDevice(deviceName);
        UpdateConnectionStatus("Connecting to saved device...", ProgressConnecting);

        foreach (var btn in savedDeviceButtons)
            btn.SetAvailabilityStatus(false);

        dashboardScreen.SetActive(false);
        controlPanelScreen.SetActive(false);
        createDeviceScreen.SetActive(false);
        debugTerminal.SetActive(false);

        // Start handshake
        StartHandshakeForCurrentSession(sessionId);
    }

    public void CancelCreateDevice()
    {
        DisconnectFromDevice();
        createDeviceScreen.SetActive(false);
        dashboardScreen.SetActive(true);
    }

    public void ConfirmCreateDevice()
    {
        createDeviceScreen.SetActive(false);
        ShowConnectionStatusScreenForDevice(currentlyConnectedDeviceName);
        UpdateConnectionStatus("Applying device ownership settings...", ProgressOwnershipReceived);
        debugTerminal.SetActive(false);

        // Start handshake
        StartHandshakeForCurrentSession(connectionSessionGeneration);
    }

    public string GetCurrentlyConnectedDeviceName() => currentlyConnectedDeviceName;

    public void EnterControlPanel()
    {
        EnterControlPanel(connectionSessionGeneration);
    }

    private void EnterControlPanel(int sessionId)
    {
        if (!IsSessionCurrent(sessionId))
            return;

        // Keep panel active during layout receive so grid sizing math has valid rect dimensions.
        controlPanelScreen.SetActive(true);
        blockControlCommands = true;
        SetControlsInteractable(false);

        controlPanelLoadingIcon.SetActive(true);
        StartLayoutRequestForCurrentSession(sessionId);
    }

    private void ShowConnectionStatusScreenForDevice(string deviceName)
    {
        if (connectionStatusScreen != null)
            connectionStatusScreen.SetActive(true);

        if (connectionStatusDeviceNameText != null)
            connectionStatusDeviceNameText.text = string.IsNullOrWhiteSpace(deviceName) ? "Unknown Device" : GetDisplayDeviceName(deviceName);

        if (connectionStatusDeviceIconImage != null)
            connectionStatusDeviceIconImage.sprite = ResolveConnectionStatusIcon(deviceName);

        connectionProgressValue = 0;
        UpdateConnectionStatus("Preparing connection...", 0);
    }

    private void HideConnectionStatusScreen()
    {
        if (connectionStatusScreen != null)
            connectionStatusScreen.SetActive(false);
    }

    private void UpdateConnectionStatus(string statusMessage, int progressValue)
    {
        if (connectionStatusStepText != null)
            connectionStatusStepText.text = statusMessage;

        if (connectionStatusProgressSlider != null)
        {
            connectionStatusProgressSlider.minValue = 0;
            connectionStatusProgressSlider.maxValue = 100;
            connectionStatusProgressSlider.wholeNumbers = true;

            int clampedProgress = Mathf.Clamp(progressValue, 0, 100);
            if (clampedProgress < connectionProgressValue)
                clampedProgress = connectionProgressValue;

            connectionProgressValue = clampedProgress;
            connectionStatusProgressSlider.value = connectionProgressValue;
        }
    }

    private Sprite ResolveConnectionStatusIcon(string deviceName)
    {
        try
        {
            if (ownerIconIdOnDevice >= 0 && allIconImages != null && allIconImages.Length > 0)
            {
                int ownerIconIndex = Mathf.Clamp(ownerIconIdOnDevice, 0, allIconImages.Length - 1);
                return allIconImages[ownerIconIndex];
            }

            DeviceDataList list = DeviceSaveSystem.LoadDevices();
            if (list != null)
            {
                foreach (DeviceData device in list.devices)
                {
                    if (device.deviceName == deviceName)
                    {
                        if (allIconImages != null && allIconImages.Length > 0)
                        {
                            int iconId = Mathf.Clamp(device.deviceIconID, 0, allIconImages.Length - 1);
                            return allIconImages[iconId];
                        }
                        break;
                    }
                }
            }
        }
        catch (Exception ex)
        {
            LogDebug("Could not resolve device icon for connection status: " + ex.Message, "warn");
        }

        if (allIconImages != null && allIconImages.Length > 0)
            return allIconImages[0];

        return null;
    }

    public static string GetDisplayDeviceName(string rawName)
    {
        if (string.IsNullOrEmpty(rawName))
            return string.Empty;

        const string prefix = "PicoW-";
        return rawName.StartsWith(prefix, StringComparison.Ordinal) ? rawName.Substring(prefix.Length) : rawName;
    }

    private void SaveCurrentDeviceIfMissing(bool isOwnedByMe)
    {
        var list = DeviceSaveSystem.LoadDevices();
        string baseName = currentlyConnectedDeviceName; // exact, no suffix logic
        if (string.IsNullOrEmpty(baseName)) return;

        int existingIndex = list.devices.FindIndex(d => d.deviceName == baseName);
        int fallbackIcon = existingIndex >= 0 ? list.devices[existingIndex].deviceIconID : 0;
        int resolvedIconId = ResolveIconIdForDevice(isOwnedByMe, fallbackIcon);

        if (existingIndex >= 0)
        {
            if (resolvedIconId >= 0 && list.devices[existingIndex].deviceIconID != resolvedIconId)
            {
                list.devices[existingIndex].deviceIconID = resolvedIconId;
                DeviceSaveSystem.SaveDevices(list);

                for (int i = 0; i < savedDeviceButtons.Count; i++)
                {
                    if (savedDeviceButtons[i] != null && savedDeviceButtons[i].GetDeviceID() == list.devices[existingIndex].deviceID)
                    {
                        savedDeviceButtons[i].SetIcon(resolvedIconId);
                        break;
                    }
                }
            }

            if (isOwnedByMe)
                pendingCreateDeviceIconId = -1;

            return;
        }

        var dd = new DeviceData
        {
            deviceID = Guid.NewGuid().ToString("N"),
            deviceName = baseName,
            deviceIconID = Mathf.Max(0, resolvedIconId),
            canOthersConnect = false,
            canOthersEdit = false,
            isOwnedByMe = isOwnedByMe
        };

        list.devices.Add(dd);
        DeviceSaveSystem.SaveDevices(list);
        CreateButtonToConnectToSavedDevice(isOwnedByMe, dd);

        if (isOwnedByMe)
            pendingCreateDeviceIconId = -1;
    }

    private int ResolveIconIdForDevice(bool isOwnedByMe, int fallbackIcon)
    {
        // The icon in "owned,<ownerId>,<iconId>" is the device icon and should be
        // saved regardless of whether this user owns the device.
        if (ownerIconIdOnDevice >= 0)
            return ownerIconIdOnDevice;

        if (isOwnedByMe && pendingCreateDeviceIconId >= 0)
            return pendingCreateDeviceIconId;

        return Mathf.Max(0, fallbackIcon);
    }

    public void CreateButtonToConnectToSavedDevice(bool doesUserOwnThisDevice, DeviceData deviceData)
    {
        Transform parent = doesUserOwnThisDevice ? listConnectToMyDevices : listConnectToOtherDevices;
        GameObject btnObj = Instantiate(prefabConnectToSavedDevice, parent);
        var btn = btnObj.GetComponent<ButtonConnectToSavedDevice>();
        btn.Initialize(deviceData);
        savedDeviceButtons.Add(btn);
    }

    public Sprite GetSpriteIcons(int index) => allIconImages[index];

    public Sprite GetSpriteIconsSafe(int index)
    {
        if (allIconImages == null || allIconImages.Length == 0)
            return null;

        int iconIndex = Mathf.Clamp(index, 0, allIconImages.Length - 1);
        return allIconImages[iconIndex];
    }

    public void SetPendingCreateDeviceIconId(int iconId)
    {
        pendingCreateDeviceIconId = Mathf.Max(0, iconId);
    }

    public void UpdateButtonToConnectToSavedDevice(string deviceID)
    {

    }

    public void DeleteButtonToConnectToSavedDevice(string deviceID)
    {
        DeviceSaveSystem.DeleteDeviceByID(deviceID);
        savedDeviceButtons.RemoveAll(btn => btn.GetDeviceID() == deviceID);
        LogDebug($"Deleted device with ID: {deviceID}");
    }

    // ========================= BLE layout receive (GRID ONLY, no token) =========================

    private IEnumerator HandshakeThenRequestLayout(int sessionId)
    {
        if (!IsSessionCurrent(sessionId))
            yield break;

        UpdateConnectionStatus("Waiting for BLE notifications...", ProgressConnecting);

        // clear session flags
        canEditThisSession = false;
        ownerIdOnDevice = null;
        ownerIconIdOnDevice = -1;
        buttonEnterEditMode.interactable = false;

        // 1) Wait for CCCD + settle.
        bool notificationsReady = false;
        for (float t = 0f; t < NotificationReadyTimeoutSec; t += 0.2f)
        {
            if (!IsSessionCurrent(sessionId))
                yield break;

            if (bleJava.AreNotificationsReadyWithSettle(350))
            {
                notificationsReady = true;
                LogDebug("[BLE] Notifications are ready.");
                UpdateConnectionStatus("Notifications enabled.", ProgressNotificationsReady);
                break;
            }
            yield return new WaitForSeconds(0.2f);
        }

        if (!notificationsReady)
        {
            FailConnectionAndReturnToDashboard("Connection failed: notifications were not enabled in time.");
            yield break;
        }

        // 2) Flush anything stale:
        bleJava.ClearRxBuffer();
        inboundLineBuffer = "";

        // 3) Handshake hello/ack to verify bidirectional RX/TX is alive.
        bool helloAcked = false;
        for (int attempt = 1; attempt <= HandshakeMaxAttempts && !helloAcked; attempt++)
        {
            if (!IsSessionCurrent(sessionId))
                yield break;

            UpdateConnectionStatus($"Sending HELLO ({attempt}/{HandshakeMaxAttempts})...", ProgressHelloSent);
            yield return StartCoroutine(SendReliableSingleMessage("HELLO", sessionId));

            bool disconnected = false;
            yield return StartCoroutine(ReadLineUntil(HandshakeAttemptTimeoutSec, line =>
            {
                if (line == "ACK:HELLO") { helloAcked = true; return true; }
                if (line == "disconnect")
                {
                    disconnected = true;
                    HandleRemoteDisconnect();
                    return true;
                }
                return false;
            }, sessionId));

            if (disconnected) yield break;
            if (!IsSessionCurrent(sessionId)) yield break;
            if (!helloAcked)
                LogDebug($"No HELLO ack from device (attempt {attempt}/{HandshakeMaxAttempts}).", "warn");
            else
                UpdateConnectionStatus("Handshake confirmed.", ProgressHelloAcked);
        }

        if (!helloAcked)
        {
            FailConnectionAndReturnToDashboard("Connection handshake failed: no HELLO acknowledgement received.");
            yield break;
        }

        // 4) Query ownership with retries.
        string who = null;
        for (int attempt = 1; attempt <= HandshakeMaxAttempts && string.IsNullOrEmpty(who); attempt++)
        {
            if (!IsSessionCurrent(sessionId))
                yield break;

            UpdateConnectionStatus($"Requesting owner status ({attempt}/{HandshakeMaxAttempts})...", ProgressOwnershipRequested);
            yield return StartCoroutine(SendReliableSingleMessage("who_are_you", sessionId));

            bool disconnected = false;
            yield return StartCoroutine(ReadLineUntil(HandshakeAttemptTimeoutSec, line =>
            {
                if (line.StartsWith("owned,") || line.Contains("owned,")) { who = line; return true; }
                if (line == "unowned") { who = line; return true; }
                if (line == "disconnect")
                {
                    disconnected = true;
                    HandleRemoteDisconnect();
                    return true;
                }
                return false;
            }, sessionId));

            if (disconnected) yield break;
            if (!IsSessionCurrent(sessionId)) yield break;
            if (string.IsNullOrEmpty(who))
                LogDebug($"No ownership response yet (attempt {attempt}/{HandshakeMaxAttempts}).", "warn");
        }

        if (string.IsNullOrEmpty(who))
        {
            FailConnectionAndReturnToDashboard("Connection handshake failed: timeout waiting for ownership response.");
            yield break;
        }

        if (who.StartsWith("unowned"))
        {
            LogDebug("Device is unowned → route to Create Device screen.");
            UpdateConnectionStatus("Device is unowned. Opening setup...", ProgressLayoutReady);
            if (!createDeviceScreen.activeSelf)
            {
                dashboardScreen.SetActive(false);
                controlPanelScreen.SetActive(false);
                createDeviceScreen.SetActive(true);
            }
            HideConnectionStatusScreen();
            yield break;
        }
        else
        {
            ownerIdOnDevice = TryExtractOwnerId(who);
            if (string.IsNullOrEmpty(ownerIdOnDevice))
            {
                FailConnectionAndReturnToDashboard("Connection handshake failed: malformed ownership response.");
                yield break;
            }
            ownerIconIdOnDevice = TryExtractOwnerIconId(who);
            LogDebug($"Device owned by: {ownerIdOnDevice}");
            if (ownerIconIdOnDevice >= 0)
                LogDebug($"Device icon ID: {ownerIconIdOnDevice}");

            if (connectionStatusDeviceIconImage != null)
                connectionStatusDeviceIconImage.sprite = ResolveConnectionStatusIcon(currentlyConnectedDeviceName);

            UpdateConnectionStatus("Ownership confirmed.", ProgressOwnershipReceived);

            // Optional protocol ack for devices implementing staged readiness.
            UpdateConnectionStatus("Preparing permission request...", 60);
            yield return StartCoroutine(SendReliableSingleMessage("ACK:ownership", sessionId));
            yield return StartCoroutine(ReadLineUntil(1.5f, line => line == "READY:permission", sessionId));
            if (!IsSessionCurrent(sessionId)) yield break;
        }

        bool gotDecision = false;
        bool shouldAckPermission = false;
        for (int attempt = 1; attempt <= HandshakeMaxAttempts && !gotDecision; attempt++)
        {
            if (!IsSessionCurrent(sessionId))
                yield break;

            // Drop stale/partial lines before each permission request attempt.
            bleJava.ClearRxBuffer();
            inboundLineBuffer = "";

            UpdateConnectionStatus($"Requesting permissions ({attempt}/{HandshakeMaxAttempts})...", ProgressPermissionRequested);
            yield return StartCoroutine(SendReliableSingleMessage($"request_permission,{userID},{username}", sessionId));

            bool disconnected = false;
            yield return StartCoroutine(ReadLineUntil(HandshakeAttemptTimeoutSec, line =>
            {
                if (line.StartsWith("permission_response,") || line.StartsWith("perm,"))
                {
                    if (TryParsePermissionResponse(line, out int canConnect, out int canEdit))
                    {
                        if (canConnect == 0)
                        {
                            gotDecision = true;
                            FailConnectionAndReturnToDashboard("Permission denied to connect (private device).");
                            return true;
                        }

                        canEditThisSession = (canEdit == 1) || (userID == ownerIdOnDevice);
                        LogDebug($"Permission granted. CanEditThisSession={canEditThisSession}");
                        buttonEnterEditMode.interactable = canEditThisSession;
                        UpdateConnectionStatus("Permissions granted. Preparing layout...", ProgressPermissionGranted);

                        bool ownedByMe = (ownerIdOnDevice != null) && (userID == ownerIdOnDevice);
                        SaveCurrentDeviceIfMissing(ownedByMe);

                        shouldAckPermission = true;
                        gotDecision = true;
                        return true;
                    }

                    LogDebug("Malformed permission_response received: " + line, "warn");
                }

                if (line == "disconnect")
                {
                    disconnected = true;
                    HandleRemoteDisconnect();
                    gotDecision = true;
                    return true;
                }

                return false;
            }, sessionId));

            if (disconnected) yield break;
            if (!IsSessionCurrent(sessionId)) yield break;

            if (shouldAckPermission)
            {
                yield return StartCoroutine(SendReliableSingleMessage("ACK:permission", sessionId));
                shouldAckPermission = false;
            }

            if (!gotDecision)
                LogDebug($"No permission response yet (attempt {attempt}/{HandshakeMaxAttempts}).", "warn");
        }

        if (!gotDecision)
        {
            FailConnectionAndReturnToDashboard("Connection handshake failed: timed out waiting for permission response.");
            yield break;
        }

        // 3) Request layout after permission granted
        UpdateConnectionStatus("Requesting control definitions...", ProgressLayoutRequested);
        EnterControlPanel(sessionId);
    }

    private static string TryExtractOwnerId(string raw)
    {
        if (string.IsNullOrWhiteSpace(raw))
            return null;

        int marker = raw.LastIndexOf("owned,", StringComparison.Ordinal);
        if (marker < 0)
            return null;

        string payload = raw.Substring(marker + "owned,".Length);
        string[] parts = payload.Split(',');
        if (parts.Length == 0)
            return null;

        string ownerId = parts[0].Trim();
        if (string.IsNullOrEmpty(ownerId))
            return null;

        return ownerId;
    }

    private static int TryExtractOwnerIconId(string raw)
    {
        if (string.IsNullOrWhiteSpace(raw))
            return -1;

        string[] parts = raw.Split(',');
        if (parts.Length < 3)
            return -1;

        if (int.TryParse(parts[2].Trim(), NumberStyles.Integer, CultureInfo.InvariantCulture, out int iconId))
            return iconId;

        return -1;
    }

    private bool TryParsePermissionResponse(string line, out int canConnect, out int canEdit)
    {
        canConnect = 0;
        canEdit = 0;

        if (string.IsNullOrWhiteSpace(line))
            return false;

        string payload = null;

        // Legacy verbose response, possibly duplicated by chunk retries:
        // "permission_response,permission_response,1,1"
        int markerVerbose = line.LastIndexOf("permission_response,", StringComparison.Ordinal);
        if (markerVerbose >= 0)
        {
            payload = line.Substring(markerVerbose + "permission_response,".Length);
        }
        else
        {
            // Compact response designed to fit in a single BLE packet: "perm,1,1"
            int markerCompact = line.LastIndexOf("perm,", StringComparison.Ordinal);
            if (markerCompact < 0)
                return false;
            payload = line.Substring(markerCompact + "perm,".Length);
        }

        string[] tokens = payload.Split(',');

        var parsed = new List<int>(2);
        for (int i = 0; i < tokens.Length; i++)
        {
            if (int.TryParse(tokens[i].Trim(), out int v))
            {
                parsed.Add(v);
                if (parsed.Count == 2) break;
            }
        }

        if (parsed.Count < 2)
            return false;

        canConnect = parsed[0];
        canEdit = parsed[1];
        return true;
    }

    private IEnumerator ReadLineUntil(float timeoutSec, Func<string, bool> acceptLine, int sessionId = -1)
    {
        float elapsed = 0f;

        while (elapsed < timeoutSec)
        {
            if (sessionId >= 0 && !IsSessionCurrent(sessionId))
                yield break;

            while (TryReadNextBleLine(out string line))
            {
                if (acceptLine(line))
                    yield break;
            }

            yield return new WaitForSeconds(0.2f);
            elapsed += 0.2f;
        }
    }

    private void HandleRemoteDisconnect()
    {
        FailConnectionAndReturnToDashboard("Device requested disconnect.");
    }

    private IEnumerator RequestLayoutFromDevice(int sessionId)
    {
        for (int attempt = 1; attempt <= LayoutRequestMaxAttempts; attempt++)
        {
            if (!IsSessionCurrent(sessionId))
                yield break;

            waitingForLayout = true;
            layoutReceivedThisRequest = false;
            layoutControlNamesSeen.Clear();

            bleJava.ClearRxBuffer();
            inboundLineBuffer = "";

            LogDebug($"Request Control panel layout from Pico (attempt {attempt}/{LayoutRequestMaxAttempts})...");
            UpdateConnectionStatus($"Requesting control data ({attempt}/{LayoutRequestMaxAttempts})...", ProgressLayoutRequested);
            yield return StartCoroutine(SendReliableSingleMessage("request", sessionId));

            yield return StartCoroutine(ReceiveLayoutBuffer(LayoutAttemptTimeoutSec, sessionId));
            if (!IsSessionCurrent(sessionId))
                yield break;

            if (layoutReceivedThisRequest)
            {
                UpdateConnectionStatus("Data received.", ProgressDataReceived);
                controlPanelScreen.SetActive(true);
                blockControlCommands = false;
                SetControlsInteractable(true);
                UpdateConnectionStatus("Connection successful.", ProgressLayoutReady);
                yield return new WaitForSeconds(0.5f);
                controlPanelLoadingIcon.SetActive(false);
                HideConnectionStatusScreen();
                LogDebug("Finished receiving layout.", "success");
                yield break;
            }

            LogDebug("Layout response timed out; retrying request.", "warn");
        }

        FailConnectionAndReturnToDashboard("Connection failed: layout was not received from device.");
    }

    private IEnumerator ReceiveLayoutBuffer(float timeout, int sessionId)
    {
        float elapsed = 0f;

        LogDebug("Waiting for layout...");
        UpdateConnectionStatus("Receiving control data...", ProgressLayoutReceivingStart);

        while (waitingForLayout && elapsed < timeout)
        {
            if (!IsSessionCurrent(sessionId))
                yield break;

            while (TryReadNextBleLine(out string line))
            {
                string normalized = line + "\n";
                ParseLayoutBuffer(ref normalized);

                int dynamicProgress = Mathf.Clamp(
                    ProgressLayoutReceivingStart + layoutControlNamesSeen.Count,
                    ProgressLayoutReceivingStart,
                    ProgressLayoutReceivingMax);
                UpdateConnectionStatus("Receiving control data...", dynamicProgress);
            }

            elapsed += 0.2f;
            yield return new WaitForSeconds(0.2f);
        }
    }

    private void ParseLayoutBuffer(ref string buffer)
    {
        while (true)
        {
            int newlineIndex = buffer.IndexOf('\n');
            if (newlineIndex == -1) break;

            string line = buffer.Substring(0, newlineIndex).Trim();
            buffer = buffer.Substring(newlineIndex + 1);

            if (string.IsNullOrEmpty(line)) continue;

            if (line == "__END__")
            {
                waitingForLayout = false;
                layoutReceivedThisRequest = true;
                UpdateConnectionStatus("Data stream complete.", ProgressDataReceived);
                LogDebug("Detected __END__, stopping receive loop.");
                continue;
            }
            else if (line == "LAYOUT_SAVED")
            {
                layoutConfirmed = true;
                LogDebug("Layout saved successfully on device.", "success");
            }
            else if (line.StartsWith("ACK:"))
            {
                LogDebug("ACK: " + line.Substring(4));
            }
            else if (line.StartsWith("ERR:"))
            {
                LogDebug("Error from device: " + line.Substring(4), "error");
            }
            else if (line.StartsWith("#VERSION"))
            {
                LogDebug("Layout file version: " + line);
            }
            else if (line == "disconnect")
            {
                LogDebug("Device requested disconnect.");
                DisconnectFromDevice();
                dashboardScreen.SetActive(true);
                controlPanelScreen.SetActive(false);
                createDeviceScreen.SetActive(false);
                HideConnectionStatusScreen();
            }
            else
            {
                LogDebug($"Parsed line: {line}");
                try
                {
                    ParseLayoutLine_GRID(line);
                }
                catch (Exception ex)
                {
                    LogDebug($"Failed to parse layout line '{line}': {ex.Message}", "error");
                }

                if (line.StartsWith("button,") || line.StartsWith("slider,"))
                {
                    int dynamicProgress = Mathf.Clamp(
                        ProgressLayoutReceivingStart + layoutControlNamesSeen.Count,
                        ProgressLayoutReceivingStart,
                        ProgressLayoutReceivingMax);
                    UpdateConnectionStatus("Receiving control data...", dynamicProgress);
                }
            }
        }
    }

    private bool TryReadNextBleLine(out string line)
    {
        line = null;

        if (inboundDecodedLines.Count > 0)
        {
            line = inboundDecodedLines.Dequeue();
            if (string.IsNullOrEmpty(line))
                return TryReadNextBleLine(out line);

            LogDebug($"[RX] {line}");
            return true;
        }

        sbyte[] respS = bleJava.UpdateRead();
        byte[] resp = ToByteArray(respS);
        if (resp != null && resp.Length > 0)
            inboundLineBuffer += System.Text.Encoding.UTF8.GetString(resp);

        int idx = inboundLineBuffer.IndexOf('\n');
        if (idx < 0)
            return false;

        string rawLine = inboundLineBuffer.Substring(0, idx).Trim();
        inboundLineBuffer = inboundLineBuffer.Substring(idx + 1);

        if (string.IsNullOrEmpty(rawLine))
            return TryReadNextBleLine(out line);

        HandleInboundProtocolLine(rawLine);

        if (inboundDecodedLines.Count <= 0)
            return TryReadNextBleLine(out line);

        line = inboundDecodedLines.Dequeue();

        if (string.IsNullOrEmpty(line))
            return TryReadNextBleLine(out line);

        LogDebug($"[RX] {line}");
        return true;
    }

    private void HandleInboundProtocolLine(string rawLine)
    {
        if (rawLine.StartsWith("prep,", StringComparison.OrdinalIgnoreCase))
        {
            string[] prepParts = rawLine.Split(',');
            int total = 0;
            int streamId = 0;
            bool parsedTotal = prepParts.Length >= 2 && int.TryParse(prepParts[1], out total);
            bool parsedStream = prepParts.Length >= 3 && int.TryParse(prepParts[2], out streamId);
            if (parsedTotal && total > 0)
            {
                inboundReliableExpectedTotal = total;
                inboundReliableStreamActive = true;
                inboundReliableStreamId = parsedStream ? streamId : 0;
                inboundReliableParts.Clear();
                inboundReliableRequestedMisses.Clear();
                string ackLine = parsedStream ? $"ack:prep,{streamId}\n" : "ack:prep\n";
                SendCommandToBLEDevice(ackLine);
                LogDebug($"Reliable stream announced: {total} messages (stream {inboundReliableStreamId}).");
                return;
            }
        }

        if (rawLine.StartsWith("miss,"))
        {
            HandleMissRequest(rawLine);
            return;
        }

        Match numberedMatch = Regex.Match(rawLine, @"^(\d+)-(.*)$");
        if (numberedMatch.Success)
        {
            int index = int.Parse(numberedMatch.Groups[1].Value);
            string payload = numberedMatch.Groups[2].Value;

            if (!inboundReliableStreamActive)
            {
                LogDebug("Ignoring out-of-stream numbered frame: " + rawLine, "warn");
                return;
            }

            if (index >= 1 && index <= inboundReliableExpectedTotal && !inboundReliableParts.ContainsKey(index))
                inboundReliableParts.Add(index, payload);

            int expectedNext = FindFirstMissingIndex(inboundReliableExpectedTotal, inboundReliableParts);
            if (expectedNext > 0 && index > expectedNext && inboundReliableStreamId > 0 && !inboundReliableRequestedMisses.Contains(expectedNext))
            {
                inboundReliableRequestedMisses.Add(expectedNext);
                SendCommandToBLEDevice($"miss,{inboundReliableStreamId},{expectedNext}\n");
            }

            if (inboundReliableParts.Count >= inboundReliableExpectedTotal)
            {
                for (int i = 1; i <= inboundReliableExpectedTotal; i++)
                {
                    if (inboundReliableParts.TryGetValue(i, out string orderedPayload))
                        inboundDecodedLines.Enqueue(orderedPayload);
                }

                inboundReliableParts.Clear();
                inboundReliableRequestedMisses.Clear();
                inboundReliableExpectedTotal = 0;
                inboundReliableStreamActive = false;
                inboundReliableStreamId = 0;
            }
            return;
        }

        inboundDecodedLines.Enqueue(rawLine);
    }

    private static int FindFirstMissingIndex(int total, Dictionary<int, string> partMap)
    {
        if (total <= 0)
            return -1;

        for (int i = 1; i <= total; i++)
        {
            if (!partMap.ContainsKey(i))
                return i;
        }

        return -1;
    }

    private void HandleMissRequest(string line)
    {
        string[] parts = line.Split(',');
        if (parts.Length < 3)
            return;

        if (!int.TryParse(parts[1], out int streamId) || !int.TryParse(parts[2], out int missingIndex))
            return;

        string key = $"{streamId}:{missingIndex}";
        if (outboundReliableFrameCache.TryGetValue(key, out string cachedFrame))
        {
            LogDebug($"Resending missing frame {missingIndex} for stream {streamId}.", "warn");
            SendCommandToBLEDevice(cachedFrame + "\n");
        }
    }

    private void FailConnectionAndReturnToDashboard(string reason)
    {
        LogDebug(reason, "warn");
        UpdateConnectionStatus(reason, ProgressLayoutReady);

        if (bleJava != null)
            SendCommandToBLEDevice("disconnect\n");

        waitingForLayout = false;
        layoutReceivedThisRequest = false;
        blockControlCommands = false;
        ClearQueuedControlCommands();
        SetControlsInteractable(true);
        controlPanelLoadingIcon.SetActive(false);
        inboundReliableExpectedTotal = 0;
        inboundReliableStreamActive = false;
        inboundReliableStreamId = 0;
        inboundReliableParts.Clear();
        inboundReliableRequestedMisses.Clear();
        inboundDecodedLines.Clear();
        outboundReliableFrameCache.Clear();

        canEditThisSession = false;
        ownerIdOnDevice = null;
        buttonEnterEditMode.interactable = false;

        DisconnectFromDevice();
        dashboardScreen.SetActive(true);
        controlPanelScreen.SetActive(false);
        createDeviceScreen.SetActive(false);
        HideConnectionStatusScreen();
    }

    /// <summary>
    /// GRID ONLY (no token), version 1:
    ///   Initialized:   type,name,centerX2,centerY2,spanX,spanY,rotation
    ///                  centerX2/centerY2 are half-step integer coordinates.
    ///                  Example: center on dot 5 => 10, halfway between 5 and 6 => 11.
    ///   Uninitialized: type,name,n,n,n,n,rotation
    /// </summary>
    private void ParseLayoutLine_GRID(string line)
    {
        string[] parts = line.Split(',');
        if (parts.Length < 7)
        {
            LogDebug("Malformed layout line: " + line, "error");
            return;
        }

        string type = parts[0].Trim();
        string name = parts[1].Trim();

        if (type != "button" && type != "slider")
        {
            LogDebug("Ignoring non-control layout line: " + line, "warn");
            return;
        }

        if (!Regex.IsMatch(name, "^[A-Za-z0-9_-]{1,32}$"))
        {
            LogDebug("Malformed control name in layout line: " + line, "warn");
            return;
        }

        // Layout stream retries can duplicate lines; keep only the first line per control name.
        if (layoutControlNamesSeen.Contains(name))
        {
            LogDebug("Skipping duplicate layout line for control: " + name, "warn");
            return;
        }
        layoutControlNamesSeen.Add(name);

        bool isUninitialized =
            parts[2] == "n" || parts[3] == "n" || parts[4] == "n" || parts[5] == "n";

        if (isUninitialized)
        {
            if (type == "button")
            {
                var addBtn = Instantiate(buttonAddButtonPrefab, buttonAddButtonScrollViewParent);
                var addBtnComp = addBtn != null ? addBtn.GetComponent<ButtonAddButton>() : null;
                if (addBtnComp == null)
                {
                    LogDebug("ButtonAddButton component missing on button add prefab.", "error");
                    return;
                }
                addBtnComp.Initialize(name);
            }
            else if (type == "slider")
            {
                var addSlider = Instantiate(buttonAddSliderPrefab, buttonAddSliderScrollViewParent);
                var addSliderComp = addSlider != null ? addSlider.GetComponent<ButtonAddSlider>() : null;
                if (addSliderComp == null)
                {
                    LogDebug("ButtonAddSlider component missing on slider add prefab.", "error");
                    return;
                }
                addSliderComp.Initialize(name);
            }
            return;
        }

        // Parse ints
        if (!int.TryParse(parts[2], NumberStyles.Integer, CultureInfo.InvariantCulture, out int centerX2) ||
            !int.TryParse(parts[3], NumberStyles.Integer, CultureInfo.InvariantCulture, out int centerY2) ||
            !int.TryParse(parts[4], NumberStyles.Integer, CultureInfo.InvariantCulture, out int spanX) ||
            !int.TryParse(parts[5], NumberStyles.Integer, CultureInfo.InvariantCulture, out int spanY) ||
            !int.TryParse(parts[6], NumberStyles.Integer, CultureInfo.InvariantCulture, out int rot))
        {
            LogDebug("Malformed numeric values in layout line: " + line, "warn");
            return;
        }

        // Device protocol stores width/height as grid cell spans.
        int spanCellsX = Mathf.Max(1, spanX);
        int spanCellsY = Mathf.Max(1, spanY);

        GameObject obj = type == "button"
            ? Instantiate(buttonSendCommandPrefab, controlsArea)
            : Instantiate(sliderSendCommandPrefab, controlsArea);

        if (obj == null)
        {
            LogDebug("Failed to instantiate control prefab for layout line: " + line, "error");
            return;
        }

        if (type == "button")
        {
            var buttonComp = obj.GetComponent<SendCommandButton>();
            if (buttonComp == null)
            {
                LogDebug("SendCommandButton component missing on button prefab.", "error");
                Destroy(obj);
                return;
            }
            buttonComp.Initialize(name);
        }
        else
        {
            var sliderComp = obj.GetComponent<SendCommandSlider>();
            if (sliderComp == null)
            {
                LogDebug("SendCommandSlider component missing on slider prefab.", "error");
                Destroy(obj);
                return;
            }
            sliderComp.Initialize(name);
        }

        var draggable = obj.GetComponent<DraggableUIBase>();
        if (draggable == null)
        {
            LogDebug("DraggableUIBase component missing on control prefab.", "error");
            Destroy(obj);
            return;
        }

        // Configure to current grid BEFORE sizing/placing
        if (gridAdjuster != null)
        {
            gridAdjuster.ConfigureDraggableForGrid(
                draggable,
                centerOnMiddleDot: false,
                applyDefaultSpanSize: false
            );
        }

        // 1) size by spans
        draggable.SetGridSpan(spanCellsX, spanCellsY);
        // 2) place center using half-step capable coordinates
        ComputeGridGeometry(out Vector2 origin, out Vector2 step, out int cols, out int rows);
        float centerDotX = centerX2 * 0.5f;
        float centerDotY = centerY2 * 0.5f;
        centerDotX = Mathf.Clamp(centerDotX, 0f, Mathf.Max(0, cols - 1));
        centerDotY = Mathf.Clamp(centerDotY, 0f, Mathf.Max(0, rows - 1));
        RectTransform rect = obj.GetComponent<RectTransform>();
        if (rect != null)
            rect.anchoredPosition = origin + new Vector2(centerDotX * step.x, centerDotY * step.y);
        else
            draggable.SetCenterAtGridCell(Mathf.RoundToInt(centerDotX), Mathf.RoundToInt(centerDotY));
        // 3) apply rotation
        draggable.SetRotationDegrees(NormalizeRotation(rot));

        if (type == "slider")
        {
            var draggableSlider = obj.GetComponent<DraggableUISlider>();
            if (draggableSlider != null)
                draggableSlider.ApplyRotationLayoutFixIfNeeded();
        }
    }

    private static int SafeParseInt(string s, int fallback)
    {
        if (int.TryParse(s, NumberStyles.Integer, CultureInfo.InvariantCulture, out int v)) return v;
        return fallback;
    }

    private static int NormalizeRotation(int rot)
    {
        // Force to 0/90/180/270 (handles weird values gracefully)
        int r = ((rot % 360) + 360) % 360;
        if (Mathf.Abs(r - 0) <= 45) return 0;
        else if (Mathf.Abs(r - 90) <= 45) return 90;
        else if (Mathf.Abs(r - 180) <= 45) return 180;
        else return 270;
    }

    // private static string StripOwnershipSuffix(string adv)
    // {
    //     if (string.IsNullOrEmpty(adv)) return adv;
    //     int pipe = adv.LastIndexOf('|');
    //     if (pipe >= 0 && pipe < adv.Length - 1)
    //     {
    //         char c = adv[pipe + 1];
    //         if (c == '0' || c == '1') return adv.Substring(0, pipe);
    //     }
    //     return adv;
    // }

    // private static bool? ParseOwnedFlag(string adv)
    // {
    //     // returns true = owned, false = unowned, null = no flag
    //     if (string.IsNullOrEmpty(adv)) return null;
    //     int pipe = adv.LastIndexOf('|');
    //     if (pipe >= 0 && pipe < adv.Length - 1)
    //     {
    //         char c = adv[pipe + 1];
    //         if (c == '0') return false;
    //         if (c == '1') return true;
    //     }
    //     return null;
    // }

    public void LeaveDevice()
    {
        DisconnectFromDevice(notifyPeer: true);
        controlPanelScreen.SetActive(false);
        createDeviceScreen.SetActive(false);
        dashboardScreen.SetActive(true);
        HideConnectionStatusScreen();
    }

    public void DisconnectFromDevice(bool notifyPeer = false)
    {
        connectionSessionGeneration++;
        StopActiveConnectionCoroutines();

        if (notifyPeer && bleJava != null)
            SendCommandToBLEDevice("disconnect\n");

        if (bleJava != null)
        {
            string result = bleJava.Disconnect(); // <- not Quit()
            LogDebug("Disconnected from device: " + result);
            bleJava.ClearRxBuffer();
        }

        waitingForLayout = false;
        layoutReceivedThisRequest = false;
        layoutConfirmed = false;
        blockControlCommands = false;
        ClearQueuedControlCommands();
        SetControlsInteractable(true);
        inboundLineBuffer = "";
        inboundReliableExpectedTotal = 0;
        inboundReliableStreamActive = false;
        inboundReliableStreamId = 0;
        inboundReliableParts.Clear();
        inboundReliableRequestedMisses.Clear();
        inboundDecodedLines.Clear();
        outboundReliableFrameCache.Clear();
        layoutControlNamesSeen.Clear();

        canEditThisSession = false;
        ownerIdOnDevice = null;
        buttonEnterEditMode.interactable = false;

        controlPanelLoadingIcon.SetActive(false);
        HideConnectionStatusScreen();
        connectionProgressValue = 0;
        currentlyConnectedDeviceName = null;
        ResetControlsArea();
    }

    // On real app exit it’s fine to stop the worker:
    private void OnApplicationQuit()
    {
        try { bleJava?.Quit(); } catch { /* ignore */ }
        DisconnectFromDevice(); // local cleanup
    }

    private void ResetControlsArea()
    {
        ClearChildren(controlsArea);
        ClearChildren(buttonAddButtonScrollViewParent);
        ClearChildren(buttonAddSliderScrollViewParent);
    }

    private void ClearChildren(Transform parent)
    {
        List<GameObject> children = new List<GameObject>();
        foreach (Transform child in parent) children.Add(child.gameObject);
        foreach (GameObject child in children) Destroy(child);
    }

    // ========================= Add-menu spawns (center + default spans) =========================

    public void InstantiateCommandButton(string commandName)
    {
        if (string.IsNullOrEmpty(commandName))
        {
            LogDebug("Cannot create command button: name is empty.", "error");
            return;
        }

        LogDebug($"Creating command button: {commandName}");

        GameObject buttonObj = Instantiate(buttonSendCommandPrefab, controlsArea);
        var draggable = buttonObj.GetComponent<DraggableUIBase>();
        draggable.SetEditMode(true);

        buttonObj.GetComponent<SendCommandButton>().Initialize(commandName);

        if (gridAdjuster != null)
        {
            gridAdjuster.ConfigureDraggableForGrid(
                draggable,
                centerOnMiddleDot: true,
                applyDefaultSpanSize: true
            );
        }

        addModal.gameObject.SetActive(false);
    }

    public void InstantiateCommandSlider(string commandName)
    {
        if (string.IsNullOrEmpty(commandName))
        {
            LogDebug("Cannot create command slider: name is empty.", "error");
            return;
        }

        LogDebug($"Creating command slider: {commandName}");

        GameObject sliderObj = Instantiate(sliderSendCommandPrefab, controlsArea);
        var draggable = sliderObj.GetComponent<DraggableUIBase>();
        draggable.SetEditMode(true);

        sliderObj.GetComponent<SendCommandSlider>().Initialize(commandName);

        if (gridAdjuster != null)
        {
            gridAdjuster.ConfigureDraggableForGrid(
                draggable,
                centerOnMiddleDot: true,
                applyDefaultSpanSize: true
            );
        }

        sliderObj.GetComponent<DraggableUISlider>().ApplyRotationLayoutFixIfNeeded();

        addModal.gameObject.SetActive(false);
    }

    public void RegisterControlAsUninitialized(string controlType, string controlName)
    {
        if (string.IsNullOrWhiteSpace(controlType) || string.IsNullOrWhiteSpace(controlName))
            return;

        if (controlType == "button")
        {
            foreach (Transform child in buttonAddButtonScrollViewParent)
            {
                var entry = child.GetComponent<ButtonAddButton>();
                if (entry != null && entry.GetButtonName() == controlName)
                    return;
            }

            var addBtn = Instantiate(buttonAddButtonPrefab, buttonAddButtonScrollViewParent);
            var addComp = addBtn != null ? addBtn.GetComponent<ButtonAddButton>() : null;
            if (addComp != null)
                addComp.Initialize(controlName);
            return;
        }

        if (controlType == "slider")
        {
            foreach (Transform child in buttonAddSliderScrollViewParent)
            {
                var entry = child.GetComponent<ButtonAddSlider>();
                if (entry != null && entry.GetSliderName() == controlName)
                    return;
            }

            var addSlider = Instantiate(buttonAddSliderPrefab, buttonAddSliderScrollViewParent);
            var addComp = addSlider != null ? addSlider.GetComponent<ButtonAddSlider>() : null;
            if (addComp != null)
                addComp.Initialize(controlName);
        }
    }

    // ========================= BLE send (GRID ONLY, no token) =========================

    public void SendButtonCommandToBLEDevice(string buttonName)
    {
        if (string.IsNullOrWhiteSpace(buttonName)) return;
        SendCommandToBLEDevice($"button,{buttonName}\n");
    }

    public void SendCommandToBLEDevice(string command)
    {
        bool isControlCommand = IsControlCommand(command);

        if (blockControlCommands && isControlCommand)
        {
            LogDebug($"Skipped control command while UI is busy: {command.Trim()}", "warn");
            return;
        }

        if (isControlCommand)
        {
            EnqueueControlCommand(command);
            return;
        }

        // UTF8 -> byte[] -> sbyte[]
        byte[] bytes = System.Text.Encoding.UTF8.GetBytes(command);
        if (bytes.Length <= 20)
        {
            bool sent = false;
            sbyte[] data = ToSByteArray(bytes);

            for (int attempt = 1; attempt <= BleSendMaxAttempts; attempt++)
            {
                sent = bleJava.Command(data);
                if (sent) break;

                LogDebug($"Send failed for command (attempt {attempt}/{BleSendMaxAttempts}): {command.Trim()}", "warn");
            }

            if (sent)
                LogDebug($"Sent raw command: {command}");
            else
                LogDebug($"Failed to send command after {BleSendMaxAttempts} attempts: {command.Trim()}", "error");
        }
        else
        {
            StartCoroutine(SendBufferedMessage(bytes));
        }
    }

    public void SendReliableCommandToBLEDevice(string command)
    {
        string payload = command?.Trim();
        if (string.IsNullOrWhiteSpace(payload))
            return;

        StartCoroutine(SendReliableSingleMessage(payload, connectionSessionGeneration));
    }

    private IEnumerator SendBufferedMessage(byte[] fullBytes)
    {
        const int maxChunkSize = 20;
        for (int i = 0; i < fullBytes.Length; i += maxChunkSize)
        {
            int chunkLength = Mathf.Min(maxChunkSize, fullBytes.Length - i);
            var chunk = new byte[chunkLength];
            Array.Copy(fullBytes, i, chunk, 0, chunkLength);

            string chunkText = System.Text.Encoding.UTF8.GetString(chunk);
            LogDebug($"Sending chunk: {chunkText}");

            bool sent = false;
            sbyte[] sChunk = ToSByteArray(chunk);
            for (int attempt = 1; attempt <= BleSendMaxAttempts; attempt++)
            {
                sent = bleJava.Command(sChunk);
                if (sent) break;

                LogDebug($"Chunk send failed (attempt {attempt}/{BleSendMaxAttempts}).", "warn");
                yield return new WaitForSeconds(0.15f);
            }

            if (!sent)
            {
                LogDebug($"Chunk send failed after {BleSendMaxAttempts} attempts. Aborting buffered message.", "error");
                yield break;
            }

            yield return new WaitForSeconds(BufferedChunkDelaySec);
        }
    }

    private static bool IsControlCommand(string command)
    {
        if (string.IsNullOrWhiteSpace(command))
            return false;

        string trimmed = command.TrimStart();
        return trimmed.StartsWith("button,", StringComparison.Ordinal) ||
               trimmed.StartsWith("slider,", StringComparison.Ordinal);
    }

    private void EnqueueControlCommand(string command)
    {
        if (string.IsNullOrWhiteSpace(command))
            return;

        outboundControlCommandQueue.Enqueue(command);
        if (outboundControlCommandRoutine == null)
            outboundControlCommandRoutine = StartCoroutine(ProcessControlCommandQueue());
    }

    private IEnumerator ProcessControlCommandQueue()
    {
        while (outboundControlCommandQueue.Count > 0)
        {
            string cmd = outboundControlCommandQueue.Dequeue();
            yield return StartCoroutine(SendCommandToBLEDeviceBlocking(cmd));
            yield return new WaitForSeconds(ControlCommandGapSec);
        }

        outboundControlCommandRoutine = null;
    }

    private void ClearQueuedControlCommands()
    {
        if (outboundControlCommandRoutine != null)
        {
            StopCoroutine(outboundControlCommandRoutine);
            outboundControlCommandRoutine = null;
        }

        outboundControlCommandQueue.Clear();
    }

    private IEnumerator SendCommandToBLEDeviceBlocking(string command)
    {
        byte[] bytes = System.Text.Encoding.UTF8.GetBytes(command);
        if (bytes.Length <= 20)
        {
            bool sent = false;
            sbyte[] data = ToSByteArray(bytes);

            for (int attempt = 1; attempt <= BleSendMaxAttempts; attempt++)
            {
                sent = bleJava.Command(data);
                if (sent) break;

                LogDebug($"Send failed for command (attempt {attempt}/{BleSendMaxAttempts}): {command.Trim()}", "warn");
            }

            if (sent)
                LogDebug($"Sent raw command: {command}");
            else
                LogDebug($"Failed to send command after {BleSendMaxAttempts} attempts: {command.Trim()}", "error");

            yield break;
        }

        yield return StartCoroutine(SendBufferedMessage(bytes));
    }

    private static sbyte[] ToSByteArray(byte[] src)
    {
        if (src == null) return null;
        var dst = new sbyte[src.Length];
        for (int i = 0; i < src.Length; i++) dst[i] = unchecked((sbyte)src[i]);
        return dst;
    }

    private static byte[] ToByteArray(sbyte[] src)
    {
        if (src == null) return null;
        var dst = new byte[src.Length];
        for (int i = 0; i < src.Length; i++) dst[i] = unchecked((byte)src[i]);
        return dst;
    }

    // ========================= Edit mode & SAVE as GRID (no token) =========================

    public void EnterEditMode()
    {
        if (gridAdjuster != null)
        {
            gridAdjuster.EnsureGridBuilt();
            gridAdjuster.SetDotsVisible(true);
        }

        foreach (var draggable in DraggableUIBase.AllDraggables)
            draggable.SetEditMode(true);

        SetEditConfirmationState(true);
    }

    public void SaveEditsAndExitEditMode()
    {
        if (!canEditThisSession)
        {
            LogDebug("You don't have permission to edit this device.", "warn");
            return;
        }

        if (gridAdjuster != null)
            gridAdjuster.SetDotsVisible(false);

        List<string> updateMessages = new List<string>();

        var draggables = DraggableUIBase.AllDraggables.ToArray();

        // compute grid origin/step from the gridAdjuster (same math as grid generator)
        ComputeGridGeometry(out Vector2 origin, out Vector2 step, out int cols, out int rows);

        for (int i = 0; i < draggables.Length; i++)
        {
            var draggable = draggables[i];
            var rect = draggable.GetComponent<RectTransform>();

            string controlType;
            string controlName;

            if (draggable.GetComponent<SendCommandButton>() != null)
            {
                controlType = "button";
                controlName = draggable.GetComponent<SendCommandButton>().GetCommandName();
            }
            else if (draggable.GetComponent<SendCommandSlider>() != null)
            {
                controlType = "slider";
                controlName = draggable.GetComponent<SendCommandSlider>().GetCommandName();
            }
            else
            {
                Debug.LogWarning("Unknown draggable type, skipping.");
                continue;
            }

            if (draggable.IsMarkedForDeletion)
            {
                string deletedMsg = string.Format(
                    CultureInfo.InvariantCulture,
                    "update,{0},{1},n,n,n,n,{2}",
                    controlType,
                    controlName,
                    0
                );
                updateMessages.Add(deletedMsg);
                continue;
            }

            // Convert to grid: centerX2/centerY2 from center; span from local size against step.
            Vector2 center = rect.anchoredPosition;

            float centerDotX = (step.x > 0f) ? ((center.x - origin.x) / step.x) : 0f;
            float centerDotY = (step.y > 0f) ? ((center.y - origin.y) / step.y) : 0f;
            centerDotX = Mathf.Clamp(centerDotX, 0f, Mathf.Max(0, cols - 1));
            centerDotY = Mathf.Clamp(centerDotY, 0f, Mathf.Max(0, rows - 1));

            int centerX2 = Mathf.RoundToInt(centerDotX * 2f);
            int centerY2 = Mathf.RoundToInt(centerDotY * 2f);

            int spanX = Mathf.Max(1, Mathf.RoundToInt(rect.sizeDelta.x / step.x));
            int spanY = Mathf.Max(1, Mathf.RoundToInt(rect.sizeDelta.y / step.y));

            int rot = SnapRotationToRightAngle(rect.localEulerAngles.z);

            // Final line (no grid token)
            string msg = string.Format(
                CultureInfo.InvariantCulture,
                "update,{0},{1},{2},{3},{4},{5},{6}",
                controlType,
                controlName,
                centerX2,
                centerY2,
                spanX,
                spanY,
                rot
            );

            updateMessages.Add(msg);
        }

        StartCoroutine(SendUpdateMessagesSequentially_GRID(updateMessages));

        foreach (var draggable in draggables)
        {
            draggable.SetEditMode(false);
            draggable.FinalizeDelete();
        }

        SetEditConfirmationState(false);
    }

    private static int SnapRotationToRightAngle(float zDeg)
    {
        int[] options = { 0, 90, 180, 270 };
        float minD = float.MaxValue;
        int best = 0;
        float r = ((zDeg % 360f) + 360f) % 360f;
        foreach (int opt in options)
        {
            float d = Mathf.Abs(r - opt);
            if (d < minD) { minD = d; best = opt; }
        }
        return best;
    }

    private void ComputeGridGeometry(out Vector2 origin, out Vector2 step, out int cols, out int rows)
    {
        if (gridAdjuster == null || gridAdjuster.ControlsArea == null)
        {
            // Sensible fallback to avoid crashes
            var size = ((RectTransform)controlsArea).rect.size;
            float edge = 50f;
            cols = 11;
            rows = 31;

            float usableW = Mathf.Max(0f, size.x - 2f * edge);
            float usableH = Mathf.Max(0f, size.y - 2f * edge);
            float stepX = (cols > 1) ? usableW / (cols - 1) : 0f;
            float stepY = (rows > 1) ? usableH / (rows - 1) : 0f;

            origin = new Vector2(-size.x * 0.5f + edge, -size.y * 0.5f + edge);
            step = new Vector2(stepX, stepY);
            return;
        }

        cols = gridAdjuster.GridCols;
        rows = gridAdjuster.GridRows;
        float edgeMargin = gridAdjuster.EdgeMargin;

        RectTransform panel = gridAdjuster.ControlsArea;
        var size2 = panel.rect.size;

        float usableW2 = Mathf.Max(0f, size2.x - 2f * edgeMargin);
        float usableH2 = Mathf.Max(0f, size2.y - 2f * edgeMargin);
        float stepX2 = (cols > 1) ? usableW2 / (cols - 1) : 0f;
        float stepY2 = (rows > 1) ? usableH2 / (rows - 1) : 0f;

        origin = new Vector2(-size2.x * 0.5f + edgeMargin, -size2.y * 0.5f + edgeMargin);
        step = new Vector2(stepX2, stepY2);
    }

    private IEnumerator SendUpdateMessagesSequentially_GRID(List<string> messages)
    {
        layoutConfirmed = false;

        blockControlCommands = true;
        SetControlsInteractable(false);
        controlPanelLoadingIcon.SetActive(true);

        // Header handshake: ask device to enter update mode and ACK readiness.
        bool updateReadyAck = false;
        for (int attempt = 1; attempt <= HandshakeMaxAttempts && !updateReadyAck; attempt++)
        {
            yield return StartCoroutine(SendReliableSingleMessage("update", connectionSessionGeneration));

            bool disconnected = false;
            yield return StartCoroutine(ReadLineUntil(1.5f, line =>
            {
                if (line == "ACK:update") { updateReadyAck = true; return true; }
                if (line.StartsWith("ERR:")) { LogDebug("Error from device: " + line.Substring(4), "error"); return true; }
                if (line == "disconnect")
                {
                    disconnected = true;
                    HandleRemoteDisconnect();
                    return true;
                }
                return false;
            }));

            if (disconnected)
            {
                SetControlsInteractable(true);
                controlPanelLoadingIcon.SetActive(false);
                yield break;
            }

            if (!updateReadyAck)
                LogDebug($"No ACK:update received yet (attempt {attempt}/{HandshakeMaxAttempts}).", "warn");
        }

        if (!updateReadyAck)
            LogDebug("Proceeding without ACK:update for backward compatibility.", "warn");

        var streamLines = new List<string>(messages.Count + 1);
        streamLines.AddRange(messages);
        streamLines.Add("__END__");
        yield return StartCoroutine(SendReliableStream(streamLines, connectionSessionGeneration));

        // Wait for layout confirmation
        float timeout = 3f;
        float elapsed = 0f;
        while (!layoutConfirmed && elapsed < timeout)
        {
            while (TryReadNextBleLine(out string line))
            {
                string normalized = line + "\n";
                ParseLayoutBuffer(ref normalized);
            }

            yield return new WaitForSeconds(0.2f);
            elapsed += 0.2f;
        }

        if (!layoutConfirmed)
        {
            LogDebug("Warning: No confirmation received for layout save.", "warn");
        }

        blockControlCommands = false;
        SetControlsInteractable(true);
        controlPanelLoadingIcon.SetActive(false);
    }

    private void SetControlsInteractable(bool interactable)
    {
        foreach (Transform child in controlsArea)
        {
            if (child.TryGetComponent(out Button button))
                button.interactable = interactable;

            if (child.TryGetComponent(out Slider slider))
                slider.interactable = interactable;
        }
    }

    public void DiscardEditsAndExitEditMode()
    {
        isDiscardingChanges = true;

        if (gridAdjuster != null)
            gridAdjuster.SetDotsVisible(false);

        foreach (var draggable in DraggableUIBase.AllDraggables)
            draggable.SetEditMode(false);

        SetEditConfirmationState(false);

        foreach (var draggable in DraggableUIBase.AllDraggables)
            draggable.RestoreOriginalState();

        draggablesAnimating = 0;
    }

    public void OnDraggableAnimationComplete()
    {
        draggablesAnimating--;

        if (draggablesAnimating <= 0 && isDiscardingChanges)
        {
            isDiscardingChanges = false;
            SetEditConfirmationState(true);
        }
    }

    public void DeselectAll()
    {
        foreach (var draggable in DraggableUIBase.AllDraggables)
            draggable.Deselect();
    }

    public void SetEditConfirmationState(bool canConfirm)
    {
        confirmEdits.interactable = canConfirm;
    }

    public void LogDebug(string message, string type = "info")
    {
        if (debugTerminalText == null) return;

        string prefix = type switch
        {
            "error"   => "<b>[ERROR]</b> ",
            "success" => "<b>[SUCCESS]</b> ",
            "warn"    => "<b>[WARNING]</b> ",
            _         => ""
        };

        string formatted = $"{prefix}{message}";
        EnqueueLog(formatted);
    }

    private void EnqueueLog(string line)
    {
        // keep to 200 entries
        if (logQueue.Count >= MaxLogLines)
            logQueue.Dequeue();

        logQueue.Enqueue(line);

        // build the visible text only once per log call
        debugTerminalText.text = string.Join("\n", logQueue);
    }

    private void OnEnable()  => Application.logMessageReceived += HandleUnityLog;
    private void OnDisable() => Application.logMessageReceived -= HandleUnityLog;

    private void HandleUnityLog(string condition, string stackTrace, LogType type)
    {
        string tag = type switch
        {
            LogType.Error      => "<b>[UNITY ERR]</b> ",
            LogType.Exception  => "<b>[UNITY EX]</b> ",
            LogType.Warning    => "<b>[UNITY WARN]</b> ",
            _                  => "[UNITY]"
        };

        string msg = $"{tag}{condition}";
        if (type == LogType.Error || type == LogType.Exception)
            msg += $"\n<i>{stackTrace}</i>";

        EnqueueLog(msg);
    }

    public void ClearTerminalText()
    {
        logQueue.Clear();
        debugTerminalText.text = "";
    }

    // Unity UI Button event target: export current in-app terminal content to a timestamped txt file.
    public void ExportDebugTerminalToTxt()
    {
        try
        {
            string content = debugTerminalText != null ? debugTerminalText.text : string.Join("\n", logQueue);
            if (string.IsNullOrEmpty(content))
                content = "(Debug terminal is empty)";

            string fileName = DateTime.Now.ToString("dd-MM-yyyy-HH-mm", CultureInfo.InvariantCulture) + ".txt";
            string directoryPath = GetDebugExportDirectory(out bool usedFallbackPath);

            Directory.CreateDirectory(directoryPath);
            string fullPath = Path.Combine(directoryPath, fileName);
            File.WriteAllText(fullPath, content);

            LogDebug("Debug log exported: " + fullPath, "success");
            if (usedFallbackPath)
                LogDebug("Preferred OBB folder was not writable on this device; used app storage fallback.", "warn");
        }
        catch (Exception ex)
        {
            LogDebug("Failed to export debug log: " + ex.Message, "error");
        }
    }

    private string GetDebugExportDirectory(out bool usedFallbackPath)
    {
        usedFallbackPath = false;

#if UNITY_ANDROID && !UNITY_EDITOR
        // Requested location: /storage/emulated/0/Android/obb/<application-id>
        string preferredPath = Path.Combine("/storage/emulated/0/Android/obb", Application.identifier);

        try
        {
            Directory.CreateDirectory(preferredPath);

            // Probe write access because some Android versions/devices restrict OBB writes.
            string probePath = Path.Combine(preferredPath, ".write_probe");
            File.WriteAllText(probePath, "ok");
            File.Delete(probePath);

            return preferredPath;
        }
        catch
        {
            usedFallbackPath = true;
            return Path.Combine(Application.persistentDataPath, "DebugExports");
        }
#else
        return Path.Combine(Application.persistentDataPath, "DebugExports");
#endif
    }
}
