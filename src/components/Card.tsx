import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-light bg-white p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 ${
        hover ? "hover:-translate-y-1 hover:border-transparent hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
