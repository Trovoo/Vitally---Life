import { ProductLinePage } from "@/components/ProductLinePage";

const products = [
  { name: "Supino 3 em 1 Modern", code: "LS449", category: "Bancos de Supino", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
  { name: "Leg Press 45° Articulado", code: "PIG61", category: "Articulados", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop" },
  { name: "Supino Reto Articulado", code: "CS360", category: "Articulados", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
  { name: "Banco Regulável", code: "BR100", category: "Bancos Reguláveis", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop" },
  { name: "Suporte para Barra", code: "SB200", category: "Suportes", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
];

export default function PesoLivre() {
  return (
    <ProductLinePage
      lineName="PESO LIVRE"
      products={products}
      categories={["Bancos de Supino", "Bancos Reguláveis", "Suportes", "Articulados"]}
      description="A base essencial de toda academia com versatilidade total"
    />
  );
}
