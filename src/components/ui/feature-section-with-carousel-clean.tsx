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
      title: "Feito para o Dono de Academia",
      description: "Projetado para quem entende de investimento. Nossos equipamentos não são custos, são ativos que geram lucro, justificam seu ticket-médio e param de dar manutenção.",
      icon: <IconTerminal2 />,
    },
    {
      title: "ROI (Retorno Sobre Investimento)",
      description: "O melhor ROI do mercado. Valorize seu m² com equipamentos premium que atraem e retêm clientes, e economize milhares de reais em manutenção e reposição.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Durabilidade de +20 Anos",
      description: "Arquitetura robusta feita para durar décadas, não meses. Menos manutenção, zero equipamento parado e maior lucratividade para o seu negócio.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Seu Parceiro na Expansão",
      description: "Nossas linhas de produtos acompanham o crescimento do seu negócio, garantindo o mesmo padrão de excelência da sua primeira unidade até a expansão da sua rede de academias.",
      icon: <IconCloud />,
    },
    {
      title: "Projeto 3D e Consultoria",
      description: "Somos seu parceiro estratégico. Nossos especialistas criam o projeto 3D do seu estúdio, otimizando o m² e o fluxo de alunos para garantir o melhor investimento.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Lidere contra o Low Cost",
      description: "Saia da guerra de preços. Nosso design premium e biomecânica superior criam uma identidade única que permite seu estúdio liderar por valor, não por preço.",
      icon: <IconHelp />,
    },
    {
      title: "Biomecânica que Fideliza",
      description: "Seus clientes e personais sentirão a diferença. Nossos laudos garantem o movimento correto que gera resultados reais e previne lesões. Aluno com resultado não cancela.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Prazo de Entrega Garantido",
      description: "Com 41 anos de fabricação própria, garantimos seu pedido em 35 dias. O seu cronograma de inauguração é o nosso compromisso. Zero atrasos.",
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