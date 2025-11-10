import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    purpose: "",
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.purpose || !formData.name || !formData.email || !formData.phone || !formData.state || !formData.city) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Create WhatsApp message
    const message = `
🎓 *Nova Solicitação - Vitally Educação*

📋 *Orçamento para:* ${formData.purpose}
👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}
📱 *Telefone:* ${formData.phone}
📍 *Estado:* ${formData.state}
🏙️ *Cidade:* ${formData.city}
    `.trim();

    const whatsappNumber = "5511999999999"; // Replace with actual Vitally WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="contact-form" className="py-12 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Solicite seu <span className="text-gradient">Orçamento</span>
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground">
              Receba um projeto 3D personalizado e condições especiais para sua instituição
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl border space-y-6" 
                style={{ boxShadow: 'var(--shadow-premium)' }}>
            
            {/* Purpose */}
            <div className="space-y-2">
              <Label htmlFor="purpose" className="text-base">Quero um orçamento para:</Label>
              <Select value={formData.purpose} onValueChange={(value) => setFormData({...formData, purpose: value})}>
                <SelectTrigger id="purpose" className="h-12 bg-background/50">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border z-50">
                  <SelectItem value="academia-campus">Academia para Campus</SelectItem>
                  <SelectItem value="laboratorio">Laboratório de Educação Física</SelectItem>
                  <SelectItem value="espaco-fitness">Espaço Fitness para Alunos/Professores</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">Digite seu nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="h-12 bg-background/50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">Digite seu e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="h-12 bg-background/50"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base">Digite seu telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="h-12 bg-background/50"
              />
            </div>

            {/* State */}
            <div className="space-y-2">
              <Label htmlFor="state" className="text-base">Insira seu estado</Label>
              <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                <SelectTrigger id="state" className="h-12 bg-background/50">
                  <SelectValue placeholder="Selecione seu estado" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border z-50">
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                  <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                  <SelectItem value="PR">Paraná</SelectItem>
                  <SelectItem value="SC">Santa Catarina</SelectItem>
                  <SelectItem value="BA">Bahia</SelectItem>
                  <SelectItem value="PE">Pernambuco</SelectItem>
                  <SelectItem value="CE">Ceará</SelectItem>
                  <SelectItem value="outros">Outro estado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city" className="text-base">Insira a sua cidade</Label>
              <Input
                id="city"
                type="text"
                placeholder="Sua cidade"
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="h-12 bg-background/50"
              />
            </div>

            {/* Submit */}
            <Button 
              type="submit" 
              variant="premium" 
              size="xl" 
              className="w-full group animate-glow"
            >
              <MessageCircle className="mr-2" />
              INICIAR CONVERSA
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Ao clicar, você será redirecionado para o WhatsApp da Vitally
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
