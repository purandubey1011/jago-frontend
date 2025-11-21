import { create } from "zustand";

export const useCurrencyStore = create((set) => ({
  currency: "£",
  setCurrency: (cur) => set({ currency: cur }),
}));
