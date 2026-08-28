import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { sound } from '../../../utils/audio';

interface FlappyDroneProps {
  onGameOver: (score: number) => void;
  onScoreUpdate?: (score: number) => void;
}

export const FlappyDrone: React.FC<FlappyDroneProps> = ({ onGameOver, onScoreUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const gameState = useRef({
    drone: {
      x: 100,
      y: 200,
      vy: 0,
      radius: 16,
      angle: 0,
      particles: [] as Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number }>,
    },
    pipes: [] as Array<{ x: number; topHeight: number; bottomY: number; width: number; passed: boolean }>,
    gravity: 0.38,
    jumpForce: -6.8,
    pipeSpeed: 3.2,
    pipeGap: 140,
    spawnTimer: 0,
    scoreVal: 0,
  });

  const flap = useCallback(() => {
    const s = gameState.current;
    s.drone.vy = s.jumpForce;
    sound.playHover();

    for (let i = 0; i < 6; i++) {
      s.drone.particles.push({
        x: s.drone.x - 12,
        y: s.drone.y + 4,
        vx: (Math.random() - 1) * 3,
        vy: (Math.random() - 0.5) * 4,
        color: '#60a5fa',
        life: 15,
      });
    }
  }, []);

  const startGame = () => {
    const s = gameState.current;
    s.drone.y = 200;
    s.drone.vy = 0;
    s.drone.angle = 0;
    s.drone.particles = [];
    s.pipes = [];
    s.spawnTimer = 20;
    s.scoreVal = 0;
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    sound.playClick();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        if (!isPlaying) startGame();
        else flap();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, flap]);

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const loop = () => {
      const s = gameState.current;
      const W = canvas.width;
      const H = canvas.height;

      // Clear background
      ctx.fillStyle = '#060d1f';
      ctx.fillRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 35) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      // Physics
      s.drone.vy += s.gravity;
      s.drone.y += s.drone.vy;
      s.drone.angle = Math.min(Math.PI / 4, Math.max(-Math.PI / 4, s.drone.vy * 0.08));

      s.spawnTimer--;
      if (s.spawnTimer <= 0) {
        const top = Math.floor(Math.random() * (H - s.pipeGap - 120)) + 40;
        s.pipes.push({
          x: W + 20,
          topHeight: top,
          bottomY: top + s.pipeGap,
          width: 55,
          passed: false,
        });
        s.spawnTimer = 85;
      }

      let collision = false;
      for (let i = s.pipes.length - 1; i >= 0; i--) {
        const p = s.pipes[i];
        p.x -= s.pipeSpeed;

        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(p.x, 0, p.width, p.topHeight);
        ctx.fillRect(p.x, p.bottomY, p.width, H - p.bottomY);

        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(p.x, 0, p.width, p.topHeight);
        ctx.strokeRect(p.x, p.bottomY, p.width, H - p.bottomY);

        if (!p.passed && p.x + p.width < s.drone.x) {
          p.passed = true;
          s.scoreVal++;
          setScore(s.scoreVal);
          onScoreUpdate?.(s.scoreVal);
          sound.playCoin();
        }

        const d = s.drone;
        const inX = d.x + d.radius > p.x && d.x - d.radius < p.x + p.width;
        if (inX && (d.y - d.radius < p.topHeight || d.y + d.radius > p.bottomY)) {
          collision = true;
        }

        if (p.x < -70) {
          s.pipes.splice(i, 1);
        }
      }

      if (s.drone.y - s.drone.radius < 0 || s.drone.y + s.drone.radius > H) {
        collision = true;
      }

      // Draw Drone Particles
      for (let i = s.drone.particles.length - 1; i >= 0; i--) {
        const pt = s.drone.particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life--;
        ctx.fillStyle = pt.color;
        ctx.fillRect(pt.x, pt.y, 3, 3);
        if (pt.life <= 0) s.drone.particles.splice(i, 1);
      }

      // Draw Drone
      ctx.save();
      ctx.translate(s.drone.x, s.drone.y);
      ctx.rotate(s.drone.angle);

      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.ellipse(0, 0, 18, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(8, 0, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-16, -14);
      ctx.lineTo(16, -14);
      ctx.stroke();

      ctx.restore();

      if (collision) {
        sound.playGameOver();
        setIsPlaying(false);
        setGameOver(true);
        onGameOver(s.scoreVal);
        return;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, onGameOver, onScoreUpdate]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto select-none">
      <div
        onClick={() => {
          if (!isPlaying) startGame();
          else flap();
        }}
        className="relative w-full aspect-[16/9] max-h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
      >
        <canvas
          ref={canvasRef}
          width={800}
          height={450}
          className="w-full h-full object-contain"
        />

        {/* Score */}
        <div className="absolute top-4 left-6 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            <span className="text-[10px] font-mono text-blue-300 block">SCORE</span>
            <span className="text-xl font-bold font-mono text-white">{score}</span>
          </div>
        </div>

        {/* Start / Game Over */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
            {gameOver ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  DRONE CRASHED
                </h2>
                <p className="text-slate-300 mb-4 text-base">
                  Score: <span className="text-blue-400 font-bold font-mono text-2xl">{score}</span>
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startGame();
                  }}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  Restart (Space / Click)
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide">
                  FLAPPY DRONE
                </h1>
                <p className="text-slate-300 max-w-md mb-6 text-xs sm:text-sm">
                  Press Space or click to activate thrusters and navigate the energy barrier.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startGame();
                  }}
                  className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  LAUNCH
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
