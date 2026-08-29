import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { GamesProvider, useGames } from './context/GamesContext';
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

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 animate-fade-in">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <Loader2 className="w-16 h-16 text-blue-400 animate-spin" />
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-400/20 rounded-full animate-ping" />
        </div>
        <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-pulse">
          HORUS
        </h1>
        <p className="text-cyan-400 text-sm font-bold tracking-widest">LOADING</p>
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" style={{ width: '60%' }} />
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
    <div className="min-h-screen w-full relative flex flex-col justify-between overflow-hidden select-none bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingOrbs />

      {/* Top Right: Credits + Add Game */}
      <header className="relative z-10 w-full px-6 py-5 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <span className="px-3 py-1.5 bg-slate-900/50 backdrop-blur-md border border-white/15 rounded-full text-[11px] text-slate-300 font-mono">
            website made by frost (kyrylo) for ANDREW CARNIGIE SCHOOL
          </span>
        </div>
        <button
          onClick={() => {
            sound.playClick();
            setIsAddGameOpen(true);
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-xl border border-white/10 text-white rounded-full text-xs font-semibold shadow-sm transition-all pointer-events-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Add Game</span>
        </button>
      </header>

      {/* Center: Title & Search */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-10 text-center">
        <div className="animate-soft-float max-w-lg w-full flex flex-col items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl select-none">
            hor<span className="text-blue-400">us</span>
          </h1>

          <form onSubmit={handleSearchSubmit} className="w-full max-w-md mb-5">
            <div className="relative group">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the web..."
                className="w-full pl-11 pr-4 py-3 bg-slate-900/45 hover:bg-slate-900/60 focus:bg-slate-900/80 backdrop-blur-2xl border border-white/15 focus:border-blue-400 rounded-full text-sm text-white placeholder-slate-400 focus:outline-none transition-all shadow-xl"
              />
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
  );
};

const AppInner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <HorusMainContent />;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GamesProvider>
        <WebSocketProvider>
          <AppInner />
        </WebSocketProvider>
      </GamesProvider>
    </ThemeProvider>
  );
};

export default App;
