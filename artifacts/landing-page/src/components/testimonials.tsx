import { Briefcase, Truck, TreePine, Wrench } from "lucide-react";

export function Testimonials() {
  const useCases = [
    {
      icon: <Briefcase className="text-primary w-8 h-8" />,
      title: "Ventas en Campo",
      description: "Para representantes y ejecutivos que necesitan lucir impecables durante sus visitas y negociaciones."
    },
    {
      icon: <Truck className="text-primary w-8 h-8" />,
      title: "Industria / Logística",
      description: "Supervisores, gerentes de planta y personal logístico que requieren comodidad y resistencia en su día a día."
    },
    {
      icon: <TreePine className="text-primary w-8 h-8" />,
      title: "Turismo y Outdoor",
      description: "Guías turísticos, personal de hoteles y parques que operan en climas exigentes y al aire libre."
    },
    {
      icon: <Wrench className="text-primary w-8 h-8" />,
      title: "Equipos Técnicos",
      description: "Ingenieros, agrónomos e instaladores que combinan trabajo de oficina con visitas constantes a proyectos."
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-primary"
          >
            ¿Para quién son ideales?
          </h2>
          <p className="text-lg text-muted-foreground">
            Diseñadas para adaptarse a las exigencias de diversos sectores profesionales en Costa Rica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-border text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
