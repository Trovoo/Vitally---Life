import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Extensão", code: "LS500", category: "Pernas", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
  { name: "Flexão", code: "LS514", category: "Pernas", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
  { name: "Crossmith", code: "LS556", category: "Multi-Estações", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" },
  { name: "Rosca Scott", code: "LS525", category: "Braços", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" },
  { name: "Peitoral Dorsal", code: "LS545", category: "Peitoral", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
  { name: "Crossover", code: "LS560", category: "Multi-Estações", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" },
];

export default function StartV() {
  return (
    <ProductLinePage
      lineName="START V"
      products={products}
      categories={["Pernas", "Braços", "Peitoral", "Costas", "Multi-Estações"]}
      description="Linha premium com design superior e carenagem em aço escovado"
    />
  );
}
