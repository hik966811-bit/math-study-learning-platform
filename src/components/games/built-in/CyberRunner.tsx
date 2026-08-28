import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, ShieldAlert } from 'lucide-react';
import { sound } from '../../../utils/audio';

interface CyberRunnerProps {
  onGameOver: (score: number) => void;
  onScoreUpdate?: (score: number) => void;
}

export const CyberRunner: React.FC<CyberRunnerProps> = ({ onGameOver, onScoreUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const gameState = useRef({
    player: {
      x: 80,
      y: 260,
      width: 36,
      height: 52,
      vy: 0,
      isGrounded: true,
      jumpCount: 0,
      isSliding: false,
      slideTimer: 0,
      trail: [] as Array<{ x: number; y: number; alpha: number }>
    },
    obstacles: [] as Array<{ x: number; y: number; width: number; height: number; type: 'low' | 'high' | 'drone'; passed: boolean }>,
    coins: [] as Array<{ x: number; y: number; size: number; collected: boolean }>,
    particles: [] as Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number }>,
    speed: 6.5,
    distance: 0,
    spawnTimer: 0,
    coinSpawnTimer: 0,
    groundY: 310,
    scoreVal: 0,
  });

  const jump = useCallback(() => {
    const s = gameState.current;
    if (s.player.jumpCount < 2) {
      s.player.vy = -12.5;
      s.player.isGrounded = false;
      s.player.jumpCount++;
      s.player.isSliding = false;
      sound.playLaser();
    }
  }, []);

  const slide = useCallback(() => {
    const s = gameState.current;
    if (s.player.isGrounded && !s.player.isSliding) {
      s.player.isSliding = true;
      s.player.height = 26;
      s.player.y = s.groundY - 26;
      s.player.slideTimer = 25;
      sound.playHover();
    }
  }, []);

  const startGame = () => {
    const s = gameState.current;
    s.player.y = 260;
    s.player.height = 52;
    s.player.vy = 0;
    s.player.jumpCount = 0;
    s.player.isSliding = false;
    s.player.trail = [];
    s.obstacles = [];
    s.coins = [];
    s.particles = [];
    s.speed = 6.5;
    s.distance = 0;
    s.scoreVal = 0;
    s.spawnTimer = 40;
    s.coinSpawnTimer = 30;

    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    sound.playClick();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        if (!isPlaying) {
          startGame();
        } else {
          jump();
        }
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault();
        if (isPlaying) {
          slide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, jump, slide]);

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const gameLoop = () => {
      const s = gameState.current;
      const W = canvas.width;
      const H = canvas.height;

      // Background
      ctx.fillStyle = '#060d1f';
      ctx.fillRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridOffset = (s.distance * 0.5) % 40;
      for (let x = -gridOffset; x < W; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      // Horizon Line
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, s.groundY);
      ctx.lineTo(W, s.groundY);
      ctx.stroke();

      // Ground Fill
      ctx.fillStyle = '#0a1630';
      ctx.fillRect(0, s.groundY, W, H - s.groundY);

      // Physics & Player
      s.distance += s.speed;
      s.scoreVal = Math.floor(s.distance / 10);
      setScore(s.scoreVal);
      onScoreUpdate?.(s.scoreVal);

      if (s.speed < 14) {
        s.speed += 0.0015;
      }

      s.player.vy += 0.65;
      s.player.y += s.player.vy;

      const baseHeight = s.player.isSliding ? 26 : 52;
      if (s.player.y + baseHeight >= s.groundY) {
        s.player.y = s.groundY - baseHeight;
        s.player.vy = 0;
        s.player.isGrounded = true;
        s.player.jumpCount = 0;
      }

      if (s.player.isSliding) {
        s.player.slideTimer--;
        if (s.player.slideTimer <= 0) {
          s.player.isSliding = false;
          s.player.height = 52;
          s.player.y = s.groundY - 52;
        }
      }

      // Player Trail
      s.player.trail.push({ x: s.player.x, y: s.player.y, alpha: 0.6 });
      if (s.player.trail.length > 6) s.player.trail.shift();

      s.player.trail.forEach((t) => {
        t.alpha -= 0.09;
        if (t.alpha > 0) {
          ctx.fillStyle = `rgba(96, 165, 250, ${t.alpha * 0.4})`;
          ctx.fillRect(t.x - 3, t.y, s.player.width, baseHeight);
        }
      });

      // Draw Player
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(s.player.x, s.player.y, s.player.width, baseHeight);

      // Visor
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(s.player.x + (s.player.isSliding ? 18 : 16), s.player.y + (s.player.isSliding ? 6 : 10), 14, 8);

      // Obstacles
      s.spawnTimer--;
      if (s.spawnTimer <= 0) {
        const types: Array<'low' | 'high' | 'drone'> = ['low', 'high', 'drone'];
        const chosenType = types[Math.floor(Math.random() * types.length)];
        
        let obsY = s.groundY - 45;
        let obsW = 28;
        let obsH = 45;

        if (chosenType === 'high') {
          obsH = 65;
          obsY = s.groundY - 65;
        } else if (chosenType === 'drone') {
          obsW = 38;
          obsH = 26;
          obsY = s.groundY - 80;
        }

        s.obstacles.push({
          x: W + 50,
          y: obsY,
          width: obsW,
          height: obsH,
          type: chosenType,
          passed: false,
        });

        s.spawnTimer = Math.floor(Math.random() * 45) + Math.max(35, 75 - Math.floor(s.speed * 2));
      }

      // Energy Coins
      s.coinSpawnTimer--;
      if (s.coinSpawnTimer <= 0) {
        s.coins.push({
          x: W + 30,
          y: s.groundY - (Math.random() > 0.5 ? 90 : 35),
          size: 14,
          collected: false,
        });
        s.coinSpawnTimer = Math.floor(Math.random() * 60) + 40;
      }

      for (let i = s.coins.length - 1; i >= 0; i--) {
        const c = s.coins[i];
        c.x -= s.speed;

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size / 2, 0, Math.PI * 2);
        ctx.fill();

        if (
          !c.collected &&
          s.player.x < c.x + c.size &&
          s.player.x + s.player.width > c.x - c.size &&
          s.player.y < c.y + c.size &&
          s.player.y + baseHeight > c.y - c.size
        ) {
          c.collected = true;
          s.distance += 150;
          sound.playCoin();
          for (let p = 0; p < 8; p++) {
            s.particles.push({
              x: c.x,
              y: c.y,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              color: '#fbbf24',
              life: 20
            });
          }
        }

        if (c.x < -20 || c.collected) {
          s.coins.splice(i, 1);
        }
      }

      let collision = false;
      for (let i = s.obstacles.length - 1; i >= 0; i--) {
        const obs = s.obstacles[i];
        obs.x -= s.speed;

        ctx.fillStyle = obs.type === 'drone' ? '#f43f5e' : '#818cf8';
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

        const hitMargin = 6;
        if (
          s.player.x + hitMargin < obs.x + obs.width &&
          s.player.x + s.player.width - hitMargin > obs.x &&
          s.player.y + hitMargin < obs.y + obs.height &&
          s.player.y + baseHeight - hitMargin > obs.y
        ) {
          collision = true;
        }

        if (obs.x < -50) {
          s.obstacles.splice(i, 1);
        }
      }

      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 4, 4);
        if (p.life <= 0) s.particles.splice(i, 1);
      }

      if (collision) {
        sound.playExplosion();
        setIsPlaying(false);
        setGameOver(true);
        setHighScore((prev) => Math.max(prev, s.scoreVal));
        onGameOver(s.scoreVal);
        return;
      }

      animId = requestAnimationFrame(gameLoop);
    };

    animId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, onGameOver, onScoreUpdate]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto select-none">
      <div className="relative w-full aspect-[16/9] max-h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <canvas
          ref={canvasRef}
          width={800}
          height={450}
          className="w-full h-full object-contain"
        />

        {/* Score Overlay */}
        <div className="absolute top-4 left-6 flex items-center gap-3 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            <span className="text-[10px] font-mono text-blue-300 block uppercase">DISTANCE</span>
            <span className="text-xl font-bold font-mono text-white">{score} <span className="text-xs text-blue-400">M</span></span>
          </div>
          {highScore > 0 && (
            <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
              <span className="text-[10px] font-mono text-amber-300 block uppercase">RECORD</span>
              <span className="text-xl font-bold font-mono text-amber-300">{highScore}</span>
            </div>
          )}
        </div>

        {/* Start / Game Over */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
            {gameOver ? (
              <>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mb-3 text-rose-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  CRASHED!
                </h2>
                <p className="text-slate-300 mb-4 text-base">
                  Final Score: <span className="text-blue-400 font-bold font-mono text-2xl">{score}</span>
                </p>
                <button
                  onClick={startGame}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  Play Again (Space)
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide">
                  CYBER RUNNER 2077
                </h1>
                <p className="text-slate-300 max-w-md mb-6 text-xs sm:text-sm">
                  Dodge obstacles, slide under laser drones, and collect energy crystals at top speed.
                </p>
                <button
                  onClick={startGame}
                  className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  START GAME
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center justify-center gap-3 mt-3 w-full sm:hidden">
        <button
          onClick={jump}
          className="flex-1 py-3 bg-blue-600/30 border border-blue-500/40 text-white font-semibold rounded-xl"
        >
          Jump
        </button>
        <button
          onClick={slide}
          className="flex-1 py-3 bg-indigo-600/30 border border-indigo-500/40 text-white font-semibold rounded-xl"
        >
          Slide
        </button>
      </div>
    </div>
  );
};
