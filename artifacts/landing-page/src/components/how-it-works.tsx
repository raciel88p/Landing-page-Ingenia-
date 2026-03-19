import { motion } from "framer-motion";
import { Search, Zap, Trophy } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Search className="text-primary" size={32} />,
      title: "Análisis Profundo",
      description: "Auditamos tu cuenta actual, investigamos a tu competencia y descubrimos oportunidades ocultas en tu mercado."
    },
    {
      number: "02",
      icon: <Zap className="text-accent" size={32} />,
      title: "Estrategia a Medida",
      description: "Diseñamos una arquitectura de campañas agresiva y páginas de aterrizaje altamente persuasivas."
    },
    {
      number: "03",
      icon: <Trophy className="text-secondary" size={32} />,
      title: "Escalado de Resultados",
      description: "Lanzamos, medimos en tiempo real, realizamos tests A/B y multiplicamos el presupuesto en lo que sí funciona."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-foreground text-white relative overflow-hidden">
      {/* Dark modern background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Nuestra Metodología de <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Crecimiento</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-accent/10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-8 relative z-10 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent border border-white/20" />
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
