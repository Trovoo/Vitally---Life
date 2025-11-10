import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Tabela Elétrica", code: "BA072", category: "Tabelas Móveis", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop" },
  { name: "Tabela Mecânica", code: "BA062", category: "Tabelas Móveis", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop" },
  { name: "Tabela Fixa", code: "BA073", category: "Tabelas Fixas", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop" },
  { name: "Basquete 3 Móvel", code: "BA077", category: "Basquete 3x3", image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&auto=format&fit=crop" },
];

export default function Basquete() {
  return (
    <ProductLinePage
      lineName="BASQUETE"
      products={products}
      categories={["Tabelas Móveis", "Tabelas Fixas", "Basquete 3x3"]}
      description="Tabelas aprovadas pela CBB - Padrão profissional"
    />
  );
}
