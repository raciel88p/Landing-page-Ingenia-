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
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary"
          >
            Diseñadas para Performance + Branding Corporativo
          </h2>
          <p
            className="text-lg text-muted-foreground"
          >
            La combinación perfecta entre funcionalidad táctica y elegancia corporativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={`https://wa.me/50689437109?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20${encodeURIComponent(feature.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-8 border border-border shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] transition-all duration-300 group block"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
              <div className="mt-6 text-accent font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Consultar ahora →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
