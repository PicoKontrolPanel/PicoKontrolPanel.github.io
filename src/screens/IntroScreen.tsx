import { useState } from 'react';
import { teknologiskolenHeaderUrl } from '../assets/icons';
import { APP_VERSION } from '../lib/storage';
import { useStore } from '../store/store';

export function IntroScreen() {
  const createUser = useStore((s) => s.createUser);
  const [name, setName] = useState('');

  const filled = name.length > 0;

  return (
    <div className="screen intro">
      <div className="intro-header">
        <span className="intro-header-fill" aria-hidden="true" />
        <img className="intro-header-image" src={teknologiskolenHeaderUrl} alt="Teknologiskolen" />
        <span className="intro-header-fill" aria-hidden="true" />
      </div>

      <div className="intro-body">
        <p>
          Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Skriv dit
          brugernavn for at komme i gang.
        </p>

        <div className="field">
          <input
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={32}
            autoComplete="off"
            placeholder="Brugernavn"
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          type="button"
          disabled={!filled}
          onClick={() => createUser(name)}
        >
          Fortsæt
        </button>
      </div>

      <span className="version">{APP_VERSION}</span>
    </div>
  );
}
