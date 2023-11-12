import { create } from "zustand";

export const useStore = create((set) => ({
  isDark: false,
  setDark: () => set((state) => ({ isDark: !state.isDark })),
}));
