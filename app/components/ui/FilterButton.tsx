import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type FilterButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly selected?: boolean;
  readonly children: ReactNode;
};

type FilterButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  readonly children: ReactNode;
};

function cn(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function FilterButtonGroup({
  className,
  children,
  ...props
}: FilterButtonGroupProps) {
  return (
    <div
      role="tablist"
      className={cn("flex flex-wrap justify-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default function FilterButton({
  selected = false,
  className,
  children,
  type = "button",
  ...props
}: FilterButtonProps) {
  return (
    <button
      type={type}
      role="tab"
      className={cn("btn-cyber btn-cyber-chip", className)}
      data-active={selected}
      aria-selected={selected}
      {...props}
    >
      {children}
    </button>
  );
}
