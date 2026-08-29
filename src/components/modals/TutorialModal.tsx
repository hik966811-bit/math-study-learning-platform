import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, Gamepad2, Eye, Sparkles, X, Check } from 'lucide-react';
import { sound } from '../../utils/audio';

const TUTORIAL_KEY = 'horus_tutorial_completed';

interface TutorialModalProps {
  onComplete: () => void;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({ onComplete }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [visible, setVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pKeyPressed, setPKeyPressed] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    if (isFullscreen && step === 2) {
      sound.playCoin();
      setTimeout(() => setStep(3), 600);
    }
  }, [isFullscreen, step]);

  useEffect(() => {
    if (step !== 4) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setPKeyPressed(true);
        sound.playCoin();
        setTimeout(() => {
          handleComplete();
          setTimeout(() => {
            window.open('about:blank', '_self');
            window.close();
          }, 200);
        }, 400);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [step]);

  const handleComplete = useCallback(() => {
    setVisible(false);
    setTimeout(onComplete, 300);
  }, [onComplete]);

  const handleFullscreenClick = () => {
    sound.playClick();
    try {
      document.documentElement.requestFullscreen().catch(() => {});
    } catch {}
  };

  const handleSkip = () => {
    handleComplete();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-2xl animate-fade-in">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-80 bg-blue-400/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-2xl w-full mx-4 p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/80 to-slate-900 border border-blue-400/30 shadow-2xl shadow-blue-500/30 animate-scale-in overflow-hidden">
        <div className="absolute inset-0 rounded-3xl opacity-50">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-cyan-400/0 animate-shimmer" />
        </div>

        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all z-10"
          title="Skip tutorial"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center gap-2 mb-6 relative z-10">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                s === step ? 'w-8 bg-blue-400' : s < step ? 'w-4 bg-blue-500' : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Welcome */}
        {step === 1 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-glow">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 rounded-2xl border-2 border-blue-400/50 animate-ping" />
              </div>
            </div>
            <h1 className="text-4xl font-black text-white mb-3 animate-text-glow">
              Welcome to HORUS
            </h1>
            <p className="text-blue-200 text-lg mb-2">
              Your ultimate unblocked games & study platform
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Let's take a quick tour to get you started
            </p>
            <button
              onClick={() => { sound.playClick(); setStep(2); }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover-mega"
            >
              <span>Get Started</span>
            </button>
          </div>
        )}

        {/* Step 2: Fullscreen - MUST click the button */}
        {step === 2 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative animate-tilt">
                <button
                  onClick={handleFullscreenClick}
                  className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-glow hover-mega cursor-pointer"
                  title="Click to enter fullscreen"
                >
                  <Maximize2 className="w-14 h-14 text-white" />
                </button>
                <div className="absolute -inset-4 rounded-3xl border-2 border-blue-400/30 animate-pulse pointer-events-none" />
                <div className="absolute -inset-8 rounded-3xl border border-blue-400/20 animate-pulse pointer-events-none" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            <h2 className="text-3xl font-black text-white mb-3">
              Click the Fullscreen Button
            </h2>
            <p className="text-blue-200 mb-2 max-w-md mx-auto">
              Click the glowing button above to make HORUS fill your entire screen
            </p>
            <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
              You must enter fullscreen to continue
            </p>
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-400/30 animate-pulse">
              <p className="text-blue-300 text-sm font-semibold">
                {isFullscreen ? 'Fullscreen active! Loading next step...' : 'Waiting for you to click the button...'}
              </p>
            </div>
          </div>
        )}

        {/* Step 3: 800+ games */}
        {step === 3 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-heartbeat shadow-2xl shadow-blue-500/50">
                  <Gamepad2 className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-black text-white shadow-lg animate-bounce-in">
                  NEW
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-black text-white mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">800+</span> Games Available
            </h2>
            <p className="text-blue-200 mb-2">
              Browse our massive collection of unblocked games
            </p>
            <p className="text-slate-400 text-sm mb-8">
              From classics to the latest hits — all free to play
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-sm mx-auto">
              {['Action', 'Racing', 'Puzzle'].map((cat, i) => (
                <div
                  key={cat}
                  className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white font-semibold animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {cat}
                </div>
              ))}
            </div>
            <button
              onClick={() => { sound.playClick(); setStep(4); }}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover-mega"
            >
              <span>Continue</span>
            </button>
          </div>
        )}

        {/* Step 4: Press P to close */}
        {step === 4 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 transition-all ${pKeyPressed ? 'animate-bounce-in scale-125' : 'animate-flicker'}`}>
                  {pKeyPressed ? <Check className="w-14 h-14 text-white" /> : <Eye className="w-14 h-14 text-white" />}
                </div>
                {!pKeyPressed && <div className="absolute inset-0 w-28 h-28 rounded-2xl border-4 border-blue-400/50 animate-ping" />}
              </div>
            </div>
            <h2 className="text-3xl font-black text-white mb-3">
              {pKeyPressed ? 'Closing...' : 'Stealth Mode'}
            </h2>
            <p className="text-blue-200 mb-2 max-w-md mx-auto">
              When a teacher approaches, press the
            </p>
            <div className="flex justify-center my-4">
              <div className="px-8 py-4 bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-400 rounded-2xl shadow-lg shadow-blue-500/50 animate-glow">
                <span className="text-5xl font-black text-white">P</span>
              </div>
            </div>
            <p className="text-blue-200 mb-2 max-w-md mx-auto">
              key to instantly close the entire tab
            </p>
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-400/30 mt-6">
              <p className="text-blue-300 text-sm font-semibold">
                {pKeyPressed ? '✓ Tab closing in a moment...' : 'Press the P key now on your keyboard'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
