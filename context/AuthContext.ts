// context/AuthContext.ts
import { createContext } from "react";

export interface User {
  email: string;
  language: string;
  _id: string;
}

type Lang = "en" | "ar";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  lang: 'en',
  setLang: () => {},
});

export default AuthContext;
