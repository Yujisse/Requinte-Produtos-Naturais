import { store } from "../data/store";

export function whatsappUrl(category?: string): string {
  const base = store.whatsapp.number;
  if (!category) {
    return store.whatsapp.mainUrl;
  }
  const message = `Olá! Vim pelo site da Requinte e gostaria de saber mais sobre ${category}.`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${base}?text=${encoded}`;
}

export const instagramUrl = store.instagram.url;
export const directionsUrl = store.directionsUrl;
export const phoneLink = store.phone.link;
