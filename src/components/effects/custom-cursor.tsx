"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { useIsTouchDevice, usePrefersReducedMotion } from "@/hooks/use-media-query";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    document.body.classList.add("hide-cursor");

    const pos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const onMove = (event: MouseEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
      gsap.to(cursor, {
        x: pos.x,
        y: pos.y,
        duration: 0.08,
        ease: "power2.out",
      });
    };

    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.15;
      ringPos.y += (pos.y - ringPos.y) * 0.15;
      gsap.set(ring, { x: ringPos.x, y: ringPos.y });
      requestAnimationFrame(tick);
    };

    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.5, duration: 0.3 });
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
    };

    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic], input, textarea, select",
    );

    window.addEventListener("mousemove", onMove);
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    const frame = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("hide-cursor");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, [isTouch, prefersReducedMotion]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
        aria-hidden
      />
    </>
  );
}
