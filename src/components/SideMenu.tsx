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
            <button className="iconbtn" type="button" onClick={() => openMenuPage('user-settings')} aria-label="Brugerindstillinger">
              <Glyph name="user" />
            </button>
            <button
              className="iconbtn"
              type="button"
              onClick={() => openMenuPage('application-settings')}
              aria-label="Applikationsindstillinger"
            >
              <Glyph name="settings" />
            </button>
            <button
              className="iconbtn"
              type="button"
              onClick={() => openMenuPage('application-help')}
              aria-label="Hjælp til applikationen"
            >
              <Glyph name="help" />
            </button>
            <button className="iconbtn" type="button" onClick={() => toggleDebugger(true)} aria-label="Fejlfinding">
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
              aria-label="Enhedsindstillinger"
            >
              <Glyph name="settings" />
            </button>
            <button
              className="iconbtn"
              type="button"
              onClick={() => setEditMode(true)}
              disabled={!canEdit}
              aria-label="Rediger enhed"
            >
              <Glyph name="edit" />
            </button>
            <button className="iconbtn" type="button" onClick={() => openMenuPage('device-help')} aria-label="Hjælp til enheden">
              <Glyph name="help" />
            </button>
            <button className="iconbtn" type="button" onClick={() => toggleDebugger(true)} aria-label="Fejlfinding">
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
