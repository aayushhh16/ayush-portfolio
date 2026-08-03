"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "words" | "lines";
};

export function AnimatedText({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
  splitBy = "words",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = usePrefersReducedMotion();

  if (!text) return null;

  if (prefersReducedMotion) {
    return (
      <Tag ref={ref as never} className={cn(className)}>
        {text}
      </Tag>
    );
  }

  const parts =
    splitBy === "lines"
      ? text.split("\n")
      : text.split(" ").filter(Boolean);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "lines" ? 0.12 : 0.06,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <Tag
      ref={ref as never}
      className={cn(
        splitBy === "lines" ? "flex flex-col" : "flex flex-wrap gap-x-[0.3em]",
        className,
      )}
      aria-label={text}
    >
      <motion.span
        className={cn(
          splitBy === "lines"
            ? "flex flex-col"
            : "inline-flex flex-wrap gap-x-[0.3em]",
        )}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {parts.map((part, index) => (
          <span
            key={`${part}-${index}`}
            className="inline-block overflow-hidden"
          >
            <motion.span className="inline-block" variants={item}>
              {part}
              {splitBy === "words" && index < parts.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
