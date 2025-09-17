import { create } from "zustand";

type User = {
  id: string;
  email: string;
  token: string;
};

type AuthState = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));
