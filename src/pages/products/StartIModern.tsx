import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Flexo Extensor", code: "LS643", category: "Pernas", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
  { name: "Adutor Abdutor", code: "LS620", category: "Pernas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Puxador Conjugado", code: "LS618", category: "Costas", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" },
  { name: "Rosca Scott", code: "LS625", category: "Braços", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" },
  { name: "Supino Reto", code: "LS630", category: "Peitoral", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
];

export default function StartIModern() {
  return (
    <ProductLinePage
      lineName="START I MODERN"
      products={products}
      categories={["Pernas", "Costas", "Peitoral", "Braços"]}
      description="Equipamentos compactos e modernos, ideais para otimizar espaços"
    />
  );
}
