"use client";

import { MapPin, MessageCircle, Phone } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Plan Your Dubai Rental"
          description="Call, WhatsApp, or send an inquiry. We are based in Al Garhoud and ready to help with car hire across Dubai."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-5 border border-ivory/10 bg-ink-soft p-6 md:p-8">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex items-start gap-4 text-ivory/80 transition hover:text-gold"
              >
                <Phone className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ivory/45">
                    Phone
                  </p>
                  <p className="mt-1 text-lg">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-ivory/80 transition hover:text-gold"
              >
                <MessageCircle className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ivory/45">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-lg">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-ivory/80 transition hover:text-gold"
              >
                <MapPin className="mt-1 h-5 w-5 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ivory/45">
                    Address
                  </p>
                  <p className="mt-1 leading-relaxed">{siteConfig.address.full}</p>
                  <p className="mt-2 text-sm text-gold">Open in Google Maps</p>
                </div>
              </a>
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
