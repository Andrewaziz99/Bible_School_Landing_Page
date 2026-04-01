
// app/layout.tsx
// 📖 Flutter analogy: This is like MaterialApp() — it wraps everything.
// Every page in your app gets this layout automatically.

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import LanguageProvider from "../components/LanguageProvider";

// Load Cairo font (same as your Flutter app!)
// Flutter: GoogleFonts.cairo() → Next.js: const cairo = Cairo({...})
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أرثوذكسي للدراسات الكتابية للأطفال",
  description:
    "مركز يقدم دراسة كتابية أرثوذكسية قبطية منهجية للأطفال والنشء من خلال مناهج متدرجة ومنصة رقمية متكاملة",
  keywords: ["مدرسة الكتاب", "دراسة كتابية", "أطفال", "كنيسة قبطية", "مناهج تعليمية"],
  openGraph: {
    title: "أرثوذكسي للدراسات الكتابية للأطفال",
    description: "رحلة متكاملة للدراسة الكتابية عبر مناهج متدرجة ومنصة رقمية حديثة",
    locale: "ar_EG",
    type: "website",
  },
};

import ClientHtml from "../components/ClientHtml";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ClientHtml cairoVar={cairo.variable}>
        {children}
      </ClientHtml>
    </LanguageProvider>
  );
}
