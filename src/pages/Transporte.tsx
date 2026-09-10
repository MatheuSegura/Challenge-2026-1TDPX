import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Card from "../components/Card";
import ImpactCalculator from "../components/ImpactCalculator";
import SectionHeader from "../components/SectionHeader";
import Simulator from "../components/Simulator";
import Tabs from "../components/Tabs";

const integrationTabs = [
  { key: "voucher", label: "🎫 Voucher Digital" },
  { key: "api", label: "🔗 API de Bilhetagem" },
];

const fraudSteps = [
  { icon: "🔐", title: "Autenticação biométrica", text: "Face ID ou impressão digital obrigatória para gerar qualquer voucher de transporte." },
  { icon: "🎫", title: "Token único", text: "QR Code gerado com hash único, vinculado ao CPF e ao dispositivo. Uso único e irrevogável." },
  { icon: "⏰", title: "Expiração automática", text: "Vouchers expiram em 24 horas. Tentativas de reuso são bloqueadas e registradas." },
  { icon: "🤖", title: "Detecção por IA", text: "Modelo de machine learning monitora padrões anômalos de uso e bloqueia contas suspeitas." },
];

export default function Transporte() {
  const [integrationTab, setIntegrationTab] = useState("voucher");

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d234a] pb-16 pt-[calc(70px+3.5rem)] text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/65">
            <Link to="/" className="hover:text-white">Início</Link>
            <span className="opacity-45">›</span>
            <span>Transporte</span>
          </nav>
          <Badge variant="white" className="mb-4">🚌 Desafio 2 — Pointway</Badge>
          <h1 className="mb-4 text-white">Pontos para Transporte Público</h1>
          <p className="mx-auto max-w-xl text-white/80">
            Converta seus pontos Pointway em viagens de ônibus, metrô e trem. Simule aqui e descubra seu impacto
            ambiental.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="Simulador interativo"
            title="Quantas viagens seus pontos rendem?"
            description="Insira seu saldo de pontos e escolha o tipo de transporte para ver o resultado."
          />
          <Simulator />

          <div className="relative mx-auto mt-10 max-w-[360px] rounded-2xl border-2 border-dashed border-gray-light bg-white p-8 text-center">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-primary-light to-accent-light" />
            <div className="mb-6 flex items-center justify-between">
              <span className="font-heading text-lg font-extrabold text-primary">Pointway</span>
              <span className="rounded-full bg-light px-2.5 py-0.5 text-xs font-semibold text-gray">Ônibus SPTrans</span>
            </div>
            <div className="mx-auto mb-4 flex h-[130px] w-[130px] items-center justify-center rounded-lg bg-dark text-5xl">▦</div>
            <div className="mb-3.5 rounded-lg bg-light px-4 py-2 font-mono text-lg font-bold tracking-widest text-dark">SUP-7X4K-2026</div>
            <p className="text-xs text-gray">1 crédito de transporte · válido por 24h</p>
            <div className="mt-2.5 flex justify-between border-t border-dashed border-gray-light pt-4 text-xs text-gray">
              <div><strong className="block text-sm text-dark">João S.</strong>Usuário</div>
              <div><strong className="block text-sm text-dark">150 pts</strong>Pontos usados</div>
              <div><strong className="block text-sm text-dark">29/04/2026</strong>Expira em</div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray">
            ↑ Modelo de voucher digital gerado no app. O QR Code é único e vinculado ao CPF do usuário.
          </p>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="Integração técnica"
            badgeVariant="secondary"
            title="Como a solução se integra ao sistema de transporte"
            description="Dois modelos de integração para diferentes contextos e operadoras."
          />

          <Tabs items={integrationTabs} activeKey={integrationTab} onChange={setIntegrationTab} />

          {integrationTab === "voucher" && (
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-3">Modelo Voucher Digital</h3>
                <p className="mb-5 leading-relaxed text-gray-dark">
                  O modelo mais simples: o usuário gera um QR Code no app Pointway que é lido pelas catracas
                  equipadas ou validado pelos agentes de transporte.
                </p>
                <div className="flex flex-col gap-3.5">
                  {[
                    { icon: "📱", title: "Geração no app", text: "Usuário seleciona pontos, escolhe o modal e gera o QR Code com validade de 24h." },
                    { icon: "🔍", title: "Validação na catraca", text: "Leitor da catraca comunica com a API Pointway para validar e consumir o voucher." },
                    { icon: "✅", title: "Confirmação instantânea", text: "O sistema registra a viagem, debita os pontos e atualiza o histórico em tempo real." },
                  ].map((item) => (
                    <div key={item.title} className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-2xl border border-gray-light bg-white p-7">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-bg text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="mb-1.5">{item.title}</h4>
                        <p className="text-sm text-gray">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="rounded-2xl bg-gradient-to-br from-primary to-emerald-700 p-8 text-white">
                  <h4 className="mb-3 text-white">✅ Vantagens deste modelo</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-white/90">
                    <li>Implementação mais rápida</li>
                    <li>Não requer alteração nos sistemas legados</li>
                    <li>Funciona offline (QR salvo em cache)</li>
                    <li>Rastreabilidade completa da viagem</li>
                    <li>Compatível com qualquer operadora</li>
                  </ul>
                </div>
                <div className="mt-4 rounded-lg border-l-4 border-primary bg-light px-6 py-5">
                  <p className="text-sm text-gray-dark">📊 <strong>Anti-fraude:</strong> Token único por CPF, expiração automática em 24h e limite de 3 tentativas de uso.</p>
                </div>
              </div>
            </div>
          )}

          {integrationTab === "api" && (
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-3">Integração via API</h3>
                <p className="mb-5 leading-relaxed text-gray-dark">
                  Para operadoras com API disponível (SPTrans, CPTM), a integração é direta: os créditos são
                  adicionados ao cartão de transporte existente do usuário.
                </p>
                <div className="flex flex-col gap-3.5">
                  {[
                    { icon: "🔗", title: "Autenticação OAuth 2.0", text: "Usuário autoriza a Pointway a acessar seu cartão de transporte cadastrado na operadora." },
                    { icon: "💳", title: "Recarga direta no cartão", text: "A API da Pointway debita os pontos e credita viagens diretamente no cartão (ex: Bilhete Único)." },
                    { icon: "📊", title: "Relatório consolidado", text: "Histórico unificado de pontos usados e viagens realizadas, com dados ambientais calculados." },
                  ].map((item) => (
                    <div key={item.title} className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-2xl border border-gray-light bg-white p-7">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-bg text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="mb-1.5">{item.title}</h4>
                        <p className="text-sm text-gray">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Card>
                <h4 className="mb-4">🔧 Dados técnicos</h4>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Protocolo", "REST / HTTPS"],
                      ["Autenticação", "OAuth 2.0 + JWT"],
                      ["Formato", "JSON"],
                      ["Latência", "< 500ms"],
                      ["Disponibilidade", "99,9% SLA"],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b border-gray-light">
                        <td className="py-2.5 font-medium text-gray">{label}</td>
                        <td className="py-2.5 text-right font-semibold">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="Segurança"
            badgeVariant="accent"
            title="Sistema anti-fraude"
            description="Cada etapa do processo tem camadas de segurança para garantir a integridade das transações."
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {fraudSteps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-primary-light bg-white text-2xl shadow-md">
                  {step.icon}
                </div>
                <h4 className="mb-1.5 text-sm">{step.title}</h4>
                <p className="text-[0.83rem] text-gray">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader
            badge="Impacto ambiental"
            title="Calculadora de impacto coletivo"
            description="Veja o impacto potencial se toda a base de usuários usar pontos no transporte."
          />
          <ImpactCalculator />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d2e1a] py-20 text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <h2 className="mb-4 text-white">Comece hoje a transformar seus pontos em viagens</h2>
          <p className="mb-9 text-white/75">Ainda tem dúvidas? Confira nossa seção de perguntas frequentes ou entre em contato com o time.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/faq" size="lg">Ver FAQ</Button>
            <Button to="/contato" variant="outline-white">Falar com a equipe</Button>
          </div>
        </div>
      </section>
    </>
  );
}
