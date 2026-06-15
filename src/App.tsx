import { useEffect } from 'react';
import { useStore } from './store/store';
import { useViewportScale } from './lib/useViewportScale';
import { SplashScreen } from './screens/SplashScreen';
import { IntroScreen } from './screens/IntroScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { ConnectionScreen } from './screens/ConnectionScreen';
import { CreateDeviceScreen } from './screens/CreateDeviceScreen';
import { ControlPanelScreen } from './screens/ControlPanelScreen';
import { SideMenu } from './components/SideMenu';
import { Debugger } from './components/Debugger';

function App() {
  const screen = useStore((s) => s.screen);
  const init = useStore((s) => s.init);
  const sideMenuOpen = useStore((s) => s.sideMenuOpen);
  const debuggerOpen = useStore((s) => s.debuggerOpen);
  const { scale, fullbleed } = useViewportScale();

  useEffect(() => {
    const timer = setTimeout(() => init(), 1100);
    return () => clearTimeout(timer);
  }, [init]);

  return (
    <div className="app-stage">
      <div
        className={`app ${fullbleed ? 'app-fullbleed' : ''}`}
        style={fullbleed ? undefined : { transform: `scale(${scale})` }}
      >
        {screen === 'splash' && <SplashScreen />}
        {screen === 'intro' && <IntroScreen />}
        {screen === 'dashboard' && <DashboardScreen />}
        {screen === 'connection' && <ConnectionScreen />}
        {screen === 'create' && <CreateDeviceScreen />}
        {screen === 'control' && <ControlPanelScreen />}

        {sideMenuOpen && <SideMenu />}
        {debuggerOpen && <Debugger />}
      </div>
    </div>
  );
}

export default App;
