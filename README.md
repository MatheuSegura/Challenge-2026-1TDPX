# Pointway 🚌🌱

> Transforme seus pontos em mobilidade sustentável — Desafio 2 | FIAP Front-End Design Engineering 2026 | Sprint 3

## 📋 Título e Descrição

O **Pointway** é uma Single Page Application desenvolvida em **React + Vite + TypeScript** para o **Desafio 2** do Challenge FIAP 2026, em parceria com a empresa **Prospera/Pointway**.

A proposta resolve o problema: *Como permitir que usuários utilizem seus pontos Pointway para financiar o uso de transporte público?*

A solução apresenta:
- **Simulador interativo** de conversão de pontos em viagens (React state + hooks)
- **Sistema de voucher digital** com QR Code mockado para uso nas catracas
- **Explicação dos modelos de integração** com operadoras como SPTrans, ViaMobilidade e CPTM
- **Calculadora de impacto ambiental** coletivo
- **Perfis dinâmicos da equipe**, navegáveis por rota (`/integrantes/:id`)
- **Categorias de recompensas navegáveis por rota** (`/plataforma/:categoria`)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **React 19** | Componentização e interface declarativa |
| **Vite** | Build e servidor de desenvolvimento |
| **TypeScript** | Tipagem estática em todo o projeto |
| **Tailwind CSS v4** | Estilização utilitária e responsiva |
| **React Router DOM** | Navegação SPA, rotas estáticas e dinâmicas |
| **React Hook Form** | Formulário de contato com validação |
| **Git / GitHub** | Versionamento e controle de código |

> ⚠️ Sem bibliotecas de UI (Bootstrap, Material UI, Chakra UI), sem Axios/requisições HTTP e sem templates prontos — conforme as diretrizes da Sprint 3 da FIAP.

---

## 🗂️ Estrutura de Pastas

```
Pointway/
│
├── index.html                # HTML raiz da SPA
├── public/
│   ├── logo.svg               # Favicon / logo público
│   └── assets/images/         # Imagens públicas do projeto
│
├── src/
│   ├── main.tsx                # Ponto de entrada (BrowserRouter)
│   ├── App.tsx                 # Definição de todas as rotas
│   ├── index.css               # Tailwind + tema de cores da marca
│   │
│   ├── components/             # Componentes reutilizáveis
│   │   ├── Layout.tsx, Header.tsx, Footer.tsx
│   │   ├── Button.tsx, Badge.tsx, Card.tsx, SectionHeader.tsx
│   │   ├── Tabs.tsx, TeamCard.tsx, FaqAccordionItem.tsx
│   │   ├── Simulator.tsx, ImpactCalculator.tsx
│   │   └── ScrollTopButton.tsx, StatCounter.tsx
│   │
│   ├── pages/                  # Páginas / rotas da aplicação
│   │   ├── Home.tsx, Sobre.tsx, Plataforma.tsx, Transporte.tsx
│   │   ├── Faq.tsx, Contato.tsx
│   │   ├── Integrantes.tsx, IntegranteDetalhe.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/                   # Dados estáticos tipados (equipe, FAQ, transporte)
│   ├── types/                  # Interfaces e tipos TypeScript
│   └── hooks/                  # Hooks customizados (useFadeIn, useScrollPosition)
│
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ▶️ Como Usar

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18+ e npm instalados

### Instalação e execução local

```bash
# Clonar o repositório
git clone https://github.com/MatheuSegura/Challenge-2026-1TDPX.git
cd Challenge-2026-1TDPX

# Instalar as dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

A aplicação abre por padrão em `http://localhost:5173`.

### Links do projeto
- 🔗 **Repositório GitHub:** [https://github.com/MatheuSegura/Challenge-2026-1TDPX](https://github.com/MatheuSegura/Challenge-2026-1TDPX)
- 🎬 **Vídeo de apresentação (YouTube):** _a adicionar_

---

## 📄 Páginas da Aplicação

| Página | Rota | Descrição |
|---|---|---|
| Início | `/` | Hero, como funciona, stats e funcionalidades |
| Sobre | `/sobre` | Contexto, problema, solução e roadmap |
| Plataforma | `/plataforma/:categoria` | Sistema de pontos e recompensas (rota dinâmica por categoria) |
| Transporte | `/transporte` | Simulador de conversão e calculadora de impacto |
| FAQ | `/faq` | Perguntas frequentes com busca e accordion |
| Contato | `/contato` | Formulário com React Hook Form |
| Equipe | `/integrantes` | Lista da equipe |
| Perfil do integrante | `/integrantes/:id` | Rota dinâmica com detalhes de cada integrante |

---

## 🖼️ Imagens e Ícones do Projeto

O projeto utiliza o logotipo oficial da marca (`public/assets/images/logo.svg`) no cabeçalho e favicon, além de emojis temáticos (🚌 🌱 🎫 🔐) como iconografia leve em cards, badges e seções, mantendo a identidade visual consistente em toda a aplicação.

---

## 👥 Autores e Créditos

| Foto | Nome | RM | Turma | LinkedIn | GitHub |
|---|---|---|---|---|---|
| 🟢 EL | Enzo Leiva Varrichio | RM568877 | 1TDSPO | [LinkedIn](https://www.linkedin.com/in/enzo-leiva-varrichio-88ba273a1/) | [GitHub](https://github.com/enzoleiva2008-blip) |
| 🟡 KA | Kauã Augusto Fiuza | RM572369 | 1TDSPO | [LinkedIn](https://www.linkedin.com/in/kau%C3%A3-fiuza-94a039313/) | [GitHub](https://github.com/KauaznX) |
| 🔵 MS | Matheus Segura Anacleto de Souza | RM570878 | 1TDSPO | [LinkedIn](https://www.linkedin.com/in/matheussegura/) | [GitHub](https://github.com/MatheuSegura) |

_As iniciais coloridas exibidas no site (`/integrantes`) substituem fotos reais; para usar fotos, adicione os arquivos em `public/assets/images/team/` e referencie via o campo `photo` em `src/data/team.ts`._

---

## 📞 Contato

- **E-mail:** pointway@fiap.com.br
- **Instituição:** FIAP — São Paulo, SP
- **Disciplina:** Front-End Design Engineering
- **Turma:** 1TDSPO — Sprint 3, 2026

---

## 📜 Licença

Projeto acadêmico desenvolvido para fins educacionais como parte do Challenge FIAP 2026, em parceria com a Prospera/Pointway. Todos os direitos reservados à equipe desenvolvedora.

---

*Desenvolvido com 💚 para o Challenge FIAP 2026 — Desafio 2: Utilização de Pontos para Transporte Público*
