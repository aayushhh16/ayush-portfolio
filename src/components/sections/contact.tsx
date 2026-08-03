"use client";

import { FormEvent, useState } from "react";import emailjs from "@emailjs/browser";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/effects/reveal";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";

export function Contact() {
  const { contact } = siteContent;
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setLoading(true);

  const form = event.currentTarget;

  try {
    await emailjs.sendForm(
      "service_molfrxj",
      "template_3nia59a",
      form,
      "70wwJwv5AEkiyx4o0"
    );

    setSubmitted(true);
    form.reset();
  } catch (error) {
    alert("Failed to send message.");
    console.error(error);
  }

  setLoading(false);
};
  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container-custom">
        <Reveal stagger={0.12}>
          <SectionHeader
            eyebrow={contact.eyebrow || "Contact"}
            title={contact.title}
            description={contact.description}
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal stagger={0.1}>
            <div className="space-y-8">
              {contact.email && (
                <div data-reveal-item>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Email
                  </p>
                  <MagneticButton>
                    <Link
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-3 font-display text-2xl text-foreground transition-opacity hover:opacity-70 md:text-3xl"
                      data-magnetic
                    >
                      <Mail className="size-5" />
                      {contact.email}
                    </Link>
                  </MagneticButton>
                </div>
              )}

              {contact.socials.length > 0 && (
                <ul className="space-y-4">
                  {contact.socials.map((social) => (
                    <li key={social.href} data-reveal-item>
                      <MagneticButton>
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                          data-magnetic
                        >
                          {social.label}
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </MagneticButton>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          <Reveal>
            <form
              data-reveal-item
              onSubmit={onSubmit}
              className="glass rounded-3xl p-8 md:p-10"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{contact.form.nameLabel}</Label>
                  <Input id="name" name="name" required autoComplete="name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{contact.form.emailLabel}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{contact.form.messageLabel}</Label>
                  <Textarea id="message" name="message" required />
                </div>

<MagneticButton className="w-full">
  <Button
    type="submit"
    className="w-full"
    size="lg"
    disabled={loading}
    data-magnetic
  >
    {loading
      ? "Sending..."
      : submitted
      ? "Message Sent ✅"
      : contact.form.submitLabel}
  </Button>
</MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
