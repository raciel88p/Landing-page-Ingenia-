import { AlertCircle, ThermometerSun, Users, DollarSign } from "lucide-react";

export function SocialProof() {
  const problems = [
    {
      icon: <ThermometerSun className="text-destructive w-8 h-8" />,
      title: "Clima Cálido",
      description: "Incomodidad y baja productividad en operaciones de campo debido a telas no transpirables."
    },
    {
      icon: <Users className="text-destructive w-8 h-8" />,
      title: "Uniformes Genéricos",
      description: "Débil percepción de marca y falta de diferenciación frente a la competencia."
    },
    {
      icon: <DollarSign className="text-destructive w-8 h-8" />,
      title: "Baja Durabilidad",
      description: "Desgaste rápido que genera costos recurrentes e innecesarios de reposición."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-4">
            <AlertCircle size={16} />
            El Problema Actual
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ¿Su equipo enfrenta estos desafíos?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-muted/30 border border-border/50 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
