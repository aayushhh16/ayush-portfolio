"use client";

import Image from "next/image";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/effects/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export function About() {
  const { about } = siteContent;
  const hasContent =
    about.title ||
    about.paragraphs.length > 0 ||
    about.stats.length > 0 ||
    about.image.src;

  if (!hasContent) {
    return (
      <section id="about" className="section-padding" aria-label="About">
        <div className="container-custom">
          <SectionHeader eyebrow="About" />
          <div
            className="min-h-[20rem] rounded-3xl border border-dashed border-border bg-card/20"
            aria-hidden
          />
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section-padding" aria-label="About">
      <div className="container-custom">
        <Reveal stagger={0.12}>
          <SectionHeader
            eyebrow={about.eyebrow || "About"}
            title={about.title}
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {about.image.src && (
            <Reveal>
              <div
                data-reveal-item
                className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted"
              >
                <Image
                  src={about.image.src}
                  alt={about.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          )}

          <Reveal stagger={0.1}>
            <div className="flex flex-col justify-center">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  data-reveal-item
                  className="text-base leading-relaxed text-muted-foreground md:text-lg [&+&]:mt-6"
                >
                  {paragraph}
                </p>
              ))}

              {about.stats.length > 0 && (
                <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-12">
                  {about.stats.map((stat) => (
                    <div key={stat.label} data-reveal-item>
                      <dt className="font-display text-3xl font-medium text-foreground md:text-4xl">
                        {stat.value}
                      </dt>
                      <dd className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
