import type { Metadata } from "next";
import { CarsCatalog } from "@/components/CarsCatalog";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Cars | Rent a Car Dubai",
  description:
    "Browse sample economy, sedan, SUV, luxury, and sports cars for rent in Dubai with Aldy Rent a Car. Contact us on WhatsApp for live availability.",
  alternates: {
    canonical: "/cars",
  },
  openGraph: {
    title: "Our Cars | Aldy Rent a Car Dubai",
    description:
      "Explore sample fleet categories for car hire in Dubai — economy to luxury. Book via WhatsApp.",
    url: "/cars",
  },
};

export default function CarsPage() {
  return (
    <div className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Fleet"
          title="Our Cars"
          description="Filter sample vehicles by category. Listings and daily prices are editable placeholders until real inventory is provided."
        />
        <div className="mt-12">
          <CarsCatalog />
        </div>
      </div>
    </div>
  );
}
