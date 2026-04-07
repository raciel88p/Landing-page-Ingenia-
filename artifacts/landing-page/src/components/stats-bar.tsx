import { Building2, Package, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Building2, value: "+80", label: "Empresas atendidas" },
  { icon: Package, value: "+5,000", label: "Uniformes entregados" },
  { icon: MapPin, value: "7", label: "Provincias de Costa Rica" },
  { icon: Star, value: "100%", label: "Producción nacional" },
];

export function StatsBar() {
  return (
    <section className="bg-primary py-10 border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
