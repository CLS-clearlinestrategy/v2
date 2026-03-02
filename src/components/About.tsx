import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid gap-20 md:grid-cols-2 md:items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-accent"
            >
              Sobre a Visage
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight"
            >
              Onde a ciência encontra a <em className="text-accent-foreground">arte</em> da beleza
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="font-body text-base md:text-lg text-muted-foreground leading-loose mb-8"
            >
              A Visage nasceu da crença de que beleza verdadeira não se impõe — se revela.
              Somos uma clínica estética integrativa avançada em Brasília, onde cada protocolo
              é desenhado para realçar o que já existe em você, com método, sofisticação e
              cuidado humanizado.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="font-body text-base md:text-lg text-muted-foreground leading-loose"
            >
              Nosso espaço foi pensado para ser um refúgio de elegância — um lugar onde
              você se sente acolhida, ouvida e cuidada com a excelência que merece.
            </motion.p>
          </motion.div>

          {/* Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "100%", label: "Protocolos\npersonalizados" },
              { value: "Premium", label: "Experiência\nde atendimento" },
              { value: "Avançada", label: "Tecnologia\ne técnica" },
              { value: "Natural", label: "Resultados\nharmônicos" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="rounded-md bg-secondary p-6 md:p-8 text-center"
              >
                <p className="font-display text-xl md:text-2xl font-medium text-bordeaux mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-muted-foreground tracking-wider whitespace-pre-line leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
