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

          {/* Action Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl animate-slide-up animation-delay-200">
            <button
              onClick={() => handleSelectView('games')}
              className="group p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 backdrop-blur-xl border border-purple-400/20 hover:border-purple-400/40 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-purple-500/20"
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1">Games</h3>
              <p className="text-xs text-slate-400">{allGames.length}+ games</p>
            </button>

            <button
              onClick={() => handleSelectView('browser')}
              className="group p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/40 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1">Browser</h3>
              <p className="text-xs text-slate-400">Unblocked web</p>
            </button>

            <button
              onClick={() => handleSelectView('apps')}
              className="group p-6 bg-gradient-to-br from-orange-500/10 to-amber-500/10 hover:from-orange-500/20 hover:to-amber-500/20 backdrop-blur-xl border border-orange-400/20 hover:border-orange-400/40 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-orange-500/20"
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <LayoutGrid className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-white mb-1">Apps</h3>
              <p className="text-xs text-slate-400">Tools & more</p>
            </button>
          </div>
        </div>
      </main>

      <FloatingDock activeView={activeView} onSelectView={handleSelectView} />

      <div className="relative z-10 w-full px-6 py-4 flex items-center justify-center gap-3 text-[11px] text-slate-500 pointer-events-none">
        <span className="px-3 py-1 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full font-mono pointer-events-auto">
          made with ❤️ for learning
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
