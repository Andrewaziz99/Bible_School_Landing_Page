"use client";

import { useEffect } from "react";
import { useLang } from "./LanguageProvider";

/**
 * Small client component that dynamically updates the lang and dir
 * attributes on the <html> element when the locale changes.
 * 
 * This replaces the old ClientHtml pattern where <html> was wrapped
 * in a client component, which blocked Next.js SSR metadata management.
 */
export default function HtmlDirectionSetter() {
  const { locale } = useLang();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null; // Renders nothing — just a side-effect component
}
