interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
}

export function mountStarfield(root: HTMLElement) {
  const bg = document.createElement("div");
  bg.className = "starfield-bg";

  const canvas = document.createElement("canvas");
  canvas.className = "starfield-canvas";
  bg.appendChild(canvas);
  root.appendChild(bg);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let stars: Star[] = [];
  let width = 0;
  let height = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    width = window.innerWidth;
    height = document.documentElement.scrollHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx!.scale(dpr, dpr);

    const density = width < 640 ? 9000 : 6000;
    const count = Math.floor((width * height) / density);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.35,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(time: number) {
    ctx!.clearRect(0, 0, width, height);
    for (const star of stars) {
      const twinkle = prefersReducedMotion
        ? star.baseAlpha
        : star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.phase) * 0.3;
      ctx!.globalAlpha = Math.max(0, Math.min(1, twinkle));
      ctx!.fillStyle = "#f3ecdd";
      ctx!.beginPath();
      ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx!.fill();
    }
    ctx!.globalAlpha = 1;
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  resize();
  draw(0);

  let resizeTimer: number | undefined;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 200);
  });

  const heightObserver = new ResizeObserver(() => resize());
  heightObserver.observe(document.body);
}
