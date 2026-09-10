import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import TeamCard from "../components/TeamCard";
import { team } from "../data/team";

export default function Integrantes() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d234a] pb-16 pt-[calc(70px+3.5rem)] text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/65">
            <Link to="/" className="hover:text-white">Início</Link>
            <span className="opacity-45">›</span>
            <span>Equipe</span>
          </nav>
          <h1 className="mb-4 text-white">Nossa Equipe</h1>
          <p className="mx-auto max-w-xl text-white/80">
            Conheça os integrantes responsáveis pelo desenvolvimento do Pointway Transit para o Desafio 2 da FIAP.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-bg px-5 py-2 text-sm font-semibold text-primary">
              🎓 Turma: 1TDSPO
            </span>
            <p className="leading-relaxed text-gray-dark">
              Grupo desenvolvedor do projeto <strong>Pointway Transit</strong> para o Challenge FIAP 2026, Desafio 2 —
              Utilização de Pontos para Transporte Público, em parceria com a empresa Prospera/Pointway. Clique em um
              integrante para ver o perfil completo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-secondary to-[#0a1f40] p-12 text-center text-white">
            <Badge variant="white" className="mb-4">🏆 FIAP Challenge 2026</Badge>
            <h3 className="mb-4 text-white">Sobre o Projeto Pointway Transit</h3>
            <p className="leading-relaxed text-white/80">
              Desenvolvido como entrega da <strong className="text-primary-light">Sprint 3</strong> da disciplina de
              Front-End Design Engineering da FIAP, em parceria com a empresa{" "}
              <strong className="text-primary-light">Prospera / Pointway</strong>. O grupo escolheu o{" "}
              <strong className="text-primary-light">Desafio 2</strong> — Utilização de Pontos para Transporte Público
              — propondo uma solução completa em React, Vite e TypeScript.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {[
                { val: "9", label: "páginas" },
                { val: "React", label: "framework" },
                { val: "100%", label: "TypeScript" },
                { val: "100%", label: "responsivo" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-heading text-2xl font-bold text-primary-light">{item.val}</div>
                  <div className="mt-0.5 text-xs text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/sobre" variant="outline-white">Ver sobre o projeto</Button>
              <a
                href="https://github.com/MatheuSegura/Challenge-2026-1TDPX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                🐙 Ver repositório
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
