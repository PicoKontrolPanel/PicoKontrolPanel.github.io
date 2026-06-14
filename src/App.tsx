import { useEffect, useState } from 'react';
import {
  connect,
  disconnect,
  getBluetoothStatus,
  isBluetoothSupported,
  onBluetoothMessage,
  onBluetoothStatusChange,
  sendButton,
} from './ble';

const COMMANDS = [
  { label: 'LED ON', value: 'ON' },
  { label: 'LED OFF', value: 'OFF' },
] as const;

function statusLabel(status: string) {
  switch (status) {
    case 'unsupported':
      return 'Web Bluetooth missing';
    case 'idle':
      return 'Ready to connect';
    case 'connecting':
      return 'Connecting...';
    case 'connected':
      return 'Connected';
    case 'disconnecting':
      return 'Disconnecting...';
    case 'error':
      return 'Connection error';
    default:
      return status;
  }
}

function App() {
  const [status, setStatus] = useState(getBluetoothStatus());
  const [messages, setMessages] = useState<string[]>([]);
  const supported = isBluetoothSupported();

  useEffect(() => onBluetoothStatusChange(setStatus), []);

  useEffect(
    () =>
      onBluetoothMessage((message) => {
        setMessages((current) => [message, ...current].slice(0, 20));
      }),
    [],
  );

  async function handleConnect() {
    try {
      await connect();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to connect.';
      setMessages((current) => [`system: ${message}`, ...current].slice(0, 20));
    }
  }

  async function handleDisconnect() {
    try {
      await disconnect();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to disconnect.';
      setMessages((current) => [`system: ${message}`, ...current].slice(0, 20));
    }
  }

  async function handleCommand(name: string) {
    try {
      await sendButton(name);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send command.';
      setMessages((current) => [`system: ${message}`, ...current].slice(0, 20));
    }
  }

  return (
    <div className="shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <main className="panel">
        <section className="hero">
          <p className="eyebrow">Pico Kontrol Panel</p>
          <h1>Browser-based Pico control for phone and tablet.</h1>
          <p className="lede">
            Tap Connect, choose the Pico W, and send a few commands. On iPhone and iPad, open
            this page in Bluefy.
          </p>

          <div className={`status status-${status}`} aria-live="polite">
            <span className="status-dot" />
            {statusLabel(status)}
          </div>
        </section>

        {!supported ? (
          <section className="notice">
            <h2>Web Bluetooth is not available here.</h2>
            <p>
              On iPhone or iPad, install the free Bluefy browser and open this page inside Bluefy.
              On Android, use Chrome.
            </p>
          </section>
        ) : null}

        <section className="actions">
          <button className="primary" type="button" onClick={handleConnect} disabled={!supported || status === 'connecting' || status === 'connected'}>
            Connect
          </button>
          <button
            className="secondary"
            type="button"
            onClick={handleDisconnect}
            disabled={status !== 'connected' && status !== 'disconnecting'}
          >
            Disconnect
          </button>
        </section>

        <section className="card">
          <div className="card-header">
            <h2>LED control</h2>
            <p>These buttons only control the onboard Pico LED.</p>
          </div>

          <div className="command-grid">
            {COMMANDS.map(({ label, value }) => (
              <button
                key={value}
                className="command-button"
                type="button"
                onClick={() => handleCommand(value)}
                disabled={status !== 'connected'}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="card log-card">
          <div className="card-header">
            <h2>Log</h2>
            <p>Messages sent to and received from the Pico.</p>
          </div>

          <div className="log" role="log" aria-live="polite">
            {messages.length === 0 ? (
              <p className="log-empty">Connect, then tap a command to see traffic here.</p>
            ) : (
              messages.map((message, index) => (
                <div className="log-line" key={`${message}-${index}`}>
                  {message}
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;