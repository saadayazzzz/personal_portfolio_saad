"use client";
import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number };

export default function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    let pts: P[] = [];
    const mouse = { x: -9999, y: -9999 };

    const color = () => getComputedStyle(document.documentElement).getPropertyValue("--particle").trim() || "124,92,255";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.floor((w * h) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const c = color();
      const link = 130;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            p.x += (dx / d) * 1.2;
            p.y += (dy / d) * 1.2;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c},0.8)`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < link) {
            ctx.strokeStyle = `rgba(${c},${(1 - d / link) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 180) {
          ctx.strokeStyle = `rgba(${c},${(1 - md / 180) * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const move = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const leave = () => { mouse.x = mouse.y = -9999; };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
    };
  }, []);

  return <canvas ref={ref} className="bg-canvas" aria-hidden />;
}
