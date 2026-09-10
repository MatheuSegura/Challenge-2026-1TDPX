import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FaqAccordionItem from "../components/FaqAccordionItem";
import { faqCategories, faqEntries } from "../data/faq";

export default function Faq() {
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const query = search.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!query) return faqEntries;
    return faqEntries.filter(
      (entry) => entry.question.toLowerCase().includes(query) || entry.answer.toLowerCase().includes(query),
    );
  }, [query]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d234a] pb-16 pt-[calc(70px+3.5rem)] text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/65">
            <Link to="/" className="hover:text-white">Início</Link>
            <span className="opacity-45">›</span>
            <span>FAQ</span>
          </nav>
          <h1 className="mb-4 text-white">Perguntas Frequentes</h1>
          <p className="mx-auto max-w-xl text-white/80">
            Encontre respostas rápidas sobre como funciona a conversão de pontos, integração com o transporte e muito
            mais.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="relative mx-auto mb-14 max-w-[540px]">
            <span className="pointer-events-none absolute left-4.5 top-1/2 -translate-y-1/2 text-gray">🔍</span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar perguntas..."
              aria-label="Buscar perguntas frequentes"
              className="w-full rounded-full border-2 border-gray-light bg-white py-3.5 pl-12 pr-5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-gray">
              <div className="mb-4 text-5xl">🤔</div>
              <p>
                Nenhuma pergunta encontrada para "<strong>{search}</strong>".
              </p>
              <Button to="/contato" className="mt-6">Enviar minha dúvida</Button>
            </div>
          )}

          {faqCategories.map((category) => {
            const entries = filtered.filter((entry) => entry.category === category.key);
            if (entries.length === 0) return null;
            return (
              <div key={category.key} className="mb-10">
                <p className="mx-auto mb-4 flex max-w-3xl items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-gray after:h-px after:flex-1 after:bg-gray-light">
                  {category.label}
                </p>
                <div className="mx-auto flex max-w-3xl flex-col gap-3.5">
                  {entries.map((entry) => (
                    <FaqAccordionItem
                      key={entry.id}
                      entry={entry}
                      isOpen={openId === entry.id}
                      onToggle={() => setOpenId((current) => (current === entry.id ? null : entry.id))}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-14 text-center">
            <p className="mb-4 text-gray">Não encontrou o que procurava?</p>
            <Button to="/contato" size="lg">Enviar minha dúvida</Button>
          </div>
        </div>
      </section>
    </>
  );
}
