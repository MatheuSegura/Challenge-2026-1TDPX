import type { ReactNode } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "primary" | "accent" | "secondary" | "white";
  title: ReactNode;
  description?: string;
}

export default function SectionHeader({ badge, badgeVariant = "primary", title, description }: SectionHeaderProps) {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mx-auto mb-14 max-w-2xl text-center transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {badge && (
        <Badge variant={badgeVariant} className="mb-3">
          {badge}
        </Badge>
      )}
      <h2 className="mb-3 text-3xl font-bold text-dark md:text-4xl">{title}</h2>
      <div className="mx-auto h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary-light" />
      {description && <p className="mx-auto mt-3 max-w-xl leading-relaxed text-gray">{description}</p>}
    </div>
  );
}
