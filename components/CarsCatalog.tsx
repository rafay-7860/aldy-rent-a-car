"use client";

import { useMemo, useState } from "react";
import { carCategories, cars } from "@/data/cars";
import type { CarCategory } from "@/types";
import { CarCard } from "@/components/CarCard";
import { cn } from "@/lib/utils";

export function CarsCatalog() {
  const [active, setActive] = useState<CarCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return cars;
    return cars.filter((car) => car.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...carCategories] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
              active === category
                ? "border-gold bg-gold text-ink"
                : "border-ivory/15 text-ivory/70 hover:border-gold/50 hover:text-gold",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((car, index) => (
          <CarCard key={car.id} car={car} index={index} />
        ))}
      </div>
    </div>
  );
}
