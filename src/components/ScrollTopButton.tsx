import { useScrollPosition } from "../hooks/useScrollPosition";

export default function ScrollTopButton() {
  const visible = useScrollPosition(400);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Voltar ao topo"
      className={`fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg text-white shadow-[0_8px_24px_rgba(5,150,105,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
