import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-10">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
            <p className="text-slate-300/80 mt-1">Commissions, collaborations, or just say hi.</p>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-slate-400/70" />
            <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-slate-400/70" />
            <textarea name="message" required placeholder="Message" rows="4" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-slate-400/70" />
            <div className="sm:col-span-2 flex items-center gap-3">
              <button disabled={status==="loading"} className="px-5 py-3 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold disabled:opacity-60">
                {status === "loading" ? "Sending..." : "Send message"}
              </button>
              {status === "success" && <span className="text-emerald-400">Sent! I’ll get back soon.</span>}
              {status === "error" && <span className="text-rose-400">Something went wrong.</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
