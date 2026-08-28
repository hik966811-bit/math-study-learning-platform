import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, ArrowUp, ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';
import { sound } from '../../../utils/audio';

interface NeonSnakeProps {
  onGameOver: (score: number) => void;
  onScoreUpdate?: (score: number) => void;
}

const GRID_SIZE = 20;

export const NeonSnake: React.FC<NeonSnakeProps> = ({ onGameOver, onScoreUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const gameState = useRef({
    snake: [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ],
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    food: { x: 15, y: 10, isSpecial: false },
    particles: [] as Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number }>,
    speed: 110,
    lastTick: 0,
    scoreVal: 0,
  });

  const spawnFood = useCallback((cols: number, rows: number) => {
    const s = gameState.current;
    let newX: number, newY: number;
    let onSnake: boolean;

    do {
      newX = Math.floor(Math.random() * cols);
      newY = Math.floor(Math.random() * rows);
      onSnake = s.snake.some((segment) => segment.x === newX && segment.y === newY);
    } while (onSnake);

    s.food = {
      x: newX,
      y: newY,
      isSpecial: Math.random() < 0.25,
    };
  }, []);

  const startGame = () => {
    const s = gameState.current;
    s.snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    s.direction = { x: 1, y: 0 };
    s.nextDirection = { x: 1, y: 0 };
    s.particles = [];
    s.speed = 110;
    s.scoreVal = 0;
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    spawnFood(40, 25);
    sound.playClick();
  };

  const handleKey = useCallback((e: KeyboardEvent) => {
    const s = gameState.current;
    const { x, y } = s.direction;

    if ((e.code === 'ArrowUp' || e.code === 'KeyW') && y === 0) {
      e.preventDefault();
      s.nextDirection = { x: 0, y: -1 };
    } else if ((e.code === 'ArrowDown' || e.code === 'KeyS') && y === 0) {
      e.preventDefault();
      s.nextDirection = { x: 0, y: 1 };
    } else if ((e.code === 'ArrowLeft' || e.code === 'KeyA') && x === 0) {
      e.preventDefault();
      s.nextDirection = { x: -1, y: 0 };
    } else if ((e.code === 'ArrowRight' || e.code === 'KeyD') && x === 0) {
      e.preventDefault();
      s.nextDirection = { x: 1, y: 0 };
    } else if (e.code === 'Space' && !isPlaying) {
      e.preventDefault();
      startGame();
    }
  }, [isPlaying]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = Math.floor(canvas.width / GRID_SIZE);
    const rows = Math.floor(canvas.height / GRID_SIZE);

    let animId: number;

    const loop = (timestamp: number) => {
      const s = gameState.current;

      if (!s.lastTick) s.lastTick = timestamp;
      const delta = timestamp - s.lastTick;

      if (delta >= s.speed) {
        s.lastTick = timestamp;
        s.direction = s.nextDirection;

        const head = s.snake[0];
        let nextX = head.x + s.direction.x;
        let nextY = head.y + s.direction.y;

        if (nextX < 0) nextX = cols - 1;
        if (nextX >= cols) nextX = 0;
        if (nextY < 0) nextY = rows - 1;
        if (nextY >= rows) nextY = 0;

        const selfHit = s.snake.some((seg, idx) => idx !== 0 && seg.x === nextX && seg.y === nextY);
        if (selfHit) {
          sound.playGameOver();
          setIsPlaying(false);
          setGameOver(true);
          onGameOver(s.scoreVal);
          return;
        }

        const newHead = { x: nextX, y: nextY };
        s.snake.unshift(newHead);

        if (nextX === s.food.x && nextY === s.food.y) {
          sound.playCoin();
          const bonus = s.food.isSpecial ? 30 : 10;
          s.scoreVal += bonus;
          setScore(s.scoreVal);
          onScoreUpdate?.(s.scoreVal);

          if (s.speed > 55) s.speed -= 1.5;

          const color = s.food.isSpecial ? '#fbbf24' : '#60a5fa';
          for (let i = 0; i < 12; i++) {
            s.particles.push({
              x: nextX * GRID_SIZE + GRID_SIZE / 2,
              y: nextY * GRID_SIZE + GRID_SIZE / 2,
              vx: (Math.random() - 0.5) * 6,
              vy: (Math.random() - 0.5) * 6,
              color,
              life: 20,
            });
          }

          spawnFood(cols, rows);
        } else {
          s.snake.pop();
        }
      }

      const W = canvas.width;
      const H = canvas.height;

      ctx.fillStyle = '#060d1f';
      ctx.fillRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Food
      ctx.fillStyle = s.food.isSpecial ? '#fbbf24' : '#60a5fa';
      ctx.beginPath();
      ctx.arc(
        s.food.x * GRID_SIZE + GRID_SIZE / 2,
        s.food.y * GRID_SIZE + GRID_SIZE / 2,
        GRID_SIZE / 2 - 2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Snake
      s.snake.forEach((seg, idx) => {
        const isHead = idx === 0;
        ctx.fillStyle = isHead ? '#ffffff' : '#3b82f6';
        ctx.fillRect(
          seg.x * GRID_SIZE + 2,
          seg.y * GRID_SIZE + 2,
          GRID_SIZE - 4,
          GRID_SIZE - 4
        );
      });

      // Particles
      for (let i = s.particles.length - 1; i >= 0; i--) {
        const p = s.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 3, 3);
        if (p.life <= 0) s.particles.splice(i, 1);
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, onGameOver, onScoreUpdate, spawnFood]);

  const setDir = (x: number, y: number) => {
    const s = gameState.current;
    if ((x !== 0 && s.direction.x === 0) || (y !== 0 && s.direction.y === 0)) {
      s.nextDirection = { x, y };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-[16/10] max-h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full object-contain"
        />

        {/* Score Overlay */}
        <div className="absolute top-4 left-6 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            <span className="text-[10px] font-mono text-slate-300 block">ОЧКИ</span>
            <span className="text-xl font-bold font-mono text-white">{score}</span>
          </div>
        </div>

        {/* Start / Game Over */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
            {gameOver ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  ИГРА ЗАВЕРШЕНА
                </h2>
                <p className="text-slate-300 mb-4 text-base">
                  Длина змейки: <span className="text-blue-400 font-bold font-mono text-2xl">{score}</span>
                </p>
                <button
                  onClick={startGame}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  Повторить (Пробел)
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide">
                  NEON SNAKE X
                </h1>
                <p className="text-slate-300 max-w-md mb-6 text-xs sm:text-sm">
                  Управляйте змейкой, собирайте сферы и ставьте новые рекорды.
                </p>
                <button
                  onClick={startGame}
                  className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  НАЧАТЬ
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* D-PAD with Lucide Icons */}
      <div className="flex flex-col items-center gap-2 mt-4 sm:hidden">
        <button
          onClick={() => setDir(0, -1)}
          className="w-12 h-12 bg-white/10 border border-white/10 text-white flex items-center justify-center rounded-xl"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => setDir(-1, 0)}
            className="w-12 h-12 bg-white/10 border border-white/10 text-white flex items-center justify-center rounded-xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setDir(0, 1)}
            className="w-12 h-12 bg-white/10 border border-white/10 text-white flex items-center justify-center rounded-xl"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
          <button
            onClick={() => setDir(1, 0)}
            className="w-12 h-12 bg-white/10 border border-white/10 text-white flex items-center justify-center rounded-xl"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
