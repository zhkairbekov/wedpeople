import React, { createContext, useContext, useState, useEffect } from "react";
import { LOCALIZED_CONTENT } from "../data/wedpeopleData.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("wedpeople_lang");
      if (saved === "ru" || saved === "kk") {
        return saved;
      }
    } catch {
      // Ignore storage errors
    }
    return "ru";
  });

  useEffect(() => {
    try {
      localStorage.setItem("wedpeople_lang", lang);
    } catch {
      // Ignore storage errors
    }
    document.documentElement.lang = lang === "kk" ? "kk" : "ru";
    document.title =
      lang === "kk"
        ? "WEDPEOPLE — Талғаммен өрілген той хикаялары | Астана & Алматы"
        : "WEDPEOPLE — Свадебные истории со вкусом | Астана & Алматы";
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "ru" ? "kk" : "ru"));
  };

  const t = LOCALIZED_CONTENT[lang] || LOCALIZED_CONTENT.ru;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
