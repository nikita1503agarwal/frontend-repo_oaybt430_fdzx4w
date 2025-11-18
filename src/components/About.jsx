export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">About the Artist</h2>
        <p className="mt-4 text-slate-300/85 leading-relaxed">
          I explore the liminal space between code and creativity. My work uses diffusion models, 3D
          composition, and procedural prompts to create surreal, cinematic worlds. Each piece is
          a conversation between algorithms and intuition — a glance into futures that feel nostalgic.
        </p>
      </div>
    </section>
  );
}
