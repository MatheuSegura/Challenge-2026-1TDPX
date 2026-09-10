import { useNavigate } from "react-router-dom";
import type { TeamMemberWithLinks, AvatarColor } from "../types";
import { useFadeIn } from "../hooks/useFadeIn";

const avatarGradients: Record<AvatarColor, string> = {
  green: "from-primary to-primary-light",
  blue: "from-secondary to-secondary-light",
  amber: "from-accent to-accent-light",
  teal: "from-teal-600 to-teal-400",
};

interface TeamCardProps {
  member: TeamMemberWithLinks;
  delay?: number;
}

export default function TeamCard({ member, delay = 0 }: TeamCardProps) {
  const navigate = useNavigate();
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <article
      ref={ref}
      onClick={() => navigate(`/integrantes/${member.id}`)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`cursor-pointer rounded-2xl border border-gray-light bg-white p-8 text-center transition-all duration-700 hover:-translate-y-1.5 hover:border-primary-light hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div
        className={`mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-br font-heading text-3xl font-extrabold text-white ${avatarGradients[member.avatarColor]}`}
      >
        {member.initials}
      </div>
      <h3 className="mb-1.5 font-heading text-lg font-bold">{member.name}</h3>
      <p className="mb-1 text-sm text-gray">RM: {member.rm}</p>
      <p className="mb-1 text-sm font-semibold text-primary">{member.turma}</p>
      <p className="mb-5 text-xs italic text-gray">{member.role}</p>
      <div className="flex justify-center gap-3" onClick={(e) => e.stopPropagation()}>
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub de ${member.name}`}
          className="flex items-center gap-1.5 rounded-full border border-gray-light px-3.5 py-2 text-xs font-semibold text-gray-dark transition-colors hover:border-dark hover:bg-light hover:text-dark"
        >
          🐙 GitHub
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${member.name}`}
          className="flex items-center gap-1.5 rounded-full border border-gray-light px-3.5 py-2 text-xs font-semibold text-gray-dark transition-colors hover:border-[#0A66C2] hover:bg-blue-50 hover:text-[#0A66C2]"
        >
          💼 LinkedIn
        </a>
      </div>
    </article>
  );
}
