import { createContext } from "react";

type AuthStateContextType = {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const AuthStateContext = createContext<AuthStateContextType | null>(
  null,
);
