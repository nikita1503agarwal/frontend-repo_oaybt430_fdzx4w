import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition" />
                <div className="relative w-9 h-9 rounded-xl bg-slate-900/80 grid place-items-center border border-white/10">
                  <Sparkles className="w-5 h-5 text-cyan-300" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight text-lg">AION</span>
              <span className="text-cyan-300/80 text-sm">Artist</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition text-sm">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-5 pb-4 grid gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-slate-200 p-2 rounded-lg hover:bg-white/5">
                  {n.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
