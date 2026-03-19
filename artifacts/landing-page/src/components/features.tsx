import { motion } from "framer-motion";
import { Rocket, LineChart, Headset } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Rocket className="text-white" size={28} />,
      color: "from-primary to-blue-500",
      title: "Campañas Optimizadas",
      description: "Estructuramos tus campañas para alcanzar a tu cliente ideal en el momento exacto, reduciendo el desperdicio de presupuesto."
    },
    {
      icon: <LineChart className="text-white" size={28} />,
      color: "from-accent to-pink-500",
      title: "ROI Garantizado",
      description: "Nos enfocamos exclusivamente en las métricas que importan para tu negocio: más conversiones cualificadas y menor costo de adquisición."
    },
    {
      icon: <Headset className="text-white" size={28} />,
      color: "from-secondary to-cyan-400",
      title: "Soporte Experto 24/7",
      description: "Tu éxito es nuestra prioridad. Contarás con un equipo de especialistas monitoreando y mejorando tus campañas diariamente."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          >
            ¿Por qué elegir <span className="text-primary">AdsPro</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            No somos una agencia tradicional. Somos tu partner de crecimiento impulsado por datos y obsesionado con tu rentabilidad.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-muted/30 rounded-3xl p-8 border border-border/50 hover:bg-white hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
