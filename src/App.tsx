import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { GamesProvider } from './context/GamesContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { WebSocketProvider } from './context/WebSocketContext';
import { AuthModal } from './components/auth/AuthModal';
import { FloatingOrbs } from './components/background/FloatingOrbs';
import { FloatingDock } from './components/layout/FloatingDock';
import { GamesShelfModal } from './components/modals/GamesShelfModal';
import { AppsModal } from './components/modals/AppsModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { WebBrowserModal } from './components/modals/WebBrowserModal';
import { GamePlayerModal } from './components/games/GamePlayerModal';
import { AddGameModal } from './components/common/AddGameModal';
import { GamesPortalModal } from './components/modals/GamesPortalModal';
import { Game } from './types/game';
import { sound } from './utils/audio';
import { Search, Gamepad2, Settings, Sparkles, LayoutGrid, Award, Zap, Globe } from 'lucide-react';
import { useGames } from './context/GamesContext';
import { useWebSocket } from './context/WebSocketContext';

const HorusMainContent: React.FC = () => {
  const { allGames, toast } = useGames();
  const { user, isAuthenticated, isLoading } = useAuth();
  const { theme } = useTheme();

  const [activeView, setActiveView] = useState<'home' | 'games' | 'apps' | 'browser' | 'settings'>('home');
  const [isAddGameOpen, setIsAddGameOpen] = useState<boolean>(false);
  const [isGamesPortalOpen, setIsGamesPortalOpen] = useState<boolean>(false);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [browserQuery, setBrowserQuery] = useState('');

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-fade-in">
        <div className="text-white text-2xl font-bold animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthModal />;
  }

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

      {/* Top Bar */}
      <header className="relative z-10 w-full px-6 py-6 flex items-center justify-end pointer-events-none animate-slide-down">
        <button
          onClick={() => {
            sound.playClick();
            setIsAddGameOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 backdrop-blur-xl border border-blue-400/20 text-white rounded-full text-xs font-bold shadow-lg shadow-blue-500/30 transition-all pointer-events-auto transform hover:scale-105 active:scale-95"
        >
          <Sparkles className="w-4 h-4" />
          <span>Add Game</span>
        </button>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl w-full flex flex-col items-center space-y-8 animate-fade-in-up">

          {/* Logo */}
          <div className="relative">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-2xl select-none animate-gradient mb-2">
              HORUS
            </h1>
            <p className="text-cyan-400 text-lg font-bold tracking-widest">ALPHA BETA</p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl animate-slide-up animation-delay-100">
            <div className="relative group">
              <Search className="w-5 h-5 text-slate-500 absolute left-5 top-1/2 -translate-y-1/2 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything... study materials, games, web..."
                className="w-full pl-14 pr-6 py-5 bg-slate-900/50 hover:bg-slate-900/70 focus:bg-slate-900/90 backdrop-blur-2xl border border-white/10 focus:border-blue-400/50 rounded-2xl text-base text-white placeholder-slate-500 focus:outline-none transition-all shadow-xl hover:shadow-2xl focus:shadow-blue-500/20"
              />
            </div>
          </form>
        </div>
      </main>

      <FloatingDock activeView={activeView} onSelectView={handleSelectView} />

      <div className="relative z-10 w-full px-6 pb-24 pt-2 flex items-center justify-center gap-3 text-xs text-slate-400 pointer-events-none">
        <span className="px-4 py-2 bg-slate-900/60 backdrop-blur-md border border-white/20 rounded-full font-mono pointer-events-auto text-white">
          website made by frost (kyrylo) for ANDREW CARNIGIE SCHOOL
        </span>
      </div>

      {/* Modals */}
      <GamesShelfModal isOpen={activeView === 'games'} onClose={() => setActiveView('home')} onSelectGame={(game) => { setActiveGame(game); setActiveView('home'); }} onOpenAddGame={() => setIsAddGameOpen(true)} />
      <AppsModal isOpen={activeView === 'apps'} onClose={() => setActiveView('home')} />
      <WebBrowserModal isOpen={activeView === 'browser'} onClose={() => setActiveView('home')} initialQuery={browserQuery || searchQuery} />
      <SettingsModal isOpen={activeView === 'settings'} onClose={() => setActiveView('home')} />
      <GamesPortalModal isOpen={isGamesPortalOpen} onClose={() => setIsGamesPortalOpen(false)} />
      <AddGameModal isOpen={isAddGameOpen} onClose={() => setIsAddGameOpen(false)} />
      <GamePlayerModal game={activeGame} onClose={() => setActiveGame(null)} />

      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-bounce-in bg-slate-900/90 backdrop-blur-xl border border-white/20 text-white px-5 py-3 rounded-full text-sm font-medium shadow-2xl">
          {toast}
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GamesProvider>
        <AuthProvider>
          <HorusMainContent />
        </AuthProvider>
      </GamesProvider>
    </ThemeProvider>
  );
};

export default App;
