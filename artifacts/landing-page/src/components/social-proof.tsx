import { motion } from "framer-motion";

export function SocialProof() {
  const stats = [
    { value: "500+", label: "Clientes Activos" },
    { value: "$50M+", label: "Ventas Generadas" },
    { value: "98%", label: "Tasa de Retención" },
    { value: "3.5x", label: "ROI Promedio" },
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Con la confianza de empresas de alto crecimiento
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-1"
            >
              <span className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
