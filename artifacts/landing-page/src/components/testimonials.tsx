import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Valeria Mendoza",
      role: "CEO, TechShop Latam",
      image: "avatar-1.png",
      quote: "Desde que empezamos a trabajar con AdsPro, nuestro costo de adquisición se redujo a la mitad y las ventas se triplicaron. Son un equipo increíblemente estratégico."
    },
    {
      name: "Carlos Rivera",
      role: "Fundador, SaaS CloudFlow",
      image: "avatar-2.png",
      quote: "Habíamos probado con 3 agencias antes sin ver retorno. AdsPro auditó nuestra cuenta, cambió la estructura y en 40 días logramos récord histórico de demos agendadas."
    },
    {
      name: "Sofía Arango",
      role: "Directora de Marketing, EduOnline",
      image: "avatar-3.png",
      quote: "Transparencia absoluta. No solo gestionan campañas, entienden de negocios. Sus reportes y dashboards nos permiten ver exactamente a dónde va cada dólar."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          >
            No nos creas a nosotros. <br />
            <span className="text-primary">Créeles a ellos.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5 border border-border"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-lg text-foreground/80 font-medium mb-8 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${t.image}`} 
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
