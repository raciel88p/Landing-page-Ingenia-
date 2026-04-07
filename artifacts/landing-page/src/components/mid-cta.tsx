import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function MidCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-white">
              ¿Listo para mejorar la imagen de su empresa?
            </h2>
            <p className="text-white/70 text-lg">
              Le asesoramos gratis para elegir el uniforme ideal según su sector y presupuesto.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              id="cta-mid-page"
              href="https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-md font-bold text-base bg-accent text-white shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-md font-bold text-base bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Ver precios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
