import { useEffect, useRef } from "react";

// Canvas-based Letter Glitch background (inspired by reactbits letter-glitch)
// - Fills the screen with a grid of letters that randomly "glitch"
// - Uses magenta/cyan offsets for the glitch vibe
// - Subtle trails for smoothness

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function LetterGlitchBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const setSize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

    let fontSize = 14; // px
    const baseBg = "#05060A"; // deep dark

    type Cell = { ch: string; tick: number };
    let cols = Math.ceil(canvas.width / dpr / fontSize);
    let rows = Math.ceil(canvas.height / dpr / fontSize);
    let grid: Cell[] = [];

    const initGrid = () => {
      cols = Math.ceil(canvas.width / dpr / fontSize);
      rows = Math.ceil(canvas.height / dpr / fontSize);
      grid = new Array(cols * rows).fill(0).map(() => ({
        ch: LETTERS[Math.floor(Math.random() * LETTERS.length)],
        tick: Math.floor(Math.random() * 120),
      }));
    };

    initGrid();

    const draw = () => {
      // subtle fade for trails
      ctx.fillStyle = "rgba(5,6,10,0.12)";
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      ctx.font = `${fontSize}px 'IBM Plex Mono', 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = "top";

      // color gradient across the screen
      const grad = ctx.createLinearGradient(0, 0, canvas.width / dpr, canvas.height / dpr);
      grad.addColorStop(0, "#8B5CF6"); // violet-500
      grad.addColorStop(0.5, "#22D3EE"); // cyan-400
      grad.addColorStop(1, "#F472B6"); // pink-400

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const cell = grid[i];

          // update char occasionally
          if (cell.tick-- <= 0) {
            cell.ch = LETTERS[Math.floor(Math.random() * LETTERS.length)];
            // next change between 10 and 160 frames
            cell.tick = 10 + Math.floor(Math.random() * 150);
          }

          const x = c * fontSize;
          const y = r * fontSize;

          // base dim letter
          ctx.fillStyle = "rgba(255,255,255,0.06)";
          ctx.fillText(cell.ch, x, y);

          // chance to glitch brighter
          if (Math.random() < 0.02) {
            // cyan offset
            ctx.fillStyle = "rgba(34,211,238,0.35)";
            ctx.fillText(cell.ch, x + 1, y);
            // magenta offset
            ctx.fillStyle = "rgba(244,114,182,0.35)";
            ctx.fillText(cell.ch, x - 1, y + 0.5);
          }

          // occasional bright letter using gradient
          if (Math.random() < 0.005) {
            ctx.fillStyle = grad as unknown as string;
            ctx.fillText(cell.ch, x, y);
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    // paint solid bg first
    ctx.fillStyle = baseBg;
    ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    draw();

    const onResize = () => {
      setSize();
      initGrid();
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 block"
      aria-hidden
    />
  );
}
