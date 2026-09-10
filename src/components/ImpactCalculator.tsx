import { useState } from "react";

export default function ImpactCalculator() {
  const [users, setUsers] = useState(10000);
  const [tripsPerMonth, setTripsPerMonth] = useState(8);

  const totalTrips = users * tripsPerMonth;
  const totalCO2 = Math.round(totalTrips * 0.089);
  const totalKm = Math.round(totalTrips * 8.5);
  const trees = Math.floor(totalCO2 / 21);

  return (
    <div className="mx-auto max-w-[700px] rounded-3xl bg-light p-8">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="impactUsers" className="mb-2 block text-sm font-semibold text-gray-dark">
            Número de usuários ativos
          </label>
          <input
            id="impactUsers"
            type="number"
            min={1}
            value={users}
            onChange={(e) => setUsers(Math.max(0, Number(e.target.value)))}
            className="w-full rounded-lg border-2 border-gray-light px-4 py-3 font-semibold focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
          />
        </div>
        <div>
          <label htmlFor="impactTrips" className="mb-2 block text-sm font-semibold text-gray-dark">
            Viagens por usuário/mês
          </label>
          <input
            id="impactTrips"
            type="number"
            min={1}
            value={tripsPerMonth}
            onChange={(e) => setTripsPerMonth(Math.max(0, Number(e.target.value)))}
            className="w-full rounded-lg border-2 border-gray-light px-4 py-3 font-semibold focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="font-heading text-2xl font-extrabold text-primary">{totalTrips.toLocaleString("pt-BR")}</div>
          <div className="mt-1 text-xs leading-tight text-gray">viagens por mês</div>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="font-heading text-2xl font-extrabold text-primary">{totalCO2.toLocaleString("pt-BR")}</div>
          <div className="mt-1 text-xs leading-tight text-gray">kg CO₂ evitados/mês</div>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="font-heading text-2xl font-extrabold text-primary">{totalKm.toLocaleString("pt-BR")}</div>
          <div className="mt-1 text-xs leading-tight text-gray">km percorridos</div>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="font-heading text-2xl font-extrabold text-primary">{trees.toLocaleString("pt-BR")}</div>
          <div className="mt-1 text-xs leading-tight text-gray">árvores equivalentes</div>
        </div>
      </div>
    </div>
  );
}
