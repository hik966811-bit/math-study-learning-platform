import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { sound } from '../../../utils/audio';

interface TowerStackProps {
  onGameOver: (score: number) => void;
  onScoreUpdate?: (score: number) => void;
}

interface Block {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export const TowerStack: React.FC<TowerStackProps> = ({ onGameOver, onScoreUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const gameState = useRef({
    stack: [] as Block[],
    currentBlock: {
      x: 0,
      y: 0,
      width: 200,
      height: 24,
      vx: 4,
      direction: 1,
      color: '#3b82f6',
    },
    cameraY: 0,
    combo: 0,
    scoreVal: 0,
  });

  const getBlockColor = (index: number) => {
    const colors = [
      '#3b82f6', '#60a5fa', '#818cf8', '#a855f7', '#ec4899', '#f43f5e', '#fbbf24', '#34d399'
    ];
    return colors[index % colors.length];
  };

  const placeBlock = useCallback(() => {
    const s = gameState.current;
    if (!isPlaying) return;

    const current = s.currentBlock;
    const top = s.stack[s.stack.length - 1];

    const diff = current.x - top.x;
    const tolerance = 4;

    if (Math.abs(diff) <= tolerance) {
      s.combo++;
      sound.playLevelUp();
      current.x = top.x;
      s.stack.push({
        x: current.x,
        y: current.y,
        width: current.width,
        height: current.height,
        color: current.color,
      });
    } else if (Math.abs(diff) < current.width) {
      s.combo = 0;
      sound.playCoin();

      const newWidth = current.width - Math.abs(diff);
      const newX = diff > 0 ? current.x : top.x;

      s.stack.push({
        x: newX,
        y: current.y,
        width: newWidth,
        height: current.height,
        color: current.color,
      });

      current.width = newWidth;
    } else {
      sound.playGameOver();
      setIsPlaying(false);
      setGameOver(true);
      setHighScore((prev) => Math.max(prev, s.scoreVal));
      onGameOver(s.scoreVal);
      return;
    }

    s.scoreVal++;
    setScore(s.scoreVal);
    onScoreUpdate?.(s.scoreVal);

    const nextIdx = s.stack.length;
    s.currentBlock = {
      x: 0,
      y: top.y - 28,
      width: s.stack[s.stack.length - 1].width,
      height: 24,
      vx: Math.min(8, 4 + nextIdx * 0.15),
      direction: 1,
      color: getBlockColor(nextIdx),
    };
  }, [isPlaying, onGameOver, onScoreUpdate]);

  const startGame = () => {
    const s = gameState.current;
    const baseBlock: Block = {
      x: 300,
      y: 360,
      width: 200,
      height: 26,
      color: '#3b82f6',
    };

    s.stack = [baseBlock];
    s.currentBlock = {
      x: 50,
      y: 360 - 28,
      width: 200,
      height: 24,
      vx: 4.5,
      direction: 1,
      color: getBlockColor(1),
    };
    s.cameraY = 0;
    s.combo = 0;
    s.scoreVal = 0;

    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    sound.playClick();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Space', 'KeyW', 'ArrowUp'].includes(e.code)) {
        e.preventDefault();
        if (!isPlaying) startGame();
        else placeBlock();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, placeBlock]);

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

      const curr = s.currentBlock;
      curr.x += curr.vx * curr.direction;
      if (curr.x <= 20) {
        curr.x = 20;
        curr.direction = 1;
      } else if (curr.x + curr.width >= W - 20) {
        curr.x = W - 20 - curr.width;
        curr.direction = -1;
      }

      const targetCamY = Math.max(0, (s.stack.length - 8) * 28);
      s.cameraY += (targetCamY - s.cameraY) * 0.1;

      ctx.fillStyle = '#060d1f';
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(0, s.cameraY);

      s.stack.forEach((b) => {
        ctx.fillStyle = b.color;
        ctx.fillRect(b.x, b.y, b.width, b.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(b.x, b.y, b.width, 3);
      });

      ctx.fillStyle = curr.color;
      ctx.fillRect(curr.x, curr.y, curr.width, curr.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillRect(curr.x, curr.y, curr.width, 3);

      ctx.restore();

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto select-none">
      <div
        onClick={() => {
          if (!isPlaying) startGame();
          else placeBlock();
        }}
        className="relative w-full aspect-[16/10] max-h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
      >
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full object-contain"
        />

        {/* Score */}
        <div className="absolute top-4 left-6 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            <span className="text-[10px] font-mono text-blue-300 block">FLOORS</span>
            <span className="text-xl font-bold font-mono text-white">{score}</span>
          </div>
        </div>

        {/* Start / Game Over */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
            {gameOver ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                  TOWER COLLAPSED
                </h2>
                <p className="text-slate-300 mb-4 text-base">
                  Height Reached: <span className="text-blue-400 font-bold font-mono text-2xl">{score} Floors</span>
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startGame();
                  }}
                  className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again (Space / Click)
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-wide">
                  TOWER STACKER
                </h1>
                <p className="text-slate-300 max-w-md mb-6 text-xs sm:text-sm">
                  Stop the moving blocks directly on top of each other with perfect accuracy.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startGame();
                  }}
                  className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  START BUILDING
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
