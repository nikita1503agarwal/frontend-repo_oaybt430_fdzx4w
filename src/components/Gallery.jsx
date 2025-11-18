import { useMemo } from "react";

const samples = [
  {
    title: "Neon Voyager",
    prompt: "astronaut exploring neon city, cyberpunk, volumetric fog, octane render, iridescent",
    palette: "from-fuchsia-500 via-violet-500 to-cyan-400",
  },
  {
    title: "Quantum Bloom",
    prompt: "fractal flower made of chrome and glass, glowing core, sci-fi botanical",
    palette: "from-cyan-400 via-sky-500 to-indigo-500",
  },
  {
    title: "Orbital Echoes",
    prompt: "ringed planet reflected in liquid metal ocean, starscape, long exposure",
    palette: "from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    title: "Synthwave Oracle",
    prompt: "retro grid horizon, giant wireframe sphere, AI face emerging from pixels",
    palette: "from-amber-400 via-rose-500 to-fuchsia-500",
  },
  {
    title: "Liquid Circuit",
    prompt: "mercury circuits flowing like water, bokeh particles, macro lens",
    palette: "from-purple-500 via-fuchsia-500 to-rose-500",
  },
  {
    title: "Dream Architect",
    prompt: "impossible geometry, glowing edges, dark brutalist space, soft haze",
    palette: "from-sky-500 via-blue-500 to-indigo-600",
  },
];

function Card({ item, index }) {
  const noiseId = useMemo(() => `noise-${index}-${Math.random().toString(36).slice(2)}`, [index]);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition">
      <div className={`h-56 sm:h-64 bg-gradient-to-tr ${item.palette} opacity-70 group-hover:opacity-90 transition`} />
      <svg className="absolute inset-0 mix-blend-overlay opacity-30" aria-hidden>
        <filter id={noiseId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 p-4">
        <h3 className="text-white font-semibold tracking-tight">{item.title}</h3>
        <p className="text-xs text-slate-300/80 line-clamp-2 mt-1">{item.prompt}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.25),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Gallery</h2>
            <p className="text-slate-300/80 mt-1">Selected AI artworks exploring cybernetic aesthetics</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">Request a commission</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {samples.map((s, i) => (
            <Card key={i} item={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
