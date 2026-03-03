import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrganicJewel from "./OrganicJewel";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Protocolos", href: "#protocolos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="container-narrow w-full px-4 md:px-6">
        <div 
          className={`flex items-center justify-between px-8 py-4 rounded-full shadow-lg border border-white/5 transition-all duration-500 ${
            scrolled 
              ? "bg-[#7A6A62]/70 backdrop-blur-md py-3" 
              : "bg-[#7A6A62] backdrop-blur-none py-4"
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <OrganicJewel size={34} className="text-accent transition-transform duration-500 group-hover:rotate-180" />
            <h1 className="font-display text-2xl tracking-wider text-white font-medium">
              Visage
            </h1>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-accent transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma avaliação na Visage."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block rounded-xl bg-accent/90 px-8 py-3 font-body text-[10px] tracking-[0.2em] uppercase text-accent-foreground font-bold transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-md active:scale-95"
          >
            Agendar
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-4 rounded-3xl bg-[#7A6A62]/95 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl"
            >
              <nav className="flex flex-col px-6 py-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-xs tracking-[0.2em] uppercase text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma avaliação na Visage."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-center rounded-2xl bg-accent px-6 py-4 font-body text-[10px] tracking-[0.2em] uppercase text-accent-foreground font-bold"
                >
                  Agendar Avaliação
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
