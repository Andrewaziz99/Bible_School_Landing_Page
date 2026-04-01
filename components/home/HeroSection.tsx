// components/home/HeroSection.tsx
// 📖 Flutter analogy: A "dumb" widget (StatelessWidget) — no state, just displays content.
// In React, a component with no `useState` is like a StatelessWidget.

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background layers — Flutter: Stack with positioned widgets */}
      <div className="absolute inset-0 bg-hero" />

      {/* Decorative circles — like Container with BoxDecoration */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full
                      bg-teal-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full
                      bg-amber-600/8 blur-3xl pointer-events-none" />

      {/* Gold cross decoration */}
      <div className="absolute top-20 left-8 opacity-5 text-8xl font-thin text-amber-400
                      select-none pointer-events-none hidden lg:block">
        ✛
      </div>

      <div className="container-max relative z-10 py-32 px-4 md:px-8">
        <div className="max-w-4xl">

          {/* Badge/Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                          bg-teal-50 border border-teal-300 text-teal-700 text-sm mb-8
                          animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            أرثوذكسي للدراسات الكتابية
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight
                         text-slate-900 mb-6 animate-fade-in-up-delay-1">
            دراسة كتابية منهجية
            <br />
            <span className="text-teal-600" style={{ color: "#0D9488" }}>
              للأجيال الجديدة
            </span>
          </h1>

          {/* Subtitle paragraph */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl
                        mb-10 animate-fade-in-up-delay-2">
            نقدم محتوى كتابيًا أرثوذكسيًا قبطيًا من خلال مناهج منظمة للأطفال والنشء،
            عبر منصة رقمية تخدم الكنائس والخدام والمخدومين،
            وتسعى إلى تأسيس دراسة منهجية راسخة للكتاب المقدس.
          </p>

          {/* CTA Buttons — Flutter: Row of ElevatedButton */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
            <Link href="#curricula" className="btn-primary text-base px-8 py-4">
              <span>اكتشف المناهج</span>
              <span className="text-teal-300">←</span>
            </Link>
            <Link href="#app" className="btn-ghost text-base px-8 py-4">
              تعرّف على التطبيق
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-slate-300
                          animate-fade-in-up-delay-3">
            {[
              { value: "5",    label: "مناهج تعليمية" },
              { value: "4",    label: "فئات مستهدفة" },
              { value: "11+",  label: "سنة دراسة متدرجة" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-teal-600">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce">
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="text-xs">اكتشف أكثر</span>
          <span className="text-lg">↓</span>
        </div>
      </div>
    </section>
  );
}
