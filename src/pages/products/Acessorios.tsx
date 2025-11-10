import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Anilha Injetada", code: "ANI", category: "Anilhas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Dumbbell Injetado", code: "DBI", category: "Halteres/Dumbbells", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Barras Cromadas C/ Recartilho", code: "BCR", category: "Barras", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Puxador Triangular", code: "PT100", category: "Puxadores", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Estante para Halteres", code: "EH200", category: "Armazenamento", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
];

export default function Acessorios() {
  return (
    <ProductLinePage
      lineName="ACESSÓRIOS"
      products={products}
      categories={["Anilhas", "Halteres/Dumbbells", "Barras", "Puxadores", "Armazenamento"]}
      description="Complementos essenciais com qualidade Vitally"
    />
  );
}
