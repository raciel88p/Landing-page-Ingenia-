import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle2, MessageCircle } from "lucide-react";

const WA_FALLBACK = "https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle.";

export function FinalCTA() {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", cantidad: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        const waText = encodeURIComponent(
          `Hola, me interesa una cotización.\n*Nombre:* ${form.nombre}\n*WhatsApp:* ${form.whatsapp}\n*Cantidad:* ${form.cantidad}`
        );
        setTimeout(() => window.open(`https://wa.me/50689437109?text=${waText}`, "_blank"), 800);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30">
            <Clock size={16} />
            Respuesta garantizada en menos de 24 horas
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Reciba precios y modelos en menos de 24 horas
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
            Le ayudamos a elegir la mejor opción para su equipo, sin compromiso y directo por WhatsApp.
          </p>

          <div className="bg-white/10 border border-white/20 p-8 md:p-10 rounded-3xl backdrop-blur-md max-w-lg mx-auto shadow-2xl">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <CheckCircle2 className="text-green-400 w-16 h-16" />
                <h3 className="text-2xl font-bold text-white">¡Solicitud recibida!</h3>
                <p className="text-white/70">Abriéndole WhatsApp para confirmar los detalles...</p>
              </div>
            ) : (
              <form className="space-y-4 text-left" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">WhatsApp *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="Ej: 8888-8888"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-1">Cantidad estimada</label>
                  <select
                    name="cantidad"
                    value={form.cantidad}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="1-10">1 – 10 uniformes</option>
                    <option value="11-30">11 – 30 uniformes</option>
                    <option value="31-60">31 – 60 uniformes</option>
                    <option value="60+">Más de 60 uniformes</option>
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-red-300 text-sm text-center">
                    Hubo un problema. <a href={WA_FALLBACK} target="_blank" rel="noopener noreferrer" className="underline font-semibold">Contáctenos por WhatsApp</a>.
                  </p>
                )}

                <button
                  id="cta-form-submit"
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-lg font-bold text-lg bg-accent text-white shadow-lg hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  <MessageCircle size={20} />
                  {status === "loading" ? "Enviando..." : "Recibir cotización por WhatsApp"}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <p className="text-white/50 text-xs text-center">
                  Solo usamos su WhatsApp para enviarle la cotización.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
