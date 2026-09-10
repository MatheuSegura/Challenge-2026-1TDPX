import type { ReactNode } from "react";

type BadgeVariant = "primary" | "accent" | "secondary" | "white";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary-bg text-primary",
  accent: "bg-accent-bg text-accent",
  secondary: "bg-blue-50 text-secondary",
  white: "bg-white/20 text-white",
};

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
