import { useState } from 'react';
import { Modal } from './Modal';
import { Glyph } from '../assets/icons';
import type { Control } from '../lib/types';

interface AddModalProps {
  unplaced: Control[];
  onAdd: (name: string) => void;
  onClose: () => void;
}

export function AddModal({ unplaced, onAdd, onClose }: AddModalProps) {
  const [tab, setTab] = useState<'button' | 'slider'>('button');
  const entries = unplaced.filter((c) => c.type === tab);

  return (
    <Modal title="Tilføj kontrol" onClose={onClose}>
      <div className="segmented" style={{ marginBottom: 16 }}>
        <button type="button" className={tab === 'button' ? 'active' : ''} onClick={() => setTab('button')}>
          Knapper
        </button>
        <button type="button" className={tab === 'slider' ? 'active' : ''} onClick={() => setTab('slider')}>
          Slidere
        </button>
      </div>

      <div className="add-lists">
        {entries.length === 0 ? (
          <div className="device-list-empty">Ingen ledige {tab === 'button' ? 'knapper' : 'slidere'}.</div>
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
