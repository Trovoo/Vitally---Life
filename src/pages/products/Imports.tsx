import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Puxada Alta", code: "L152", category: "Bateria de Pesos", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" },
  { name: "Leg Press 180°", code: "L138", category: "Bateria de Pesos", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
  { name: "Hack 45° Articulado", code: "L142", category: "Articulados", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
  { name: "Supino Articulado Titan", code: "T200", category: "Articulados Titan", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
];

export default function Imports() {
  return (
    <ProductLinePage
      lineName="IMPORTS"
      products={products}
      categories={["Bateria de Pesos", "Articulados", "Articulados Titan"]}
      description="Equipamentos selecionados com biomecânica internacional"
    />
  );
}
