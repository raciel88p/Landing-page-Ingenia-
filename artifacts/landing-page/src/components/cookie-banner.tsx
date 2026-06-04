import { useState, useEffect } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie_consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-border p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-foreground/80">
        <p>
          Utilizamos cookies propias y de terceros para asegurar el correcto funcionamiento del sitio web y analizar nuestro tráfico.
          Al hacer clic en "Aceptar", usted acepta el uso de estas cookies.
        </p>
      </div>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
