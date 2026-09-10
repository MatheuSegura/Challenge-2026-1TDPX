import type { FaqEntry } from "../types";

export const faqCategories = [
  { key: "pontos", label: "💰 Pontos e Conversão" },
  { key: "transporte", label: "🚌 Transporte e Uso" },
  { key: "seguranca", label: "🔐 Segurança e Conta" },
] as const;

export const faqEntries: FaqEntry[] = [
  {
    id: "converter-pontos",
    category: "pontos",
    question: "Como converter meus pontos Pointway em créditos de transporte?",
    answer:
      'Para converter seus pontos, acesse o aplicativo Pointway, vá até a seção "Recompensas" e selecione "Transporte Público". Escolha o tipo de transporte (ônibus, metrô, BRT), informe a quantidade de pontos que deseja converter e confirme com sua biometria. O voucher ou crédito é gerado instantaneamente. Taxas atuais: Ônibus = 150 pts/viagem | Metrô/Trem = 250 pts/viagem | BRT = 180 pts/viagem.',
  },
  {
    id: "saldo-minimo",
    category: "pontos",
    question: "Qual é o saldo mínimo necessário para fazer um resgate?",
    answer:
      "O saldo mínimo para qualquer resgate de transporte é de 150 pontos, equivalente a uma viagem de ônibus. Não há limite máximo por transação, mas resgates acima de 5.000 pontos por dia exigem verificação adicional por segurança.",
  },
  {
    id: "expiracao-pontos",
    category: "pontos",
    question: "Os pontos expiram? Por quanto tempo eles ficam disponíveis?",
    answer:
      "Sim, os pontos têm validade de 12 meses a partir da data de acúmulo. Qualquer resgate ou nova adição de pontos à conta renova o prazo do saldo existente por mais 12 meses. Você recebe um aviso no app 30 dias antes de qualquer lote de pontos expirar.",
  },
  {
    id: "transferencia-pontos",
    category: "pontos",
    question: "Posso transferir meus pontos para outra pessoa?",
    answer:
      "Não. Os pontos Pointway são pessoais e intransferíveis, vinculados ao CPF do usuário cadastrado. Essa restrição existe para garantir a integridade do programa e evitar fraudes e mercado paralelo de pontos.",
  },
  {
    id: "sistemas-compativeis",
    category: "transporte",
    question: "Quais sistemas de transporte são compatíveis com o Pointway Transit?",
    answer:
      "Atualmente, a plataforma está integrada com Ônibus municipais via SPTrans (São Paulo), Metrô e Trem via ViaMobilidade (Linhas 5, 8, 9 e 17) e CPTM (Linhas 7, 10, 11, 12 e 13). Estamos em negociação com outras capitais brasileiras para expansão em 2026.",
  },
  {
    id: "voucher-terceiros",
    category: "transporte",
    question: "O voucher gerado pode ser usado por outra pessoa?",
    answer:
      "Não. Cada voucher é gerado com um token único vinculado ao CPF do usuário e ao dispositivo cadastrado. Na validação, o sistema verifica a consistência dos dados — qualquer tentativa de uso por terceiros resulta em bloqueio automático.",
  },
  {
    id: "validade-qrcode",
    category: "transporte",
    question: "Por quanto tempo o QR Code do voucher é válido?",
    answer:
      "O QR Code tem validade de 24 horas a partir do momento da geração. Após o uso ou expiração, o token é invalidado automaticamente no servidor. Um novo voucher pode ser gerado a qualquer momento, desde que você tenha saldo suficiente.",
  },
  {
    id: "catraca-nao-le",
    category: "transporte",
    question: "O que acontece se a catraca não ler o QR Code?",
    answer:
      "Se houver problema de leitura, você pode apresentar o código alfanumérico do voucher ao agente de transporte, que pode validar manualmente pelo sistema da operadora. Os pontos só são debitados após a confirmação do uso.",
  },
  {
    id: "prevencao-fraude",
    category: "seguranca",
    question: "Como o sistema previne fraudes e uso indevido dos pontos?",
    answer:
      "O Pointway Transit possui múltiplas camadas de segurança: autenticação biométrica para gerar vouchers, token único por transação vinculado ao CPF e dispositivo, expiração automática em 24h com bloqueio após 3 tentativas falhas, modelo de IA que monitora padrões de uso atípicos e auditoria completa das transações armazenada por 5 anos.",
  },
  {
    id: "celular-perdido",
    category: "seguranca",
    question: "Perdi meu celular. Meus pontos estão seguros?",
    answer:
      'Sim! Seus pontos ficam armazenados na nuvem, vinculados ao seu CPF. Em caso de perda ou troca de dispositivo, acesse o portal web da Pointway, vá em "Minha conta" e selecione "Desconectar todos os dispositivos". Depois, faça login no novo dispositivo.',
  },
];
