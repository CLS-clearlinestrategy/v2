import { motion } from "framer-motion";
import bannerImg from "@/assets/banner_visage_v2.png";
import OrganicJewel from "./OrganicJewel";

const BannerSection = () => {
  return (
    <section id="inicio" className="relative flex flex-col items-center overflow-hidden bg-[#D5C7BE] pt-32 pb-8">
      {/* Main Banner Container */}
      <div className="w-full max-w-[1500px] mx-auto px-4 md:px-8 flex-grow flex items-center">
        <div className="relative w-full rounded-[3rem] md:rounded-[5rem] overflow-hidden flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] group">
          
          {/* Top Section (Banner Image & Content) */}
          <div className="relative w-full h-[420px] md:h-[700px] flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={bannerImg}
                alt="Visage — Beleza que se revela"
                className="w-full h-full object-cover object-center"
              />
              {/* Darker Overlay for precise readability */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full px-10 md:px-20">
              <div className="max-w-xl">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-display text-4xl md:text-7xl lg:text-6xl font-medium text-white leading-[1.1] mb-8 tracking-tight"
                >
                  Cuidado integral
                  <br />
                  para sua <em className="text-accent italic font-normal">beleza</em>
                  <br />
                  e bem-estar
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-body text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-md"
                >
                  A beleza verdadeira não se impõe — se revela. Protocolos personalizados
                  que realçam o que já existe em você, com método e sofisticação.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-12"
                >
                  <a
                    href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma avaliação na Visage."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 rounded-xl bg-accent px-10 py-5 font-body text-sm tracking-[0.15em] uppercase text-accent-foreground font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-xl"
                  >
                    Agendar Avaliação
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </motion.div>

                {/* Review badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex -space-x-4">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm"
                      />
                    ))}
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--accent))" stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-body text-xs text-white/60 tracking-wider">
                      +200 pacientes satisfeitas
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Info Bar (Now integrated inside the same container) */}
      <div className="w-full bg-[#7A6A62] text-white/90 rounded-t-xl overflow-hidden">

            <div className="grid grid-cols-1 sm:grid-cols-3">
              {[
                { label: "Contato", value: "(61) 99999-9999" },
                { label: "Localização", value: "Gama-DF, Brasília" },
                { label: "Horários", value: "Seg–Sex · 9h às 19h" },
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  className={`px-10 py-8 ${index !== 2 ? 'sm:border-r border-white/10' : ''}`}
                >
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-bold mb-2">{item.label}</p>
                  <p className="font-body text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
