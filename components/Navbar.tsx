"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "animate-nav-in fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-ivory/10 bg-ink/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-2xl tracking-[0.12em] text-ivory transition-colors group-hover:text-gold">
            {siteConfig.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
            Dubai · UAE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  (item.href.startsWith("/#")
                    ? false
                    : pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:text-ivory hover:after:w-full",
                  active ? "text-gold after:w-full" : "text-ivory/75",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={getWhatsAppUrl()} external variant="whatsapp" className="!py-2.5">
            <MessageCircle className="h-4 w-4" />
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-ivory/20 p-2 text-ivory lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-ivory/10 bg-ink/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-sm px-3 py-3 text-ivory/85 hover:bg-ivory/5 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={getWhatsAppUrl()}
            external
            variant="whatsapp"
            className="mt-2 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Book on WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
