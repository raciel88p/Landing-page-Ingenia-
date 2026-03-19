import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Agencia Google Partner Premier 2025
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Transforma tus Anuncios en <span className="text-gradient">Resultados</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Maximizamos el ROI de tus campañas de Google Ads con estrategias basadas en datos, inteligencia artificial y optimización continua. Deja de gastar y empieza a invertir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Comenzar Ahora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-white text-foreground border-2 border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PlayCircle size={20} className="text-primary" />
              Ver Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm p-2 md:p-4">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero-dashboard.png`} 
              alt="Marketing Dashboard Interface" 
              className="w-full h-auto rounded-xl md:rounded-2xl border border-border/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
