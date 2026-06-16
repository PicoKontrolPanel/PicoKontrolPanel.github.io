import { Glyph, teknologiskolenLogoUrl, type GlyphName } from '../assets/icons';
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
            <MenuButton label="Bruger" icon="user" onClick={() => openMenuPage('user-settings')} />
            <MenuButton label="Indstillinger" icon="settings" onClick={() => openMenuPage('application-settings')} />
            <MenuButton label="Hjælp" icon="help" onClick={() => openMenuPage('application-help')} />
            <MenuButton label="Fejlfinding" icon="debugger" onClick={() => toggleDebugger(true)} />
          </>
        )}

        {onControlPanel && (
          <>
            <MenuButton label="Indstillinger" icon="settings" onClick={() => openMenuPage('device-settings')} />
            <MenuButton label="Rediger" icon="edit" onClick={() => setEditMode(true)} disabled={!canEdit} />
            <MenuButton label="Hjælp" icon="help" onClick={() => openMenuPage('device-help')} />
            <MenuButton label="Fejlfinding" icon="debugger" onClick={() => toggleDebugger(true)} />
          </>
        )}

        <div className="spacer" />
        <a
          className="sidemenu-logo-link"
          href="https://www.teknologiskolen.dk/"
          target="_blank"
          rel="noreferrer"
          aria-label="Åbn Teknologiskolen"
        >
          <img src={teknologiskolenLogoUrl} alt="Teknologiskolen" />
        </a>
        {onControlPanel && <MenuButton label="Forlad" icon="exit" onClick={() => disconnect()} />}
      </nav>
    </>
  );
}

function MenuButton({
  label,
  icon,
  disabled,
  onClick,
}: {
  label: string;
  icon: GlyphName;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button className="iconbtn" type="button" onClick={onClick} disabled={disabled} aria-label={label}>
      <Glyph name={icon} />
      <span>{label}</span>
    </button>
  );
}
