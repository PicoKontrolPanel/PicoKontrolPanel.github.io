import type { ReactNode } from 'react';
import { Glyph } from '../assets/icons';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  /** 'circle' = white circled-X close button on red; 'plain' = red X (default). */
  closeVariant?: 'plain' | 'circle';
}

export function Modal({ title, onClose, children, closeVariant = 'plain' }: ModalProps) {
  const circle = closeVariant === 'circle';
  return (
    <div className="modal-root" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>{title}</h3>
          <button
            className={`iconbtn ${circle ? 'modal-close-circle' : ''}`}
            type="button"
            onClick={onClose}
            aria-label="Luk"
          >
            <Glyph name={circle ? 'delete' : 'close'} size={circle ? 30 : 24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
