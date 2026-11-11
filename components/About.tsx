"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal } from "@/components/motion";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <MotionReveal className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1400&q=80"
            alt="Driving through Dubai with Aldy Rent a Car"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 border-t border-gold/30 bg-ink/70 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Based in</p>
            <p className="mt-1 font-display text-2xl text-ivory">Al Garhoud, Dubai</p>
          </div>
        </MotionReveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Your Trusted Car Rental Partner in Dubai"
          />
          <MotionReveal delayMs={120} className="mt-6 space-y-4 text-base leading-relaxed text-ivory/65">
            <p>
              {siteConfig.name} provides practical, customer-focused car rental
              services for Dubai residents, tourists, business travelers, and
              visitors exploring the UAE.
            </p>
            <p>
              Whether you need a car for a day in the city, a weekly holiday, or a
              longer stay, we keep the process simple — choose your vehicle style,
              contact us on WhatsApp, and confirm your booking with clear
              communication every step of the way.
            </p>
            <p>
              Located at {siteConfig.address.line1} in Al Garhoud, we are
              positioned for convenient access across Dubai. Our focus is reliable
              rentals, transparent conversations, and a smooth experience from
              inquiry to handover.
            </p>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
