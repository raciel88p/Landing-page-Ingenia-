import { motion } from "framer-motion";
import { ArrowRight, Search, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#Fdfbf7]">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 border border-secondary/20">
            <MapPin size={16} />
            Producción Local · Entrega en Todo Costa Rica
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-primary leading-[1.15]">
            Camisas Tipo Columbia para su <span className="text-accent">Empresa</span> en Costa Rica
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Optimice la imagen de su equipo. Mejore la percepción de marca. Aumente el profesionalismo en campo con uniformes técnicos de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-md font-bold text-lg bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Solicitar Cotización
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-md font-bold text-lg bg-white text-primary border-2 border-primary/20 hover:border-primary hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search size={20} />
              Ver Modelos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-secondary/20 rounded-3xl -rotate-6 scale-105 z-0"></div>
          <div className="rounded-3xl border border-border shadow-2xl overflow-hidden relative z-10 bg-white">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-shirt.png`} 
              alt="Profesional con camisa corporativa en Costa Rica" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
