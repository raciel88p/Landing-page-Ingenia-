import { useEffect, useState } from "react";

const WA_URL =
  "https://wa.me/50689437109?text=En%20Ingenia%20es%20un%20gusto%20atenderle.";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      id="cta-whatsapp-floating"
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctenos por WhatsApp"
      onClick={() => { if (typeof window !== "undefined" && (window as any).gtag) { (window as any).gtag('config', 'AW-17972003812'); } }}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      <span className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping" style={{ backgroundColor: "#25D366" }} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7 relative z-10"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.463-2.001A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.771-1.849l-.486-.289-5.023 1.188 1.232-4.893-.317-.502A13.269 13.269 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.844c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.63-.199-.896.199-.266.398-1.031 1.295-1.264 1.561-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.057-1.982-2.362-2.215-2.76-.232-.398-.025-.613.175-.811.179-.177.398-.465.597-.697.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.896-2.162-1.229-2.96-.323-.776-.651-.671-.896-.683l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.323s1.428 3.854 1.628 4.12c.199.266 2.812 4.293 6.814 6.021.952.411 1.695.657 2.274.841.956.305 1.826.262 2.514.159.767-.114 2.354-.963 2.687-1.893.332-.93.332-1.728.232-1.893-.1-.166-.365-.266-.763-.465z" />
      </svg>
    </a>
  );
}
