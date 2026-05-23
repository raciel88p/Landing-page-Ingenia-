import { ArrowRight, Search, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#Fdfbf7]">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm border border-secondary/20">
              <MapPin size={16} />
              Producción Local · Entrega en Todo Costa Rica
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm border border-accent/20">
              <Clock size={16} />
              Cotizamos en menos de 24 horas
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-primary leading-[1.15]">
            Uniformes corporativos que elevan su <span className="text-accent">imagen de marca</span> y resisten el trabajo real en campo
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed">
            Camisas tipo Columbia con bordado personalizado. Producción local en Costa Rica. Entrega a todo el país en 30 días.
          </p>
          <p className="text-base text-secondary font-semibold mb-8">
            ✓ Cotización sin compromiso &nbsp;·&nbsp; ✓ Asesoría gratuita &nbsp;·&nbsp; ✓ Respuesta en menos de 24 horas
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              id="cta-hero"
              href="https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { if (typeof window !== "undefined" && (window as any).gtag) { (window as any).gtag('config', 'AW-17972003812'); } }}
              className="w-full sm:w-auto px-8 py-4 rounded-md font-bold text-lg bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Recibir cotización en 24 horas
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { if (typeof window !== "undefined" && (window as any).gtag) { (window as any).gtag('config', 'AW-17972003812'); } }}
              className="w-full sm:w-auto px-8 py-4 rounded-md font-bold text-lg bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Quiero mis camisas ahora
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-secondary/20 rounded-3xl -rotate-6 scale-105 z-0"></div>
          <div className="rounded-3xl border border-border shadow-2xl overflow-hidden relative z-10 bg-white">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-shirt.jpeg`} 
              alt="Profesional con camisa corporativa en Costa Rica" 
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
