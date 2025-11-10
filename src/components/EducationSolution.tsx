import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { FeaturesSectionWithCarouselClean } from "@/components/ui/feature-section-with-carousel-clean";

export const EducationSolution = () => {
  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="space-y-6 sm:space-y-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            A solução premium para sua {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(120_50%_20%)] via-[hsl(var(--vitally-green))] to-[hsl(130_99%_40%)] drop-shadow-[0_0_8px_hsl(120_99%_20%_/_0.35)]">
              Academia ou Estúdio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforme seu local em um ambiente de alta performance que atrai e retém seus melhores alunos.
          </p>
        </div>

        {/* Grid de features com hover, mantendo a estética do site */}
        <div className="hidden lg:block">
          <FeaturesSectionWithHoverEffects />
        </div>

        {/* Versão mobile/tablet com carrossel */}
        <div className="lg:hidden">
          <FeaturesSectionWithCarouselClean />
        </div>
      </div>
    </section>
  );
};
