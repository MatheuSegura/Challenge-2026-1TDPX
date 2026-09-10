import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import StatCounter from "../components/StatCounter";
import { useFadeIn } from "../hooks/useFadeIn";

const steps = [
  { number: 1, icon: "📱", title: "Ganhe pontos", text: "Consuma conteúdos, interaja na comunidade Pointway e pratique hábitos sustentáveis para acumular pontos no app." },
  { number: 2, icon: "🔄", title: "Converta em créditos", text: "Troque seus pontos por créditos de transporte diretamente no app. A conversão é instantânea e segura." },
  { number: 3, icon: "🚊", title: "Viaje gratuitamente", text: "Use o QR Code gerado no app ou recarregue seu cartão de transporte. Viaje sem gastar do bolso!" },
];

const features = [
  { icon: "🔒", title: "Anti-fraude robusto", text: "Sistema de token único, validação em duas etapas e auditoria em tempo real para garantir segurança máxima." },
  { icon: "📊", title: "Relatório de impacto", text: "Acompanhe o CO₂ que você evitou, os quilômetros percorridos e seu impacto ambiental acumulado." },
  { icon: "⚡", title: "Conversão instantânea", text: "Troque pontos por créditos em segundos. QR Code válido por 24h ou recarga direta no cartão." },
  { icon: "🗺️", title: "Multi-modal", text: "Compatível com ônibus, metrô, trem, BRT e monotrilho. Uma solução para toda a rede de transporte." },
];

function StepCard({ step, delay }: { step: (typeof steps)[number]; delay: number }) {
  const { ref, visible } = useFadeIn<HTMLDivElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`rounded-2xl border border-gray-light bg-white p-10 text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-1 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light font-heading text-xl font-bold text-white shadow-[0_8px_24px_rgba(5,150,105,0.25)]">
        {step.number}
      </div>
      <div className="mb-4 text-4xl">{step.icon}</div>
      <h3 className="mb-2.5">{step.title}</h3>
      <p className="text-sm text-gray">{step.text}</p>
    </article>
  );
}

function FeatureCard({ feature, delay }: { feature: (typeof features)[number]; delay: number }) {
  const { ref, visible } = useFadeIn<HTMLDivElement>();
  return (
    <Card>
      <div
        ref={ref}
        style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
        className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-bg text-2xl">{feature.icon}</div>
        <h3 className="mb-2.5 text-lg">{feature.title}</h3>
        <p className="text-sm leading-relaxed text-gray">{feature.text}</p>
      </div>
    </Card>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-secondary via-[#0a1f40] to-[#0d2e1a] pt-[70px] text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="relative z-10 max-w-2xl">
            <Badge variant="primary" className="mb-6">🌱 Pointway × Desafio 2 — FIAP 2026</Badge>
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
              Transforme seus pontos em <span className="text-primary-light">mobilidade sustentável</span>
            </h1>
            <p className="mb-9 max-w-xl text-lg leading-relaxed text-white/80">
              Com a plataforma Pointway, cada interação digital vira um passo real no mundo físico. Acumule pontos e
              use-os para pagar ônibus, metrô e trem — reduzindo emissões e economizando.
            </p>
            <div className="mb-14 flex flex-wrap gap-4">
              <Button to="/transporte" size="lg">🚌 Simular conversão</Button>
              <Button to="/sobre" variant="outline-white" size="lg">Conhecer o projeto</Button>
            </div>
            <div className="flex flex-wrap gap-10">
              <StatCounter target={50000} suffix="+" label="Usuários ativos" variant="dark" />
              <StatCounter target={2400000} suffix=" pts" label="Pontos distribuídos" variant="dark" />
              <StatCounter target={18000} suffix="+" label="Viagens realizadas" variant="dark" />
              <StatCounter target={12} suffix="% CO₂" label="Redução estimada" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="Como funciona"
            title="Simples, rápido e sustentável"
            description="Em três passos você vai da tela do celular até a catraca do metrô."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-3 text-3xl">🚌</div>
              <StatCounter target={18432} label="Viagens financiadas com pontos" />
            </div>
            <div>
              <div className="mb-3 text-3xl">🌿</div>
              <StatCounter target={1640} suffix=" kg" label="de CO₂ evitados" />
            </div>
            <div>
              <div className="mb-3 text-3xl">⭐</div>
              <StatCounter target={4} suffix=".8/5" label="Avaliação média dos usuários" />
            </div>
            <div>
              <div className="mb-3 text-3xl">🤝</div>
              <StatCounter target={3} suffix=" parceiros" label="Operadoras integradas" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="Funcionalidades"
            badgeVariant="accent"
            title="Tudo que você precisa em um só lugar"
            description="A plataforma Pointway Transit oferece uma experiência completa e segura para usar seus pontos no transporte."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d2e1a] py-20 text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <h2 className="mb-4 text-white">Pronto para começar a viajar com seus pontos?</h2>
          <p className="mb-9 text-white/75">Simule agora quantas viagens você pode fazer com seus pontos Pointway acumulados.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/transporte" size="lg">Simular agora</Button>
            <Button to="/faq" variant="outline-white" size="lg">Ver perguntas frequentes</Button>
          </div>
        </div>
      </section>
    </>
  );
}
