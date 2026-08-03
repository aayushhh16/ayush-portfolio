import Link from "next/link";

import { siteContent } from "@/content/site-content";
import { Reveal } from "@/components/effects/reveal";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-border">
      <Reveal className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            {footer.tagline && (
              <p
                data-reveal-item
                className="font-display max-w-xl text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                {footer.tagline}
              </p>
            )}
          </div>

          {footer.links.length > 0 && (
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {footer.links.map((link) => (
                <li key={link.href} data-reveal-item>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          data-reveal-item
          className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"
        >
          <span>{footer.copyright}</span>
          <span className="uppercase tracking-[0.25em]">Graphic Design</span>
        </div>
      </Reveal>
    </footer>
  );
}
