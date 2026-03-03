import { motion } from "framer-motion";
import OrganicJewel from "./OrganicJewel";
import jewelPatternBg from "@/assets/jewel-pattern-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Pattern texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: `url(${jewelPatternBg})`, backgroundSize: '600px', backgroundRepeat: 'repeat' }}
      />

      {/* Organic jewel background decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <OrganicJewel
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px]"
          opacity={0.06}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding container-narrow text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 md:mb-6 font-body text-xs md:text-sm tracking-[0.3em] uppercase text-accent"
        >
          Clínica de Estética Integrativa Avançada
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-4 md:mb-6 leading-tight tracking-wide"
        >
          Estética Integrativa Avançada
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mx-auto mb-6 md:mb-8 h-px w-16 md:w-24 bg-accent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto max-w-2xl font-body text-base md:text-xl text-primary-foreground/85 font-light leading-relaxed tracking-wide mb-2 md:mb-4"
        >
          Naturalidade construída com método.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mx-auto max-w-2xl font-body text-sm md:text-lg text-primary-foreground/70 font-light leading-relaxed tracking-wide"
        >
          Protocolos personalizados que respeitam sua individualidade com técnica, ética e sofisticação.
        </motion.p>

        {/* Dual CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
        >
          <a
            href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma avaliação na Visage."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block rounded-md bg-accent px-6 py-3 sm:px-10 sm:py-4 font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent-foreground transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--beige)/0.5)] hover:bg-accent/90"
          >
            Agendar Avaliação
          </a>
          <a
            href="#protocolos"
            className="w-full sm:w-auto inline-block rounded-md border border-primary-foreground/30 px-6 py-3 sm:px-10 sm:py-4 font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-primary-foreground/90 transition-all duration-500 hover:border-accent hover:text-accent"
          >
            Conhecer Protocolos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/40">Descubra</span>
          <div className="h-10 w-px bg-primary-foreground/20 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
