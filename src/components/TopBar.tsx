import { Glyph } from '../assets/icons';

interface TopBarProps {
  title: string;
  onMenu: () => void;
}

export function TopBar({ title, onMenu }: TopBarProps) {
  return (
    <header className="topbar">
      <h1>{title}</h1>
      <button className="iconbtn" type="button" onClick={onMenu} aria-label="Menu">
        <Glyph name="menu" />
      </button>
    </header>
  );
}
