"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "@/components/icons";
import { cars } from "@/data/cars";
import {
  getContactFormWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/motion";
import type { ContactFormValues } from "@/types";

const initialValues: ContactFormValues = {
  fullName: "",
  phone: "",
  email: "",
  preferredCar: "",
  rentalStartDate: "",
  rentalDuration: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [touched, setTouched] = useState(false);

  function validate(next: ContactFormValues) {
    const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {};

    if (!next.fullName.trim() || next.fullName.trim().length < 2) {
      nextErrors.fullName = "Please enter your full name.";
    }
    if (!next.phone.trim() || next.phone.trim().length < 7) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!next.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!next.rentalStartDate) {
      nextErrors.rentalStartDate = "Please select a start date.";
    }
    if (!next.rentalDuration.trim()) {
      nextErrors.rentalDuration = "Please enter rental duration.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url = getWhatsAppUrl(getContactFormWhatsAppMessage(values));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full border border-ivory/15 bg-ink/60 px-4 py-3 text-sm text-ivory outline-none transition focus:border-gold/60";

  return (
    <MotionReveal className="space-y-4 border border-ivory/10 bg-ink-soft/80 p-6 md:p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full Name" error={touched ? errors.fullName : undefined}>
            <input
              className={fieldClass}
              value={values.fullName}
              onChange={(e) => setValues((v) => ({ ...v, fullName: e.target.value }))}
              autoComplete="name"
              required
            />
          </Field>
          <Field label="Phone Number" error={touched ? errors.phone : undefined}>
            <input
              className={fieldClass}
              value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
              autoComplete="tel"
              required
            />
          </Field>
        </div>

        <Field label="Email" error={touched ? errors.email : undefined}>
          <input
            type="email"
            className={fieldClass}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            autoComplete="email"
            required
          />
        </Field>

        <Field label="Preferred Car">
          <select
            className={fieldClass}
            value={values.preferredCar}
            onChange={(e) =>
              setValues((v) => ({ ...v, preferredCar: e.target.value }))
            }
          >
            <option value="">Select a sample car (optional)</option>
            {cars.map((car) => (
              <option key={car.id} value={`${car.name} — ${car.model}`}>
                {car.name} — {car.category}
              </option>
            ))}
          </select>
        </Field>

        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Rental Start Date"
            error={touched ? errors.rentalStartDate : undefined}
          >
            <input
              type="date"
              className={fieldClass}
              value={values.rentalStartDate}
              onChange={(e) =>
                setValues((v) => ({ ...v, rentalStartDate: e.target.value }))
              }
              required
            />
          </Field>
          <Field
            label="Rental Duration"
            error={touched ? errors.rentalDuration : undefined}
          >
            <input
              className={fieldClass}
              placeholder="e.g. 3 days / 1 week / 1 month"
              value={values.rentalDuration}
              onChange={(e) =>
                setValues((v) => ({ ...v, rentalDuration: e.target.value }))
              }
              required
            />
          </Field>
        </div>

        <Field label="Message">
          <textarea
            className={`${fieldClass} min-h-28 resize-y`}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            placeholder="Tell us about your trip or requirements"
          />
        </Field>

        <p className="text-xs text-ivory/45">
          Submitting opens WhatsApp with your details pre-filled. No booking is
          confirmed until our team replies.
        </p>

        <Button type="submit" variant="whatsapp" className="w-full md:w-auto">
          <MessageCircle className="h-4 w-4" />
          Send Inquiry on WhatsApp
        </Button>
      </form>
    </MotionReveal>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/55">
        {label}
      </span>
      {children}
      {error ? <span className="block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}
