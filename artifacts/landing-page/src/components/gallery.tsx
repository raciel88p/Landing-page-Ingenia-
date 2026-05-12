import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "prod-4.jpeg", label: "Camisa Tipo Columbia - Rojo" },
  { src: "prod-15.jpeg", label: "Blusa Tipo Columbia - Blanco" },
  { src: "prod-3.jpeg", label: "Camisa Columbia - Azul marino" },
  { src: "prod-14.jpeg", label: "Camisa Columbia - Rojo clásico" },
  { src: "prod-2.jpeg", label: "Camisa Técnica - Gris oscuro" },
  { src: "prod-13.jpeg", label: "Uniformes en pareja" },
  { src: "prod-11.jpeg", label: "Camisa Columbia - Rojo dama" },
  { src: "prod-10.jpeg", label: "Uniformes bordados - Corporación Millenium" },
  { src: "prod-5.jpeg", label: "Polo Clásico - Turquesa dama" },
  { src: "prod-7.jpeg", label: "Blusa Tipo Columbia - Negro" },
  { src: "prod-8.jpeg", label: "Blusas y Camisas Docoma" },
  { src: "prod-6.jpeg", label: "Camisa bicolor verde/azul" },
  { src: "prod-9.jpeg", label: "Polo WAFFIT - Varios colores" },
  { src: "prod-12.jpeg", label: "Camisas Tipo Polo Bordadas" },
  { src: "prod-16.jpeg", label: "Polo-Columbia Dri-fit" },
  { src: "prod-1.jpeg", label: "Pantalón cargo corporativo" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected((s) => (s !== null ? (s - 1 + images.length) % images.length : 0));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % images.length : 0));

  return (
    <section id="galeria" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4"
          >
            Nuestros <span className="text-accent">Productos</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Camisas, blusas y uniformes corporativos confeccionados con los más altos estándares de calidad.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelected(i)}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${img.src}`}
                alt={img.label}
                loading="lazy"
                decoding="async"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={`${import.meta.env.BASE_URL}images/${images[selected].src}`}
              alt={images[selected].label}
              loading="lazy"
              className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={40} />
            </button>
            <p className="absolute bottom-6 text-white/80 text-sm font-medium">
              {images[selected].label} · {selected + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
