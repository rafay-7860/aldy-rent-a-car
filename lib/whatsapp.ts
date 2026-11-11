import { siteConfig } from "@/lib/site-config";

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(
    message?.trim() || siteConfig.defaultWhatsappMessage,
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function getCarWhatsAppMessage(carName: string): string {
  return `Hello Aldy Rent a Car, I am interested in renting the ${carName} in Dubai. Please share availability and rental prices.`;
}

export function getContactFormWhatsAppMessage(data: {
  fullName: string;
  phone: string;
  email: string;
  preferredCar: string;
  rentalStartDate: string;
  rentalDuration: string;
  message: string;
}): string {
  return [
    "Hello Aldy Rent a Car, I would like to make a rental inquiry.",
    "",
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Preferred car: ${data.preferredCar || "Not specified"}`,
    `Start date: ${data.rentalStartDate || "Not specified"}`,
    `Duration: ${data.rentalDuration || "Not specified"}`,
    data.message ? `Message: ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
