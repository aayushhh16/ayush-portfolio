"use client";

import { useGSAPReveal } from "@/hooks/use-gsap-reveal";
import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  stagger?: number;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  stagger = 0,
  delay = 0,
  y = 60,
  ...props
}: RevealProps) {
  const ref = useGSAPReveal<HTMLDivElement>({ stagger, delay, y });

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
}
