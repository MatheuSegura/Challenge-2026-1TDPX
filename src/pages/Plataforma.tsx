import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import Tabs from "../components/Tabs";
import { earnPointsWays, partners, plataformaCategorias } from "../data/plataforma";

export default function Plataforma() {
  const { categoria } = useParams<{ categoria: string }>();
  const navigate = useNavigate();

  const isValidCategoria = plataformaCategorias.some((c) => c.slug === categoria);

  useEffect(() => {
    if (!isValidCategoria) {
      navigate("/plataforma/transporte", { replace: true });
    }
  }, [isValidCategoria, navigate]);

  if (!isValidCategoria) return null;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d234a] pb-16 pt-[calc(70px+3.5rem)] text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/65">
            <Link to="/" className="hover:text-white">Início</Link>
            <span className="opacity-45">›</span>
            <span>A Plataforma</span>
          </nav>
          <h1 className="mb-4 text-white">A Plataforma Pointway</h1>
          <p className="mx-auto max-w-xl text-white/80">
            Entenda como a plataforma transforma ações digitais em benefícios reais — e como o sistema de pontos
            funciona na prática.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <Badge>Como funciona</Badge>
            <h2 className="mb-1 mt-4">O ecossistema de pontos Pointway</h2>
            <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary-light" />
            <p className="mb-4 leading-relaxed text-gray-dark">
              A Pointway funciona como uma rede de engajamento sustentável. Ao realizar atividades dentro do
              aplicativo, o usuário acumula pontos que fazem parte de um programa de recompensas integrado.
            </p>
            <p className="mb-6 leading-relaxed text-gray-dark">
              Esses pontos incentivam comportamentos conscientes e são convertidos em benefícios reais — como créditos
              de transporte público, descontos em energia e experiências sustentáveis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/transporte">Usar no transporte →</Button>
              <Button to="/plataforma/transporte" variant="outline">
                Ver categorias
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-secondary to-[#0a1f40] p-8 text-center text-white">
            <p className="text-sm opacity-80">Seu saldo Pointway</p>
            <div className="font-heading text-6xl font-extrabold text-primary-light">4.200</div>
            <div className="mt-1 text-sm opacity-75">pontos disponíveis</div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary-light to-accent-light" />
            </div>
            <p className="mt-2 text-right text-xs opacity-70">680 pts para o próximo nível →</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { val: "28", label: "viagens possíveis" },
                { val: "2,5 kg", label: "CO₂ a evitar" },
                { val: "R$ 123", label: "em economia" },
                { val: "Gold", label: "seu nível atual" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-white/10 p-3.5 text-center">
                  <div className="font-heading text-xl font-bold text-primary-light">{item.val}</div>
                  <div className="mt-0.5 text-xs opacity-70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader badge="Ganhe pontos" badgeVariant="accent" title="Como acumular pontos na plataforma" description="Existem várias formas de ganhar pontos Pointway. Quanto mais você engaja, mais você ganha." />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {earnPointsWays.map((way) => (
              <Card key={way.title}>
                <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-accent-bg px-3 py-1 text-sm font-semibold text-accent">
                  {way.badge}
                </span>
                <h4>{way.title}</h4>
                <p className="mt-2 text-sm text-gray">{way.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader title="O que você pode resgatar com seus pontos" />

          <Tabs
            items={plataformaCategorias.map((c) => ({ key: c.slug, label: `${c.icon} ${c.label}` }))}
            activeKey={categoria ?? "transporte"}
            onChange={(key) => navigate(`/plataforma/${key}`)}
          />

          {categoria === "transporte" && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-3">Créditos de Transporte Público</h3>
                <p className="mb-4 leading-relaxed text-gray-dark">
                  Use seus pontos para financiar viagens de ônibus, metrô, trem e BRT. É a recompensa mais popular da
                  plataforma, com alta adesão e impacto ambiental direto.
                </p>
                <ul className="mb-5 list-disc space-y-1.5 pl-5 text-sm text-gray-dark">
                  <li><strong>Ônibus:</strong> 150 pontos = 1 viagem</li>
                  <li><strong>Metrô / Trem:</strong> 250 pontos = 1 viagem</li>
                  <li><strong>BRT / Monotrilho:</strong> 180 pontos = 1 viagem</li>
                </ul>
                <Button to="/transporte">Simular conversão →</Button>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-primary to-emerald-700 p-8 text-white">
                <p className="text-xs opacity-80">🏆 Recompensa mais popular</p>
                <div className="font-heading text-4xl font-extrabold text-white">68%</div>
                <p className="mt-2 text-sm text-white/90">dos usuários escolhem transporte como primeiro resgate</p>
                <hr className="my-5 border-white/20" />
                <p className="text-sm text-white/85">
                  Impacto: <strong className="text-white">0,089 kg CO₂</strong> evitado por viagem de ônibus substituída.
                </p>
              </div>
            </div>
          )}

          {categoria === "energia" && (
            <div>
              <div className="mb-6 rounded-lg border-l-4 border-primary bg-light px-6 py-5">
                <p className="text-sm text-gray-dark">⚡ <strong>Em breve:</strong> Integração com a fatura de energia elétrica.</p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <Card><div className="mb-3.5 text-3xl">💡</div><h4>Desconto na fatura</h4><p className="mt-2 text-sm text-gray">500 pontos = R$ 5,00 de desconto na fatura mensal de energia.</p></Card>
                <Card><div className="mb-3.5 text-3xl">🌞</div><h4>Energia solar</h4><p className="mt-2 text-sm text-gray">Acumule pontos e contribua para projetos de energia solar comunitária.</p></Card>
                <Card><div className="mb-3.5 text-3xl">📉</div><h4>Monitoramento</h4><p className="mt-2 text-sm text-gray">Acompanhe seu consumo e ganhe pontos reduzindo o uso nos horários de pico.</p></Card>
              </div>
            </div>
          )}

          {categoria === "experiencias" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Card><div className="mb-3.5 text-3xl">🌳</div><h4>Plantio de árvores</h4><p className="mt-2 text-sm text-gray">1.000 pontos = 1 árvore plantada em área de reflorestamento parceira.</p></Card>
              <Card><div className="mb-3.5 text-3xl">🎪</div><h4>Eventos sustentáveis</h4><p className="mt-2 text-sm text-gray">Ingressos gratuitos para feiras, workshops e eventos de sustentabilidade.</p></Card>
              <Card><div className="mb-3.5 text-3xl">🧴</div><h4>Produtos eco-friendly</h4><p className="mt-2 text-sm text-gray">Troque pontos por produtos sustentáveis de marcas parceiras da Prospera.</p></Card>
            </div>
          )}

          {categoria === "parceiros" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner.name} className="rounded-2xl border-2 border-gray-light p-7 text-center transition-colors hover:border-primary hover:shadow-md">
                  <div className="mb-3.5 text-4xl">{partner.icon}</div>
                  <h4>{partner.name}</h4>
                  <p className="mt-1.5 text-sm text-gray">{partner.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader badgeVariant="secondary" badge="Regras" title="Regras do programa de pontos" />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="text-center"><div className="mb-3.5 text-4xl">📅</div><h4>Validade</h4><p className="mt-2 text-sm text-gray">Pontos expiram em <strong>12 meses</strong> sem uso.</p></Card>
            <Card className="text-center"><div className="mb-3.5 text-4xl">🔢</div><h4>Mínimo para resgate</h4><p className="mt-2 text-sm text-gray">É necessário ter no mínimo <strong>150 pontos</strong>.</p></Card>
            <Card className="text-center"><div className="mb-3.5 text-4xl">🔒</div><h4>Não transferíveis</h4><p className="mt-2 text-sm text-gray">Os pontos são pessoais, vinculados ao CPF do usuário.</p></Card>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d2e1a] py-20 text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <h2 className="mb-4 text-white">Veja quantas viagens seus pontos podem pagar</h2>
          <p className="mb-9 text-white/75">Use o simulador interativo e descubra o impacto real dos seus pontos Pointway.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/transporte" size="lg">Abrir simulador →</Button>
            <Button to="/faq" variant="outline-white">Tirar dúvidas</Button>
          </div>
        </div>
      </section>
    </>
  );
}
