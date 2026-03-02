import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Avaliação Personalizada",
    description:
      "Análise completa da sua pele, traços e histórico. Entendemos seus desejos e alinhamos expectativas com transparência.",
  },
  {
    number: "02",
    title: "Planejamento Individual",
    description:
      "Desenvolvimento do seu protocolo exclusivo, com técnicas e cronograma definidos de forma estratégica.",
  },
  {
    number: "03",
    title: "Execução Responsável",
    description:
      "Aplicação com técnica avançada, materiais premium e todo o cuidado que você merece em cada sessão.",
  },
  {
    number: "04",
    title: "Acompanhamento Contínuo",
    description:
      "Monitoramento dos resultados e ajustes ao longo do tempo, garantindo evolução segura e natural.",
  },
];

const ProtocolSteps = () => {
  return (
    <section id="protocolos" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-accent">
            Seu Protocolo
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Como funciona sua jornada
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-6 md:left-8 top-0 w-px bg-accent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ height: "100%" }}
          />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-8 md:gap-12"
              >
                {/* Number circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                  className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent/20" />
                  <span className="relative z-10 font-display text-sm md:text-base font-medium text-accent-foreground">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="pt-2 md:pt-3">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-loose">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolSteps;
