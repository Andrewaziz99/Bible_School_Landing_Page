"use client";
import { useTranslation } from "../../hooks/useTranslation";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    { value: t('hero.stats.curricula.value'), label: t('hero.stats.curricula.label') },
    { value: t('hero.stats.audiences.value'), label: t('hero.stats.audiences.label') },
    { value: t('hero.stats.years.value'),     label: t('hero.stats.years.label') },
  ];

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
            {t('hero.badge')}
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight
                         text-slate-900 mb-6 animate-fade-in-up-delay-1">
            {t('hero.heading')}
            <br />
            <span className="text-teal-600" style={{ color: "#0D9488" }}>
              {t('hero.headingHighlight')}
            </span>
          </h1>

          {/* Subtitle paragraph */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl
                        mb-10 animate-fade-in-up-delay-2">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons — Flutter: Row of ElevatedButton */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
            <Link href="#curricula" className="btn-primary text-base px-8 py-4">
              <span>{t('hero.cta.primary')}</span>
              <span className="text-teal-300 rtl:rotate-180 transition-transform">←</span>
            </Link>
            <Link href="#app" className="btn-ghost text-base px-8 py-4">
              {t('hero.cta.secondary')}
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-slate-300
                          animate-fade-in-up-delay-3">
            {stats.map((stat) => (
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
          <span className="text-xs">{t('hero.scrollIndicator')}</span>
          <span className="text-lg">↓</span>
        </div>
      </div>
    </section>
  );
}
