export type AvatarColor = "green" | "blue" | "amber" | "teal";

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface TeamMember {
  id: string;
  name: string;
  rm: string;
  turma: string;
  role: string;
  initials: string;
  avatarColor: AvatarColor;
  photo?: string;
}

export type TeamMemberWithLinks = TeamMember & SocialLinks;

export interface FaqEntry {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export type TransportKey = "onibus" | "metro" | "brt";

export interface TransportOption {
  key: TransportKey;
  name: string;
  icon: string;
  pointsPerTrip: number;
  co2PerTrip: number;
}

export interface SolutionCategory {
  slug: string;
  label: string;
  icon: string;
}

export type Nullable<T> = T | null;
