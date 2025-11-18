import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const node = canvasRef.current;
    if (!node) return;

    let app;
    async function load() {
      try {
        const Spline = (await import("@splinetool/runtime")).default;
        app = new Spline({ canvas: node });
        await app.load("https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode");
      } catch (e) {
        console.error("Failed to load Spline scene", e);
      }
    }

    load();
    return () => {
      if (app && app.dispose) app.dispose();
    };
  }, []);

  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[80vh] grid place-items-center text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan-300/90 text-xs mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AI Generated Art Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(99,102,241,0.35)]">
              Futuristic Vibes, Synth Dreams
            </h1>
            <p className="mt-5 text-slate-200/85 md:text-lg max-w-2xl mx-auto">
              A cybernetic collection of AI-generated artworks that blend neon nostalgia with tomorrow’s imagination.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#gallery" className="px-5 py-2.5 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold shadow-lg shadow-violet-500/20 hover:opacity-95 transition">Explore Gallery</a>
              <a href="#about" className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition">About</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
