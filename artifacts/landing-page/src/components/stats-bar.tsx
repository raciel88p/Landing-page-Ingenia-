import { Building2, Package, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Building2, value: "+80", label: "Empresas atendidas" },
  { icon: Package, value: "+5,000", label: "Uniformes entregados" },
  { icon: MapPin, value: "7", label: "Provincias de Costa Rica" },
  { icon: Star, value: "100%", label: "Producción nacional" },
];

export function StatsBar() {
  return (
    <section className="bg-primary py-10 border-y border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 flex flex-col items-center justify-center text-white/90">
          <div className="flex items-center gap-1 text-accent mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-lg font-bold">4.9/5 de satisfacción en más de 80 empresas corporativas</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="text-accent w-6 h-6" />
              <span className="text-3xl font-extrabold text-white">{value}</span>
              <span className="text-sm text-white/70">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
