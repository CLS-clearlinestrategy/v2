import { motion } from "framer-motion";
import bannerImg from "@/assets/banner-visage.png";

const BannerSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10" />

      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImg}
          alt="Visage — Beleza que se revela"
          className="w-full h-full object-cover object-[70%_20%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 section-padding container-narrow w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-10 bg-accent" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent">
              Visage · Gama-DF
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-8"
          >
            Cuidado integral
            <br />
            para sua <em className="text-accent">beleza</em>
            <br />
            e bem-estar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-base md:text-lg text-primary-foreground/75 leading-relaxed mb-10 max-w-md"
          >
            A beleza verdadeira não se impõe — se revela. Protocolos personalizados 
            que realçam o que já existe em você, com método e sofisticação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma avaliação na Visage."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-accent px-8 py-4 font-body text-sm tracking-[0.15em] uppercase text-accent-foreground transition-all duration-500 hover:bg-accent/90 hover:shadow-[0_0_30px_hsl(var(--beige)/0.4)]"
            >
              Agendar Avaliação
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </motion.div>

          {/* Review badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-primary bg-warm-gray"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="hsl(var(--accent))" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-xs text-primary-foreground/60 tracking-wide">
                +200 pacientes satisfeitas
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-primary-foreground/10">
            {[
              { label: "Contato", value: "(61) 99999-9999" },
              { label: "Localização", value: "Gama-DF, Brasília" },
              { label: "Horários", value: "Seg–Sex · 9h às 19h" },
            ].map((item) => (
              <div key={item.label} className="px-6 py-5 border-b sm:border-b-0 sm:border-r last:border-r-0 border-primary-foreground/10">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-1">{item.label}</p>
                <p className="font-body text-sm text-primary-foreground/80">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
