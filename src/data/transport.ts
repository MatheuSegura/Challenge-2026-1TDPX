import type { TransportOption } from "../types";

export const transportOptions: TransportOption[] = [
  { key: "onibus", name: "Ônibus", icon: "🚌", pointsPerTrip: 150, co2PerTrip: 0.089 },
  { key: "metro", name: "Metrô / Trem", icon: "🚇", pointsPerTrip: 250, co2PerTrip: 0.041 },
  { key: "brt", name: "BRT", icon: "🚊", pointsPerTrip: 180, co2PerTrip: 0.065 },
];

export const KM_PER_TRIP = 8.5;
export const VALUE_PER_TRIP = 4.4;
export const CO2_PER_KG_TREE_EQUIVALENT = 21;
