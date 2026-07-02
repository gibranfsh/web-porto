import type { ReactNode } from "react";

type BadgeVariant = "brand" | "accent" | "mono";

type BadgeProps = {
  readonly variant?: BadgeVariant;
  readonly className?: string;
  readonly children: ReactNode;
};

const variantClasses: Record<BadgeVariant, string> = {
  brand: "badge-cyber-brand",
  accent: "badge-cyber-accent",
  mono:
    "font-mono text-xs uppercase tracking-wider border border-zinc-700/50 bg-zinc-800/40 text-zinc-300 px-2 py-0.5 rounded-sm",
};

function cn(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export default function Badge({
  variant = "brand",
  className,
  children,
}: BadgeProps) {
  if (variant === "brand") {
    return (
      <span className={cn("inline-flex items-center gap-1.5", variantClasses.brand, className)}>
        <span className="badge-cyber-dot" aria-hidden="true">
          ●
        </span>
        <span className="badge-cyber-text relative z-10">{children}</span>
      </span>
    );
  }

  if (variant === "accent") {
    return (
      <span className={cn("inline-flex items-center", variantClasses.accent, className)}>
        <span className="relative z-10">{children}</span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center", variantClasses.mono, className)}>
      {children}
    </span>
  );
}
