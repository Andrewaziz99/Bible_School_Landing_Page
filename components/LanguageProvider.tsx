"use client";
import { NextIntlClientProvider } from "next-intl";
import arMessages from "../messages/ar.json";
import enMessages from "../messages/en.json";

import { createContext, useContext, useState } from "react";

type LangContextType = {
  locale: 'ar' | 'en';
  setLocale: (l: 'ar' | 'en') => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'ar' | 'en'>('ar');
  const messages = locale === 'ar' ? arMessages : enMessages;
  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LangContext.Provider>
  );
}
