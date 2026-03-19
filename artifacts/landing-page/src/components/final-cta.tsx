import { motion } from "framer-motion";
import { ArrowRight, Send, Clock } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Solicite su cotización en menos de 24 horas
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Producción local. Entrega en todo Costa Rica. Equipe a su personal con uniformes que proyecten la verdadera calidad de su empresa.
          </p>
          
          <div className="bg-white/10 border border-white/20 p-8 md:p-12 rounded-3xl backdrop-blur-md max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-6 text-accent font-semibold">
              <Clock size={20} />
              <span>Respuesta garantizada en menos de 24 horas</span>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Nombre Completo" 
                  className="w-full px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Empresa" 
                  className="w-full px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Correo Electrónico" 
                  className="w-full px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Teléfono" 
                  className="w-full px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <textarea 
                placeholder="Cantidad estimada y detalles de su solicitud..." 
                rows={3}
                className="w-full px-4 py-3 rounded-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <a
                href="https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-md font-bold text-lg bg-accent text-white shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group mt-4"
              >
                <Send size={20} />
                Mejorar la imagen de mi equipo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
