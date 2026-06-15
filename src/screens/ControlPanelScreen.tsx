import { useRef } from 'react';
import { TopBar } from '../components/TopBar';
import { PlayControl } from '../components/controls/PlayControls';
import { EditCanvas } from '../components/EditCanvas';
import { useElementSize } from '../lib/useElementSize';
import { computeGeometry, controlRect } from '../grid/geometry';
import { isPlaced } from '../lib/types';
import { useStore } from '../store/store';

export function ControlPanelScreen() {
  const layout = useStore((s) => s.layout);
  const editMode = useStore((s) => s.editMode);
  const active = useStore((s) => s.active);
  const toggleSideMenu = useStore((s) => s.toggleSideMenu);
  const sendButton = useStore((s) => s.sendButton);
  const sendSlider = useStore((s) => s.sendSlider);

  const areaRef = useRef<HTMLDivElement>(null);
  const size = useElementSize(areaRef);
  const geo = computeGeometry(size.w, size.h);
  const ready = size.w > 0 && size.h > 0;

  const placed = layout.filter(isPlaced);

  return (
    <div className="screen control-screen">
      <TopBar title="Kontrol Panel" onMenu={() => toggleSideMenu(true)} />

      <div className="controls-area-wrap">
        <div className="controls-area" ref={areaRef}>
          {!ready ? (
            <div className="overlay">
              <div className="spinner" />
            </div>
          ) : editMode ? (
            <EditCanvas geo={geo} canEdit={!!active?.canEdit} />
          ) : (
            placed.map((control) => {
              const rect = controlRect(control, geo);
              if (!rect) return null;
              return (
                <PlayControl
                  key={control.name}
                  control={control}
                  rect={rect}
                  disabled={false}
                  onButton={sendButton}
                  onSlider={sendSlider}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
