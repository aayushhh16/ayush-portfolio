"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePrefersReducedMotion } from "@/hooks/use-media-query";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  scrub?: boolean | number;
  once?: boolean;
};

export function useGSAPReveal<T extends HTMLElement>({
  y = 60,
  opacity = 0,
  duration = 1.1,
  delay = 0,
  stagger = 0,
  start = "top 85%",
  scrub = false,
  once = true,
}: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const targets = stagger
      ? element.querySelectorAll("[data-reveal-item]")
      : element;

    const animation = gsap.fromTo(
      targets,
      { y, opacity, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start,
          scrub,
          once,
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [
    y,
    opacity,
    duration,
    delay,
    stagger,
    start,
    scrub,
    once,
    prefersReducedMotion,
  ]);

  return ref;
}
