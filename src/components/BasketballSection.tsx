import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ShieldCheck, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CarouselSwipe } from "@/components/ui/carousel-swipe";

const highlights = [
  {
    icon: Award,
    title: "Selo CBB",
    description: "O único fornecedor nacional com tabelas aprovadas oficialmente"
  },
  {
    icon: Sparkles,
    title: "Versatilidade",
    description: "Modelos fixos, móveis, elétricos e mecânicos"
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description: "Todos os modelos possuem trava de segurança"
  }
];

const categories = ["Tabelas Móveis", "Tabelas Fixas", "Basquete 3x3"];

const products = {
  "Tabelas Móveis": [
    { name: "Tabela Elétrica", code: "BA072", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop" },
    { name: "Tabela Mecânica", code: "BA062", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop" }
  ],
  "Tabelas Fixas": [
    { name: "Tabela Fixa", code: "BA073", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop" }
  ],
  "Basquete 3x3": [
    { name: "Basquete 3 Móvel", code: "BA077", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop" }
  ]
};

export const BasketballSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  
  return (
    <section id="basketball-section" ref={sectionRef} className="w-full py-12 sm:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Cada metro quadrado com Padrão Profissional
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Linha Basquete Aprovada pela CBB
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A Vitally se orgulha em ser a primeira empresa nacional a fabricar tabelas de basquete. 
            Nossas tabelas são aprovadas pela Confederação Brasileira de Basquete (CBB) e estão presentes 
            nas principais ligas profissionais, clubes, ginásios e escolas por todo o Brasil. Seja fixa ou móvel, 
            elétrica ou hidráulica, temos o modelo ideal para qualquer tipo de quadra.
          </p>
        </motion.div>

        {/* Carrossel para mobile - grid para desktop */}
        <div className="md:hidden mb-8 sm:mb-12">
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
                className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 text-center group mx-2"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </CarouselSwipe>
        </div>

        {/* Grid tradicional para desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 text-center group"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-foreground">
                {highlight.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl border border-border/50"
        >
          <Tabs defaultValue={categories[0]} className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-muted/50 p-2 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="flex-1 min-w-[140px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products[category as keyof typeof products].map((product, i) => (
                    <motion.div
                      key={product.code}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        isInView && activeCategory === category
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Código: {product.code}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
