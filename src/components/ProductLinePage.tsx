import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

interface Product {
  name: string;
  code: string;
  category: string;
  image: string;
}

interface ProductLinePageProps {
  lineName: string;
  products: Product[];
  categories: string[];
  description: string;
}

export const ProductLinePage = ({ lineName, products, categories, description }: ProductLinePageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <>
      <Helmet>
        <title>{lineName} - Vitally Equipamentos Fitness | Campus Universitários</title>
        <meta 
          name="description" 
          content={`${lineName} - ${description}. Equipamentos premium para instituições de ensino.`}
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-muted-foreground">Produtos</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">{lineName}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-6 text-foreground">{lineName}</h2>
                <p className="text-sm text-muted-foreground mb-6">{description}</p>
                
                <nav className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      !selectedCategory
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    Todos os Produtos
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {filteredProducts.length} PRODUTOS ENCONTRADOS
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.code}
                    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg mb-1 text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Código: {product.code}
                      </p>
                      <button className="text-sm text-primary hover:underline">
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};
