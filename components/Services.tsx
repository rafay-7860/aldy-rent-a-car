"use client";

import {
  Calendar,
  CalendarDays,
  CalendarRange,
  Gem,
  Briefcase,
  Clock,
} from "@/components/icons";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { ServiceItem } from "@/types";

const icons: Record<ServiceItem["icon"], React.ReactNode> = {
  calendar: <Calendar className="h-6 w-6" />,
  calendarDays: <CalendarDays className="h-6 w-6" />,
  calendarRange: <CalendarRange className="h-6 w-6" />,
  gem: <Gem className="h-6 w-6" />,
  briefcase: <Briefcase className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ink-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Our Services"
          description="Daily car rental Dubai, weekly packages, monthly hire, luxury options, and business-ready vehicles — tailored to how you travel."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delayIndex={index}>
              <article className="relative h-full overflow-hidden border border-ivory/10 bg-ink p-6 transition-all duration-500 hover:border-gold/35">
                <div className="mb-5 text-gold">{icons[service.icon]}</div>
                <h3 className="font-display text-2xl text-ivory">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
