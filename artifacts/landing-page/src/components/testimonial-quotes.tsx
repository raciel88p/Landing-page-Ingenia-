import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "La atención personalizada y la calidad de las camisas Columbia es excepcional. Nuestro equipo técnico ahora proyecta la imagen de confianza y profesionalismo que siempre buscamos.",
    name: "Andrey Montoya",
    role: "Equipo Técnico",
    company: "Avanza",
    initials: "AV",
    color: "bg-primary/80",
  },
  {
    quote: "Las camisas para nuestro equipo de ventas y distribución han sido un éxito. Soportan el uso diario en el clima de Costa Rica manteniendo siempre el color y la buena apariencia.",
    name: "Jennifer Delgado - Propietaria",
    role: "Operaciones",
    company: "JD Panadería",
    initials: "JD",
    color: "bg-secondary/80",
  },
  {
    quote: "Nuestra experiencia con Ingenia ha sido impecable. El bordado es detallado, preciso, y los uniformes aportan comodidad y elegancia en cada proyecto que visitamos.",
    name: "Marilyn Rodríguez Propietaria",
    role: "Gestión de Proyectos",
    company: "Maromo",
    initials: "MR",
    color: "bg-accent/80",
  },
];

export function TestimonialQuotes() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas en Costa Rica que ya transformaron la imagen de su equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-border flex flex-col gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="text-accent/40" size={36} />
              <p className="text-foreground/80 leading-relaxed text-sm flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
