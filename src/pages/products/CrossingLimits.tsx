import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Leg Press 45°", code: "CL5", category: "Pernas", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
  { name: "Maquina Hack", code: "CL4", category: "Pernas", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop" },
  { name: "Remada Baixa", code: "CL6", category: "Costas", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop" },
  { name: "Supino Vertical", code: "CL8", category: "Peitoral", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
  { name: "Desenvolvimento Ombro", code: "CL10", category: "Ombros", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
];

export default function CrossingLimits() {
  return (
    <ProductLinePage
      lineName="CROSSING LIMITS"
      products={products}
      categories={["Pernas", "Costas", "Peitoral", "Ombros"]}
      description="Alta performance com biomecânica avançada para atletas"
    />
  );
}
