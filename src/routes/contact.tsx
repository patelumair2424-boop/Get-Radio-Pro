import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/data/contact";
import install from "@/assets/install.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Get Radio Pro — Request a Car Audio Upgrade" },
      {
        name: "description",
        content:
          "Tell us your vehicle make, model and year and we'll spec the right radio, touchscreen or audio upgrade. Free fitment consultation.",
      },
      { property: "og:title", content: "Let's Upgrade Your Drive — Get Radio Pro" },
      {
        property: "og:description",
        content: "Book a free fitment consultation with the Get Radio Pro workshop.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let's Upgrade
            <br />
            Your <span className="text-primary">Drive.</span>
          </>
        }
        lead="Send your vehicle details and we'll confirm what fits, what it costs and when we can book you in."
        image={install}
        alt="Technician installing a modern touchscreen car stereo"
        overlay="side"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={140} className="space-y-10">
            <div>
              <p className="eyebrow">Workshop</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">Come see the bay.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Walk-ins welcome for fitment checks — we'll take a look at your dash and tell you
                straight away what's possible.
              </p>
            </div>

            <ul className="space-y-px overflow-hidden border border-border bg-border">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: CONTACT.phone,
                  href: `tel:${CONTACT.phoneRaw}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                },
                { icon: MapPin, label: "Address", value: `${CONTACT.address}, ${CONTACT.city}` },
              ].map((item) => (
                <li key={item.label} className="bg-background">
                  <div className="flex gap-4 p-6">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="font-display text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-words text-base text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border border-border p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <p className="font-display text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Opening hours
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {CONTACT.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
