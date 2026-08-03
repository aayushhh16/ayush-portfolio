"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

import { siteContent } from "@/content/site-content";
import { AnimatedText } from "@/components/effects/animated-text";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";

export function Hero() {
  const { hero, nav } = siteContent;
  const glowRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !glowRef.current) return;

    gsap.to(glowRef.current, {
      backgroundPosition: "100% 100%",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [prefersReducedMotion]);

  const hasHeadline = hero.lines.length > 0;
  const hasSubtitle = Boolean(hero.subtitle);
  const hasCta = Boolean(hero.cta.label);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden py-20 sm:py-24 lg:py-28"
      aria-label="Hero"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 32%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04), transparent 34%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="noise-overlay absolute inset-0" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-muted-foreground/90">
              {nav.logo}
            </p>

            {hasHeadline ? (
              <div className="space-y-2 md:space-y-4">
                {hero.lines.map((line, index) => (
                  <AnimatedText
                    key={`${line}-${index}`}
                    text={line}
                    as="h1"
                    delay={index * 0.15}
                    className="font-display text-[clamp(3rem,6.2vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-gradient"
                  />
                ))}
              </div>
            ) : (
              <div className="min-h-[clamp(8rem,20vw,14rem)]" aria-hidden />
            )}

            {hasSubtitle && (
              <AnimatedText
                text={hero.subtitle}
                as="p"
                delay={0.32}
                className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl"
              />
            )}

            {hasCta && (
  <div className="mt-10 flex flex-wrap gap-4 sm:mt-12">
    <MagneticButton>
      <Button asChild variant="glass" size="lg">
        <Link href={hero.cta.href} data-magnetic>
          {hero.cta.label}
        </Link>
      </Button>
    </MagneticButton>

    <MagneticButton>
      <Button asChild variant="outline" size="lg">
        <a
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic
        >
          Download Resume
        </a>
      </Button>
    </MagneticButton>
  </div>
)}
          </div>

          <div className="relative mx-auto flex w-full max-w-[470px] justify-center lg:justify-end">
            <div className="absolute inset-0 -rotate-6 rounded-[2.35rem] border border-white/10 bg-white/[0.03] blur-3xl" />
            <div className="hero-portrait-shell relative w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="hero-image-float relative aspect-[4/5] overflow-hidden rounded-[1.65rem] border border-white/15">
                <Image
                  src="/images/hero.jpg"
                  alt="Portrait of Ayush Suman"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_32%),linear-gradient(140deg,rgba(255,255,255,0.16),transparent_42%,rgba(0,0,0,0.35))]" />
                <div className="absolute inset-x-6 bottom-6 rounded-[1.2rem] border border-white/20 bg-black/20 p-4 backdrop-blur-xl">
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/70">
                    Creative direction
                  </p>
                  <p className="mt-2 text-sm text-white/90">
                    Brand systems • Editorial layouts • Motion-ready visuals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-muted-foreground">
          <ArrowDown className="size-4 animate-bounce" />
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
