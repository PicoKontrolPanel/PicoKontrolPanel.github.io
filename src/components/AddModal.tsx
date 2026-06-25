import { useState } from 'react';
import { Modal } from './Modal';
import { Glyph } from '../assets/icons';
import type { Control } from '../lib/types';

interface AddModalProps {
  unplaced: Control[];
  onAdd: (name: string) => void;
  onClose: () => void;
}

const labels: Record<Control['type'], string> = {
  button: 'Knapper',
  slider: 'Slidere',
  toggle: 'Toggleknapper',
  radar: 'Radar',
};

export function AddModal({ unplaced, onAdd, onClose }: AddModalProps) {
  const [tab, setTab] = useState<Control['type']>('button');
  const entries = unplaced.filter((c) => c.type === tab);

  return (
    <Modal title="Tilføj kontrol" onClose={onClose}>
      <div className="segmented" style={{ marginBottom: 16 }}>
        {(['button', 'slider', 'toggle', 'radar'] as const).map((type) => (
          <button key={type} type="button" className={tab === type ? 'active' : ''} onClick={() => setTab(type)}>
            {labels[type]}
          </button>
        ))}
      </div>

      <div className="add-lists">
        {entries.length === 0 ? (
          <div className="device-list-empty">Ingen ledige {labels[tab].toLowerCase()}.</div>
        ) : (
          entries.map((c) => (
            <button key={c.name} type="button" className="add-entry" onClick={() => onAdd(c.name)}>
              <span>{c.name}</span>
              <span className="iconbtn">
                <Glyph name="plus" size={22} />
              </span>
            </button>
          ))
        )}
      </div>
    </Modal>
  );
}
