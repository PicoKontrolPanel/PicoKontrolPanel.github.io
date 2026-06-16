import { Glyph, teknologiskolenLogoUrl, type GlyphName } from '../assets/icons';
import { useStore } from '../store/store';

interface SideMenuProps {
  open: boolean;
}

export function SideMenu({ open }: SideMenuProps) {
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
      <div className={`scrim ${open ? 'open' : 'closing'}`} onClick={() => toggleSideMenu(false)} />
      <nav className={`sidemenu ${open ? 'open' : 'closing'}`} aria-label="Sidemenu">
        {onDashboard && (
          <>
            <MenuButton label="Bruger" icon="user" onClick={() => openMenuPage('user-settings')} />
            <MenuButton label="Indstillinger" icon="settings" onClick={() => openMenuPage('application-settings')} />
            <MenuButton label="Hjælp" icon="help" onClick={() => openMenuPage('application-help')} />
            <TeknologiskolenLink />
            <MenuButton label="Fejlfinding" icon="debugger" onClick={() => toggleDebugger(true)} />
          </>
        )}

        {onControlPanel && (
          <>
            <MenuButton label="Indstillinger" icon="settings" onClick={() => openMenuPage('device-settings')} />
            <MenuButton label="Rediger" icon="edit" onClick={() => setEditMode(true)} disabled={!canEdit} />
            <MenuButton label="Hjælp" icon="help" onClick={() => openMenuPage('device-help')} />
            <TeknologiskolenLink />
            <MenuButton label="Fejlfinding" icon="debugger" onClick={() => toggleDebugger(true)} />
          </>
        )}

        <div className="spacer" />
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

function TeknologiskolenLink() {
  return (
    <a
      className="iconbtn sidemenu-link"
      href="https://www.teknologiskolen.dk/"
      target="_blank"
      rel="noreferrer"
      aria-label="Teknologiskolen"
    >
      <img src={teknologiskolenLogoUrl} alt="" />
      <span>Teknologiskolen</span>
    </a>
  );
}
