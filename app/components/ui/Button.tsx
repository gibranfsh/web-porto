import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "muted";
type ButtonSize = "default" | "sm";

type SharedProps = {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
  readonly children: ReactNode;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly href?: undefined;
  };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    readonly href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-cyber btn-cyber-primary",
  secondary: "btn-cyber btn-cyber-secondary",
  ghost: "btn-cyber btn-cyber-ghost",
  muted: "btn-cyber btn-cyber-muted",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-3 min-h-[44px] text-sm",
  sm: "px-5 py-2.5 min-h-[40px] text-sm uppercase tracking-wide",
};

function cn(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function ButtonContent({ children }: { readonly children: ReactNode }) {
  return (
    <span className="btn-cyber-label relative z-10 inline-flex items-center justify-center gap-2">
      {children}
    </span>
  );
}

export default function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <a href={href} className={classes} {...linkProps}>
        <ButtonContent>{children}</ButtonContent>
      </a>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps}>
      <ButtonContent>{children}</ButtonContent>
    </button>
  );
}
