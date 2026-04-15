// app/layout.tsx
// Root layout — renders <html> and <body> as a server component
// so that Next.js can manage <head> metadata properly.

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import LanguageProvider from "../components/providers/LanguageProvider";
import HtmlDirectionSetter from "../components/HtmlDirectionSetter";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";

// Load Cairo font — optimized to only the weights we actually use
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أرثوذكسي للدراسات الكتابية للأطفال",
  description:
    "مركز يقدم دراسة كتابية أرثوذكسية قبطية منهجية للأطفال والنشء من خلال مناهج متدرجة ومنصة رقمية متكاملة",
  keywords: ["مدرسة الكتاب", "دراسة كتابية", "أطفال", "كنيسة قبطية", "مناهج تعليمية"],
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "أرثوذكسي للدراسات الكتابية للأطفال",
    description: "رحلة متكاملة للدراسة الكتابية عبر مناهج متدرجة ومنصة رقمية حديثة",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable} suppressHydrationWarning>
      <body className="font-cairo antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <HtmlDirectionSetter />
          <Header />
          <main className="flex-grow">
            <PageWrapper>
              {children}
            </PageWrapper>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
