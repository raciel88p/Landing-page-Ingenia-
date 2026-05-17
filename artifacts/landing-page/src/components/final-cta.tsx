import { ArrowRight, Clock, MessageCircle } from "lucide-react";

const WA_FALLBACK = "https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle.";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30">
            <Clock size={16} />
            Respuesta garantizada en menos de 24 horas
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Reciba precios y modelos en menos de 24 horas
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
            Le ayudamos a elegir la mejor opción para su equipo, sin compromiso y directo por WhatsApp.
          </p>

          <div className="bg-white/10 border border-white/20 p-8 md:p-10 rounded-3xl backdrop-blur-md max-w-lg mx-auto shadow-2xl flex flex-col items-center">
            <a
              id="cta-whatsapp-final"
              href={WA_FALLBACK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-lg font-bold text-lg bg-accent text-white shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <p className="text-white/50 text-xs text-center mt-4">
              Respuesta inmediata y cotización a su medida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
