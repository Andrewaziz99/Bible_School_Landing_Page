"use client";
import { useLang } from "./LanguageProvider";

export default function ClientHtml({ cairoVar, children }: { cairoVar: string; children: React.ReactNode }) {
  const { locale } = useLang();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={cairoVar}>
      <head>
        {/* Meta tags, title, etc. can go here if needed */}
        <title>الكز أرثوذكسي للدراسات الكتابية للأطفال</title>
        <meta name="description" content="مركز يقدم دراسة كتابية أرثوذكسية قبطية منهجية للأطفال والنشء من خلال مناهج متدرجة ومنصة رقمية متكاملة" />
        <meta name="keywords" content="مدرسة الكتاب, دراسة كتابية, أطفال, كنيسة قبطية, مناهج تعليمية" />
        <meta property="og:title" content=" أرثوذكسي للدراسات الكتابية للأطفال" />
        <meta property="og:description" content="رحلة متكاملة للدراسة الكتابية عبر مناهج متدرجة ومنصة رقمية حديثة" />
        <meta property="og:locale" content="ar_EG" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />

      </head>
      <body className="font-cairo bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}