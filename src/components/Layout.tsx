import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen selection:bg-gold/30">
      <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-[5vw] bg-white/80 backdrop-blur-xl border-b border-black/5">
        <Link className="font-display text-lg tracking-tight" to="/" onClick={closeMenu}>
          Cesar Nikko M. Caharian III
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {isHome ? (
            <>
              <li><a href="#capabilities" className="text-warm-gray-600 hover:text-black transition-colors">Capabilities</a></li>
              <li><a href="#why-me" className="text-warm-gray-600 hover:text-black transition-colors">Philosophy</a></li>
              <li><a href="#proof" className="text-warm-gray-600 hover:text-black transition-colors">Work</a></li>
            </>
          ) : (
            <li><Link to="/" className="text-warm-gray-600 hover:text-black transition-colors">Home</Link></li>
          )}
          <li>
            <Link to="/about" className={`transition-colors ${location.pathname === "/about" ? "text-gold font-medium" : "text-warm-gray-600 hover:text-black"}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={`transition-colors ${location.pathname === "/portfolio" ? "text-gold font-medium" : "text-warm-gray-600 hover:text-black"}`}>
              Portfolio
            </Link>
          </li>
          <li>
            <a href="#contact" className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gold transition-all duration-300">
              Lets Talk
            </a>
          </li>
        </ul>

        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-warm-gray-100 transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="fixed top-[68px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-black/5 px-[5vw] py-6 flex flex-col gap-4 md:hidden shadow-lg">
            {isHome ? (
              <>
                <a href="#capabilities" onClick={closeMenu} className="text-base text-warm-gray-600 hover:text-black transition-colors py-2 border-b border-warm-gray-100">Capabilities</a>
                <a href="#why-me" onClick={closeMenu} className="text-base text-warm-gray-600 hover:text-black transition-colors py-2 border-b border-warm-gray-100">Philosophy</a>
                <a href="#proof" onClick={closeMenu} className="text-base text-warm-gray-600 hover:text-black transition-colors py-2 border-b border-warm-gray-100">Work</a>
              </>
            ) : (
              <Link to="/" onClick={closeMenu} className="text-base text-warm-gray-600 hover:text-black transition-colors py-2 border-b border-warm-gray-100">Home</Link>
            )}
            <Link to="/about" onClick={closeMenu} className={`text-base py-2 border-b border-warm-gray-100 transition-colors ${location.pathname === "/about" ? "text-gold font-medium" : "text-warm-gray-600 hover:text-black"}`}>
              About
            </Link>
            <Link to="/portfolio" onClick={closeMenu} className={`text-base py-2 border-b border-warm-gray-100 transition-colors ${location.pathname === "/portfolio" ? "text-gold font-medium" : "text-warm-gray-600 hover:text-black"}`}>
              Portfolio
            </Link>
            <a href="#contact" onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gold transition-all duration-300">
              Lets Talk <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      <section id="contact" className="bg-white py-32 px-[5vw] flex justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full max-w-[860px] bg-black rounded-[40px] px-8 py-20 md:py-24 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(184,146,42,0.25)_0%,transparent_70%)] pointer-events-none" />
          <h2 className="relative z-10 font-display text-[clamp(2rem,4vw,3.2rem)] text-white tracking-tight leading-[1.1] mb-4">
            Ready to reclaim your focus?
          </h2>
          <p className="relative z-10 text-white/50 text-lg font-light max-w-[440px] mb-10 leading-relaxed">
            Lets talk about what you need off your plate — and how I can make it disappear with precision.
          </p>
          <a href="mailto:nikko@caharian.com" className="relative z-10 inline-flex items-center gap-2 bg-gold text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-gold-dark hover:scale-[1.02] transition-all duration-200">
            Start the Conversation <ArrowRight size={20} />
          </a>
          <p className="relative z-10 mt-6 text-[0.85rem] text-white/30 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span>Or reach me directly at <a href="mailto:nikko@caharian.com" className="text-white/50 hover:text-gold-light underline underline-offset-4 decoration-white/20 hover:decoration-gold transition-all duration-200">nikko@caharian.com</a></span>
            <span className="text-white/10 hidden md:inline">|</span>
            <span>LinkedIn: <a href="https://linkedin.com/in/caharian" target="_blank" rel="noreferrer" className="text-white/50 hover:text-gold-light underline underline-offset-4 decoration-white/20 hover:decoration-gold transition-all duration-200">caharian</a></span>
          </p>
        </motion.div>
      </section>

      <footer className="bg-off-white px-[5vw] py-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-warm-gray-200">
        <div className="font-display text-base tracking-tight">
          Cesar Nikko M. Caharian III
        </div>
        <div className="flex gap-6">
          <Link to="/" className="text-[0.78rem] text-warm-gray-600 hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="text-[0.78rem] text-warm-gray-600 hover:text-gold transition-colors">About</Link>
          <a href="https://linkedin.com/in/caharian" target="_blank" rel="noreferrer" className="text-[0.78rem] text-warm-gray-600 hover:text-gold transition-colors">LinkedIn</a>
        </div>
        <div className="text-[0.78rem] text-warm-gray-400">
          &copy; 2026 Cesar Nikko M. Caharian III
        </div>
      </footer>
    </div>
  );
}
