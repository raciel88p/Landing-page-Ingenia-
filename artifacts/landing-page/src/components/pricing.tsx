import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "$299",
      period: "/mes",
      description: "Ideal para negocios locales que están comenzando.",
      features: [
        "Gestión hasta $2,000 en Ads",
        "Estructura de campaña inicial",
        "Reportes mensuales",
        "Soporte vía Email",
        "Optimización quincenal"
      ],
      highlighted: false,
      cta: "Comenzar Básico"
    },
    {
      name: "Pro",
      price: "$599",
      period: "/mes",
      description: "Para empresas que buscan escalar agresivamente.",
      features: [
        "Gestión hasta $10,000 en Ads",
        "Múltiples campañas (Search, Display)",
        "Reportes quincenales en vivo",
        "Soporte prioritario Slack/WhatsApp",
        "Optimización semanal",
        "Consultoría de Landing Pages"
      ],
      highlighted: true,
      cta: "Quiero el Plan Pro"
    },
    {
      name: "Enterprise",
      price: "A Medida",
      period: "",
      description: "Soluciones corporativas de alto volumen.",
      features: [
        "Gestión superior a $10,000",
        "Campañas omnicanal (Performance Max)",
        "Dashboard en tiempo real",
        "Consultor dedicado 24/7",
        "Tests A/B continuos",
        "Desarrollo de Landing Pages"
      ],
      highlighted: false,
      cta: "Hablar con Ventas"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
          >
            Inversión clara, <span className="text-primary">sin sorpresas</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Planes diseñados para adaptarse a tu etapa de crecimiento. Sin contratos a largo plazo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted 
                  ? "bg-foreground text-white shadow-2xl shadow-primary/20 border border-primary/50 scale-105 z-10" 
                  : "bg-white border border-border shadow-lg shadow-black/5"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Más Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-extrabold">{plan.price}</span>
                  <span className={`font-medium ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check 
                      size={20} 
                      className={`shrink-0 ${plan.highlighted ? "text-secondary" : "text-primary"}`} 
                    />
                    <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-foreground/80"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1"
                    : "bg-muted text-foreground hover:bg-foreground hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
