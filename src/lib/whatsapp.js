export const WHATSAPP_NUMBER = "5562999305678";
export const WHATSAPP_DISPLAY = "+55 62 99930-5678";

export function whatsappLink(message) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}

export const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da EC Aero Parts e gostaria de verificar a disponibilidade de peças aeronáuticas.";