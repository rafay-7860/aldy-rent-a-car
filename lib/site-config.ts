export const siteConfig = {
  name: "Aldy Rent a Car",
  shortName: "Aldy",
  tagline: "Drive Your Dreams. Explore Dubai in Style.",
  description:
    "Premium car rental services in Dubai. Affordable daily, weekly, and monthly rentals with a convenient Al Garhoud location.",
  phoneDisplay: "+971 50 677 1216",
  phoneTel: "+971506771216",
  whatsappNumber: "971506771216",
  email: "",
  address: {
    line1: "Prime Executive Business Center",
    line2: "Al Fajer Business Centre Building, Office No. 78",
    area: "Al Garhoud",
    city: "Dubai",
    country: "United Arab Emirates",
    full: "Prime Executive Business Center, Al Fajer Business Centre Building, Office No. 78, Al Garhoud, Dubai, United Arab Emirates.",
  },
  mapsUrl: "https://maps.app.goo.gl/PScibVdq4STPTZg39",
  social: {
    instagram: "",
    facebook: "",
    x: "",
  },
  url: "https://aldyrentacar.ae",
  keywords: [
    "Car Rental Dubai",
    "Rent a Car Dubai",
    "Affordable Car Rental Dubai",
    "Luxury Car Rental Dubai",
    "Monthly Car Rental Dubai",
    "Daily Car Rental Dubai",
    "Car Hire Dubai UAE",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Our Cars", href: "/cars" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Contact Us", href: "/contact" },
  ],
  defaultWhatsappMessage:
    "Hello Aldy Rent a Car, I am interested in renting a car in Dubai. Please share your available cars and rental prices.",
} as const;

export type SiteConfig = typeof siteConfig;
