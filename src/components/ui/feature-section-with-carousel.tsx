import React from "react";
import { cn } from "@/lib/utils";
import { CarouselSwipe } from "@/components/ui/carousel-swipe";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithCarousel() {
  const features = [
    {
      title: "Desenhado para o seu Negócio",
      description: "Feito para empreendedores, gestores e visionários. Equipamentos que valorizam seu espaço e impulsionam seu faturamento.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Investimento com Retorno Rápido",
      description: "O melhor retorno sobre o investimento (ROI) do mercado. Valorize seu metro quadrado com equipamentos que atraem e retêm clientes.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Durabilidade para Alto Fluxo",
      description: "Arquitetura robusta para academias de alto fluxo. Menos manutenção, mais tempo de uso e maior lucratividade para seu negócio.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Soluções que Escalam com Você",
      description: "Nossas linhas de produtos acompanham o crescimento do seu empreendimento, da primeira unidade à expansão da sua rede.",
      icon: <IconCloud />,
    },
    {
      title: "Consultoria Especializada",
      description: "Atendimento contínuo — um parceiro de negócio, não apenas um fornecedor. Ajudamos você a otimizar o layout e o financeiro.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "A Solução Completa",
      description: "Inovação, design e personalização para que seu empreendimento tenha uma identidade visual única e se destaque da concorrência.",
      icon: <IconHelp />,
    },
    {
      title: "Garantia de Satisfação",
      description: "Confiamos em nosso produto. Seus clientes sentirão a diferença na qualidade, e você sentirá o impacto positivo no seu negócio.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "E tudo mais",
      description: "Personalização e evolução constante conforme sua necessidade.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <CarouselSwipe
        slidesPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
        showIndicators={true}
        showArrows={false}
        autoplay={true}
        autoplayInterval={5000}
      >
        {features.map((feature, index) => (
          <FeatureCarousel key={feature.title} {...feature} index={index} />
        ))}
      </CarouselSwipe>
    </div>
  );
}

const FeatureCarousel = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div className="flex flex-col py-10 relative group/feature mx-2">
      <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/10 dark:from-neutral-700/30 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-6 text-white flex justify-center">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-6 text-center">
        <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[hsl(var(--vitally-green))] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">{title}</span>
      </div>
      <p className="text-sm text-white max-w-xs relative z-10 px-6 text-center mx-auto">{description}</p>
    </div>
  );
};