import type { ReactNode } from 'react';
import { Glyph } from '../assets/icons';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ title, onClose, children }: ModalProps) {
  return (
    <div className="modal-root" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>{title}</h3>
          <button className="iconbtn" type="button" onClick={onClose} aria-label="Luk">
            <Glyph name="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
