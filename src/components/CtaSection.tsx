import { motion } from "framer-motion";
import OrganicJewel from "./OrganicJewel";
import jewelPatternBg from "@/assets/jewel-pattern-bg.png";

const CtaSection = () => {
  return (
    <section className="relative section-padding bg-primary overflow-hidden">
      {/* Pattern texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: `url(${jewelPatternBg})`, backgroundSize: '500px', backgroundRepeat: 'repeat' }}
      />

      {/* Background jewel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <OrganicJewel
          className="w-[400px] h-[400px]"
          opacity={0.06}
        />
      </div>

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-accent">
            Próximo Passo
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground leading-tight mb-8 max-w-3xl mx-auto">
            Pronta para revelar sua <em className="text-accent">melhor versão</em>?
          </h2>
          <p className="mx-auto max-w-xl font-body text-base md:text-lg text-primary-foreground/80 leading-loose mb-14">
            Agende sua avaliação personalizada e descubra o protocolo ideal para você.
            Estamos prontas para cuidar de cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma avaliação na Visage."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block rounded-md bg-accent px-12 py-4 font-body text-sm tracking-[0.2em] uppercase text-accent-foreground transition-all duration-500 hover:bg-accent/90 border border-transparent hover:border-accent/60 hover:shadow-[0_0_0_1px_hsl(var(--accent-foreground)/0.18),0_0_24px_hsl(var(--beige)/0.35)]"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="https://wa.me/5561999999999?text=Olá! Gostaria de falar com a equipe da Visage."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-primary-foreground/30 px-12 py-4 font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/90 transition-all duration-500 hover:border-accent hover:text-accent"
            >
              Falar com a equipe
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
