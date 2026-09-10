import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-[70px] text-center">
      <div className="mb-4 text-6xl">🧭</div>
      <h1 className="mb-3">Página não encontrada</h1>
      <p className="mb-8 max-w-md text-gray">A página que você procura não existe ou foi movida.</p>
      <div className="flex gap-4">
        <Button onClick={() => navigate(-1)} variant="outline">Voltar</Button>
        <Button to="/">Ir para o início</Button>
      </div>
    </section>
  );
}
