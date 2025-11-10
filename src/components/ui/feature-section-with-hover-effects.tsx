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