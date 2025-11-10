import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Esteira Profissional VT3000", code: "VT3000", category: "Esteiras", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" },
  { name: "Bicicleta Horizontal Eletromagnética", code: "VBH2100", category: "Bicicletas", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" },
  { name: "Simulador de Escada Prestige Touch", code: "PST", category: "Escadas", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" },
  { name: "Elíptico Profissional", code: "EP500", category: "Elípticos", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" },
  { name: "Bicicleta Vertical", code: "BV300", category: "Bicicletas", image: "https://images.unsplash.com/photo-1576749987661-626fd75d5b56?w=800&auto=format&fit=crop" },
];

export default function Cardio() {
  return (
    <ProductLinePage
      lineName="CARDIO"
      products={products}
      categories={["Esteiras", "Bicicletas", "Elípticos", "Escadas"]}
      description="Equipamentos profissionais de alto desempenho para uso contínuo"
    />
  );
}
