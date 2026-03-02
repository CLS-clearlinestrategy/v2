import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clinicImg1 from "@/assets/clinic-1.jpg";
import clinicImg2 from "@/assets/clinic-2.jpg";
import clinicImg3 from "@/assets/clinic-3.jpg";

const blocks = [
  {
    label: "Personalização",
    title: "Não trabalhamos com pacotes genéricos",
    text: "Cada paciente recebe um protocolo individual, desenhado com base em uma avaliação completa e personalizada. Seu plano é único porque você é única.",
    image: clinicImg1,
  },
  {
    label: "Método",
    title: "Método, não improviso",
    text: "Planejamento facial e corporal com análise técnica criteriosa. Cada decisão é embasada em ciência, ética e anos de experiência clínica.",
    image: clinicImg2,
  },
  {
    label: "Responsabilidade",
    title: "Beleza com responsabilidade",
    text: "Resultados harmônicos, naturais e duradouros. Nosso compromisso é com a sua saúde e bem-estar, nunca com promessas exageradas.",
    image: clinicImg3,
  },
];

const ImageWithParallax = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="overflow-hidden rounded-md aspect-[3/4]">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover scale-110"
        loading="lazy"
      />
    </div>
  );
};

const fadeVariant = (direction: "left" | "right") => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
});

const WhyVisage = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-accent">
            Nossa Filosofia
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Por que a Visage é diferente
          </h2>
        </motion.div>

        <div className="space-y-28 md:space-y-36">
          {blocks.map((block, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={block.title}
                className={`grid gap-12 md:gap-16 md:grid-cols-2 items-center ${
                  isReversed ? "md:direction-rtl" : ""
                }`}
                style={{ direction: isReversed ? "rtl" : "ltr" }}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeVariant(isReversed ? "right" : "left")}
                  style={{ direction: "ltr" }}
                >
                  <ImageWithParallax src={block.image} alt={block.title} />
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeVariant(isReversed ? "left" : "right")}
                  style={{ direction: "ltr" }}
                >
                  <p className="mb-4 font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
                    {block.label}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6 leading-snug">
                    {block.title}
                  </h3>
                  <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
                    {block.text}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyVisage;
