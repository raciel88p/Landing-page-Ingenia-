import { motion } from "framer-motion";
import { ArrowUpRight, TrendingDown } from "lucide-react";

export function Pricing() {
  const impacts = [
    {
      value: "Profesionalismo",
      trend: "up",
      label: "Percibido por clientes",
      color: "text-secondary"
    },
    {
      value: "Confianza",
      trend: "up",
      label: "Del cliente en campo",
      color: "text-secondary"
    },
    {
      value: "Rotación",
      trend: "down",
      label: "De uniformes por desgaste",
      color: "text-accent"
    },
    {
      value: "Consistencia",
      trend: "up",
      label: "De imagen de marca",
      color: "text-primary"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-white border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary"
          >
            Impacto <span className="text-accent">Esperado</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Resultados medibles al estandarizar la vestimenta de su equipo con camisas tipo Columbia de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-muted/20 p-8 rounded-3xl border border-border text-center flex flex-col items-center justify-center"
            >
              <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${impact.trend === 'up' ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'}`}>
                {impact.trend === 'up' ? <ArrowUpRight size={24} /> : <TrendingDown size={24} />}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${impact.color}`}>
                {impact.value}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
                {impact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
