import React from "react";
import { CarouselSwipe } from "@/components/ui/carousel-swipe";
import { 
  Dumbbell, 
  Users, 
  Award, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  Star,
  Target
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  secondaryIcon: React.ElementType;
  title: string;
  description: string;
}

export function AboutUsServicesCarousel() {
  const services: Service[] = [
    {
      icon: Dumbbell,
      secondaryIcon: Zap,
      title: "Equipamentos Premium",
      description: "Linha completa de equipamentos profissionais com design moderno e tecnologia avançada."
    },
    {
      icon: Users,
      secondaryIcon: TrendingUp,
      title: "Consultoria Especializada",
      description: "Equipe especializada para ajudar na escolha ideal dos equipamentos para seu espaço."
    },
    {
      icon: Award,
      secondaryIcon: Star,
      title: "Laudo Biomecânico",
      description: "Todos os equipamentos possuem laudo biomecânico garantindo segurança e eficiência."
    },
    {
      icon: ShieldCheck,
      secondaryIcon: Target,
      title: "Garantia de Qualidade",
      description: "Garantia estendida e suporte técnico para maior tranquilidade do cliente."
    }
  ];

  return (
    <div className="py-8">
      <CarouselSwipe
        slidesPerView={{ mobile: 1, tablet: 2, desktop: 2 }}
        showIndicators={true}
        showArrows={false}
        autoplay={true}
        autoplayInterval={4000}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </CarouselSwipe>
    </div>
  );
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;
  const SecondaryIcon = service.secondaryIcon;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mx-2 border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
            <SecondaryIcon className="w-3 h-3 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};