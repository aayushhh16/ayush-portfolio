"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { siteContent } from "@/content/site-content";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled ? "py-3" : "py-5",
        )}
      >
        <div className="container-custom">
          <nav
            className={cn(
              "flex h-[var(--nav-height)] items-center justify-between rounded-2xl px-5 transition-all duration-500 md:px-8",
              isScrolled ? "glass-strong shadow-2xl shadow-black/20" : "glass",
            )}
            aria-label="Main navigation"
          >
            <MagneticButton>
  <Link
    href="/"
    className="flex items-center gap-3"
    data-magnetic
  >
    <Image
      src="/images/logo.png"
      alt="Ayush Suman Logo"
      width={100}
      height={100}
      className="h-10 w-10 object-contain"
      priority
    />

    <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase text-foreground md:text-base">
      AYUSH SUMAN
    </span>
  </Link>
</MagneticButton>

            <ul className="hidden items-center gap-10 md:flex">
              {siteContent.nav.links.map((link) => (
                <li key={link.href}>
                  <MagneticButton>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      data-magnetic
                    >
                      {link.label}
                    </Link>
                  </MagneticButton>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {siteContent.nav.links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
