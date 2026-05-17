import { X, Check } from "lucide-react";

const genericItems = [
  "Se destiñen y desgastan en pocos meses",
  "Imagen genérica sin identidad de marca",
  "Tela incómoda en el clima tropical",
  "Sin personalización ni bordado",
  "Reposición frecuente = costos altos",
];

const ingeniaItems = [
  "Alta resistencia al uso diario en campo",
  "Su logo bordado en alta definición",
  "Tela transpirable para el calor de CR",
  "Diseño a la medida de su empresa",
  "Larga vida útil = menor gasto anual",
];

export function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            ¿Por qué no usar uniformes genéricos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La diferencia no es solo visual — impacta directamente en cómo sus clientes perciben su empresa y en el gasto anual de reposición.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="rounded-3xl border-2 border-red-200 bg-red-50 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="text-red-500" size={20} />
              </div>
              <h3 className="text-xl font-bold text-red-700">Uniformes comunes</h3>
            </div>
            <ul className="space-y-4">
              {genericItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-red-800">
                  <X size={18} className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl border-2 border-secondary/40 bg-secondary/5 p-8 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
              Recomendado para empresas
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <Check className="text-secondary" size={20} />
              </div>
              <h3 className="text-xl font-bold text-secondary">Uniformes Ingenia</h3>
            </div>
            <ul className="space-y-4">
              {ingeniaItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary/90">
                  <Check size={18} className="text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle."
            target="_blank"
            rel="noopener noreferrer"
            id="cta-comparison"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-bold text-lg bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300"
          >
            Ver precios para mi empresa
            <Check size={20} />
          </a>
          <p className="text-muted-foreground text-sm mt-3">Asesoría gratuita · Sin compromiso</p>
        </div>
      </div>
    </section>
  );
}
