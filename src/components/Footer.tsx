import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark py-16 pb-8 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <span className="mb-3.5 inline-block font-heading text-2xl font-extrabold text-primary-light">Pointway</span>
            <p className="text-sm leading-relaxed text-white/55">
              Transformando interações digitais em mobilidade sustentável. Projeto desenvolvido para o Desafio 2 — FIAP
              Front-End Design Engineering 2026.
            </p>
          </div>
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/50">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/" className="text-sm text-white/70 transition-colors hover:text-primary-light">Início</Link></li>
              <li><Link to="/sobre" className="text-sm text-white/70 transition-colors hover:text-primary-light">Sobre o Projeto</Link></li>
              <li><Link to="/plataforma" className="text-sm text-white/70 transition-colors hover:text-primary-light">A Plataforma</Link></li>
              <li><Link to="/transporte" className="text-sm text-white/70 transition-colors hover:text-primary-light">Transporte</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/50">Recursos</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/faq" className="text-sm text-white/70 transition-colors hover:text-primary-light">FAQ</Link></li>
              <li><Link to="/contato" className="text-sm text-white/70 transition-colors hover:text-primary-light">Contato</Link></li>
              <li><Link to="/integrantes" className="text-sm text-white/70 transition-colors hover:text-primary-light">Nossa Equipe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/50">Challenge</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/sobre#desafio" className="text-sm text-white/70 transition-colors hover:text-primary-light">Desafio 2 — Pointway</Link></li>
              <li><Link to="/sobre#prospera" className="text-sm text-white/70 transition-colors hover:text-primary-light">Sobre a Prospera</Link></li>
              <li><Link to="/sobre#roadmap" className="text-sm text-white/70 transition-colors hover:text-primary-light">Roadmap</Link></li>
            </ul>
          </div>
        </div>
        <hr className="mb-8 border-white/10" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-center">
          <p className="text-[0.83rem] text-white/40">&copy; 2026 Pointway. Desenvolvido para FIAP — Front-End Design Engineering.</p>
          <p className="text-[0.83rem] text-white/40">Desafio 2 — Transporte Público Sustentável 🌱</p>
        </div>
      </div>
    </footer>
  );
}
