import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { useGames } from '../../context/GamesContext';
import { sound } from '../../utils/audio';

interface AddGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddGameModal: React.FC<AddGameModalProps> = ({ isOpen, onClose }) => {
  const { addCustomGame } = useGames();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');
  const [category, setCategory] = useState('arcade');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !embedUrl.trim()) return;

    addCustomGame({
      title: title.trim(),
      description: description.trim() || 'Custom web game.',
      embedUrl: embedUrl.trim(),
      category,
    });

    sound.playCoin();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl animate-fade-in select-none">
      <div className="relative w-full max-w-md bg-slate-900/90 border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-300 mb-2">
            <Plus className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">
            Add Custom Game
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Embed any web game URL or HTML5 link into your library
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Game Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Slope, 1v1.lol, Paper.io..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 bg-white/5 border border-white/10 focus:border-blue-400 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Embed URL</label>
            <input
              type="url"
              required
              placeholder="https://..."
              value={embedUrl}
              onChange={(e) => setEmbedUrl(e.target.value)}
              className="w-full px-3.5 py-2 bg-white/5 border border-white/10 focus:border-blue-400 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-900 border border-white/10 focus:border-blue-400 rounded-xl text-white text-xs focus:outline-none"
            >
              <option value="arcade">Arcade</option>
              <option value="action">Action</option>
              <option value="runner">Runner</option>
              <option value="puzzle">Puzzle</option>
              <option value="retro">Retro</option>
              <option value="custom">Other</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">Description (optional)</label>
            <textarea
              rows={2}
              placeholder="Controls or details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2 bg-white/5 border border-white/10 focus:border-blue-400 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
          >
            <Sparkles className="w-4 h-4" />
            Add to Games Library
          </button>
        </form>
      </div>
    </div>
  );
};
