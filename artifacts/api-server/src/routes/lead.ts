import { Router } from "express";
import { logger } from "../lib/logger";

const router = Router();

router.post("/lead", async (req, res) => {
  const { nombre, whatsapp, cantidad } = req.body;

  if (!nombre || !whatsapp) {
    res.status(400).json({ success: false, message: "Nombre y WhatsApp son requeridos." });
    return;
  }

  logger.info({ nombre, whatsapp, cantidad }, "Nuevo lead recibido");

  res.status(200).json({
    success: true,
    message: "Cotización recibida. Le contactaremos en menos de 24 horas.",
  });
});

export default router;
