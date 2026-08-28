import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { sound } from '../../utils/audio';

export const AuthModal: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoading(true);
    sound.playClick();

    try {
      if (isLogin) {
        await login(username);
      } else {
        await register(username, 'https://api.dicebear.com/7.x/pixel-art/svg?seed=' + username);
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-fade-in">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-orange-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Auth Card */}
      <div className="relative w-full max-w-md mx-4 animate-slide-up">
        <div className="bg-zinc-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden">
          {/* Header with avatar */}
          <div className="pt-8 pb-6 px-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-zinc-100 mb-2 animate-fade-in">
              Log In or Register to Continue
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="px-8 mb-6">
            <div className="flex gap-2 bg-zinc-800/50 rounded-2xl p-1">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  sound.playClick();
                }}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isLogin
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform scale-105'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                LOG IN
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  sound.playClick();
                }}
                className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  !isLogin
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform scale-105'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                REGISTER
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
            {/* Username field */}
            <div className="space-y-2 animate-slide-up animation-delay-100">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Username or Email
              </label>
              <div className="relative group">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username or email"
                  className="w-full px-4 py-3.5 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:bg-zinc-800 transition-all duration-300 pr-12 hover:border-zinc-600"
                  required
                />
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-orange-500 transition-colors duration-300" />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2 animate-slide-up animation-delay-200">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Password
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full px-4 py-3.5 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:bg-zinc-800 transition-all duration-300 pr-12 hover:border-zinc-600"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                    sound.playClick();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animate-slide-up animation-delay-300"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                'LOG IN'
              )}
            </button>

            {/* Footer links */}
            <div className="flex items-center justify-center gap-4 text-xs text-zinc-500 pt-4 animate-fade-in animation-delay-400">
              <button type="button" className="hover:text-orange-500 transition-colors duration-300">
                Forgot password?
              </button>
              <span>•</span>
              <button type="button" className="hover:text-orange-500 transition-colors duration-300">
                Email me a code
              </button>
            </div>

            <p className="text-[10px] text-zinc-600 text-center pt-2 animate-fade-in animation-delay-500">
              By logging in or creating an account, you agree to our{' '}
              <span className="text-orange-500 hover:text-orange-400 transition-colors cursor-pointer">Terms of Service</span> &{' '}
              <span className="text-orange-500 hover:text-orange-400 transition-colors cursor-pointer">Privacy Policy</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
