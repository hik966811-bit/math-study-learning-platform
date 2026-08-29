import React, { useState } from 'react';
import { Shield, X } from 'lucide-react';
import { sound } from '../../utils/audio';

export const PanicButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const handlePanic = () => {
    sound.playClick();
    try {
      window.open('', '_self');
      window.close();
    } catch {
      window.location.href = 'about:blank';
    }
  };

  return (
    <button
      onClick={handlePanic}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title="Click to instantly close the tab (or press P when window has focus)"
      className="fixed top-3 left-3 z-[80] group flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900/70 hover:bg-red-600/90 backdrop-blur-md border border-white/15 hover:border-red-400 text-slate-300 hover:text-white rounded-full text-[10px] font-mono transition-all shadow-lg"
    >
      <Shield className="w-3 h-3" />
      <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${hovered ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0'}`}>
        PANIC (P)
      </span>
    </button>
  );
};
