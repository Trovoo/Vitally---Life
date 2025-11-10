import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers3, ShieldCheck, Award } from "lucide-react";
import { CarouselSwipe } from "@/components/ui/carousel-swipe";

const highlights = [
  {
    icon: Layers3,
    title: "Projetos 3D",
    description: "Visualize sua academia antes da instalação. Oferecemos um projeto 3D realista para otimizar seu espaço."
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Instrução",
    description: "Linhas com carenagens fechadas e QR Code com instruções de uso, garantindo o uso correto e seguro pelos alunos."
  },
  {
    icon: Award,
    title: "Aprovação CBB",
    description: "Somos a primeira empresa nacional a fabricar tabelas de basquete aprovadas pela Confederação Brasileira de Basquete (CBB)."
  }
];

export const IntroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="w-full py-12 sm:py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
            A Solução Completa em Fitness para  Condomínio - Hotel - Construtora - Clube - Resort
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Com mais de 40 anos de tradição, a Vitally entende as necessidades únicas de empreendimentos como condomínios, hotéis, clubes e resorts.
            Nossos equipamentos combinam durabilidade para alto tráfego, segurança comprovada por laudo biomecânico e facilidade de uso para usuários de todos os níveis (sejam moradores, hóspedes ou associados). Da sala de musculação ao ginásio poliesportivo, temos a solução
          </p>
        </motion.div>

        {/* Carrossel para mobile - grid para desktop */}
        <div className="md:hidden">
          <CarouselSwipe
            slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            showIndicators={true}
            showArrows={false}
            autoplay={true}
            autoplayInterval={4000}
          >
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group mx-2"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <highlight.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </CarouselSwipe>
        </div>

        {/* Grid tradicional para desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <highlight.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
