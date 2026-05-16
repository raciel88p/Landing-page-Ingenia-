import { TrendingDown, ThumbsUp, Clock } from "lucide-react";

export function HowItWorks() {
  const benefits = [
    {
      icon: <TrendingDown className="text-accent" size={32} />,
      stat: "Hasta 30% menos",
      title: "en costos de reposición",
      description: "La alta durabilidad de nuestros materiales significa menos reemplazos frecuentes y un gasto anual significativamente menor."
    },
    {
      icon: <ThumbsUp className="text-secondary" size={32} />,
      stat: "Más confianza",
      title: "desde el primer contacto",
      description: "Un equipo uniformado proyecta orden, seriedad y compromiso. Sus clientes lo percibirán así desde la primera visita."
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      stat: "30 días",
      title: "para tener su equipo listo",
      description: "Desde la cotización hasta la entrega de todos los uniformes con su logo bordado, listo para salir a campo."
    }
  ];

  return (
    <section id="opportunity" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-primary"
          >
            Resultados reales para su empresa
          </h2>
          <p
            className="text-lg text-muted-foreground"
          >
            Las empresas que invierten en uniformes funcionales obtienen beneficios tangibles desde el primer pedido.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-accent/20" />

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 relative z-10 shadow-md">
                {benefit.icon}
              </div>
              <div className="text-3xl font-extrabold text-accent mb-1">{benefit.stat}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
