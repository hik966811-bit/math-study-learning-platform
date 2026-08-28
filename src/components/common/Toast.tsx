import React from 'react';
import { Award, Zap, CheckCircle, Info, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Toast: React.FC = () => {
  const { toastMessage, clearToast } = useAuth();

  if (!toastMessage) return null;

  const { text, type } = toastMessage;

  const getIcon = () => {
    switch (type) {
      case 'achievement':
        return <Award className="w-5 h-5 text-amber-400 animate-bounce" />;
      case 'xp':
        return <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getBorder = () => {
    switch (type) {
      case 'achievement':
        return 'border-amber-400/60 shadow-lg shadow-amber-400/20 bg-slate-900/95';
      case 'xp':
        return 'border-cyan-400/60 shadow-lg shadow-cyan-400/20 bg-slate-900/95';
      case 'success':
        return 'border-emerald-400/60 shadow-lg shadow-emerald-400/20 bg-slate-900/95';
      default:
        return 'border-cyan-500/40 bg-slate-900/95';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up max-w-sm">
      <div
        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border backdrop-blur-xl ${getBorder()} text-white text-sm font-medium`}
      >
        <div className="shrink-0">{getIcon()}</div>
        <div className="flex-1">{text}</div>
        <button
          onClick={clearToast}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
