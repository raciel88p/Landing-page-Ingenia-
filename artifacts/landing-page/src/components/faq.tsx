import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuánto tardan en ver resultados?",
      answer: "Normalmente en las primeras 2-4 semanas comenzamos a ver tracción real y recolección de data vital, aunque el algoritmo de Google optimiza al máximo y encuentra su punto dulce después del primer mes de iteraciones."
    },
    {
      question: "¿Tengo que firmar un contrato a largo plazo?",
      answer: "No, trabajamos mes a mes. Confiamos plenamente en nuestros resultados, por lo que no necesitamos atarte con contratos forzosos. Tú decides quedarte porque ganas dinero."
    },
    {
      question: "¿El precio incluye el presupuesto de los anuncios?",
      answer: "No, el presupuesto de Google Ads se paga directamente a Google desde tu método de pago. Nuestras tarifas cubren exclusivamente la estrategia, creación, gestión y optimización experta."
    },
    {
      question: "¿Para qué tipo de negocios trabajan?",
      answer: "Nos especializamos en negocios B2B, empresas SaaS (Software as a Service) y tiendas E-commerce que tienen tickets medios-altos y buscan escalar su volumen de facturación."
    },
    {
      question: "¿Cómo nos comunicamos durante el mes?",
      answer: "Dependiendo de tu plan, establecemos comunicación fluida vía email, un canal dedicado de Slack o grupo de WhatsApp, además de agendar reuniones estratégicas mensuales para revisar métricas y próximos pasos."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Preguntas Frecuentes
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas antes de empezar.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-border"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-left text-base md:text-lg font-bold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
