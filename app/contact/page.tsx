import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Car Hire Dubai UAE",
  description:
    "Contact Aldy Rent a Car in Al Garhoud, Dubai. Call or WhatsApp +971 50 677 1216 for daily, weekly, and monthly car rental inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Aldy Rent a Car Dubai",
    description:
      "Reach Aldy Rent a Car for affordable and luxury car rental in Dubai via WhatsApp or phone.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Contact />
    </div>
  );
}
