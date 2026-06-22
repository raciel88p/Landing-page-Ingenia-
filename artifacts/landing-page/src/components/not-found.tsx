import { Button } from "@/components/ui/button";
import { MoveLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container px-4 mx-auto text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
        <HelpCircle className="w-10 h-10 text-primary" />
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-foreground">
        404 <span className="text-primary">-</span> Página no encontrada
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
        ¿Quizás quieras volver al inicio y explorar nuestros uniformes?
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="rounded-full px-8">
          <a href="/">
            <MoveLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8">
          <a href="/#faq">
            Preguntas Frecuentes
          </a>
        </Button>
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Si crees que esto es un error, por favor <a href="/#contacto" className="text-primary hover:underline">contáctanos</a>.
        </p>
      </div>
    </div>
  );
}
