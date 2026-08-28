import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, Crosshair, Shield, Heart } from 'lucide-react';
import { sound } from '../../../utils/audio';

interface SpaceInvadersProps {
  onGameOver: (score: number) => void;
  onScoreUpdate?: (score: number) => void;
}

export const SpaceInvaders: React.FC<SpaceInvadersProps> = ({ onGameOver, onScoreUpdate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [wave, setWave] = useState<number>(1);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const gameState = useRef({
    player: {
      x: 380,
      y: 400,
      width: 44,
      height: 30,
      speed: 7,
      shootCooldown: 0,
      hasShield: false,
      shieldTimer: 0,
      weaponLevel: 1,
    },
    keys: { left: false, right: false, shoot: false },
    bullets: [] as Array<{ x: number; y: number; vx: number; vy: number; fromPlayer: boolean; color: string }>,
    enemies: [] as Array<{ x: number; y: number; width: number; height: number; hp: number; maxHp: number; color: string; shootTimer: number; type: 'grunt' | 'scout' | 'boss' }>,
    particles: [] as Array<{ x: number; y: number; vx: number; vy: number; color: string; life: number }>,
    stars: [] as Array<{ x: number; y: number; speed: number; size: number; alpha: number }>,
    powerups: [] as Array<{ x: number; y: number; type: 'tri' | 'shield'; vy: number }>,
    scoreVal: 0,
    waveNum: 1,
    enemyDirection: 1,
    enemyStepDown: 0,
  });

  const initStars = (W: number, H: number) => {
    gameState.current.stars = [];
    for (let i = 0; i < 60; i++) {
      gameState.current.stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        speed: Math.random() * 2 + 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.8 + 0.2,
      });
    }
  };

  const spawnWave = useCallback((waveNum: number, W: number) => {
    const enemies = [];
    const rows = Math.min(5, 2 + waveNum);
    const cols = 8;
    const startX = 60;
    const startY = 50;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isBoss = waveNum % 3 === 0 && r === 0 && (c === 3 || c === 4);
        enemies.push({
          x: startX + c * 80,
          y: startY + r * 45,
          width: isBoss ? 55 : 36,
          height: isBoss ? 40 : 28,
          hp: isBoss ? 15 : r === 0 ? 3 : 1,
          maxHp: isBoss ? 15 : r === 0 ? 3 : 1,
          color: isBoss ? '#f43f5e' : r === 0 ? '#818cf8' : r === 1 ? '#60a5fa' : '#34d399',
          shootTimer: Math.floor(Math.random() * 120) + 60,
          type: isBoss ? 'boss' : (r === 0 ? 'scout' : 'grunt') as 'boss' | 'scout' | 'grunt',
        });
      }
    }
    gameState.current.enemies = enemies;
    setWave(waveNum);
  }, []);

  const startGame = () => {
    const s = gameState.current;
    s.player.x = 380;
    s.player.y = 400;
    s.player.weaponLevel = 1;
    s.player.hasShield = false;
    s.bullets = [];
    s.particles = [];
    s.powerups = [];
    s.scoreVal = 0;
    s.waveNum = 1;
    setScore(0);
    setLives(3);
    setGameOver(false);
    setIsPlaying(true);
    spawnWave(1, 800);
    sound.playClick();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const k = gameState.current.keys;
      if (['ArrowLeft', 'KeyA'].includes(e.code)) k.left = true;
      if (['ArrowRight', 'KeyD'].includes(e.code)) k.right = true;
      if (['Space', 'KeyW', 'ArrowUp'].includes(e.code)) {
        e.preventDefault();
        k.shoot = true;
        if (!isPlaying) startGame();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const k = gameState.current.keys;
      if (['ArrowLeft', 'KeyA'].includes(e.code)) k.left = false;
      if (['ArrowRight', 'KeyD'].includes(e.code)) k.right = false;
      if (['Space', 'KeyW', 'ArrowUp'].includes(e.code)) k.shoot = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    initStars(canvas.width, canvas.height);
    let animId: number;

    const loop = () => {
      const s = gameState.current;
      const W = canvas.width;
      const H = canvas.height;

      // 1. Background
      ctx.fillStyle = '#060d1f';
      ctx.fillRect(0, 0, W, H);

      s.stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > H) {
          star.y = 0;
          star.x = Math.random() * W;
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });

      // 2. Player input
      if (s.keys.left && s.player.x > 10) s.player.x -= s.player.speed;
      if (s.keys.right && s.player.x < W - s.player.width - 10) s.player.x += s.player.speed;

      // Shooting logic
      if (s.player.shootCooldown > 0) s.player.shootCooldown--;
      if (s.keys.shoot && s.player.shootCooldown <= 0) {
        sound.playLaser();
        s.player.shootCooldown = 12;

        if (s.player.weaponLevel === 1) {
          s.bullets.push({
            x: s.player.x + s.player.width / 2 - 2,
            y: s.player.y - 8,
            vx: 0,
            vy: -9,
            fromPlayer: true,
            color: '#60a5fa',
          });
        } else {
          s.bullets.push(
            { x: s.player.x + s.player.width / 2 - 2, y: s.player.y - 8, vx: 0, vy: -9, fromPlayer: true, color: '#93c5fd' },
            { x: s.player.x + 4, y: s.player.y, vx: -2, vy: -8.5, fromPlayer: true, color: '#93c5fd' },
            { x: s.player.x + s.player.width - 4, y: s.player.y, vx: 2, vy: -8.5, fromPlayer: true, color: '#93c5fd' }
          );
        }
      }

      // Draw Player Ship
      ctx.save();
      ctx.translate(s.player.x + s.player.width / 2, s.player.y + s.player.height / 2);
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.moveTo(0, -15);
      ctx.lineTo(20, 15);
      ctx.lineTo(0, 8);
      ctx.lineTo(-20, 15);
      ctx.closePath();
      ctx.fill();

      // Cockpit
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, -2, 5, 0, Math.PI * 2);
      ctx.fill();

      // Shield visual
      if (s.player.hasShield) {
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 28, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Enemies
      let hitEdge = false;
      const speed = 1.2 + s.waveNum * 0.3;
      s.enemies.forEach((enemy) => {
        enemy.x += speed * s.enemyDirection;
        if (enemy.x <= 15 || enemy.x + enemy.width >= W - 15) {
          hitEdge = true;
        }

        enemy.shootTimer--;
        if (enemy.shootTimer <= 0) {
          enemy.shootTimer = Math.floor(Math.random() * 160) + 80;
          s.bullets.push({
            x: enemy.x + enemy.width / 2,
            y: enemy.y + enemy.height + 4,
            vx: 0,
            vy: 4.5,
            fromPlayer: false,
            color: '#f43f5e',
          });
        }
      });

      if (hitEdge) {
        s.enemyDirection *= -1;
        s.enemies.forEach((e) => (e.y += 18));
      }

      const reachedBottom = s.enemies.some((e) => e.y + e.height >= s.player.y);
      if (reachedBottom) {
        sound.playExplosion();
        setIsPlaying(false);
        setGameOver(true);
        onGameOver(s.scoreVal);
        return;
      }

      if (s.enemies.length === 0) {
        sound.playLevelUp();
        s.waveNum++;
        spawnWave(s.waveNum, W);
      }

      // Draw Enemies
      s.enemies.forEach((enemy) => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

        // Eyes
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(enemy.x + 6, enemy.y + 6, 6, 6);
        ctx.fillRect(enemy.x + enemy.width - 12, enemy.y + 6, 6, 6);

        if (enemy.maxHp > 1) {
          ctx.fillStyle = 'rgba(255,255,255,0.3)';
          ctx.fillRect(enemy.x, enemy.y - 6, enemy.width, 3);
          ctx.fillStyle = '#34d399';
          ctx.fillRect(enemy.x, enemy.y - 6, (enemy.width * enemy.hp) / enemy.maxHp, 3);
        }
      });

      // Bullets
      for (let i = s.bullets.length - 1; i >= 0; i--) {
        const b = s.bullets[i];
        b.x += b.vx;
        b.y += b.vy;

        ctx.fillStyle = b.color;
        ctx.fillRect(b.x - 2, b.y - 6, 4, 12);

        if (b.fromPlayer) {
          for (let j = s.enemies.length - 1; j >= 0; j--) {
            const enemy = s.enemies[j];
            if (
              b.x >= enemy.x &&
              b.x <= enemy.x + enemy.width &&
              b.y >= enemy.y &&
              b.y <= enemy.y + enemy.height
            ) {
              enemy.hp--;
              s.bullets.splice(i, 1);

              if (enemy.hp <= 0) {
                sound.playExplosion();
                const pts = enemy.type === 'boss' ? 500 : 100;
                s.scoreVal += pts;
                setScore(s.scoreVal);
                onScoreUpdate?.(s.scoreVal);

                if (Math.random() < 0.25) {
                  s.powerups.push({
                    x: enemy.x + enemy.width / 2,
                    y: enemy.y,
                    type: Math.random() > 0.5 ? 'tri' : 'shield',
                    vy: 2,
                  });
                }

                s.enemies.splice(j, 1);
              }
              break;
            }
          }
        } else {
          if (
            b.x >= s.player.x &&
            b.x <= s.player.x + s.player.width &&
            b.y >= s.player.y &&
            b.y <= s.player.y + s.player.height
          ) {
            s.bullets.splice(i, 1);
            if (s.player.hasShield) {
              s.player.hasShield = false;
              sound.playHover();
            } else {
              sound.playGameOver();
              setLives((l) => {
                const n = l - 1;
                if (n <= 0) {
                  setIsPlaying(false);
                  setGameOver(true);
                  onGameOver(s.scoreVal);
                }
                return n;
              });
            }
          }
        }

        if (b.y < -20 || b.y > H + 20) {
          s.bullets.splice(i, 1);
        }
      }

      // Powerups
      for (let i = s.powerups.length - 1; i >= 0; i--) {
        const p = s.powerups[i];
        p.y += p.vy;

        ctx.fillStyle = p.type === 'tri' ? '#60a5fa' : '#34d399';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.fill();

        if (
          p.x >= s.player.x &&
          p.x <= s.player.x + s.player.width &&
          p.y >= s.player.y &&
          p.y <= s.player.y + s.player.height
        ) {
          sound.playCoin();
          if (p.type === 'tri') s.player.weaponLevel = 2;
          if (p.type === 'shield') s.player.hasShield = true;
          s.powerups.splice(i, 1);
        } else if (p.y > H + 20) {
          s.powerups.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, onGameOver, onScoreUpdate, spawnWave]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      <div className="relative w-full aspect-[16/9] max-h-[500px] bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <canvas
          ref={canvasRef}
          width={800}
          height={450}
          className="w-full h-full object-contain"
        />

        {/* In-Game Overlay */}
        <div className="absolute top-4 left-6 flex items-center gap-3 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            <span className="text-[10px] font-mono text-blue-300 block">ОЧКИ</span>
            <span className="text-xl font-bold font-mono text-white">{score}</span>
          </div>
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
            <span className="text-[10px] font-mono text-slate-300 block">ВОЛНА</span>
            <span className="text-xl font-bold font-mono text-white">#{wave}</span>
          </div>
          <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 flex items-center gap-1.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Heart
                key={i}
                className={`w-4 h-4 transition-opacity ${
                  i < lives ? 'text-rose-500 fill-current opacity-100' : 'text-slate-600 opacity-30'
                }`}
              />
            ))}
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
                  Итоговый счет: <span className="text-blue-400 font-bold text-2xl font-mono">{score}</span>
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
                  SPACE NEBULA STRIKE
                </h1>
                <p className="text-slate-300 max-w-md mb-6 text-xs sm:text-sm">
                  Уничтожайте вражеские корабли, собирайте улучшения оружия и защитные щиты.
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
    </div>
  );
};
