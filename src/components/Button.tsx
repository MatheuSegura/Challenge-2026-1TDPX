import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "outline-white" | "accent";
type Size = "md" | "lg" | "sm";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  onClick?: () => void;
}

interface ClickButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  to?: undefined;
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-emerald-700 hover:shadow-[0_8px_24px_rgba(5,150,105,0.25)]",
  secondary: "bg-secondary text-white hover:bg-[#1e3270]",
  outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  "outline-white": "bg-transparent border-2 border-white/70 text-white hover:bg-white hover:text-secondary",
  accent: "bg-accent text-white hover:bg-amber-800",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-sm rounded-md",
  md: "px-7 py-3 text-[0.95rem] rounded-[10px]",
  lg: "px-9 py-4 text-[1.05rem] rounded-[10px]",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  const classes = `inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap border-2 border-transparent transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const { to: _to, variant: _v, size: _s, className: _c, ...rest } = props as ClickButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
