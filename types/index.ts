export type CarCategory =
  | "Economy"
  | "Sedan"
  | "SUV"
  | "Luxury"
  | "Sports";

export interface Car {
  id: string;
  name: string;
  model: string;
  category: CarCategory;
  dailyPriceAed: number;
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  seats: number;
  image: string;
  imageLocal?: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: "calendar" | "calendarDays" | "calendarRange" | "gem" | "briefcase" | "clock";
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "wallet" | "car" | "message" | "heart" | "sliders" | "mapPin";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  note?: string;
}

export interface ContactFormValues {
  fullName: string;
  phone: string;
  email: string;
  preferredCar: string;
  rentalStartDate: string;
  rentalDuration: string;
  message: string;
}
