import { useState, type FormEvent } from "react";
import { Button } from "@/components/ActionButton";
import { SERVICES } from "@/data/services";

const field =
  "w-full border border-input bg-surface/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary";
const label =
  "block font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-plate p-10 text-center">
        <h3 className="display text-3xl">Request received.</h3>
        <p className="mt-4 text-sm text-muted-foreground">
          Thanks - a specialist will confirm your vehicle fitment and get back to you within one
          business day.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-plate p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Full name"
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 000-0000"
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="make">
            Vehicle Make
          </label>
          <input id="make" name="make" placeholder="Toyota" className={`${field} mt-2`} />
        </div>
        <div>
          <label className={label} htmlFor="model">
            Vehicle Model
          </label>
          <input id="model" name="model" placeholder="Tacoma" className={`${field} mt-2`} />
        </div>
        <div>
          <label className={label} htmlFor="year">
            Vehicle Year
          </label>
          <input
            id="year"
            name="year"
            inputMode="numeric"
            placeholder="2016"
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="service">
            Service Needed
          </label>
          <select id="service" name="service" defaultValue="" className={`${field} mt-2`}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your current setup and what you'd like to change."
            className={`${field} mt-2 resize-none`}
          />
        </div>
      </div>
      <Button type="submit" className="mt-8 w-full sm:w-auto">
        Request an Upgrade
      </Button>
    </form>
  );
}
