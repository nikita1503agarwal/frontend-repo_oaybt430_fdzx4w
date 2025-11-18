import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.35),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.25),transparent_40%)]" />

      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Contact />

      <footer className="py-10 text-center text-slate-400/80">
        <p>© {new Date().getFullYear()} AION Studio — AI Generated Artist Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
