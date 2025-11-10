import React from "react";
import { cn } from "@/lib/utils";
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

export function FeaturesSectionWithHoverEffects() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
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
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/10 dark:from-neutral-700/30 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-40 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/10 dark:from-neutral-700/30 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[hsl(var(--vitally-green))] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">{title}</span>
      </div>
      <p className="text-sm text-white max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};