import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create<{
  token: string | null;
  setAuth: (token: string) => void;
  logout: () => void;
}>()(
  persist(
    (set) => ({
      token: null,
      setAuth: (token: string) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
