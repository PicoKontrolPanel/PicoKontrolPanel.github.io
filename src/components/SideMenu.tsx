import { Glyph } from '../assets/icons';
import { useStore } from '../store/store';

export function SideMenu() {
  const screen = useStore((s) => s.screen);
  const active = useStore((s) => s.active);
  const toggleSideMenu = useStore((s) => s.toggleSideMenu);
  const toggleDebugger = useStore((s) => s.toggleDebugger);
  const setEditMode = useStore((s) => s.setEditMode);
  const openMenuPage = useStore((s) => s.openMenuPage);
  const disconnect = useStore((s) => s.disconnect);

  const onDashboard = screen === 'dashboard';
  const onControlPanel = screen === 'control';
  const canEdit = onControlPanel && !!active?.canEdit;

  return (
    <>
      <div className="scrim" onClick={() => toggleSideMenu(false)} />
      <nav className="sidemenu" aria-label="Sidemenu">
        {onDashboard && (
          <>
            <button className="iconbtn" type="button" onClick={() => openMenuPage('user-settings')} aria-label="User Settings">
              <Glyph name="user" />
            </button>
            <button
              className="iconbtn"
              type="button"
              onClick={() => openMenuPage('application-settings')}
              aria-label="Application Settings"
            >
              <Glyph name="settings" />
            </button>
            <button
              className="iconbtn"
              type="button"
              onClick={() => openMenuPage('application-help')}
              aria-label="Help for Application"
            >
              <Glyph name="help" />
            </button>
            <button className="iconbtn" type="button" onClick={() => toggleDebugger(true)} aria-label="Debugger">
              <Glyph name="debugger" />
            </button>
          </>
        )}

        {onControlPanel && (
          <>
            <button
              className="iconbtn"
              type="button"
              onClick={() => openMenuPage('device-settings')}
              aria-label="Device Settings"
            >
              <Glyph name="settings" />
            </button>
            <button
              className="iconbtn"
              type="button"
              onClick={() => setEditMode(true)}
              disabled={!canEdit}
              aria-label="Edit Device"
            >
              <Glyph name="edit" />
            </button>
            <button className="iconbtn" type="button" onClick={() => openMenuPage('device-help')} aria-label="Help for Device">
              <Glyph name="help" />
            </button>
            <button className="iconbtn" type="button" onClick={() => toggleDebugger(true)} aria-label="Debugger">
              <Glyph name="debugger" />
            </button>
          </>
        )}

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
