export function formatPhoneNumber(phone: string): string {
  return phone.replace(/\s/g, "");
}

export function getWhatsAppLink(number: string, message?: string): string {
  const cleanNumber = formatPhoneNumber(number).replace(/^0/, "44");
  const encodedMessage = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${cleanNumber}${encodedMessage}`;
}

export function getPhoneLink(phone: string): string {
  return `tel:${formatPhoneNumber(phone)}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
