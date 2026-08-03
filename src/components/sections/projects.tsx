"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/effects/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { MagneticButton } from "@/components/effects/magnetic-button";

export function Projects() {
  const { projects } = siteContent;

  if (projects.length === 0) {
    return (
      <section id="work" className="section-padding" aria-label="Featured projects">
        <div className="container-custom">
          <SectionHeader eyebrow="Work" />
          <div
            className="min-h-[24rem] rounded-3xl border border-dashed border-border bg-card/20"
            aria-hidden
          />
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="section-padding" aria-label="Featured projects">
      <div className="container-custom">
        <Reveal stagger={0.12}>
          <SectionHeader eyebrow="Work" title="Featured Projects" />
        </Reveal>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <Reveal key={project.id} stagger={0.1}>
              <article
                data-reveal-item
                className="group grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16"
              >
                <Link
                  href={project.href}
                  className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted"
                >
                  {project.image.src && (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>

                <div className={index % 2 === 1 ? "lg:order-first" : undefined}>
                  <div className="mb-4 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                      {project.description}
                    </p>
                  )}

                  {project.tags.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8">
                    <MagneticButton>
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-70"
                        data-magnetic
                      >
                        View Case Study
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
