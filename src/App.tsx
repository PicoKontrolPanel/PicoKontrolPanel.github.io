import { useEffect } from 'react';
import { useStore } from './store/store';
import { SplashScreen } from './screens/SplashScreen';
import { IntroScreen } from './screens/IntroScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { ConnectionScreen } from './screens/ConnectionScreen';
import { CreateDeviceScreen } from './screens/CreateDeviceScreen';
import { ControlPanelScreen } from './screens/ControlPanelScreen';
import { SideMenu } from './components/SideMenu';
import { Debugger } from './components/Debugger';
import { MenuPages } from './components/MenuPages';
import { ConfirmDialog } from './components/ConfirmDialog';
import { ConnectionLost } from './components/ConnectionLost';
import { Toast } from './components/Toast';

function App() {
  const screen = useStore((s) => s.screen);
  const init = useStore((s) => s.init);
  const sideMenuOpen = useStore((s) => s.sideMenuOpen);
  const debuggerOpen = useStore((s) => s.debuggerOpen);

  useEffect(() => {
    const timer = setTimeout(() => init(), 1100);
    return () => clearTimeout(timer);
  }, [init]);

  return (
    <div className="app">
      {screen === 'splash' && <SplashScreen />}
      {screen === 'intro' && <IntroScreen />}
      {screen === 'dashboard' && <DashboardScreen />}
      {screen === 'connection' && <ConnectionScreen />}
      {screen === 'create' && <CreateDeviceScreen />}
      {screen === 'control' && <ControlPanelScreen />}

      {sideMenuOpen && <SideMenu />}
      <MenuPages />
      <ConnectionLost />
      <ConfirmDialog />
      {debuggerOpen && <Debugger />}
      <Toast />
    </div>
  );
}

export default App;
