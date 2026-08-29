import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Search,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Plus,
  Home,
  Bookmark,
  Maximize2,
  Minimize2,
  Shield,
  AlertTriangle,
  Globe,
  Loader2,
  MessageCircle,
  BookOpen,
  Code,
  Gamepad2,
  Camera,
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface WebBrowserModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

interface BrowserTab {
  id: string;
  title: string;
  url: string;
  proxyUrl: string;
  loading: boolean;
  error: boolean;
  history: string[];
  historyIndex: number;
}

const QUICK_SHORTCUTS = [
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com', Icon: Search, color: 'from-orange-500/20 to-amber-500/20 border-orange-500/30' },
  { name: 'YouTube', url: 'https://www.youtube.com', Icon: Camera, color: 'from-red-500/20 to-rose-500/20 border-red-500/30' },
  { name: 'Discord', url: 'https://discord.com/app', Icon: MessageCircle, color: 'from-indigo-500/20 to-blue-500/20 border-indigo-500/30' },
  { name: 'Reddit', url: 'https://www.reddit.com', Icon: Globe, color: 'from-orange-600/20 to-red-600/20 border-orange-600/30' },
  { name: 'Wikipedia', url: 'https://en.wikipedia.org', Icon: BookOpen, color: 'from-slate-500/20 to-gray-500/20 border-slate-500/30' },
  { name: 'Google', url: 'https://www.google.com', Icon: Search, color: 'from-blue-500/20 to-emerald-500/20 border-blue-500/30' },
  { name: 'GitHub', url: 'https://github.com', Icon: Code, color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30' },
  { name: 'Twitch', url: 'https://www.twitch.tv', Icon: Gamepad2, color: 'from-purple-600/20 to-indigo-600/20 border-purple-600/30' },
];

export const WebBrowserModal: React.FC<WebBrowserModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
}) => {
  const [tabs, setTabs] = useState<BrowserTab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string>('');
  const [urlInput, setUrlInput] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});
  const suggestionsDebounceRef = useRef<any>(null);

  const formatUrl = (input: string): string => {
    let target = input.trim();
    if (!target) return 'https://duckduckgo.com';
    if (!target.startsWith('http://') && !target.startsWith('https://')) {
      if (target.includes('.') && !target.includes(' ') && !target.includes('?')) {
        target = 'https://' + target;
      } else {
        target = `https://duckduckgo.com/?q=${encodeURIComponent(target)}`;
      }
    }
    return target;
  };

  const getProxyUrl = (targetUrl: string): string => {
    const formatted = formatUrl(targetUrl);
    return `/proxy?url=${encodeURIComponent(formatted)}`;
  };

  const fetchSuggestions = async (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(`https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data[1]) {
          setSuggestions(data[1].slice(0, 6));
        }
      }
    } catch {
      setSuggestions([
        query,
        `${query} online`,
        `${query} wiki`,
        `${query} unblocked`,
      ]);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    if (tabs.length === 0) {
      const target = initialQuery ? formatUrl(initialQuery) : 'https://duckduckgo.com';
      const tabId = 'tab-' + Date.now().toString(36);
      const newTab: BrowserTab = {
        id: tabId,
        title: initialQuery ? initialQuery.slice(0, 20) : 'DuckDuckGo',
        url: target,
        proxyUrl: getProxyUrl(target),
        loading: true,
        error: false,
        history: [target],
        historyIndex: 0,
      };
      setTabs([newTab]);
      setActiveTabId(tabId);
      setUrlInput(target);
    }
  }, [isOpen, initialQuery]);

  const activeTab = tabs.find((t) => t.id === activeTabId);

  useEffect(() => {
    if (activeTab && document.activeElement?.tagName !== 'INPUT') {
      setUrlInput(activeTab.url);
    }
  }, [activeTabId, activeTab?.url]);

  if (!isOpen) return null;

  const createNewTab = (rawUrl: string = 'https://duckduckgo.com') => {
    sound.playClick();
    const formatted = formatUrl(rawUrl);
    const newId = 'tab-' + Date.now().toString(36);
    const newTab: BrowserTab = {
      id: newId,
      title: 'DuckDuckGo',
      url: formatted,
      proxyUrl: getProxyUrl(formatted),
      loading: true,
      error: false,
      history: [formatted],
      historyIndex: 0,
    };
    setTabs((prev) => [...prev, newTab]);
    setActiveTabId(newId);
    setUrlInput(formatted);
    setShowSuggestions(false);
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    setTabs((prev) => {
      const remaining = prev.filter((t) => t.id !== tabId);
      if (remaining.length === 0) {
        setTimeout(onClose, 0);
        return prev;
      }
      if (activeTabId === tabId) {
        const nextActive = remaining[remaining.length - 1];
        setActiveTabId(nextActive.id);
        setUrlInput(nextActive.url);
      }
      return remaining;
    });
  };

  const handleNavigate = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;
    sound.playClick();
    setShowSuggestions(false);

    const formatted = formatUrl(trimmed);
    const proxy = getProxyUrl(formatted);
    setUrlInput(formatted);

    setTabs((prev) =>
      prev.map((t) => {
        if (t.id === activeTabId) {
          const newHistory = [...t.history.slice(0, t.historyIndex + 1), formatted];
          return {
            ...t,
            url: formatted,
            title: formatted.replace(/^https?:\/\/(www\.)?/, '').slice(0, 20),
            proxyUrl: proxy,
            loading: true,
            error: false,
            history: newHistory,
            historyIndex: newHistory.length - 1,
          };
        }
        return t;
      })
    );

    const iframe = iframeRefs.current[activeTabId];
    if (iframe) {
      iframe.src = proxy;
    }
  };

  const handleBack = () => {
    if (!activeTab || activeTab.historyIndex <= 0) return;
    sound.playClick();
    const newIndex = activeTab.historyIndex - 1;
    const newUrl = activeTab.history[newIndex];
    setUrlInput(newUrl);

    setTabs((prev) =>
      prev.map((t) =>
        t.id === activeTabId
          ? {
              ...t,
              url: newUrl,
              title: newUrl.replace(/^https?:\/\/(www\.)?/, '').slice(0, 20),
              proxyUrl: getProxyUrl(newUrl),
              loading: true,
              error: false,
              historyIndex: newIndex,
            }
          : t
      )
    );
    const iframe = iframeRefs.current[activeTabId];
    if (iframe) iframe.src = getProxyUrl(newUrl);
  };

  const handleForward = () => {
    if (!activeTab || activeTab.historyIndex >= activeTab.history.length - 1) return;
    sound.playClick();
    const newIndex = activeTab.historyIndex + 1;
    const newUrl = activeTab.history[newIndex];
    setUrlInput(newUrl);

    setTabs((prev) =>
      prev.map((t) =>
        t.id === activeTabId
          ? {
              ...t,
              url: newUrl,
              title: newUrl.replace(/^https?:\/\/(www\.)?/, '').slice(0, 20),
              proxyUrl: getProxyUrl(newUrl),
              loading: true,
              error: false,
              historyIndex: newIndex,
            }
          : t
      )
    );
    const iframe = iframeRefs.current[activeTabId];
    if (iframe) iframe.src = getProxyUrl(newUrl);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNavigate(urlInput);
    }
  };

  const handleInputChange = (val: string) => {
    setUrlInput(val);
    if (suggestionsDebounceRef.current) clearTimeout(suggestionsDebounceRef.current);
    suggestionsDebounceRef.current = setTimeout(() => {
      fetchSuggestions(val);
      setShowSuggestions(true);
    }, 200);
  };

  const handleGoHome = () => {
    sound.playClick();
    handleNavigate('https://duckduckgo.com');
  };

  const handleReload = () => {
    sound.playClick();
    if (activeTab) {
      setTabs((prev) =>
        prev.map((t) => (t.id === activeTabId ? { ...t, loading: true, error: false } : t))
      );
      const iframe = iframeRefs.current[activeTabId];
      if (iframe) iframe.src = getProxyUrl(activeTab.url) + '&_t=' + Date.now();
    }
  };

  const handleIframeLoad = (tabId: string) => {
    setTabs((prev) =>
      prev.map((t) => {
        if (t.id === tabId) {
          let detectedTitle = t.title;
          try {
            const ifr = iframeRefs.current[tabId];
            if (ifr && ifr.contentDocument?.title) {
              detectedTitle = ifr.contentDocument.title;
            }
          } catch {}
          return { ...t, loading: false, title: detectedTitle, error: false };
        }
        return t;
      })
    );
  };

  const handleIframeError = (tabId: string) => {
    setTabs((prev) =>
      prev.map((t) => {
        if (t.id === tabId) {
          return { ...t, loading: false, error: true };
        }
        return t;
      })
    );
  };

  const canGoBack = activeTab && activeTab.historyIndex > 0;
  const canGoForward = activeTab && activeTab.historyIndex < activeTab.history.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-fade-in select-none">
      <div
        className={`relative w-full ${
          isFullscreen ? 'h-full max-w-none' : 'h-[92vh] max-w-6xl'
        } bg-[#0b1329] border border-white/15 rounded-3xl p-3 sm:p-4 shadow-2xl text-white flex flex-col overflow-hidden transition-all duration-200`}
      >
        {/* Top Browser Tabs Bar */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <div
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTabId(tab.id);
                    setUrlInput(tab.url);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs cursor-pointer transition-all max-w-[200px] min-w-[120px] justify-between ${
                    isActive
                      ? 'bg-blue-600/30 border border-blue-400/50 text-white font-semibold shadow-lg'
                      : 'bg-white/[0.03] hover:bg-white/10 text-slate-400 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    {tab.loading ? (
                      <Loader2 className="w-3.5 h-3.5 shrink-0 animate-spin text-blue-400" />
                    ) : tab.error ? (
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-rose-400" />
                    ) : (
                      <Globe className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    )}
                    <span className="truncate">{tab.title}</span>
                  </div>
                  <button
                    onClick={(e) => closeTab(tab.id, e)}
                    className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-white/10 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              );
            })}

            <button
              onClick={() => createNewTab()}
              title="New Tab"
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
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
        </div>

        {/* Omnibox & Navigation Controls */}
        <div className="flex items-center gap-2 mb-2 relative z-30">
          <div className="flex items-center gap-1 text-slate-400">
            <button
              onClick={handleGoHome}
              title="Home"
              className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
            </button>
            <button
              onClick={handleBack}
              disabled={!canGoBack}
              title="Back"
              className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleForward}
              disabled={!canGoForward}
              title="Forward"
              className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleReload}
              title="Reload"
              className="p-2 rounded-xl hover:bg-white/10 hover:text-white transition-colors"
            >
              <RotateCcw className={`w-4 h-4 ${activeTab?.loading ? 'animate-spin text-orange-400' : ''}`} />
            </button>
          </div>

          {/* Omnibox Input */}
          <div className="flex-1 relative">
            <div className="flex items-center w-full bg-slate-950/80 border border-white/15 focus-within:border-orange-400/70 rounded-2xl px-3 py-1.5 transition-all">
              <div className="flex items-center gap-1.5 text-orange-400 mr-2">
                <Search className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase font-bold text-orange-300">DDG</span>
              </div>
              <input
                type="text"
                value={urlInput}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyDown={handleInputKeyDown}
                onFocus={() => {
                  if (suggestions.length > 0) setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 250)}
                placeholder="Search DuckDuckGo or enter any URL..."
                className="flex-1 bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none font-sans"
              />
              <div className="flex items-center gap-1.5 ml-2">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Unblocker
                </span>
              </div>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-slate-900/95 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl">
                {suggestions.map((sug, idx) => (
                  <div
                    key={idx}
                    onMouseDown={() => handleNavigate(sug)}
                    className="flex items-center gap-2.5 px-4 py-2 hover:bg-orange-600/30 text-xs text-slate-200 hover:text-white cursor-pointer transition-colors border-b border-white/5 last:border-0"
                  >
                    <Search className="w-3.5 h-3.5 text-orange-400" />
                    <span>{sug}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Bookmarks Bar */}
        <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/5 overflow-x-auto scrollbar-none text-xs text-slate-300">
          <Bookmark className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          {QUICK_SHORTCUTS.map((bm) => {
            const Icon = bm.Icon;
            return (
              <button
                key={bm.name}
                onClick={() => handleNavigate(bm.url)}
                className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/5 hover:border-white/15 text-[11px] whitespace-nowrap transition-colors flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{bm.name}</span>
              </button>
            );
          })}
        </div>

        {/* Viewport Content: Real Live Proxied Web Page */}
        <div className="flex-1 bg-white rounded-2xl overflow-hidden border border-white/10 relative">
          {activeTab?.loading && (
            <div className="absolute inset-0 bg-slate-900/90 flex items-center justify-center z-10 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
                <span className="text-white/70 text-sm">Loading page...</span>
              </div>
            </div>
          )}
          {activeTab?.error && (
            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-4 text-center p-8">
                <AlertTriangle className="w-16 h-16 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Page Cannot Be Loaded</h3>
                <p className="text-white/60 text-sm max-w-md">This website may be blocking embedding or has security restrictions.</p>
                <button
                  onClick={handleReload}
                  className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-semibold transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
          {tabs.map((tab) => (
            <iframe
              key={tab.id}
              ref={(el) => {
                iframeRefs.current[tab.id] = el;
              }}
              src={tab.proxyUrl}
              title={tab.title}
              onLoad={() => handleIframeLoad(tab.id)}
              onError={() => handleIframeError(tab.id)}
              style={{ display: tab.id === activeTabId ? 'block' : 'none' }}
              className="w-full h-full border-0 bg-white"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-pointer-lock"
              allow="autoplay; camera; microphone; clipboard-read; clipboard-write; fullscreen; gamepad; encrypted-media; geolocation"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
