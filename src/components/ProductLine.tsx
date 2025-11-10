import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Product {
  name: string;
  code: string;
  image: string;
}

interface ProductLineProps {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  categories: string[];
  products: Product[];
  index: number;
}

export const ProductLine = ({
  title,
  description,
  highlights,
  categories,
  products,
  index
}: ProductLineProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-20 glass-card p-8 md:p-12 rounded-3xl border border-border/50"
    >
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="space-y-3">
          {highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 p-1 rounded-full bg-primary/20">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-muted-foreground">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Tabs defaultValue={categories[0]} className="w-full" onValueChange={setActiveCategory}>
        <TabsList className="w-full flex-wrap h-auto gap-2 bg-muted/50 p-2 mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, i) => (
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
                  <div className="aspect-square overflow-hidden">
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
  );
};
