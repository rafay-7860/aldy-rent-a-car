"use client";

import Image from "next/image";
import { Fuel, Gauge, MessageCircle, Users } from "@/components/icons";
import type { Car } from "@/types";
import { formatPriceAed } from "@/lib/utils";
import { getCarWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/motion";

interface CarCardProps {
  car: Car;
  index?: number;
}

export function CarCard({ car, index = 0 }: CarCardProps) {
  const message = getCarWhatsAppMessage(`${car.name} (${car.model})`);

  return (
    <MotionReveal delayMs={index * 60}>
      <article className="group overflow-hidden border border-ivory/10 bg-ink-soft/80 transition-transform duration-500 hover:-translate-y-1.5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={car.image}
            alt={`${car.name} — sample ${car.category.toLowerCase()} car for rent in Dubai`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 border border-gold/40 bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold backdrop-blur">
            {car.category}
          </span>
          <p className="absolute bottom-4 left-4 text-sm text-ivory/90">
            From{" "}
            <span className="font-semibold text-gold">
              {formatPriceAed(car.dailyPriceAed)}
            </span>
            <span className="text-ivory/50"> / day</span>
          </p>
        </div>

        <div className="space-y-4 p-5">
          <div>
            <h3 className="font-display text-2xl text-ivory">{car.name}</h3>
            <p className="mt-1 text-sm text-ivory/50">{car.model}</p>
            <p className="mt-2 text-xs text-ivory/35">
              Sample listing — editable placeholder until real fleet details are
              provided.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 border-y border-ivory/10 py-3 text-xs text-ivory/65">
            <div className="flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5 text-gold" />
              {car.transmission}
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="h-3.5 w-3.5 text-gold" />
              {car.fuelType}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-gold" />
              {car.seats} seats
            </div>
          </div>

          <Button
            href={getWhatsAppUrl(message)}
            external
            variant="primary"
            className="w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </Button>
        </div>
      </article>
    </MotionReveal>
  );
}
