import type { SolutionCategory } from "../types";

export const plataformaCategorias: SolutionCategory[] = [
  { slug: "transporte", label: "Transporte", icon: "🚌" },
  { slug: "energia", label: "Energia", icon: "⚡" },
  { slug: "experiencias", label: "Experiências", icon: "🌿" },
  { slug: "parceiros", label: "Parceiros", icon: "🤝" },
];

export const earnPointsWays = [
  { badge: "📚 +50 pts por artigo", title: "Consumo de conteúdo", text: "Leia artigos sobre sustentabilidade, assista vídeos educativos e complete cursos na plataforma." },
  { badge: "💬 +30 pts por interação", title: "Engajamento comunitário", text: "Comente, compartilhe e participe de discussões nas comunidades Pointway." },
  { badge: "🚌 +200 pts por viagem", title: "Use transporte público", text: "Registre suas viagens de ônibus, metrô ou trem no app e ganhe pontos bônus por deslocamento." },
  { badge: "♻️ +100 pts por ação", title: "Ações sustentáveis", text: "Registre reciclagem, consumo de energia renovável e outras ações verdes verificáveis." },
  { badge: "👥 +500 pts por indicação", title: "Indicação de amigos", text: "Convide amigos para a plataforma e ganhe pontos bônus quando completarem o cadastro." },
  { badge: "🎯 +Variável por desafio", title: "Desafios semanais", text: "Complete desafios temáticos semanais com missões de sustentabilidade e mobilidade." },
];

export const partners = [
  { icon: "🚌", name: "SPTrans", text: "Integração com o sistema de bilhetagem de ônibus da cidade de São Paulo." },
  { icon: "🚇", name: "ViaMobilidade", text: "Linhas 5, 8, 9 e 17 do metrô e trem metropolitano de São Paulo." },
  { icon: "🚊", name: "CPTM", text: "Companhia Paulista de Trens Metropolitanos — linhas 7, 10, 11, 12 e 13." },
];
