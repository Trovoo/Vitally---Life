import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "Os equipamentos Vitally transformaram completamente nosso centro de treinamento. A qualidade premium, aliada ao suporte técnico impecável, fez toda a diferença na experiência dos nossos alunos. Hoje somos referência em infraestrutura esportiva na região.",
    name: "Roberto Ferreira",
    designation: "Diretor de Infraestrutura - Academias Brasileiras",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "A parceria com a Vitally elevou o padrão do nosso espaço. Os alunos ficaram impressionados com a modernização e a qualidade dos equipamentos. O investimento retornou rapidamente através do aumento nas matrículas e na satisfação geral.",
    name: "Marina Santos",
    designation: "Fundadora do Clube -  + Você Clubes",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1368&auto=format&fit=crop",
  },
  {
    quote:
      "Escolher a Vitally foi a melhor decisão para modernizar nossa instituição. Os laudos biomecânicos e o suporte contínuo garantem segurança e excelência. Nossos alunos agora treinam em um ambiente de nível profissional.",
    name: "Carlos Mendes",
    designation: "Fundadora da academia do condomínio - Condomínio Maravilha",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1368&auto=format&fit=crop",
  },
];

export const Testimonial = () => {
  return (
    <section className="py-12 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como empreendedores transformaram seus negócios com Vitally
          </p>
        </div>

        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "hsl(var(--foreground))",
              designation: "hsl(var(--muted-foreground))",
              testimony: "hsl(var(--foreground))",
              arrowBackground: "hsl(var(--primary))",
              arrowForeground: "hsl(var(--primary-foreground))",
              arrowHoverBackground: "hsl(var(--accent))",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
};
