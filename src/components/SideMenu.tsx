import { Glyph } from '../assets/icons';
import { useStore } from '../store/store';

export function SideMenu() {
  const screen = useStore((s) => s.screen);
  const active = useStore((s) => s.active);
  const toggleSideMenu = useStore((s) => s.toggleSideMenu);
  const toggleDebugger = useStore((s) => s.toggleDebugger);
  const setEditMode = useStore((s) => s.setEditMode);
  const disconnect = useStore((s) => s.disconnect);

  const onControlPanel = screen === 'control';
  const canEdit = onControlPanel && !!active?.canEdit;

  return (
    <>
      <div className="scrim" onClick={() => toggleSideMenu(false)} />
      <nav className="sidemenu" aria-label="Sidemenu">
        <button className="iconbtn" type="button" aria-label="Bruger">
          <Glyph name="user" />
        </button>
        <button className="iconbtn" type="button" aria-label="Indstillinger">
          <Glyph name="settings" />
        </button>
        {canEdit && (
          <button className="iconbtn" type="button" onClick={() => setEditMode(true)} aria-label="Rediger">
            <Glyph name="edit" />
          </button>
        )}
        <button className="iconbtn" type="button" aria-label="Hjælp">
          <Glyph name="help" />
        </button>
        <button className="iconbtn" type="button" onClick={() => toggleDebugger(true)} aria-label="Debugger">
          <Glyph name="debugger" />
        </button>
        <div className="spacer" />
        {onControlPanel && (
          <button className="iconbtn" type="button" onClick={() => disconnect()} aria-label="Forlad enhed">
            <Glyph name="exit" />
          </button>
        )}
      </nav>
    </>
  );
}
