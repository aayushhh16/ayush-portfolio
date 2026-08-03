"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { useIsTouchDevice, usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type MagneticButtonProps = React.ComponentProps<"div"> & {
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || isTouch || prefersReducedMotion) return;

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [isTouch, prefersReducedMotion, strength]);

  return (
    <div
      ref={ref}
      data-magnetic
      className={cn("inline-flex will-change-transform", className)}
      {...props}
    >
      {children}
    </div>
  );
}
