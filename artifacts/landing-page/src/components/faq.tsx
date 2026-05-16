import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "¿Cuántas camisas es el mínimo de pedido?",
      answer: "Nuestro pedido mínimo es desde 12 unidades por talla o modelo. Esto nos permite asegurar una producción eficiente y precios competitivos para su empresa."
    },
    {
      question: "¿Pueden bordar nuestro logo?",
      answer: "Sí, digitalizamos su logo con alta precisión y lo bordamos utilizando hilo de alta calidad que no se decolora, garantizando una imagen corporativa duradera y profesional."
    },
    {
      question: "¿Cuánto tiempo tarda la producción?",
      answer: "El tiempo estimado es de 30 días hábiles, dependiendo de la cantidad solicitada y el nivel de personalización (bordados) requerido para su pedido."
    },
    {
      question: "¿Hacen entregas fuera del GAM?",
      answer: "Sí, hacemos entregas en todo el territorio de Costa Rica mediante servicios de mensajería seguros y confiables para que sus uniformes lleguen hasta sus oficinas."
    },
    {
      question: "¿Qué tallas están disponibles?",
      answer: "Ofrecemos una amplia curva de tallas que va desde la XS hasta la XXXL en todas nuestras líneas y modelos, asegurando un ajuste adecuado para todo su equipo."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-y border-border/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4 text-primary"
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesita saber para realizar su pedido corporativo.
          </p>
        </div>

        <div
          className="bg-muted/20 rounded-3xl p-6 md:p-8 shadow-sm border border-border"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60 last:border-0">
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-foreground hover:text-accent hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
