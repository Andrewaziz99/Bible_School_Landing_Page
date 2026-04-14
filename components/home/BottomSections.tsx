"use client";
import { useTranslation } from "../../hooks/useTranslation";
import Link from "next/link";

// ── Section 7: Featured Videos ──────────────────────────────────────────────
function VideosSection() {
  const { t } = useTranslation();
  const videos = t('videos.items', { returnObjects: true }) as unknown as any[];

  return (
    <section className="section-padding bg-slate-50/80">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-heading heading-accent">{t('videos.heading')}</h2>
          <p className="section-subheading mt-6">
            {t('videos.subheading')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.isArray(videos) && videos.map((v) => (
            <div
              key={v.key}
              className="glass-card text-center cursor-pointer group
                         hover:border-teal-300 transition-all duration-300"
            >
              <div className="aspect-video bg-slate-100 rounded-xl mb-4 flex items-center
                              justify-center text-4xl group-hover:scale-105 transition-transform">
                <span className="text-5xl">▶</span>
              </div>
              <p className={`text-sm font-medium ${v.color}`}>{v.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 8: News & Updates ────────────────────────────────────────────────
function NewsSection() {
  const { t, locale } = useTranslation();
  const news = t('news.items', { returnObjects: true }) as unknown as any[];

  return (
    <section id="news" className="section-padding bg-white/80">
      <div className="container-max">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
              {t('news.eyebrow')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {t('news.heading')}
            </h2>
          </div>
          <Link href="/news" className="btn-ghost text-sm">
            {t('news.viewAll')}
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.isArray(news) && news.map((item, index) => (
            <article
              key={index}
              className="glass-card group cursor-pointer hover:border-slate-300 flex flex-col"
            >
              <div className="aspect-video bg-slate-100 rounded-xl mb-4
                              group-hover:bg-slate-200 transition-colors" />

              <span className={`text-xs px-3 py-1 rounded-full border self-start mb-3 ${item.color}`}>
                {item.category}
              </span>

              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-600
                             transition-colors leading-snug flex-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-slate-600 mt-auto">
                <span>{item.date}</span>
                <span className="text-teal-600 group-hover:text-teal-700 transition-colors">
                  {t('news.readMore')} {locale === 'ar' ? '←' : '→'}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 9: Future Vision ─────────────────────────────────────────────────
function VisionSection() {
  const { t } = useTranslation();
  const pillars = t('vision.pillars', { returnObjects: true }) as unknown as any[];

  return (
    <section id="vision" className="section-padding bg-slate-50/80">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
            {t('vision.eyebrow')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t('vision.heading')}</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-10">
            {t('vision.description')}
          </p>

          {/* Vision pillars */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {Array.isArray(pillars) && pillars.map((p, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-slate-200 bg-white text-center"
              >
                <div className="text-3xl mb-2">{p.icon}</div>
                <p className="text-sm font-medium text-slate-700">{p.label}</p>
              </div>
            ))}
          </div>

          <Link href="/vision" className="btn-ghost">
            {t('vision.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section 10: Final CTA ─────────────────────────────────────────────────────
function CTASection() {
  const { t } = useTranslation();

  return (
    <section id="contact-us" className="section-padding bg-white/80">
      <div className="container-max">
        {/* Big CTA card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br
                        from-teal-50/80 to-slate-50/80 border border-teal-200 p-12 text-center">
          {/* Decorative blur */}
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full
                          bg-teal-400/8 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full
                          bg-amber-400/5 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('cta.heading')}
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10">
              {t('cta.description')}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                {t('cta.primaryButton')}
              </Link>
              <Link href="/contact#demo" className="btn-gold px-8 py-4 text-base">
                {t('cta.secondaryButton')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NewsSection, VisionSection, CTASection };

export default function BottomSections() {
  return (
    <>
      <VideosSection />
      <NewsSection />
      <VisionSection />
      <CTASection />
    </>
  );
}
