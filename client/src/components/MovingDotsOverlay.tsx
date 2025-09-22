import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface Props {
  dotCount?: number;
  color?: string; // CSS color
  opacity?: number; // 0..1
  maxRadius?: number; // px
  minRadius?: number; // px
  speed?: number; // base speed multiplier
}

export default function MovingDotsOverlay({
  dotCount = 24,
  color = '255, 255, 255',
  opacity = 0.18,
  maxRadius = 3.5,
  minRadius = 1.2,
  speed = 0.2,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>();

  // Resize canvas to fill parent
  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initDots = () => {
      const count = dotCount;
      const dots: Dot[] = [];
      for (let i = 0; i < count; i++) {
        const r = Math.random() * (maxRadius - minRadius) + minRadius;
        dots.push({
          x: Math.random(),
          y: Math.random(),
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          r,
        });
      }
      dotsRef.current = dots;
    };

    const step = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = `rgb(${color})`;

      for (const d of dotsRef.current) {
        // convert normalized to pixels
        let px = d.x * w;
        let py = d.y * h;
        px += d.vx * 60; // ~per frame adjustment
        py += d.vy * 60;
        // wrap around edges
        if (px < 0) px = w + px;
        if (py < 0) py = h + py;
        if (px > w) px = px - w;
        if (py > h) py = py - h;
        d.x = px / w;
        d.y = py / h;

        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, d.r * dpr), 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    const handleResize = () => {
      resize();
    };

    resize();
    initDots();
    step();
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [dotCount, color, opacity, maxRadius, minRadius, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
