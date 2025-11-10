import React from "react";
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

export function FeaturesSectionWithCarouselClean() {
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
          <FeatureCardClean key={feature.title} {...feature} />
        ))}
      </CarouselSwipe>
    </div>
  );
}

const FeatureCardClean = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col py-8 px-4 text-center mx-2 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="mb-4 text-white flex justify-center text-3xl">{icon}</div>
      <h3 className="text-lg font-bold mb-3 text-white">
        {title}
      </h3>
      <p className="text-sm text-white/90 max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};