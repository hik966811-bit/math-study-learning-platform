import React, { useState, useEffect } from 'react';
import { X, Calculator, FileText, Clock, Play, RotateCcw, Pause } from 'lucide-react';
import { sound } from '../../utils/audio';

interface AppsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppsModal: React.FC<AppsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'calc' | 'notes' | 'timer'>('calc');

  // Calculator State
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState('');

  // Notes State
  const [notes, setNotes] = useState(() => {
    return localStorage.getItem('horus_notes') || '';
  });

  // Timer State
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (timerRunning) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleSaveNotes = (val: string) => {
    setNotes(val);
    localStorage.setItem('horus_notes', val);
  };

  const handleCalcBtn = (val: string) => {
    sound.playClick();
    if (val === 'C') {
      setCalcInput('');
      setCalcResult('');
    } else if (val === '=') {
      try {
        const sanitized = calcInput.replace(/[^0-9+\-*/.]/g, '');
        // eslint-disable-next-line no-eval
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcResult(String(res));
      } catch {
        setCalcResult('Error');
      }
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-xl bg-slate-900/90 border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl text-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('calc')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'calc' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" /> Calculator
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'notes' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" /> Notes
            </button>
            <button
              onClick={() => setActiveTab('timer')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'timer' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" /> Timer
            </button>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {activeTab === 'calc' && (
          <div className="w-full max-w-sm mx-auto p-3 bg-white/[0.04] border border-white/10 rounded-2xl">
            <div className="bg-black/50 p-3 rounded-xl mb-3 text-right">
              <div className="text-xs text-slate-400 font-mono h-4">{calcInput || '0'}</div>
              <div className="text-xl font-bold font-mono text-white h-7">{calcResult || calcInput || '0'}</div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-sm font-semibold">
              {['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '%', '='].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcBtn(btn)}
                  className={`p-2.5 rounded-xl transition-all ${
                    btn === '='
                      ? 'bg-blue-600 text-white font-bold'
                      : btn === 'C'
                      ? 'bg-rose-500/30 text-rose-300'
                      : 'bg-white/5 hover:bg-white/15 text-slate-200'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="space-y-3">
            <textarea
              rows={10}
              placeholder="Type your study notes, formulas, or cheat sheets..."
              value={notes}
              onChange={(e) => handleSaveNotes(e.target.value)}
              className="w-full p-4 bg-white/5 border border-white/10 focus:border-blue-400 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none resize-none leading-relaxed"
            />
            <span className="text-[11px] text-slate-400 block text-right">Auto-save enabled</span>
          </div>
        )}

        {activeTab === 'timer' && (
          <div className="py-10 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-mono font-bold tracking-wider text-white mb-6">
              {Math.floor(seconds / 60)
                .toString()
                .padStart(2, '0')}
              :{(seconds % 60).toString().padStart(2, '0')}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  sound.playClick();
                  setTimerRunning(!timerRunning);
                }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  timerRunning ? 'bg-amber-600 text-white' : 'bg-blue-600 text-white'
                }`}
              >
                {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {timerRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setTimerRunning(false);
                  setSeconds(0);
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
