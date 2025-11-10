import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
            <img
              className="h-10 w-auto object-contain drop-shadow-md"
              src="src\assets\Logo\LogoVitally.png"
              alt="Logo Vitally"
            />
            </div>
            <p className="text-muted-foreground">
              Equipamentos de academia premium. Design, tecnologia e sofisticação para instituições de excelência.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(17) 99641-8917</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>contato@vitally.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>São José do Rio Preto - SP, CEP 15035-430</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Atendemos todo o Brasil</p>
              <p>Projetos personalizados 3D</p>
              <p>Garantia e suporte técnico</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Vitally. Todos os direitos reservados. | Desenvolvido por{' '}
            <a
              href="https://wa.me/5514998567549"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Ryan Tofanini
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
