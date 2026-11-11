"use client";

import { Quote } from "@/components/icons";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="border-y border-ivory/10 bg-ink-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Voices"
          title="What Drivers Say"
          description="Sample quotes for layout preview. These are editable placeholders and are not verified customer reviews."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delayIndex={index}>
              <blockquote className="flex h-full flex-col border border-ivory/10 bg-ink p-6">
                <Quote className="h-8 w-8 text-gold/70" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-ivory/75">
                  “{item.quote}”
                </p>
                <footer className="mt-6 border-t border-ivory/10 pt-4">
                  <p className="font-medium text-ivory">{item.name}</p>
                  <p className="text-sm text-ivory/45">{item.role}</p>
                  {item.note ? (
                    <p className="mt-2 text-xs text-gold/70">{item.note}</p>
                  ) : null}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
