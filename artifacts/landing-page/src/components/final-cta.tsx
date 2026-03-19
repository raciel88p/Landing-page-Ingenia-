import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-foreground to-foreground z-0" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            ¿Listo para dominar tu mercado?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Agenda una auditoría estratégica gratuita de tu cuenta actual. Descubre exactamente cuánto dinero estás dejando sobre la mesa.
          </p>
          
          <div className="bg-white/10 border border-white/20 p-8 md:p-12 rounded-3xl backdrop-blur-md max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Solicita tu Auditoría</h3>
            <p className="text-accent font-medium mb-8">Plazas limitadas a 5 nuevos clientes este mes.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Tu Nombre" 
                  className="w-full px-4 py-3 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/50"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email de Trabajo" 
                  className="w-full px-4 py-3 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/50"
                  required
                />
              </div>
              <input 
                type="url" 
                placeholder="Sitio Web (Opcional)" 
                className="w-full px-4 py-3 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/50"
              />
              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group mt-4"
              >
                <Calendar size={20} />
                Agendar Sesión Ahora
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
            <p className="text-xs text-white/50 mt-4 text-center">
              100% Gratis. Sin compromisos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
