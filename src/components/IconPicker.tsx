import { Modal } from './Modal';
import { DEVICE_ICONS, deviceIconUrl } from '../assets/icons';

interface IconPickerProps {
  selected: number;
  onSelect: (iconID: number) => void;
  onClose: () => void;
}

export function IconPicker({ selected, onSelect, onClose }: IconPickerProps) {
  return (
    <Modal title="Vælg Enhedens Ikon" onClose={onClose}>
      <div className="icon-grid">
        {DEVICE_ICONS.map((icon) => (
          <button
            key={icon.id}
            type="button"
            className={`icon-tile ${icon.id === selected ? 'selected' : ''}`}
            onClick={() => {
              onSelect(icon.id);
              onClose();
            }}
            aria-label={icon.label}
          >
            <img src={deviceIconUrl(icon.id)} alt="" />
          </button>
        ))}
      </div>
    </Modal>
  );
}
