import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Flexão", code: "LS314", category: "Pernas", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
  { name: "Abdutor", code: "LS322", category: "Pernas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Adutor/Abdutor", code: "LS320", category: "Pernas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Rosca Direta", code: "LS335", category: "Braços", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop" },
  { name: "Desenvolvimento", code: "LS340", category: "Ombros", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
  { name: "Remada Baixa", code: "LS345", category: "Costas", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" },
  { name: "Abdominal", code: "LS350", category: "Abdômen", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
];

export default function StartIV() {
  return (
    <ProductLinePage
      lineName="START IV"
      products={products}
      categories={["Abdômen", "Braços", "Costas", "Ombros", "Peito", "Pernas"]}
      description="Design, tecnologia e sofisticação com ajuste Rapid Fire"
    />
  );
}
