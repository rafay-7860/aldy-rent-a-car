"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { featuredCars } from "@/data/cars";
import { CarCard } from "@/components/CarCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedCars() {
  return (
    <section id="cars" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(201,162,39,0.07),_transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Featured Cars"
          description="Browse sample categories from economy to sports. Prices and models are editable placeholders until your live inventory is added."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/cars"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gold transition-colors hover:text-gold-light"
          >
            View all sample cars
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
