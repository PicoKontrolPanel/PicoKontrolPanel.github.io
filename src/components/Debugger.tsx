import { Modal } from './Modal';
import { useStore } from '../store/store';
import type { LogLevel } from '../ble/protocol';

const levelClass: Record<LogLevel, string> = {
  error: 'term-error',
  success: 'term-success',
  warning: 'term-warning',
  info: '',
};

const levelTag: Record<LogLevel, string> = {
  error: '[ERROR] ',
  success: '[SUCCESS] ',
  warning: '[WARNING] ',
  info: '',
};

function fileTimestamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()}-${p(d.getHours())}-${p(d.getMinutes())}`;
}

export function Debugger() {
  const logs = useStore((s) => s.logs);
  const clearLogs = useStore((s) => s.clearLogs);
  const close = useStore((s) => s.toggleDebugger);

  function saveToFile() {
    const text = [...logs]
      .reverse()
      .map((l) => `${l.time} ${levelTag[l.level]}${l.message}`)
      .join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileTimestamp()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Modal title="Debugger" onClose={() => close(false)}>
      <div className="terminal">
        {logs.length === 0 ? (
          <div className="term-line">Ingen log endnu.</div>
        ) : (
          logs.map((l, i) => (
            <div className={`term-line ${levelClass[l.level]}`} key={`${l.time}-${i}`}>
              {l.time} {levelTag[l.level]}
              {l.message}
            </div>
          ))
        )}
      </div>
      <div className="row" style={{ marginTop: 14 }}>
        <button className="btn btn-outline btn-block" type="button" onClick={clearLogs}>
          Clear
        </button>
        <button className="btn btn-primary btn-block" type="button" onClick={saveToFile}>
          Save To Phone
        </button>
      </div>
    </Modal>
  );
}
