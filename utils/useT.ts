import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import translations from "../translations";

export default function useT() {
  const { lang } = useContext(AuthContext);
  return (key: keyof typeof translations) => translations[key][lang as "en" | "ar"];
}