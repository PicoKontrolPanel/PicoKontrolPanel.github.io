package com.teknologiskolen.bleplugin;

import android.Manifest;
import android.annotation.SuppressLint;
import android.bluetooth.*;
import android.bluetooth.le.BluetoothLeScanner;
import android.bluetooth.le.ScanCallback;
import android.bluetooth.le.ScanResult;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.SystemClock;
import android.util.Log;

import com.unity3d.player.UnityPlayer;

import java.util.ArrayList;
import java.util.List;
import java.util.Queue;
import java.util.UUID;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class AndroidPicoBle {

    // ======= Constants / UUIDs =======
    private static final String TAG = "PicoBlePlugin";

    private static final UUID SERVICE_UUID = UUID.fromString("b8e06067-62ad-41ba-9231-206ae80ab551");
    private static final UUID UUID_WRITE   = UUID.fromString("f897177b-aee8-4767-8ecc-cc694fd5fce0");
    private static final UUID UUID_NOTIFY  = UUID.fromString("f897177b-aee8-4767-8ecc-cc694fd5fce1");
    private static final UUID CCCD_UUID    = UUID.fromString("00002902-0000-1000-8000-00805f9b34fb");

    // ======= Android BLE state =======
    private BluetoothLeScanner scanner;
    private ScanCallback scanCallback;

    private BluetoothGatt mGatt;
    private BluetoothGattService mService;
    private BluetoothGattCharacteristic writeCharacteristic;
    private BluetoothGattCharacteristic notifyCharacteristic;
    private volatile int gattGeneration = 0;

    // ======= Found devices =======
    private final List<BluetoothDevice> foundDevices = new ArrayList<>();
    private final Object foundDevicesLock = new Object();

    // ======= Notify readiness gate =======
    private volatile boolean notificationsReady = false;
    private volatile long     notificationsReadyAtMs = 0L; // timestamp when CCCD succeeded

    /** Unity: CCCD enabled? */
    public boolean AreNotificationsReady() { return notificationsReady; }

    /** Unity: CCCD enabled AND at least settleMs elapsed? (recommended) */
    public boolean AreNotificationsReadyWithSettle(int settleMs) {
        if (!notificationsReady) return false;
        long dt = SystemClock.elapsedRealtime() - notificationsReadyAtMs;
        return dt >= Math.max(0, settleMs);
    }

    // ======= Notify buffering for Unity polling =======
    private final Object rxLock = new Object();
    private byte[] bufferedNotifyData = new byte[0];

    // Optional per-chunk queue (not used by Unity now)
    private final Object notifyLock = new Object();
    private final Queue<byte[]> notificationQueue = new java.util.LinkedList<>();

    // Debug counters
    private volatile int totalNotifies = 0;

    // ======= Work queue / serialization =======
    private final BlockingQueue<Runnable> workQueue = new LinkedBlockingQueue<>();
    private Thread workerThread;
    private volatile boolean running = true;

    public AndroidPicoBle() {
        workerThread = new Thread(() -> {
            while (running) {
                try {
                    Runnable r = workQueue.take();
                    r.run();
                } catch (InterruptedException ie) {
                    break; // graceful shutdown
                } catch (Throwable t) {
                    Log.e(TAG, "Worker error", t);
                }
            }
        }, "PicoBleWorker");
        workerThread.start();
    }

    // =========================================================
    // Public API used from Unity (serialized via workQueue)
    // =========================================================

    /** Start a ~5s scan. Returns immediately; results retrieved with getFoundDeviceNames(). */
    @SuppressLint("MissingPermission")
    public String onScanner() {
        enqueue(() -> {
            try {
                BluetoothManager btMgr = (BluetoothManager) UnityPlayer.currentActivity.getSystemService(Context.BLUETOOTH_SERVICE);
                BluetoothAdapter adapter = (btMgr != null) ? btMgr.getAdapter() : null;

                if (adapter == null || !adapter.isEnabled()) {
                    Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
                    UnityPlayer.currentActivity.startActivity(enableBtIntent);
                    Log.w(TAG, "Bluetooth was disabled; requested enable.");
                    return;
                }

                scanner = adapter.getBluetoothLeScanner();
                if (scanner == null) {
                    Log.w(TAG, "BLE Scanner not available.");
                    return;
                }

                synchronized (foundDevicesLock) { foundDevices.clear(); }

                scanCallback = new MyScanCallback();
                scanner.startScan(scanCallback);
                Log.d(TAG, "Scan started");

                // stop after ~5 seconds
                new Handler(UnityPlayer.currentActivity.getMainLooper()).postDelayed(() -> {
                    try {
                        if (scanner != null && scanCallback != null) {
                            scanner.stopScan(scanCallback);
                            Log.d(TAG, "Scan stopped (timeout)");
                        }
                    } catch (Exception ignored) {}
                }, 5000);

            } catch (Exception ex) {
                Log.e(TAG, "onScanner error", ex);
            }
        });

        return "Scanning...";
    }

    /** Return the names of devices found in the last scan. */
    @androidx.annotation.RequiresPermission(Manifest.permission.BLUETOOTH_CONNECT)
    public String[] getFoundDeviceNames() {
        synchronized (foundDevicesLock) {
            String[] names = new String[foundDevices.size()];
            for (int i = 0; i < foundDevices.size(); i++) {
                BluetoothDevice d = foundDevices.get(i);
                names[i] = (d != null && d.getName() != null) ? d.getName() : "";
            }
            return names;
        }
    }

    /** Queue a connect by exact advertised name (must match what getFoundDeviceNames() returned). */
    @SuppressLint("MissingPermission")
    public void connectToDeviceByName(String name) {
        enqueue(() -> {
            try {
                BluetoothDevice target = null;
                synchronized (foundDevicesLock) {
                    for (BluetoothDevice d : foundDevices) {
                        if (d != null && name.equals(d.getName())) { target = d; break; }
                    }
                }
                if (target == null) {
                    Log.w(TAG, "connectToDeviceByName: device not found for name=" + name);
                    return;
                }

                // Ensure old GATT is fully torn down before creating a new one.
                try {
                    if (mGatt != null) {
                        mGatt.disconnect();
                        mGatt.close();
                    }
                } catch (Exception ex) {
                    Log.w(TAG, "Previous GATT teardown failed", ex);
                }
                mGatt = null;
                mService = null;
                writeCharacteristic = null;
                notifyCharacteristic = null;
                notificationsReady = false;
                notificationsReadyAtMs = 0L;
                synchronized (rxLock) { bufferedNotifyData = new byte[0]; }

                final int generation = ++gattGeneration;
                Log.d(TAG, "Connecting to " + name);
                mGatt = target.connectGatt(UnityPlayer.currentActivity, false, new MyGattCallback(generation));
            } catch (Exception ex) {
                Log.e(TAG, "connectToDeviceByName error", ex);
            }
        });
    }

    /** Unity polls this for accumulated notifications. */
    @SuppressLint("MissingPermission")
    public byte[] UpdateRead() {
        synchronized (rxLock) {
            if (bufferedNotifyData.length == 0) return new byte[0];
            byte[] out = bufferedNotifyData;
            bufferedNotifyData = new byte[0];
            return out;
        }
    }

    /** Debug: clear buffered notify bytes (useful right before sending who_are_you). */
    public void ClearRxBuffer() {
        synchronized (rxLock) { bufferedNotifyData = new byte[0]; }
    }

    /** Debug: total bytes currently buffered. */
    public int DebugBufferedBytes() {
        synchronized (rxLock) { return bufferedNotifyData.length; }
    }

    /** Debug: how many notify chunks have arrived since connect. */
    public int DebugTotalNotifies() { return totalNotifies; }

    /** Queue a write to the write characteristic (20B chunks come from Unity already). */
    @SuppressLint("MissingPermission")
    public boolean Command(byte[] data) {
        if (data == null || data.length == 0) return false;
        enqueue(() -> {
            try {
                if (mGatt == null || writeCharacteristic == null) return;
                writeCharacteristic.setValue(data);
                boolean ok = mGatt.writeCharacteristic(writeCharacteristic);
                Log.d(TAG, "Write (" + data.length + "B) -> " + ok);
            } catch (Exception ex) {
                Log.e(TAG, "Command write error", ex);
            }
        });
        return true;
    }

    /** Optional: write+wait-for-any-notify (kept for parity; not required by your Unity code). */
    @SuppressLint("MissingPermission")
    public boolean CommandWithAck(byte[] data, int timeoutMillis) {
        return Command(data);
    }

    /** Immediate queued disconnect (non-destructive). */
    @SuppressLint("MissingPermission")
    public String Disconnect() {
        enqueue(() -> {
            try {
                gattGeneration++;
                notificationsReady = false;
                notificationsReadyAtMs = 0L;
                if (mGatt != null) {
                    mGatt.disconnect();
                    mGatt.close();
                }
                mGatt = null;
                mService = null;
                writeCharacteristic = null;
                notifyCharacteristic = null;
                synchronized (rxLock) { bufferedNotifyData = new byte[0]; }
            } catch (Exception ignored) {}
        });
        return "ok";
    }

    /** Immediate teardown for app quit. Not queued. */
    @SuppressLint("MissingPermission")
    public String Quit() {
        notificationsReady = false;
        notificationsReadyAtMs = 0L;

        // stop worker loop
        running = false;

        // stop an active scan if any
        try {
            if (scanner != null && scanCallback != null) {
                scanner.stopScan(scanCallback);
            }
        } catch (Exception ignored) {}

        // tear down GATT synchronously
        try { if (mGatt != null) mGatt.disconnect(); } catch (Exception ignored) {}
        try { if (mGatt != null) mGatt.close(); }      catch (Exception ignored) {}
        mGatt = null;
        mService = null;
        writeCharacteristic  = null;
        notifyCharacteristic = null;

        // clear discovery + notification buffers
        synchronized (foundDevicesLock) { foundDevices.clear(); }
        synchronized (notifyLock)       { notificationQueue.clear(); }
        synchronized (rxLock)           { bufferedNotifyData = new byte[0]; }
        totalNotifies = 0;

        // stop worker thread
        try {
            if (workerThread != null) {
                workerThread.interrupt();
                workerThread.join(500);
            }
        } catch (Exception ignored) {}
        workerThread = null;

        // release scanner refs
        scanner = null;
        scanCallback = null;

        // clear any pending tasks
        workQueue.clear();

        return "finished";
    }

    // =========================================================
    // Worker helper
    // =========================================================
    private void enqueue(Runnable r) {
        if (!running) return;
        try { workQueue.put(r); } catch (InterruptedException ignored) {}
    }

    // =========================================================
    // Scan callback
    // =========================================================
    private class MyScanCallback extends ScanCallback {
        @SuppressLint("MissingPermission")
        @Override
        public void onScanResult(int callbackType, ScanResult result) {
            BluetoothDevice dev = (result != null) ? result.getDevice() : null;
            if (dev != null && dev.getName() != null) {
                String name = dev.getName();
                if (name.startsWith("PicoW-")) {
                    synchronized (foundDevicesLock) {
                        boolean exists = false;
                        for (BluetoothDevice d : foundDevices) {
                            if (d.getAddress().equals(dev.getAddress())) { exists = true; break; }
                        }
                        if (!exists) {
                            foundDevices.add(dev);
                            Log.d(TAG, "Found BLE Device: " + name);
                        }
                    }
                }
            }
        }
    }

    // =========================================================
    // GATT callbacks
    // =========================================================
    private class MyGattCallback extends BluetoothGattCallback {
        private final int generation;

        MyGattCallback(int generation) {
            this.generation = generation;
        }

        private boolean isStale(BluetoothGatt gatt) {
            return generation != gattGeneration || gatt == null || gatt != mGatt;
        }

        @SuppressLint("MissingPermission")
        @Override
        public void onConnectionStateChange(BluetoothGatt gatt, int status, int newState) {
            if (isStale(gatt)) {
                try { if (gatt != null) gatt.close(); } catch (Exception ignored) {}
                return;
            }

            if (newState == BluetoothProfile.STATE_CONNECTED) {
                Log.d(TAG, "GATT connected, discovering services...");
                notificationsReady = false;
                notificationsReadyAtMs = 0L;
                totalNotifies = 0;
                synchronized (rxLock) { bufferedNotifyData = new byte[0]; }
                gatt.discoverServices();
            } else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                Log.d(TAG, "GATT disconnected");
                notificationsReady = false;
                notificationsReadyAtMs = 0L;
                synchronized (rxLock) { bufferedNotifyData = new byte[0]; }
                try { gatt.close(); } catch (Exception ignored) {}
                mGatt = null; mService = null; writeCharacteristic = null; notifyCharacteristic = null;
            }
        }

        @SuppressLint("MissingPermission")
        @Override
        public void onServicesDiscovered(BluetoothGatt gatt, int status) {
            if (isStale(gatt)) return;

            if (status != BluetoothGatt.GATT_SUCCESS) {
                Log.w(TAG, "Service discovery failed: " + status);
                return;
            }

            mGatt = gatt;

            for (BluetoothGattService svc : gatt.getServices()) {
                if (SERVICE_UUID.equals(svc.getUuid())) {
                    mService = svc;
                    writeCharacteristic  = mService.getCharacteristic(UUID_WRITE);
                    notifyCharacteristic = mService.getCharacteristic(UUID_NOTIFY);

                    if (notifyCharacteristic != null) {
                        mGatt.setCharacteristicNotification(notifyCharacteristic, true);
                        BluetoothGattDescriptor cccd = notifyCharacteristic.getDescriptor(CCCD_UUID);
                        if (cccd != null) {
                            cccd.setValue(BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE);
                            boolean started = mGatt.writeDescriptor(cccd); // async → onDescriptorWrite
                            Log.d(TAG, "CCCD write started: " + started);
                        } else {
                            Log.w(TAG, "CCCD descriptor missing; notifications may not work.");
                        }
                    } else {
                        Log.w(TAG, "Notify characteristic not found.");
                    }
                    Log.d(TAG, "Service + characteristics bound");
                    break;
                }
            }
        }

        @Override
        public void onDescriptorWrite(BluetoothGatt gatt,
                                      BluetoothGattDescriptor descriptor,
                                      int status) {
            if (isStale(gatt)) return;
            if (descriptor == null) return;
            if (!CCCD_UUID.equals(descriptor.getUuid())) return;
            // Best-effort: ensure this CCCD belongs to our notify characteristic
            if (notifyCharacteristic == null) return;
            BluetoothGattDescriptor expected = notifyCharacteristic.getDescriptor(CCCD_UUID);
            if (expected == null || expected != descriptor) return;

            boolean ok = (status == BluetoothGatt.GATT_SUCCESS);
            notificationsReady = ok;
            notificationsReadyAtMs = ok ? SystemClock.elapsedRealtime() : 0L;

            Log.d(TAG, "CCCD write " + (ok ? "OK" : ("FAIL: " + status))
                    + " – notificationsReady=" + notificationsReady);
        }

        @SuppressLint("MissingPermission")
        @Override
        public void onCharacteristicChanged(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic) {
            if (isStale(gatt)) return;
            if (!UUID_NOTIFY.equals(characteristic.getUuid())) return;

            byte[] incoming = characteristic.getValue();
            if (incoming == null || incoming.length == 0) return;

            synchronized (rxLock) {
                byte[] combined = new byte[bufferedNotifyData.length + incoming.length];
                System.arraycopy(bufferedNotifyData, 0, combined, 0, bufferedNotifyData.length);
                System.arraycopy(incoming, 0, combined, bufferedNotifyData.length, incoming.length);
                bufferedNotifyData = combined;
            }

            synchronized (notifyLock) {
                notificationQueue.add(incoming);
            }

            totalNotifies++;
            // Uncomment if you want very verbose logs:
            // Log.d(TAG, "Notify chunk " + incoming.length + "B (total=" + totalNotifies + ")");
        }
    }
}
