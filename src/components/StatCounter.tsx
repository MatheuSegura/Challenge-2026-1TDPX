import { useEffect, useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
  variant?: "light" | "dark";
}

export default function StatCounter({ target, suffix = "", label, variant = "light" }: StatCounterProps) {
  const { ref, visible } = useFadeIn<HTMLDivElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const duration = 1600;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, target]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`font-heading text-4xl font-extrabold leading-none ${
          variant === "light" ? "text-primary" : "text-primary-light"
        }`}
      >
        {value.toLocaleString("pt-BR")}
        {suffix}
      </div>
      <div className={`mt-1.5 text-sm ${variant === "light" ? "text-gray" : "text-white/65"}`}>{label}</div>
    </div>
  );
}
