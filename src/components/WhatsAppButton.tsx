import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { toast } from "sonner";
import wallpaper from "@/assets/tela de fundo.jpg";
import profilePhoto from "@/assets/whats.jpg";

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Abrir chat WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>

      {/* WhatsApp-style Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[400px] rounded-2xl shadow-2xl overflow-hidden bg-white">
          {/* Header - WhatsApp Style */}
          <div className="flex items-center gap-3 p-4" style={{ backgroundColor: '#075E54' }}>
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img 
                src={profilePhoto}
                alt="Foto de perfil do consultor"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-white font-semibold flex-1">Consultor Vitally</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Background */}
          <div 
            className="p-4 space-y-4 max-h-[70vh] overflow-y-auto"
            style={{ 
              backgroundColor: '#ECE5DD',
              backgroundImage: `url(${wallpaper})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Welcome Message - received style */}
            <div className="flex gap-2">
              <div className="max-w-[85%] bg-white rounded-lg rounded-tl-none p-3 shadow-sm">
                <p className="text-gray-800 text-sm leading-relaxed">
                  Olá, gostaria de orçar nossos produtos pelo WhatsApp? Me informe seu email e telefone para iniciarmos uma conversa sem compromisso :)
                </p>
              </div>
            </div>

            {/* Form - sent message style */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Purpose Select - as sent message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] w-full rounded-lg rounded-tr-none p-2 shadow-sm" style={{ backgroundColor: '#D9FDD3' }}>
                  <Select value={formData.purpose} onValueChange={(value) => setFormData({...formData, purpose: value})}>
                    <SelectTrigger className="border-0 bg-transparent h-10 text-gray-800  focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Quero um orçamento para:" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg z-[9999] text-gray-900 rounded-md p-1 min-w-[240px] max-h-64 overflow-auto">
                      <SelectItem value="Escola" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Escola</SelectItem>
                    <SelectItem value="Faculdade" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Faculdade</SelectItem>
                      <SelectItem value="academia" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Academia</SelectItem>
                      <SelectItem value="Stúdio" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Stúdio</SelectItem>
                      <SelectItem value="Condomínio" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Condomínio</SelectItem>
                      <SelectItem value="Clube" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Clube</SelectItem>
                      <SelectItem value="Construtora" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Construtora</SelectItem>
                      <SelectItem value="Residencial" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Residencial (academia em casa)</SelectItem>
                      <SelectItem value="Doméstico" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Residencial (Doméstico)</SelectItem>
                      <SelectItem value="Hotel e Resort" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Hotel e Resort</SelectItem>
                      <SelectItem value="Orgão Público" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Orgão Público</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Name Input */}
              <div className="flex justify-end">
                <div className="max-w-[85%] w-full rounded-lg rounded-tr-none p-2 shadow-sm" style={{ backgroundColor: '#D9FDD3' }}>
                  <Input
                    type="text"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-0 bg-transparent h-9 text-gray-800 placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex justify-end">
                <div className="max-w-[85%] w-full rounded-lg rounded-tr-none p-2 shadow-sm" style={{ backgroundColor: '#D9FDD3' }}>
                  <Input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-0 bg-transparent h-9 text-gray-800 placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex justify-end">
                <div className="max-w-[85%] w-full rounded-lg rounded-tr-none p-2 shadow-sm" style={{ backgroundColor: '#D9FDD3' }}>
                  <Input
                    type="tel"
                    placeholder="Digite seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-0 bg-transparent h-9 text-gray-800 placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* State Select */}
              <div className="flex justify-end">
                <div className="max-w-[85%] w-full rounded-lg rounded-tr-none p-2 shadow-sm" style={{ backgroundColor: '#D9FDD3' }}>
                  <Select value={formData.state} onValueChange={(value) => setFormData({...formData, state: value})}>
                    <SelectTrigger className="border-0 bg-transparent h-10 text-gray-800  focus:ring-0 focus:ring-offset-0">
                      <SelectValue placeholder="Insira seu estado" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg z-[9999] text-gray-900 rounded-md p-1 min-w-[240px] max-h-64 overflow-auto">
                      <SelectItem value="SP" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">São Paulo</SelectItem>
                      <SelectItem value="RJ" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Minas Gerais</SelectItem>
                      <SelectItem value="RS" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Rio Grande do Sul</SelectItem>
                      <SelectItem value="PR" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Paraná</SelectItem>
                      <SelectItem value="SC" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Santa Catarina</SelectItem>
                      <SelectItem value="BA" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Bahia</SelectItem>
                      <SelectItem value="PE" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Pernambuco</SelectItem>
                      <SelectItem value="CE" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm: px-3 py-2.5">Ceará</SelectItem>
                      <SelectItem value="outros" className="cursor-pointer hover:bg-gray-100 text-gray-900 text-sm sm:text-base px-3 py-2.5">Outro estado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* City Input */}
              <div className="flex justify-end">
                <div className="max-w-[85%] w-full rounded-lg rounded-tr-none p-2 shadow-sm" style={{ backgroundColor: '#D9FDD3' }}>
                  <Input
                    type="text"
                    placeholder="Insira a sua cidade"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="border-0 bg-transparent h-9 text-gray-800 placeholder:text-gray-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full h-12 font-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#25D366' }}
                >
                  INICIAR CONVERSA
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
