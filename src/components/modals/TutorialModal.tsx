import React, { useState, useEffect } from 'react';
import { Maximize2, Gamepad2, Eye, ArrowRight, Sparkles, X } from 'lucide-react';
import { sound } from '../../utils/audio';

const TUTORIAL_KEY = 'horus_tutorial_completed';

interface TutorialModalProps {
  onComplete: () => void;
}

export const TutorialModal: React.FC<TutorialModalProps> = ({ onComplete }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem(TUTORIAL_KEY);
    if (completed === 'true') {
      onComplete();
      return;
    }
    setTimeout(() => setVisible(true), 100);
  }, [onComplete]);

  const handleComplete = () => {
    localStorage.setItem(TUTORIAL_KEY, 'true');
    sound.playClick();
    setVisible(false);
    setTimeout(onComplete, 300);
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
        {/* Glow border animation */}
        <div className="absolute inset-0 rounded-3xl opacity-50">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-400/20 to-cyan-400/0 animate-shimmer" />
        </div>

        {/* Close/Skip button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all z-10"
          title="Skip tutorial"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Step indicator */}
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
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Step 2: Fullscreen */}
        {step === 2 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative animate-tilt">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 animate-glow">
                  <Maximize2 className="w-14 h-14 text-white" />
                </div>
                <div className="absolute -inset-4 rounded-3xl border-2 border-blue-400/30 animate-pulse" />
                <div className="absolute -inset-8 rounded-3xl border border-blue-400/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            <h2 className="text-3xl font-black text-white mb-3">
              Press the Fullscreen Button
            </h2>
            <p className="text-blue-200 mb-2 max-w-md mx-auto">
              Click the <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/40 rounded-md font-mono text-sm">⛶</span> button at the bottom of the screen
            </p>
            <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
              This makes HORUS fill your entire screen for the best experience
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => { sound.playClick(); setStep(1); }}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition-all"
              >
                Back
              </button>
              <button
                onClick={() => { sound.playClick(); setStep(3); }}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover-mega"
              >
                <span>Got it, Continue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
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
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => { sound.playClick(); setStep(2); }}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition-all"
              >
                Back
              </button>
              <button
                onClick={() => { sound.playClick(); setStep(4); }}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover-mega"
              >
                <span>Continue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Stealth mode */}
        {step === 4 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-flicker shadow-2xl shadow-blue-500/50">
                  <Eye className="w-14 h-14 text-white" />
                </div>
                <div className="absolute inset-0 w-28 h-28 rounded-2xl border-4 border-blue-400/50 animate-ping" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-white mb-3">
              Stealth Mode Activated
            </h2>
            <p className="text-blue-200 mb-2 max-w-md mx-auto">
                When a teacher approaches, quickly press <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/40 rounded-md font-mono text-sm">ESC</span> or the <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/40 rounded-md font-mono text-sm">⛶</span> button again
            </p>
            <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
              This instantly exits fullscreen so you can switch to your work fast
            </p>
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-400/30 mb-8 animate-glow">
              <p className="text-blue-200 text-sm font-semibold">
                💡 Pro tip: Bookmark this page for instant access anytime
              </p>
            </div>
            <button
              onClick={handleComplete}
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black text-lg rounded-2xl shadow-lg shadow-blue-500/30 transition-all hover-mega"
            >
              <span>Let's Go!</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
