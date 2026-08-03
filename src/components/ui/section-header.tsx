import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  if (!eyebrow && !title && !description) return null;

  return (
    <div
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          data-reveal-item
          className="mb-4 text-xs uppercase tracking-[0.35em] text-muted-foreground"
        >
          {eyebrow}
        </p>
      )}
      {title && (
        <h2
          data-reveal-item
          className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          data-reveal-item
          className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </p>
      )}
    </div>
  );
}
