import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { GamesProvider, useGames } from './context/GamesContext';
import { FloatingOrbs } from './components/background/FloatingOrbs';
import { FloatingDock } from './components/layout/FloatingDock';
import { GamesShelfModal } from './components/modals/GamesShelfModal';
import { AppsModal } from './components/modals/AppsModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { WebBrowserModal } from './components/modals/WebBrowserModal';
import { ChatModal } from './components/modals/ChatModal';
import { GamePlayerModal } from './components/games/GamePlayerModal';
import { AddGameModal } from './components/common/AddGameModal';
import { GamesPortalModal } from './components/modals/GamesPortalModal';
import { Game } from './types/game';
import { sound } from './utils/audio';
import { Search, Gamepad2, Settings, Sparkles, LayoutGrid, Globe, Heart, Award } from 'lucide-react';
import { WebSocketProvider, useWebSocket } from './context/WebSocketContext';
import { AuthProvider } from './context/AuthContext';

const HorusMainContent: React.FC = () => {
  const { allGames, toast } = useGames();
  const { onlineCount } = useWebSocket();

  // Active view / modals
  const [activeView, setActiveView] = useState<'home' | 'games' | 'apps' | 'browser' | 'settings' | 'chat'>('home');
  const [isAddGameOpen, setIsAddGameOpen] = useState<boolean>(false);
  const [isGamesPortalOpen, setIsGamesPortalOpen] = useState<boolean>(false);
  const [activeGame, setActiveGame] = useState<Game | null>(null);

  // Search input on homepage
  const [searchQuery, setSearchQuery] = useState('');
  const [browserQuery, setBrowserQuery] = useState('');

  const handleSelectView = (view: 'home' | 'games' | 'apps' | 'browser' | 'settings' | 'chat') => {
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

  const handleOpenSearchWithQuery = (query: string) => {
    setBrowserQuery(query);
    setActiveView('browser');
    sound.playClick();
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col justify-between overflow-hidden select-none">
      {/* Background Animated Floating Spheres/Orbs */}
      <FloatingOrbs />

      {/* Top Bar Header */}
      <header className="relative z-10 w-full px-6 py-5 flex items-center justify-between pointer-events-none">
        {/* Top-Left: Online Users Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full text-xs text-slate-300 font-mono shadow-sm pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>online users: {onlineCount}</span>
        </div>

        {/* Top-Right: Quick Add Game Pill */}
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

      {/* Center Screen: Horus Title & Action Pills */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-10 text-center">
        <div className="animate-soft-float max-w-lg w-full flex flex-col items-center">
          {/* Main Logo: horus */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl select-none">
            hor<span className="text-blue-400">us</span>
          </h1>

          {/* Quick Action Search Bar (Searches into DuckDuckGo Embedded Browser) */}
          <form onSubmit={handleSearchSubmit} className="w-full max-w-md mb-5">
            <div className="relative group">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search DuckDuckGo or browse web..."
                className="w-full pl-11 pr-4 py-3 bg-slate-900/45 hover:bg-slate-900/60 focus:bg-slate-900/80 backdrop-blur-2xl border border-white/15 focus:border-blue-400 rounded-full text-sm text-white placeholder-slate-400 focus:outline-none transition-all shadow-xl"
              />
            </div>
          </form>

          {/* Action Pills Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={() => handleOpenSearchWithQuery(searchQuery || 'school study unblocked')}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 hover:bg-white/15 backdrop-blur-xl border border-white/15 text-slate-200 hover:text-white rounded-full text-xs font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              <Search className="w-4 h-4 text-blue-400" />
              <span>browse study</span>
            </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setIsGamesPortalOpen(true);
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 hover:bg-purple-600/30 backdrop-blur-xl border border-white/15 hover:border-purple-400/50 text-white rounded-full text-xs font-semibold shadow-lg transition-all transform hover:scale-105"
              >
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                <span>games ({allGames.length + 80})</span>
              </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveView('apps');
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 hover:bg-white/15 backdrop-blur-xl border border-white/15 text-slate-200 hover:text-white rounded-full text-xs font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              <LayoutGrid className="w-4 h-4 text-slate-400" />
              <span>apps</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveView('settings');
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/50 hover:bg-white/15 backdrop-blur-xl border border-white/15 text-slate-200 hover:text-white rounded-full text-xs font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              <Settings className="w-4 h-4 text-slate-400" />
              <span>settings</span>
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Floating Dock */}
      <FloatingDock
        activeView={activeView}
        onSelectView={handleSelectView}
      />

      {/* Bottom-Right Links (matching reference style) */}
      <div className="relative z-10 w-full px-6 py-4 flex items-center justify-end gap-2 text-[11px] text-slate-400 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setActiveView('settings')}
            className="flex items-center gap-1 px-3 py-1 bg-slate-900/40 backdrop-blur-md border border-white/10 hover:bg-white/10 rounded-full transition-colors text-slate-300"
          >
            <Award className="w-3 h-3 text-amber-400" />
            <span>credits</span>
          </button>
          <span className="px-3 py-1 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-full text-slate-300 font-mono">
            made by kyrylo special for Andrew Carnegie school
          </span>
        </div>
      </div>

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

      <AppsModal
        isOpen={activeView === 'apps'}
        onClose={() => setActiveView('home')}
      />

      <WebBrowserModal
        isOpen={activeView === 'browser'}
        onClose={() => setActiveView('home')}
        initialQuery={browserQuery || searchQuery}
      />

      <SettingsModal
        isOpen={activeView === 'settings'}
        onClose={() => setActiveView('home')}
      />

      <ChatModal
        isOpen={activeView === 'chat'}
        onClose={() => setActiveView('home')}
      />

      <GamesPortalModal
        isOpen={isGamesPortalOpen}
        onClose={() => setIsGamesPortalOpen(false)}
      />

      <AddGameModal
        isOpen={isAddGameOpen}
        onClose={() => setIsAddGameOpen(false)}
      />

      {/* Game Player Modal */}
      <GamePlayerModal
        game={activeGame}
        onClose={() => setActiveGame(null)}
      />

      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in bg-slate-900/90 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-xs font-medium shadow-2xl">
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
          <WebSocketProvider>
            <HorusMainContent />
          </WebSocketProvider>
        </AuthProvider>
      </GamesProvider>
    </ThemeProvider>
  );
};

export default App;
