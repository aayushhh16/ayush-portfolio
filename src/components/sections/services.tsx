"use client";

import {
  Palette,
  Layers,
  Sparkles,
  PenTool,
  type LucideIcon,
} from "lucide-react";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/effects/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  layers: Layers,
  sparkles: Sparkles,
  pentool: PenTool,
};

export function Services() {
  const { services } = siteContent;

  if (services.length === 0) {
    return (
      <section
        id="services"
        className="section-padding"
        aria-label="Services"
      >
        <div className="container-custom">
          <SectionHeader eyebrow="Services" />
          <div
            className="min-h-[16rem] rounded-3xl border border-dashed border-border bg-card/20"
            aria-hidden
          />
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-padding" aria-label="Services">
      <div className="container-custom">
        <Reveal stagger={0.12}>
          <SectionHeader eyebrow="Services" title="What I Do" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon.toLowerCase()] ?? Sparkles;

            return (
              <Reveal key={service.id}>
                <article
                  data-reveal-item
                  className="group glass h-full rounded-3xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] md:p-10"
                >
                  <div className="mb-8 inline-flex size-12 items-center justify-center rounded-2xl border border-border bg-background/50">
                    <Icon className="size-5 text-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
