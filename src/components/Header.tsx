import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrganicJewel from "./OrganicJewel";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Protocolos", href: "#protocolos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-narrow flex items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <OrganicJewel className="w-8 h-8" />
          <span className="font-display text-xl tracking-wider text-primary-foreground">
            Visage
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-wide text-primary-foreground/70 hover:text-accent transition-colors duration-300"
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
          className="hidden md:inline-block rounded-md bg-accent px-6 py-2.5 font-body text-xs tracking-[0.15em] uppercase text-accent-foreground transition-all duration-300 hover:bg-accent/90"
        >
          Agendar
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-primary-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-primary-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-primary-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-wide text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma avaliação na Visage."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-center rounded-md bg-accent px-6 py-3 font-body text-xs tracking-[0.15em] uppercase text-accent-foreground"
              >
                Agendar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
