import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

const quickFaqs = [
  { icon: "🔄", title: "Como converter pontos?", text: "Acesse o app Pointway → Recompensas → Transporte Público.", to: "/faq" },
  { icon: "🚌", title: "Quais linhas aceitam?", text: "SPTrans, ViaMobilidade e CPTM em São Paulo.", to: "/transporte" },
  { icon: "🔐", title: "É seguro usar pontos?", text: "Sim! Token único + biometria + IA anti-fraude.", to: "/faq" },
];

export default function Contato() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ mode: "onBlur" });

  const mensagemLength = watch("mensagem")?.length ?? 0;

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSent(true);
    reset();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-[#0d234a] pb-16 pt-[calc(70px+3.5rem)] text-center text-white">
        <div className="relative mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-white/65">
            <Link to="/" className="hover:text-white">Início</Link>
            <span className="opacity-45">›</span>
            <span>Contato</span>
          </nav>
          <h1 className="mb-4 text-white">Entre em Contato</h1>
          <p className="mx-auto max-w-xl text-white/80">
            Tem dúvidas, sugestões ou quer saber mais sobre o projeto? Nossa equipe está aqui para ajudar.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.6fr]">
          <aside>
            <h3 className="mb-3">Fale com a equipe</h3>
            <p className="mb-7 leading-relaxed text-gray-dark">
              Respondemos todas as mensagens em até 2 dias úteis. Para dúvidas rápidas, confira também nosso{" "}
              <Link to="/faq" className="font-semibold text-primary">FAQ</Link>.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: "📧", label: "E-mail", value: "pointway@fiap.com.br" },
                { icon: "🏫", label: "Instituição", value: "FIAP — São Paulo, SP" },
                { icon: "📅", label: "Disponibilidade", value: "Seg–Sex, das 9h às 18h" },
                { icon: "🎓", label: "Turma", value: "1TDSPO" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-bg text-xl">{item.icon}</div>
                  <div>
                    <p className="text-xs text-gray">{item.label}</p>
                    <strong className="text-sm">{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/integrantes" className="flex items-center gap-2 rounded-full border border-gray-light px-4.5 py-2.5 text-sm font-semibold text-gray-dark transition-colors hover:border-primary hover:bg-primary-bg hover:text-primary">
                👥 Ver equipe
              </Link>
              <a
                href="https://github.com/MatheuSegura/Challenge-2026-1TDPX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-light px-4.5 py-2.5 text-sm font-semibold text-gray-dark transition-colors hover:border-primary hover:bg-primary-bg hover:text-primary"
              >
                🐙 GitHub
              </a>
            </div>
          </aside>

          <div className="rounded-3xl border border-gray-light bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
            {sent ? (
              <div className="rounded-2xl border border-primary bg-primary-bg p-8 text-center" role="alert">
                <div className="mb-3 text-4xl">✅</div>
                <h4 className="mb-2 text-primary">Mensagem enviada com sucesso!</h4>
                <p className="text-sm text-gray-dark">Obrigado pelo contato. Nossa equipe responderá em até 2 dias úteis no e-mail informado.</p>
                <Button variant="outline" className="mt-5" onClick={() => setSent(false)}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3 className="mb-1.5">Envie sua mensagem</h3>
                <p className="mb-7 text-sm text-gray">
                  Todos os campos marcados com <span className="text-red-500">*</span> são obrigatórios.
                </p>

                <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nome" className="mb-2 block text-sm font-semibold text-gray-dark">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      placeholder="Seu nome"
                      autoComplete="name"
                      aria-invalid={!!errors.nome}
                      className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                        errors.nome ? "border-red-500" : "border-gray-light focus:border-primary"
                      }`}
                      {...register("nome", { required: "Informe seu nome completo", minLength: { value: 3, message: "Nome muito curto" } })}
                    />
                    {errors.nome && <span className="mt-1.5 block text-xs font-medium text-red-500">{errors.nome.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-dark">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      className={`w-full rounded-lg border-2 px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                        errors.email ? "border-red-500" : "border-gray-light focus:border-primary"
                      }`}
                      {...register("email", {
                        required: "Informe seu e-mail",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" },
                      })}
                    />
                    {errors.email && <span className="mt-1.5 block text-xs font-medium text-red-500">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="assunto" className="mb-2 block text-sm font-semibold text-gray-dark">
                    Assunto <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="assunto"
                    aria-invalid={!!errors.assunto}
                    defaultValue=""
                    className={`w-full rounded-lg border-2 bg-white px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      errors.assunto ? "border-red-500" : "border-gray-light focus:border-primary"
                    }`}
                    {...register("assunto", { required: "Selecione um assunto" })}
                  >
                    <option value="" disabled>Selecione um assunto...</option>
                    <option value="duvida">Dúvida sobre o projeto</option>
                    <option value="transporte">Transporte e conversão de pontos</option>
                    <option value="tecnico">Suporte técnico</option>
                    <option value="parceria">Proposta de parceria</option>
                    <option value="imprensa">Imprensa e divulgação</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                  {errors.assunto && <span className="mt-1.5 block text-xs font-medium text-red-500">{errors.assunto.message}</span>}
                </div>

                <div className="mb-6">
                  <label htmlFor="mensagem" className="mb-2 block text-sm font-semibold text-gray-dark">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    maxLength={1000}
                    placeholder="Descreva sua dúvida ou sugestão com detalhes (mínimo 20 caracteres)..."
                    aria-invalid={!!errors.mensagem}
                    className={`w-full resize-y rounded-lg border-2 px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-4 focus:ring-primary/10 ${
                      errors.mensagem ? "border-red-500" : "border-gray-light focus:border-primary"
                    }`}
                    {...register("mensagem", {
                      required: "Escreva sua mensagem",
                      minLength: { value: 20, message: "Escreva pelo menos 20 caracteres" },
                    })}
                  />
                  {errors.mensagem && <span className="mt-1.5 block text-xs font-medium text-red-500">{errors.mensagem.message}</span>}
                  <p className="mt-1.5 text-right text-xs text-gray">{mensagemLength}/1000 caracteres</p>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-3">Dúvidas rápidas</h2>
            <div className="mx-auto h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary-light" />
            <p className="mx-auto mt-3 text-gray">Antes de enviar, veja se sua dúvida já está respondida aqui.</p>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {quickFaqs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-light bg-white p-8 text-center">
                <div className="mb-3.5 text-3xl">{item.icon}</div>
                <h4>{item.title}</h4>
                <p className="mt-2 text-sm text-gray">{item.text}</p>
                <Link to={item.to} className="mt-4 inline-block rounded-md border-2 border-primary px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                  Ver mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
