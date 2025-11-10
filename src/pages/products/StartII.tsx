import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Extensão", code: "LS100", category: "Pernas", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
  { name: "Adutor Abdutor", code: "LS120", category: "Pernas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Crossmith", code: "LS156", category: "Multi-Estações", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" },
  { name: "Puxador", code: "LS118", category: "Costas", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" },
  { name: "Supino", code: "LS145", category: "Peitoral", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
];

export default function StartII() {
  return (
    <ProductLinePage
      lineName="START II"
      products={products}
      categories={["Pernas", "Costas", "Peitoral", "Braços", "Multi-Estações"]}
      description="Custo-benefício ideal para instituições de ensino"
    />
  );
}
