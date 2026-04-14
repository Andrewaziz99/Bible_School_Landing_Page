// components/home/CurriculaSection.tsx
// Section 5: نظرة سريعة على المناهج

"use client";
import { useTranslation } from "../../hooks/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function CurriculaSection() {
  const { t } = useTranslation();

  const curricula = [
    {
      number: "01",
      title: t('curricula.items.bibleCharacters.title'),
      duration: t('curricula.items.bibleCharacters.duration'),
      audience: t('curricula.items.bibleCharacters.audience'),
      description: t('curricula.items.bibleCharacters.description'),
      ageRange: t('curricula.items.bibleCharacters.ageRange'),
      badge: "/assets/badges/4ahed.png",
    },
    {
      number: "02",
      title: t('curricula.items.biblicalConcepts.title'),
      duration: t('curricula.items.biblicalConcepts.duration'),
      audience: t('curricula.items.biblicalConcepts.audience'),
      description: t('curricula.items.biblicalConcepts.description'),
      ageRange: t('curricula.items.biblicalConcepts.ageRange'),
      badge: "/assets/badges/amin.png",
    },
    {
      number: "03",
      title: t('curricula.items.extendedStudy.title'),
      duration: t('curricula.items.extendedStudy.duration'),
      audience: t('curricula.items.extendedStudy.audience'),
      description: t('curricula.items.extendedStudy.description'),
      ageRange: t('curricula.items.extendedStudy.ageRange'),
      badge: "/assets/badges/kof2.png",
    },
    {
      number: "04",
      title: t('curricula.items.servantPrep.title'),
      duration: t('curricula.items.servantPrep.duration'),
      audience: t('curricula.items.servantPrep.audience'),
      description: t('curricula.items.servantPrep.description'),
      ageRange: t('curricula.items.servantPrep.ageRange'),
      badge: "/assets/badges/mo3lm.png",
    },
  ];

  return (
    <section id="curricula" className="section-padding bg-slate-50/80">
      <div className="container-max">

        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t('curricula.eyebrow')}
          </span>
          <h2 className="section-heading heading-accent">{t('curricula.heading')}</h2>
          <p className="section-subheading mt-6">
            {t('curricula.subheading')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {curricula.map((c, index) => (
            <div
              key={c.number}
              className="glass-card group relative overflow-hidden flex flex-col"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.92) 60%, rgba(248,249,250,0.85) 100%)`,
              }}
            >
              {/* Badge background image with overlay */}
              <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-10 filter drop-shadow(0 2px 8px #0008)" aria-hidden="true">
                <Image
                  src={c.badge}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain object-[center_60%]"
                />
              </div>
              {/* Top gradient line */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r
                              from-transparent via-amber-500 to-transparent opacity-60 z-10" />

              {/* Large background number */}
              <div className="absolute -top-4 -right-2 text-8xl font-black text-slate-200/60
                              group-hover:text-teal-100/60 transition-colors duration-300 select-none z-10">
                {c.number}
              </div>

              <div className="relative z-20 flex flex-col flex-1">
                {/* Age badge */}
                <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50
                                  text-teal-700 border border-teal-200 self-start mb-4">
                  {c.ageRange}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {c.title}
                </h3>

                {/* Meta */}
                <div className="flex flex-col gap-1 mb-4 text-xs text-slate-500">
                  <span>⏱ {c.duration}</span>
                  <span>👥 {c.audience}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                  {c.description}
                </p>

                {/* "Know more" link */}
                <Link
                  href={`/curricula#curriculum-${index + 1}`}
                  className="text-teal-400 hover:text-teal-300 text-sm font-medium
                             flex items-center gap-1 group/link transition-colors"
                >
                  <span>{t('common.knowMore')}</span>
                  <span className="group-hover/link:-translate-x-1 rtl:group-hover/link:translate-x-1 transition-transform">{t('common.arabic') === 'العربية' ? '←' : '→'}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button below grid */}
        <div className="text-center mt-12">
          <Link href="/curricula" className="btn-gold">
            {t('curricula.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
