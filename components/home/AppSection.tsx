"use client";
import { useTranslation } from "../../hooks/useTranslation";
import Link from "next/link";

export default function AppSection() {
  const { t } = useTranslation();

  const features = [
    { icon: "📅", label: t('app.features.weeklyLessons') },
    { icon: "📝", label: t('app.features.assignments') },
    { icon: "⭐", label: t('app.features.badges') },
    { icon: "🏆", label: t('app.features.marathons') },
    { icon: "📊", label: t('app.features.reports') },
    { icon: "📖", label: t('app.features.bible') },
    { icon: "🔔", label: t('app.features.notifications') },
    { icon: "🎁", label: t('app.features.store') },
  ];

  return (
    <section id="app" className="section-padding bg-white/70">
      <div className="container-max">

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t('app.eyebrow')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {t('app.heading')}
              <br />
              <span style={{ color: "#0D9488" }}>{t('app.headingHighlight')}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t('app.description')}
            </p>

            <Link href="/app" className="btn-primary">
              {t('app.cta')}
              <span className="text-teal-300 rtl:rotate-180 transition-transform">←</span>
            </Link>
          </div>

          {/* Features grid side */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 p-4 rounded-xl
                           bg-slate-50 border border-slate-200
                           hover:border-teal-300 hover:bg-teal-50
                           transition-all duration-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {f.icon}
                </span>
                <span className="text-sm text-slate-700 font-medium">{f.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
