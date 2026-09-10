import type { FaqEntry } from "../types";

interface FaqAccordionItemProps {
  entry: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({ entry, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
        isOpen ? "border-primary shadow-[0_4px_16px_rgba(0,0,0,0.08)]" : "border-gray-light"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold transition-colors duration-300 ${
          isOpen ? "text-primary" : "text-dark hover:text-primary"
        }`}
      >
        {entry.question}
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg transition-all duration-300 ${
            isOpen ? "rotate-45 bg-primary-bg text-primary" : "bg-light text-gray"
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-light px-6 pb-6 pt-5 text-sm leading-relaxed text-gray-dark">
            {entry.answer}
          </div>
        </div>
      </div>
    </article>
  );
}
