import { Shield, Sparkles, Headphones, Ruler } from "lucide-react";
import biomechanicsImage from "@/assets/biomechanics.jpg";
import { CarouselSwipe } from "@/components/ui/carousel-swipe";

const differentials = [
  {
    icon: Shield,
    title: "Laudo Biomecânico",
    description: "Controle de qualidade rigoroso com certificação técnica profissional para máxima segurança dos usuários.",
  },
  {
    icon: Sparkles,
    title: "Design & Tecnologia",
    description: "Equipamentos modernos que valorizam seu local e atraem novos clientes com visual premium e funcionalidade avançada.",
  },
  {
    icon: Ruler,
    title: "Projeto Layout 3D",
    description: "Visualize sua academia antes de investir com renderização profissional 3D do espaço completo.",
  },
  {
    icon: Headphones,
    title: "Suporte Garantido",
    description: "Assistência técnica especializada e suporte contínuo para manter seus equipamentos em perfeito estado.",
  },
];

export const Differentials = () => {
  return (
    <section id="why-invest-section" className="py-12 sm:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Por que Investir na{" "}
            <span className="text-gradient">Vitally</span>?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que transformam sua instituição em referência de excelência
          </p>
        </div>

        {/* Carrossel para mobile - grid para desktop */}
        <div className="md:hidden">
          <CarouselSwipe
            slidesPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
            showIndicators={true}
            showArrows={false}
            autoplay={true}
            autoplayInterval={4000}
          >
            {differentials.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-xl border spotlight group hover:scale-105 transition-all duration-500 mx-2"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </CarouselSwipe>
        </div>

        {/* Grid tradicional para desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-16">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-xl border spotlight group hover:scale-105 transition-all duration-500"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
