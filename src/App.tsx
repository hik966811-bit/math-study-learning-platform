import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { GamesProvider, useGames } from './context/GamesContext';
import { AuthProvider } from './context/AuthContext';
import { FloatingOrbs } from './components/background/FloatingOrbs';
import { FloatingDock } from './components/layout/FloatingDock';
import { GamesShelfModal } from './components/modals/GamesShelfModal';
import { AppsModal } from './components/modals/AppsModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { WebBrowserModal } from './components/modals/WebBrowserModal';
import { GamePlayerModal } from './components/games/GamePlayerModal';
import { AddGameModal } from './components/common/AddGameModal';
import { Game } from './types/game';
import { sound } from './utils/audio';
import { Search, Sparkles, Globe, Loader2 } from 'lucide-react';
import { WebSocketProvider } from './context/WebSocketContext';
import { TutorialModal } from './components/modals/TutorialModal';
import { FullscreenGuard } from './components/common/FullscreenGuard';
import { PanicButton } from './components/common/PanicButton';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 animate-fade-in overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="relative animate-fade-in">
          <Loader2 className="w-16 h-16 text-blue-400 animate-spin" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-400/20 rounded-full animate-ping" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-400/20 rounded-full animate-pulse" />
        </div>
        <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient animate-text-glow animate-fade-in animation-delay-100">
          HORUS
        </h1>
        <p className="text-cyan-400 text-sm font-bold tracking-widest animate-fade-in animation-delay-200 animate-pulse">ALPHA BETA</p>
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden animate-fade-in animation-delay-300">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-loading-bar" />
        </div>
        <div className="flex gap-2 mt-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-loading-dots" />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-loading-dots" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-loading-dots" />
        </div>
      </div>
    </div>
  );
};

const HorusMainContent: React.FC = () => {
  const { allGames } = useGames();
  const [activeView, setActiveView] = useState<'home' | 'games' | 'apps' | 'browser' | 'settings'>('home');
  const [isAddGameOpen, setIsAddGameOpen] = useState<boolean>(false);
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [browserQuery, setBrowserQuery] = useState('');

  const handleSelectView = (view: 'home' | 'games' | 'apps' | 'browser' | 'settings') => {
    sound.playClick();
    setActiveView(view);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setBrowserQuery(searchQuery.trim());
      setActiveView('browser');
      sound.playClick();
    }
  };

  return (
    <FullscreenGuard>
    <PanicButton />
    <div className="min-h-screen w-full relative flex flex-col justify-between overflow-hidden select-none bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingOrbs />

      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gradient-shift 20s linear infinite'
        }} />
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Top Right: Credits + Add Game */}
      <header className="relative z-10 w-full px-6 py-5 flex items-center justify-between pointer-events-none animate-slide-down">
        <div className="pointer-events-auto animate-fade-in animation-delay-100 hover-mega">
          <span className="px-3 py-1.5 bg-slate-900/50 backdrop-blur-md border border-white/15 rounded-full text-[11px] text-slate-300 font-mono animate-text-glow">
            website made by frost (kyrylo) for ANDREW CARNIGIE SCHOOL
          </span>
        </div>
        <button
          onClick={() => {
            sound.playClick();
            setIsAddGameOpen(true);
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 text-white rounded-full text-xs font-semibold shadow-sm transition-all pointer-events-auto animate-fade-in animation-delay-200 hover-mega"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
          <span>Add Game</span>
        </button>
      </header>

      {/* Center: Title & Search */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-10 text-center">
        <div className="animate-soft-float max-w-lg w-full flex flex-col items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl select-none animate-scale-in">
            hor<span className="text-blue-400 animate-text-glow">us</span>
          </h1>

          <form onSubmit={handleSearchSubmit} className="w-full max-w-md mb-5 animate-slide-up-fade animation-delay-200">
            <div className="relative group hover-mega">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 group-hover:text-blue-400 group-hover:rotate-12 transition-all duration-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the web..."
                className="w-full pl-11 pr-4 py-3 bg-slate-900/45 hover:bg-slate-900/60 focus:bg-slate-900/80 backdrop-blur-2xl border border-white/15 focus:border-blue-400 rounded-full text-sm text-white placeholder-slate-400 focus:outline-none transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </form>
        </div>
      </main>

      <FloatingDock activeView={activeView} onSelectView={handleSelectView} />

      {/* Modals */}
      <GamesShelfModal
        isOpen={activeView === 'games'}
        onClose={() => setActiveView('home')}
        onSelectGame={(game) => {
          setActiveGame(game);
          setActiveView('home');
        }}
        onOpenAddGame={() => setIsAddGameOpen(true)}
      />
      <AppsModal isOpen={activeView === 'apps'} onClose={() => setActiveView('home')} />
      <WebBrowserModal
        isOpen={activeView === 'browser'}
        onClose={() => setActiveView('home')}
        initialQuery={browserQuery || searchQuery}
      />
      <SettingsModal isOpen={activeView === 'settings'} onClose={() => setActiveView('home')} />
      <AddGameModal isOpen={isAddGameOpen} onClose={() => setIsAddGameOpen(false)} />
      <GamePlayerModal game={activeGame} onClose={() => setActiveGame(null)} />
    </div>
    </FullscreenGuard>
  );
};

const AppInner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowTutorial(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        e.stopPropagation();
        try {
          window.open('', '_self');
          window.close();
        } catch {
          window.location.href = 'about:blank';
        }
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        const elem = document.documentElement as any;
        if (!document.fullscreenElement) {
          (elem.requestFullscreen || elem.webkitRequestFullscreen || elem.mozRequestFullScreen || elem.msRequestFullscreen)?.call(elem);
        } else {
          const doc = document as any;
          (doc.exitFullscreen || doc.webkitExitFullscreen || doc.mozCancelFullScreen || doc.msExitFullscreen)?.call(doc);
        }
      }
    };
    window.addEventListener('keydown', handler, true);
    return () => window.removeEventListener('keydown', handler, true);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showTutorial) {
    return <TutorialModal onComplete={() => setShowTutorial(false)} />;
  }

  return <HorusMainContent />;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GamesProvider>
        <AuthProvider>
          <WebSocketProvider>
            <AppInner />
          </WebSocketProvider>
        </AuthProvider>
      </GamesProvider>
    </ThemeProvider>
  );
};

export default App;
