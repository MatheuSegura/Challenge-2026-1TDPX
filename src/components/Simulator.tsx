import { useState } from "react";
import { transportOptions, KM_PER_TRIP, VALUE_PER_TRIP } from "../data/transport";
import type { TransportKey } from "../types";

export default function Simulator() {
  const [points, setPoints] = useState("");
  const [selected, setSelected] = useState<TransportKey>("onibus");

  const pointsNumber = parseInt(points, 10) || 0;
  const rate = transportOptions.find((option) => option.key === selected)!;
  const trips = pointsNumber > 0 ? Math.floor(pointsNumber / rate.pointsPerTrip) : 0;
  const pointsUsed = trips * rate.pointsPerTrip;
  const pointsRemaining = pointsNumber - pointsUsed;
  const co2 = (trips * rate.co2PerTrip).toFixed(2).replace(".", ",");
  const km = Math.round(trips * KM_PER_TRIP).toLocaleString("pt-BR");
  const value = (trips * VALUE_PER_TRIP).toFixed(2).replace(".", ",");
  const showResult = pointsNumber > 0;

  return (
    <div className="mx-auto max-w-[640px] rounded-3xl border border-gray-light bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
      <h3 className="text-center text-xl font-bold">Simulador de Conversão</h3>
      <p className="mb-8 text-center text-sm text-gray">Calcule o potencial dos seus pontos Pointway em tempo real</p>

      <div className="mb-6">
        <label htmlFor="pointsInput" className="mb-2 block text-sm font-semibold text-gray-dark">
          Quantos pontos você tem?
        </label>
        <input
          id="pointsInput"
          type="number"
          min={0}
          placeholder="Ex: 4500"
          value={points}
          onChange={(e) => setPoints(e.target.value.replace(/\D/g, ""))}
          className="w-full rounded-lg border-2 border-gray-light px-4.5 py-3.5 text-lg font-semibold text-dark transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
        />
      </div>

      <span className="mb-3 block text-sm font-semibold text-gray-dark">Tipo de transporte</span>
      <div className="mb-6 grid grid-cols-3 gap-3.5">
        {transportOptions.map((option) => (
          <button
            key={option.key}
            type="button"
            aria-pressed={selected === option.key}
            onClick={() => setSelected(option.key)}
            className={`rounded-lg border-2 p-4 text-center transition-colors ${
              selected === option.key ? "border-primary bg-primary-bg" : "border-gray-light hover:border-primary-light hover:bg-primary-bg"
            }`}
          >
            <div className="mb-1.5 text-2xl">{option.icon}</div>
            <div className="text-sm font-semibold text-gray-dark">{option.name}</div>
            <div className="text-xs text-gray">{option.pointsPerTrip} pts/viagem</div>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="rounded-2xl bg-gradient-to-br from-primary-bg to-emerald-50 p-6 text-center">
          <p className="text-xs text-gray">Você pode realizar</p>
          <div className="font-heading text-5xl font-extrabold text-primary">{trips.toLocaleString("pt-BR")}</div>
          <div className="mt-2 text-sm text-gray-dark">
            viagens de <strong>{rate.name}</strong>
          </div>
          <div className="mt-3.5 text-sm text-gray-dark">
            Usando <strong>{pointsUsed.toLocaleString("pt-BR")}</strong> pontos &nbsp;|&nbsp; Restam{" "}
            <strong>{pointsRemaining.toLocaleString("pt-BR")}</strong> pontos
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-6">
            <div className="rounded-lg bg-white px-4 py-2.5 text-center">
              <div className="text-lg font-bold text-secondary">{co2}</div>
              <div className="text-xs text-gray">kg CO₂ evitados</div>
            </div>
            <div className="rounded-lg bg-white px-4 py-2.5 text-center">
              <div className="text-lg font-bold text-secondary">{km}</div>
              <div className="text-xs text-gray">km percorridos</div>
            </div>
            <div className="rounded-lg bg-white px-4 py-2.5 text-center">
              <div className="text-lg font-bold text-secondary">R$ {value}</div>
              <div className="text-xs text-gray">em economia</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
