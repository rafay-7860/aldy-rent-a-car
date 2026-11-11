"use client";

import { Car, MessageCircle, BadgeCheck } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal } from "@/components/motion";

const steps = [
  {
    number: "01",
    title: "Choose Your Car",
    description:
      "Browse sample categories or tell us what you need — economy, sedan, SUV, luxury, or sports.",
    icon: Car,
  },
  {
    number: "02",
    title: "Contact Us on WhatsApp",
    description:
      "Send a message with your dates and preferences. We reply with availability and pricing.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Confirm Your Booking",
    description:
      "Finalize details directly with our team. No fake online confirmations — real human coordination.",
    icon: BadgeCheck,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Simple Process"
          title="How It Works"
          description="Three clear steps from interest to confirmed rental."
        />

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />

          {steps.map((step, index) => (
            <MotionReveal
              key={step.number}
              delayMs={index * 120}
              className="relative text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center border border-gold/40 bg-ink text-gold shadow-[0_0_40px_rgba(201,162,39,0.12)]">
                <step.icon className="h-8 w-8" />
              </div>
              <p className="mt-5 text-xs tracking-[0.35em] text-gold">{step.number}</p>
              <h3 className="mt-2 font-display text-2xl text-ivory">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">
                {step.description}
              </p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
