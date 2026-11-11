import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "daily",
    title: "Daily Car Rental",
    description:
      "Short trips, airport arrivals, and weekend plans with straightforward daily hire.",
    icon: "calendar",
  },
  {
    id: "weekly",
    title: "Weekly Car Rental",
    description:
      "Stay longer in Dubai with weekly packages that balance value and flexibility.",
    icon: "calendarDays",
  },
  {
    id: "monthly",
    title: "Monthly Car Rental",
    description:
      "Ideal for extended stays, projects, and residents who need reliable monthly transport.",
    icon: "calendarRange",
  },
  {
    id: "luxury",
    title: "Luxury Car Rental",
    description:
      "Arrive in style for special occasions, premium travel, and executive comfort.",
    icon: "gem",
  },
  {
    id: "business",
    title: "Business Car Rental",
    description:
      "Dependable vehicles for meetings, client visits, and professional travel across the UAE.",
    icon: "briefcase",
  },
  {
    id: "long-term",
    title: "Long-Term Car Rental",
    description:
      "Extended rental support when you need a car beyond a short holiday timeline.",
    icon: "clock",
  },
];
