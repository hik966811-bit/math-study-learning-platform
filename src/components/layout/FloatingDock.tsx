import React from 'react';
import {
  Home,
  Gamepad2,
  LayoutGrid,
  Globe,
  Settings,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface FloatingDockProps {
  activeView: 'home' | 'games' | 'apps' | 'browser' | 'settings';
  onSelectView: (view: 'home' | 'games' | 'apps' | 'browser' | 'settings') => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  activeView,
  onSelectView,
}) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(sound.getMuted());

  const handleToggleFullscreen = async () => {
    sound.playClick();
    try {
      if (!document.fullscreenElement) {
        const elem = document.documentElement as any;
        if (elem.requestFullscreen) {
          await elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          await elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          await elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          await elem.msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        const doc = document as any;
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          await doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          await doc.msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Fullscreen failed:', err);
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || (document as any).webkitFullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    document.addEventListener('webkitfullscreenchange', onFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFsChange);
      document.removeEventListener('webkitfullscreenchange', onFsChange);
    };
  }, []);

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const dockItems: Array<{
    id: 'home' | 'games' | 'apps' | 'browser' | 'settings';
    icon: React.ReactNode;
    label: string;
  }> = [
    { id: 'home', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { id: 'games', icon: <Gamepad2 className="w-5 h-5" />, label: 'Games' },
    { id: 'apps', icon: <LayoutGrid className="w-5 h-5" />, label: 'Apps' },
    { id: 'browser', icon: <Globe className="w-5 h-5" />, label: 'Browser' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center select-none">
      <nav className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 bg-slate-900/75 hover:bg-slate-900/85 backdrop-blur-2xl border border-white/15 rounded-full shadow-2xl shadow-blue-950/60 transition-all duration-300">
        {dockItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sound.playClick();
                onSelectView(item.id);
              }}
              onMouseEnter={() => sound.playHover()}
              title={item.label}
              className={`relative p-2.5 sm:p-3 rounded-full transition-all duration-200 group flex flex-col items-center justify-center ${
                isActive
                  ? 'bg-blue-600/40 text-white shadow-inner scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.icon}

              {/* Active Indicator line */}
              {isActive && (
                <span className="absolute bottom-1 w-2.5 h-0.5 rounded-full bg-blue-400" />
              )}
            </button>
          );
        })}

        <div className="w-px h-6 bg-white/15 mx-1" />

        {/* SFX Mute button */}
        <button
          onClick={handleToggleSound}
          onMouseEnter={() => sound.playHover()}
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          className={`p-2.5 sm:p-3 rounded-full transition-all duration-200 ${
            !isMuted ? 'text-blue-300 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-white'
          }`}
        >
          {!isMuted ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={handleToggleFullscreen}
          onMouseEnter={() => sound.playHover()}
          title="Toggle Fullscreen"
          className="p-2.5 sm:p-3 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </nav>
    </div>
  );
};
