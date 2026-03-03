import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    age: 34,
    text: "A Visage me devolveu a confiança que eu achava ter perdido. Os resultados são tão naturais que as pessoas dizem que estou mais descansada, mais bonita — mas não sabem dizer o porquê.",
  },
  {
    name: "Camila R.",
    age: 42,
    text: "Nunca me senti tão acolhida em uma clínica. O atendimento é verdadeiramente personalizado, desde a avaliação até o acompanhamento. É um cuidado que faz diferença.",
  },
  {
    name: "Fernanda L.",
    age: 38,
    text: "Depois de anos buscando um lugar que respeitasse meu desejo por naturalidade, encontrei a Visage. O resultado é exatamente o que eu queria: sutil, elegante e harmonioso.",
  },
  {
    name: "Juliana M.",
    age: 29,
    text: "Comecei a prevenção com a Visage e fico impressionada com a seriedade do planejamento. Cada sessão faz sentido dentro de um plano maior. Me sinto em boas mãos.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="depoimentos" className="section-padding bg-secondary overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="mb-6 font-body text-sm tracking-[0.3em] uppercase text-bordeaux">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            Experiências reais
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="mb-8">
                <span className="font-display text-5xl text-accent">"</span>
              </div>
              <p className="font-body text-base md:text-lg text-foreground/80 leading-loose mb-10 italic">
                {testimonials[current].text}
              </p>
              <p className="font-display text-lg font-medium text-foreground">
                {testimonials[current].name}
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                {testimonials[current].age} anos
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-2 text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-accent-foreground"
                      : "w-2 bg-border"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
