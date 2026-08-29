import React, { useState, useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';
import { sound } from '../../utils/audio';

export const FullscreenGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onFsChange = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      if (fs) {
        setShowPrompt(false);
        setDismissed(false);
      }
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    if (isFullscreen) return;
    if (dismissed) return;

    let timer: any;
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowPrompt(true);
      }, 30000);
    };

    resetTimer();

    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    const handler = () => {
      setShowPrompt(false);
      resetTimer();
    };
    events.forEach((e) => window.addEventListener(e, handler, { passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, handler));
    };
  }, [isFullscreen, dismissed]);

  const enterFullscreen = () => {
    sound.playClick();
    try {
      document.documentElement.requestFullscreen().catch(() => {});
    } catch {}
  };

  return (
    <>
      {children}
      {showPrompt && !isFullscreen && (
        <div className="fixed top-20 right-6 z-[90] max-w-sm animate-slide-in-right">
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-900/95 to-cyan-900/95 border border-blue-400/40 shadow-2xl shadow-blue-500/30 backdrop-blur-xl">
            <button
              onClick={() => { setShowPrompt(false); setDismissed(true); }}
              className="absolute top-2 right-2 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
              title="Dismiss for now"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-3 pr-5">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-glow">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-1">
                  Press fullscreen to continue
                </h3>
                <p className="text-xs text-blue-100 mb-3 leading-relaxed">
                  To stay in stealth mode, click the fullscreen button at the bottom before playing.
                </p>
                <button
                  onClick={enterFullscreen}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs font-bold rounded-lg shadow-lg transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Enter Fullscreen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
