"use client";
import { useTranslation } from "../../hooks/useTranslation";

export default function AboutSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "📖",
      title: t('about.features.curricula.title'),
      desc: t('about.features.curricula.description'),
    },
    {
      icon: "📱",
      title: t('about.features.platform.title'),
      desc: t('about.features.platform.description'),
    },
    {
      icon: "⛪",
      title: t('about.features.church.title'),
      desc: t('about.features.church.description'),
    },
    {
      icon: "✨",
      title: t('about.features.motivation.title'),
      desc: t('about.features.motivation.description'),
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50/80">
      <div className="container-max">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t('about.eyebrow')}
          </span>
          <h2 className="section-heading heading-accent">{t('about.heading')}</h2>
        </div>

        {/* Two-column layout — Flutter: Row with two Expanded widgets */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left (RTL: right side) — text */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.whoWeAre.title')}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t('about.whoWeAre.description')}
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.whatWeOffer.title')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.whatWeOffer.description')}
            </p>
          </div>

          {/* Right (RTL: left side) — feature list */}
          <div className="space-y-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200
                           hover:border-teal-300 transition-all duration-200 shadow-sm hover:shadow-teal-100"
              >
                <div className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
