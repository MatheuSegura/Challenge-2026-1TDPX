export interface TabItem {
  key: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export default function Tabs({ items, activeKey, onChange }: TabsProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2 border-b-2 border-gray-light" role="tablist">
      {items.map((item) => (
        <button
          key={item.key}
          role="tab"
          aria-selected={item.key === activeKey}
          onClick={() => onChange(item.key)}
          className={`-mb-0.5 rounded-t-md border-b-[3px] px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
            item.key === activeKey
              ? "border-primary bg-primary-bg text-primary"
              : "border-transparent text-gray hover:text-primary"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
