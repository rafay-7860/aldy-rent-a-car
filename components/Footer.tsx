"use client";

import Link from "next/link";
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-ink-soft">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.08),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <MotionReveal>
          <p className="font-display text-2xl tracking-[0.12em] text-ivory">
            {siteConfig.name}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/60">
            Premium car rental services in Dubai for residents, tourists, and
            business travelers across the UAE.
          </p>
          <div className="mt-5 flex gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/50">
              <Instagram className="h-4 w-4" />
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/50">
              <Facebook className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-2 text-xs text-ivory/35">
            Social profiles can be added in site config when ready.
          </p>
        </MotionReveal>

        <MotionReveal delayMs={80}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Quick Links
          </p>
          <ul className="mt-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </MotionReveal>

        <MotionReveal delayMs={140} className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Contact
          </p>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex items-start gap-3 text-sm text-ivory/70 hover:text-gold"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm text-ivory/70 hover:text-gold"
          >
            <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            WhatsApp {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 text-sm text-ivory/70 hover:text-gold"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {siteConfig.address.full}
          </a>
        </MotionReveal>

        <MotionReveal delayMs={200}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Book Instantly
          </p>
          <p className="mt-4 text-sm text-ivory/60">
            Reach Aldy Rent a Car on WhatsApp for availability and pricing.
          </p>
          <Button
            href={getWhatsAppUrl()}
            external
            variant="whatsapp"
            className="mt-5 w-full sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-gold underline-offset-4 hover:underline"
          >
            Open in Google Maps
          </a>
        </MotionReveal>
      </div>

      <div className="relative border-t border-ivory/10 px-4 py-6 text-center text-xs text-ivory/40 md:px-6">
        © {year} {siteConfig.name}. All rights reserved. Car hire in Dubai, UAE.
      </div>
    </footer>
  );
}
