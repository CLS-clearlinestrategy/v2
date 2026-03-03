import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const IdealClient = () => {
  return (
    <section className="relative section-padding bg-primary text-primary-foreground overflow-hidden">
      <div className="container-narrow relative z-10">
        <div className="grid gap-12 md:gap-20 md:grid-cols-2 md:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-accent"
            >
              Feita para Você
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8"
            >
              Você se reconhece?
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="font-body text-base md:text-lg text-primary-foreground/80 leading-loose mb-8"
            >
              Mulheres entre 30 e 50 anos que buscam resultados naturais, cuidado
              personalizado e um espaço onde se sintam verdadeiramente acolhidas.
              Profissionais exigentes que valorizam qualidade, ética e sofisticação.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="font-body text-base md:text-lg text-primary-foreground/80 leading-loose"
            >
              Se você busca exclusividade sem ostentação e resultados que respeitam
              sua essência, a Visage foi feita para você.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {[
              "Valoriza naturalidade acima de tudo",
              "Busca cuidado personalizado e humanizado",
              "Prioriza qualidade sobre quantidade",
              "Quer se sentir confiante e autêntica",
            ].map((trait, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="h-px flex-grow bg-primary-foreground/15" />
                <p className="font-body text-sm md:text-base text-primary-foreground/90 tracking-wider">
                  {trait}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdealClient;
