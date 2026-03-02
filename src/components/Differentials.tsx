import { motion } from "framer-motion";
import { Sparkles, UserCheck, Microscope, Leaf } from "lucide-react";

const differentials = [
  {
    icon: UserCheck,
    title: "Protocolo Personalizado",
    description:
      "Cada plano de tratamento é único, desenhado para a sua pele, o seu rosto, o seu momento de vida.",
  },
  {
    icon: Sparkles,
    title: "Atendimento Exclusivo",
    description:
      "Do primeiro contato ao pós-tratamento, cada detalhe é pensado para que você se sinta acolhida.",
  },
  {
    icon: Microscope,
    title: "Técnica Avançada",
    description:
      "Tecnologias de ponta aliadas ao conhecimento científico mais atual da estética integrativa.",
  },
  {
    icon: Leaf,
    title: "Naturalidade sem Excessos",
    description:
      "Resultados harmônicos que respeitam sua identidade. Você sai daqui a melhor versão de si mesma.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const Differentials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-20"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-bordeaux"
          >
            Nossos Pilares
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight"
          >
            O que nos torna únicos
          </motion.h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={fadeUp}
              className="group relative rounded-md bg-background p-8 md:p-10 transition-all duration-500 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1"
            >
              {/* Animated bordeaux line at bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full rounded-b-md" />
              
              <div className="mb-6 text-accent transition-colors duration-500 group-hover:text-accent-foreground">
                <item.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
