"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { siteContent } from "@/content/site-content";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 1800;

    const animate = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, (elapsed / duration) * 100);
      setProgress(next);

      if (next < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        window.setTimeout(() => setIsLoading(false), 400);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-display text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Loading
            </span>
            <h1 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {siteContent.nav.logo}
            </h1>
          </motion.div>

          <div className="absolute inset-x-0 bottom-0 px-8 pb-10 md:px-16">
            <div className="mx-auto max-w-md">
              <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>Portfolio</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-foreground"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
