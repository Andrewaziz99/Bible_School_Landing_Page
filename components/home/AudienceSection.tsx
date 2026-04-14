"use client";
import { useTranslation } from "../../hooks/useTranslation";

// Color config — maps color name to Tailwind classes
// Flutter analogy: like a switch/case for Theme colors
const colorConfig: Record<string, { border: string; icon: string; badge: string }> = {
  teal:   { border: "border-teal-200 hover:border-teal-300",   icon: "bg-teal-100 text-teal-700",   badge: "bg-teal-50 text-teal-700 border-teal-200" },
  gold:   { border: "border-amber-200 hover:border-amber-300", icon: "bg-amber-100 text-amber-700", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  crimson:{ border: "border-red-200 hover:border-red-300",     icon: "bg-red-100 text-red-700",     badge: "bg-red-50 text-red-700 border-red-200" },
};

export default function AudienceSection() {
  const { t } = useTranslation();

  const audiences = [
    {
      icon: "⛪",
      title: t('audience.churches.title'),
      color: "teal",
      description: t('audience.churches.description'),
      features: t('audience.churches.features', { returnObjects: true }) as unknown as string[],
    },
    {
      icon: "👨‍🏫",
      title: t('audience.servants.title'),
      color: "gold",
      description: t('audience.servants.description'),
      features: t('audience.servants.features', { returnObjects: true }) as unknown as string[],
    },
    {
      icon: "👧",
      title: t('audience.children.title'),
      color: "crimson",
      description: t('audience.children.description'),
      features: t('audience.children.features', { returnObjects: true }) as unknown as string[],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">

        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t('audience.eyebrow')}
          </span>
          <h2 className="section-heading heading-accent">{t('audience.heading')}</h2>
          <p className="section-subheading mt-6">
            {t('audience.subheading')}
          </p>
        </div>

        {/* 3 Cards Grid — Flutter: Row of 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience) => {
            const colors = colorConfig[audience.color];
            return (
              <div
                key={audience.title}
                className={`glass-card border ${colors.border} flex flex-col`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                                  text-2xl mb-5 ${colors.icon}`}>
                  {audience.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{audience.title}</h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                  {audience.description}
                </p>

                {/* Feature chips — Flutter: Wrap with Chips */}
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(audience.features) && audience.features.map((feature) => (
                    <span
                      key={feature}
                      className={`text-xs px-3 py-1.5 rounded-full border ${colors.badge}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
