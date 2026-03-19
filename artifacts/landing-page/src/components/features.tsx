import { motion } from "framer-motion";
import { Wind, Compass, PenTool, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Wind className="text-white" size={28} />,
      color: "from-blue-500 to-cyan-400",
      title: "Tela Ligera y Transpirable",
      description: "Tecnología de secado rápido que proporciona mayor comodidad en el clima tropical de Costa Rica, manteniendo a su equipo fresco todo el día."
    },
    {
      icon: <Compass className="text-white" size={28} />,
      color: "from-secondary to-green-500",
      title: "Diseño Técnico Tipo Outdoor",
      description: "Corte funcional con ventilación estratégica en la espalda, ideal para operaciones en campo, ventas y logística."
    },
    {
      icon: <PenTool className="text-white" size={28} />,
      color: "from-accent to-orange-400",
      title: "Personalización con Bordado",
      description: "Branding consistente con su logo bordado en alta definición, garantizando una imagen corporativa impecable y profesional."
    },
    {
      icon: <Shield className="text-white" size={28} />,
      color: "from-primary to-indigo-600",
      title: "Alta Durabilidad",
      description: "Materiales resistentes a rasgaduras y decoloración, diseñados para uso rudo, reduciendo costos de reposición a largo plazo."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#Fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary"
          >
            Diseñadas para Performance + Branding Corporativo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            La combinación perfecta entre funcionalidad táctica y elegancia corporativa.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-border shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
