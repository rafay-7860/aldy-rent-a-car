import type { Car, CarCategory } from "@/types";

/**
 * Sample fleet data for design and development.
 * Replace with real inventory when available — do not treat as live availability.
 */
export const carCategories: CarCategory[] = [
  "Economy",
  "Sedan",
  "SUV",
  "Luxury",
  "Sports",
];

export const cars: Car[] = [
  {
    id: "economy-compact-01",
    name: "Compact Hatch",
    model: "Sample Economy Model",
    category: "Economy",
    dailyPriceAed: 99,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/economy-compact.jpg",
    featured: true,
  },
  {
    id: "sedan-business-01",
    name: "Business Sedan",
    model: "Sample Sedan Model",
    category: "Sedan",
    dailyPriceAed: 149,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/sedan-business.jpg",
    featured: true,
  },
  {
    id: "suv-family-01",
    name: "Family SUV",
    model: "Sample SUV Model",
    category: "SUV",
    dailyPriceAed: 199,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 7,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/suv-family.jpg",
    featured: true,
  },
  {
    id: "luxury-executive-01",
    name: "Executive Luxury",
    model: "Sample Luxury Model",
    category: "Luxury",
    dailyPriceAed: 399,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/luxury-executive.jpg",
    featured: true,
  },
  {
    id: "sports-coupe-01",
    name: "Sports Coupe",
    model: "Sample Sports Model",
    category: "Sports",
    dailyPriceAed: 599,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/sports-coupe.jpg",
    featured: true,
  },
  {
    id: "economy-city-02",
    name: "City Runabout",
    model: "Sample Economy Model",
    category: "Economy",
    dailyPriceAed: 89,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 4,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/economy-city.jpg",
  },
  {
    id: "sedan-comfort-02",
    name: "Comfort Sedan",
    model: "Sample Sedan Model",
    category: "Sedan",
    dailyPriceAed: 169,
    transmission: "Automatic",
    fuelType: "Hybrid",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/sedan-comfort.jpg",
  },
  {
    id: "suv-premium-02",
    name: "Premium SUV",
    model: "Sample SUV Model",
    category: "SUV",
    dailyPriceAed: 279,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/suv-premium.jpg",
  },
  {
    id: "luxury-chauffeur-02",
    name: "Chauffeur Class",
    model: "Sample Luxury Model",
    category: "Luxury",
    dailyPriceAed: 499,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 4,
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/luxury-chauffeur.jpg",
  },
  {
    id: "sports-roadster-02",
    name: "Open Roadster",
    model: "Sample Sports Model",
    category: "Sports",
    dailyPriceAed: 749,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    imageLocal: "/images/cars/sports-roadster.jpg",
  },
];

export const featuredCars = cars.filter((car) => car.featured);
