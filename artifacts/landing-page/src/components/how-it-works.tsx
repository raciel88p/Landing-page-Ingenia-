import { motion } from "framer-motion";
import { Star, ShieldCheck, Briefcase } from "lucide-react";

export function HowItWorks() {
  const benefits = [
    {
      icon: <Star className="text-accent" size={32} />,
      title: "Mejoran la percepción de marca en campo",
      description: "Proyecte una imagen premium que destaque a su empresa de la competencia en cada interacción."
    },
    {
      icon: <ShieldCheck className="text-secondary" size={32} />,
      title: "Incrementan la confianza del cliente",
      description: "Un equipo bien uniformado transmite profesionalismo, seguridad y atención al detalle."
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: "Refuerzan consistencia visual",
      description: "Mantenga la integridad de su marca en todos los puntos de contacto, desde la oficina hasta la operación en campo."
    }
  ];

  return (
    <section id="opportunity" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Las empresas que invierten en uniformes funcionales logran:
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-secondary/10 via-secondary/50 to-accent/10" />

          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-8 relative z-10 shadow-xl">
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed max-w-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
