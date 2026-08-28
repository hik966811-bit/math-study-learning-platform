import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Orb {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export const FloatingOrbs: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const orbs: Orb[] = [];
    const orbCount = 32;

    const getColors = () => {
      if (theme === 'dark') {
        return [
          'rgba(59, 130, 246, ',
          'rgba(147, 197, 253, ',
          'rgba(255, 255, 255, ',
          'rgba(37, 99, 235, ',
        ];
      }
      if (theme === 'light') {
        return [
          'rgba(191, 219, 254, ',
          'rgba(147, 197, 253, ',
          'rgba(219, 234, 254, ',
          'rgba(255, 255, 255, ',
        ];
      }
      // Blue Theme (Default Horus)
      return [
        'rgba(96, 165, 250, ',
        'rgba(191, 219, 254, ',
        'rgba(255, 255, 255, ',
        'rgba(59, 130, 246, ',
        'rgba(147, 197, 253, ',
        'rgba(37, 99, 235, ',
      ];
    };

    const palette = getColors();

    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 50 + 15,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: Math.random() * 0.3 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient background vignette
      const bgGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        50,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      if (theme === 'blue') {
        bgGrad.addColorStop(0, 'rgba(14, 38, 86, 0.4)');
        bgGrad.addColorStop(1, 'rgba(7, 19, 43, 0.9)');
      } else if (theme === 'dark') {
        bgGrad.addColorStop(0, 'rgba(18, 24, 38, 0.3)');
        bgGrad.addColorStop(1, 'rgba(7, 8, 12, 0.9)');
      } else {
        bgGrad.addColorStop(0, 'rgba(239, 246, 255, 0.4)');
        bgGrad.addColorStop(1, 'rgba(240, 244, 249, 0.9)');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw each orb
      orbs.forEach((orb) => {
        // Gentle cursor interaction
        const dx = mouseX - orb.x;
        const dy = mouseY - orb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 10) {
          orb.x += (dx / dist) * 0.3;
          orb.y += (dy / dist) * 0.3;
        }

        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.radius * 2) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius * 2) orb.x = -orb.radius;
        if (orb.y < -orb.radius * 2) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius * 2) orb.y = -orb.radius;

        const currentAlpha = orb.alpha + Math.sin(time + orb.pulseOffset) * 0.08;
        const currentRadius = orb.radius + Math.cos(time + orb.pulseOffset) * 4;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          Math.max(1, currentRadius)
        );
        gradient.addColorStop(0, `${orb.color}${Math.max(0.01, currentAlpha * 1.6)})`);
        gradient.addColorStop(0.5, `${orb.color}${Math.max(0.01, currentAlpha * 0.6)})`);
        gradient.addColorStop(1, `${orb.color}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fill();

        if (orb.radius < 26) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, currentAlpha * 2)})`;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
};
