"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/contact-links";

type FormState = {
  name: string;
  phone: string;
  email: string;
  tractorBrand: string;
  tractorModel: string;
  service: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  tractorBrand: "",
  tractorModel: "",
  service: "",
  message: "",
};

const services = [
  "Engine Rebuilding",
  "Tractor Repair",
  "Maintenance",
  "Hydraulic Repair",
  "Electrical Repair",
  "Spare Parts",
  "Welding & Fabrication",
  "Clutch & Transmission",
  "Other",
];

export function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData((d) => ({ ...d, [key]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 900);
  };

  const waText = encodeURIComponent(
    `New inquiry from website:\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nTractor: ${data.tractorBrand} ${data.tractorModel}\nService: ${data.service}\nMessage: ${data.message}`,
  );

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="industrial-card p-8 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="h-heading mt-5 text-3xl text-white">Inquiry Received</h3>
        <p className="mt-2 text-sm text-white/70">
          Thanks {data.name || "for reaching out"}! Our team will call you
          back within a few working hours.
        </p>
        <p className="mt-4 text-xs text-white/40">
          For an instant reply, send the same details on WhatsApp:
        </p>
        <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <Button asChild variant="whatsapp" size="md" className="rounded-md">
            <a
              href={`https://wa.me/919999247461?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send on WhatsApp
            </a>
          </Button>
          <Button
            variant="outline"
            size="md"
            className="rounded-md"
            onClick={() => {
              setData(initial);
              setDone(false);
            }}
          >
            Send another inquiry
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="industrial-card space-y-4 p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full name *"
          required
          value={data.name}
          onChange={update("name")}
          placeholder="Your name"
        />
        <Field
          label="Phone *"
          required
          type="tel"
          value={data.phone}
          onChange={update("phone")}
          placeholder="+91 99999 99999"
        />
        <Field
          label="Email"
          type="email"
          value={data.email}
          onChange={update("email")}
          placeholder="you@example.com"
        />
        <Field
          label="Tractor brand"
          value={data.tractorBrand}
          onChange={update("tractorBrand")}
          placeholder="e.g. Mahindra, John Deere"
        />
        <Field
          label="Tractor model"
          value={data.tractorModel}
          onChange={update("tractorModel")}
          placeholder="e.g. 575 DI"
        />
        <SelectField
          label="Service required *"
          required
          value={data.service}
          onChange={update("service")}
          options={services}
        />
      </div>

      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
          Describe the issue
        </label>
        <textarea
          value={data.message}
          onChange={update("message")}
          rows={4}
          placeholder="Tell us about the problem, when it started, and any error codes / unusual sounds."
          className="mt-2 w-full rounded-md border border-white/10 bg-brand-charcoal px-3 py-3 text-sm text-white placeholder:text-white/35 focus:border-brand-yellow/50 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-white/45">
          By submitting, you agree to be contacted by Malik Tractor Hub
          regarding your inquiry.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={submitting || !data.name || !data.phone}
          className="rounded-md"
        >
          {submitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          Send Inquiry
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "mt-2 h-12 w-full rounded-md border border-white/10 bg-brand-charcoal px-3 text-sm text-white placeholder:text-white/35 focus:border-brand-yellow/50 focus:outline-none",
        )}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
        {label}
      </label>
      <select
        required={required}
        value={value}
        onChange={onChange}
        className="mt-2 h-12 w-full rounded-md border border-white/10 bg-brand-charcoal px-3 text-sm text-white focus:border-brand-yellow/50 focus:outline-none"
      >
        <option value="" disabled>
          Select a service
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
