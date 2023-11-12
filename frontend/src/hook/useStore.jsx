import { create } from "zustand";

const isDarkMode = () => localStorage.getItem("isDark");
export const useStore = create((set) => ({
  isDark: !isDarkMode(),
  setDark: () => set((state) => ({ isDark: !state.isDark })),
}));
