import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import { useFadeIn } from "../hooks/useFadeIn";

const techs = [
  { icon: "⚛️", title: "React", text: "Interface declarativa e componentizada, com hooks para estado e efeitos.", tags: ["Componentes", "Hooks"] },
  { icon: "⚡", title: "Vite + TypeScript", text: "Build ultrarrápido em desenvolvimento e tipagem estática em todo o código.", tags: ["Vite", "TypeScript"] },
  { icon: "🎨", title: "Tailwind CSS", text: "Estilização utilitária, responsiva e consistente em toda a aplicação.", tags: ["Utility-first", "Responsivo"] },
];

const roadmap = [
  { status: "done", tag: "Concluído", tagClass: "bg-primary-bg text-primary", title: "Sprint 1 — Front-End (HTML + CSS + JS)", text: "Desenvolvimento completo da interface: todas as páginas, design responsivo, interatividade e simulador de pontos." },
  { status: "progress", tag: "Concluído", tagClass: "bg-primary-bg text-primary", title: "Sprint 3 — Migração para React + Vite + TypeScript", text: "Reestruturação total em componentes React, SPA com React Router, estilização com Tailwind e formulários com React Hook Form." },
  { status: "next", tag: "Próximo", tagClass: "bg-blue-50 text-secondary", title: "Sprint 4 — Integração com API e Deploy", text: "Consumo da API Java (DDD), deploy na Vercel, testes de carga e apresentação final." },
];

export default function Sobre() {
  const heroLeft = useFadeIn<HTMLDivElement>();
  const heroRight = useFadeIn<HTMLDivElement>();
  const challengeLeft = useFadeIn<HTMLDivElement>();
  const challengeRight = useFadeIn<HTMLDivElement>();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d234a] pb-16 pt-[calc(70px+3.5rem)] text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/65">
            <Link to="/" className="hover:text-white">Início</Link>
            <span className="opacity-45">›</span>
            <span>Sobre</span>
          </nav>
          <h1 className="mb-4 text-white">Sobre o Projeto</h1>
          <p className="mx-auto max-w-xl text-white/80">
            Conheça o contexto, o problema que resolvemos e a solução que propusemos para o Desafio 2 da Pointway.
          </p>
        </div>
      </section>

      <section id="prospera" className="py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center">
          <div
            ref={heroLeft.ref}
            className={`transition-all duration-700 ${heroLeft.visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
          >
            <Badge>Empresa parceira</Badge>
            <h2 className="mb-1 mt-4">A Prospera &amp; a Pointway</h2>
            <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary-light" />
            <p className="mb-4 leading-relaxed text-gray-dark">
              A <strong>Prospera</strong> é uma empresa brasileira focada em sustentabilidade que utiliza tecnologia
              para promover consumo consciente e geração de impacto positivo no meio ambiente.
            </p>
            <p className="mb-4 leading-relaxed text-gray-dark">
              Em 2025, a Prospera adquiriu a startup <strong>SoulPrime</strong>, incorporando sua tecnologia e
              comunidade ao ecossistema digital, dando origem à plataforma <strong>Pointway</strong>.
            </p>
            <p className="mb-4 leading-relaxed text-gray-dark">
              A Pointway funciona como uma rede de <strong>engajamento sustentável</strong>: os usuários realizam
              ações no aplicativo e acumulam pontos que são convertidos em benefícios reais.
            </p>
            <div className="rounded-lg border-l-4 border-primary bg-light px-6 py-5">
              <p className="text-sm text-gray-dark">
                🏆 <strong>Challenge FIAP 2026:</strong> Este projeto foi desenvolvido em parceria com a Pointway como
                parte da avaliação prática da disciplina Front-End Design Engineering.
              </p>
            </div>
          </div>
          <div
            ref={heroRight.ref}
            className={`transition-all duration-700 ${heroRight.visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
          >
            <Card className="mb-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-bg text-2xl">🌱</div>
              <h3 className="mb-2.5 text-lg">Missão da Pointway</h3>
              <p className="text-sm leading-relaxed text-gray">
                Transformar interações digitais em benefícios reais para os usuários e impacto positivo para o meio
                ambiente, conectando o mundo digital ao mundo físico de forma sustentável.
              </p>
            </Card>
            <Card>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-accent-bg text-2xl">⭐</div>
              <h3 className="mb-2.5 text-lg">Benefícios da plataforma</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray">
                <li>Descontos na fatura de energia elétrica</li>
                <li>Créditos para transporte público</li>
                <li>Experiências sustentáveis exclusivas</li>
                <li>Benefícios em parceiros da rede Prospera</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="desafio" className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="O Desafio 2"
            badgeVariant="accent"
            title="Utilização de Pontos para Transporte Público"
            description="Como usar pontos digitais para tornar o transporte público mais acessível e sustentável?"
          />
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div
              ref={challengeLeft.ref}
              className={`transition-all duration-700 ${challengeLeft.visible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
            >
              <h3 className="mb-3 text-lg">O Contexto</h3>
              <p className="mb-4 leading-relaxed text-gray-dark">
                O <strong>transporte público</strong> é um dos principais meios de redução de emissão de carbono nas
                cidades. Ao mesmo tempo, a Pointway busca conectar o ambiente digital com benefícios reais no mundo
                físico.
              </p>
              <p className="mb-4 leading-relaxed text-gray-dark">
                O Desafio 2 propõe uma solução que permita que usuários utilizem seus <strong>pontos Pointway</strong>{" "}
                para financiar, total ou parcialmente, o uso de transporte público.
              </p>
              <div className="rounded-lg border-l-4 border-accent bg-amber-50 px-6 py-5">
                <p className="mb-2 text-sm text-gray-dark">⚠️ <strong>Perguntas centrais do desafio:</strong></p>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-dark">
                  <li>Como converter pontos em créditos de transporte?</li>
                  <li>Como integrar com sistemas de bilhetagem?</li>
                  <li>Como evitar fraudes no processo?</li>
                  <li>Como medir o impacto ambiental gerado?</li>
                </ul>
              </div>
            </div>
            <div
              ref={challengeRight.ref}
              className={`transition-all duration-700 ${challengeRight.visible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
            >
              <h3 className="mb-3 text-lg">Nossa Resposta</h3>
              <div className="flex flex-col gap-4">
                <Card className="p-6">
                  <strong className="text-primary">🔄 Conversão transparente</strong>
                  <p className="mt-2 text-sm text-gray">Taxa fixa de conversão: 150 pontos = 1 viagem de ônibus.</p>
                </Card>
                <Card className="p-6">
                  <strong className="text-secondary">🎫 Voucher digital</strong>
                  <p className="mt-2 text-sm text-gray">QR Code único, gerado no app, com validade de 24h e vinculado ao CPF do usuário.</p>
                </Card>
                <Card className="p-6">
                  <strong className="text-accent">📊 Impacto mensurado</strong>
                  <p className="mt-2 text-sm text-gray">Cada viagem registra CO₂ evitado, km percorridos e equivalência em árvores plantadas.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="Stack técnica"
            badgeVariant="secondary"
            title="Tecnologias utilizadas"
            description="Desenvolvido com React, Vite, TypeScript e Tailwind CSS — conforme as diretrizes da Sprint 3 da FIAP."
          />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {techs.map((tech) => (
              <Card key={tech.title} className="text-center">
                <div className="mb-3.5 text-4xl">{tech.icon}</div>
                <h4>{tech.title}</h4>
                <p className="mt-2 text-sm text-gray">{tech.text}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {tech.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-gray-light bg-light px-3 py-1 text-xs font-medium text-gray-dark">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader badge="Roadmap" title="Evolução do projeto" description="Como o Pointway Transit evolui ao longo do semestre." />
          <div className="mx-auto flex max-w-2xl flex-col">
            {roadmap.map((item, i) => (
              <div key={item.title} className="relative flex gap-5">
                {i !== roadmap.length - 1 && <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-light" />}
                <div
                  className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 ${
                    item.status === "done" || item.status === "progress" ? "border-primary bg-primary text-white" : "border-primary bg-primary-bg"
                  }`}
                >
                  {item.status === "next" ? "🔜" : "✅"}
                </div>
                <div className="pb-9">
                  <span className={`mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.tagClass}`}>{item.tag}</span>
                  <h4 className="mb-1 text-base">{item.title}</h4>
                  <p className="text-sm text-gray">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
