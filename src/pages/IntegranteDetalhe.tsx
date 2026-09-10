import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { team } from "../data/team";
import type { AvatarColor } from "../types";

const avatarGradients: Record<AvatarColor, string> = {
  green: "from-primary to-primary-light",
  blue: "from-secondary to-secondary-light",
  amber: "from-accent to-accent-light",
  teal: "from-teal-600 to-teal-400",
};

export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = team.find((m) => m.id === id);
  const index = team.findIndex((m) => m.id === id);

  if (!member) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-[70px] text-center">
        <div className="mb-4 text-5xl">🤔</div>
        <h1 className="mb-3">Integrante não encontrado</h1>
        <p className="mb-8 max-w-md text-gray">
          Não encontramos ninguém com o identificador "{id}" na equipe Pointway.
        </p>
        <Button to="/integrantes">Voltar para a equipe</Button>
      </section>
    );
  }

  const previous = team[(index - 1 + team.length) % team.length];
  const next = team[(index + 1) % team.length];

  return (
    <section className="px-6 pb-20 pt-[calc(70px+3.5rem)]">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span className="opacity-45">›</span>
          <Link to="/integrantes" className="hover:text-primary">Equipe</Link>
          <span className="opacity-45">›</span>
          <span className="text-gray-dark">{member.name}</span>
        </nav>

        <div className="rounded-3xl border border-gray-light bg-white p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div
            className={`mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br font-heading text-4xl font-extrabold text-white ${avatarGradients[member.avatarColor]}`}
          >
            {member.initials}
          </div>
          <h1 className="mb-2">{member.name}</h1>
          <p className="mb-1 text-gray">RM: {member.rm}</p>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-primary-bg px-3.5 py-1 text-sm font-semibold text-primary">{member.turma}</span>
            <span className="text-sm italic text-gray">{member.role}</span>
          </div>
          <p className="mx-auto mb-8 max-w-lg leading-relaxed text-gray-dark">
            Integrante do grupo desenvolvedor do <strong>Pointway Transit</strong>, projeto do Desafio 2 do Challenge
            FIAP 2026, responsável por implementar a solução de conversão de pontos em créditos de transporte
            público.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-light px-5 py-2.5 text-sm font-semibold text-gray-dark transition-colors hover:border-dark hover:bg-light hover:text-dark"
            >
              🐙 GitHub
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-light px-5 py-2.5 text-sm font-semibold text-gray-dark transition-colors hover:border-[#0A66C2] hover:bg-blue-50 hover:text-[#0A66C2]"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate(`/integrantes/${previous.id}`)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-dark transition-colors hover:text-primary"
          >
            ← {previous.name.split(" ")[0]}
          </button>
          <Button to="/integrantes" variant="outline" size="sm">Ver toda a equipe</Button>
          <button
            onClick={() => navigate(`/integrantes/${next.id}`)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-dark transition-colors hover:text-primary"
          >
            {next.name.split(" ")[0]} →
          </button>
        </div>
      </div>
    </section>
  );
}
