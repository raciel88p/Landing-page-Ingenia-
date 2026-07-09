import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-ingenia.png`}
                alt="Ingenia logo"
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-primary">
                Ingenia
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Especialistas en la confección y personalización de camisas tipo Columbia para empresas en Costa Rica. Elevamos su imagen corporativa.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/UniformesIngeniacr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/ingenia_uniformesempresariales" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li><a href="#problem" className="text-muted-foreground hover:text-accent transition-colors">Desafíos</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-accent transition-colors">Características</a></li>
              <li><a href="#use-cases" className="text-muted-foreground hover:text-accent transition-colors">Sectores</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-accent shrink-0" />
                <span>Heredia, San Rafael, Concepción.<br/>Envíos a todo el país.</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-accent shrink-0" />
                <span>+506 8943-7109</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-accent shrink-0" />
                <span>ventas@ingenia.cr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ingenia. Todos los derechos reservados. | página realizada por <a href="https://www.robertoperezsalazar.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">www.robertoperezsalazar.com</a> especialista en posicionamiento SEO
          </p>
        </div>
      </div>
    </footer>
  );
}
