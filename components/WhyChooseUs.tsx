"use client";

import {
  Wallet,
  Car,
  MessageCircle,
  Heart,
  SlidersHorizontal,
  MapPin,
} from "@/components/icons";
import { features } from "@/data/features";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { FeatureItem } from "@/types";

const icons: Record<FeatureItem["icon"], React.ReactNode> = {
  wallet: <Wallet className="h-6 w-6" />,
  car: <Car className="h-6 w-6" />,
  message: <MessageCircle className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
  sliders: <SlidersHorizontal className="h-6 w-6" />,
  mapPin: <MapPin className="h-6 w-6" />,
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-ivory/10 bg-ink-soft py-20 md:py-28">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Aldy"
          title="Why Choose Aldy Rent a Car?"
          description="A straightforward Dubai car hire experience focused on convenience, clarity, and dependable service."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.id} delayIndex={index}>
              <div className="group h-full border border-ivory/10 bg-ink/60 p-6 transition-colors duration-500 hover:border-gold/40 hover:bg-ink">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center border border-gold/30 text-gold transition-transform duration-500 group-hover:scale-110">
                  {icons[feature.icon]}
                </div>
                <h3 className="font-display text-xl text-ivory">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
