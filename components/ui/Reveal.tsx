"use client";

import { MotionReveal } from "@/components/motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayIndex?: number;
}

export function Reveal({ children, className, delayIndex = 0 }: RevealProps) {
  return (
    <MotionReveal className={cn(className)} delayMs={delayIndex * 80}>
      {children}
    </MotionReveal>
  );
}
