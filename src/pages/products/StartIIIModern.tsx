import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Extensão", code: "LS300", category: "Pernas", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
  { name: "Adutor/Abdutor", code: "LS420", category: "Pernas", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
  { name: "Puxador Vertical", code: "LS417", category: "Costas", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" },
  { name: "Glúteo", code: "LS410", category: "Glúteos", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
  { name: "Peitoral Dorsal", code: "LS425", category: "Peitoral", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
];

export default function StartIIIModern() {
  return (
    <ProductLinePage
      lineName="START III MODERN"
      products={products}
      categories={["Pernas", "Glúteos", "Costas", "Peitoral", "Braços"]}
      description="Design e segurança com carenagens fechadas e QR Code"
    />
  );
}
