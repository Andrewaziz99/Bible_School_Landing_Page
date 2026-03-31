// components/home/BottomSections.tsx
// Sections 7-10: Videos, News, Vision, CTA
// These are grouped together since they're smaller sections.

import Link from "next/link";

// ── Section 7: Featured Videos ──────────────────────────────────────────────
function VideosSection() {
  const videos = [
    { title: "فيديو تعريفي بالمركز",      icon: "🎬", color: "text-teal-400" },
    { title: "فيديو شرح للتطبيق",         icon: "📱", color: "text-amber-400" },
    { title: "فيديو رسالة تشجيعية",       icon: "💛", color: "text-yellow-400" },
    { title: "فيديو عن الرؤية المستقبلية", icon: "🔭", color: "text-purple-400" },
  ];

  return (
    <section className="section-padding bg-slate-900/20">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="section-heading heading-accent">فيديوهات تعريفية وتشجيعية</h2>
          <p className="section-subheading mt-6">
            شاهد فيديوهات تعرفك أكثر على الخدمة، وتشرح فكرة التطبيق، وتقدم رسائل روحية
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videos.map((v) => (
            <div
              key={v.title}
              className="glass-card text-center cursor-pointer group
                         hover:border-teal-700/60 transition-all duration-300"
            >
              {/* Fake video thumbnail placeholder */}
              <div className="aspect-video bg-slate-800/60 rounded-xl mb-4 flex items-center
                              justify-center text-4xl group-hover:scale-105 transition-transform">
                {/* 
                  📝 TODO: Replace this with an actual <iframe> or <video> tag.
                  Example with YouTube:
                  <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    className="w-full h-full rounded-xl"
                    allowFullScreen
                  />
                */}
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
  // 📝 TODO: In production, fetch these from your Firebase Firestore or API
  // Flutter analogy: this is like a hard-coded list that you'd replace with
  // a FutureBuilder() or StreamBuilder() later
  const news = [
    {
      category: "تحديثات التطبيق",
      title: "تحديثات جديدة في تجربة التطبيق",
      excerpt: "نعمل على تطوير تجربة التطبيق باستمرار بما يدعم الدراسة والمتابعة والتنظيم بصورة أفضل.",
      date: "مارس ٢٠٢٥",
      color: "bg-teal-950/60 text-teal-300 border-teal-800/50",
    },
    {
      category: "المناهج",
      title: "إضافة جديدة إلى المحتوى التعليمي",
      excerpt: "توسيع مستمر للمحتوى المقدم بما يخدم المراحل المختلفة للأطفال والنشء.",
      date: "فبراير ٢٠٢٥",
      color: "bg-amber-950/60 text-amber-300 border-amber-800/50",
    },
    {
      category: "جديد المركز",
      title: "خطوات مستقبلية في التطوير",
      excerpt: "نواصل العمل على توسيع أثر الخدمة وتقديم أدوات تعليمية رقمية أكثر قوة وتنظيمًا.",
      date: "يناير ٢٠٢٥",
      color: "bg-purple-950/60 text-purple-300 border-purple-800/50",
    },
  ];

  return (
    <section id="news" className="section-padding">
      <div className="container-max">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              آخر الأخبار
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              الأخبار والتحديثات
            </h2>
          </div>
          <Link href="/news" className="btn-ghost text-sm">
            عرض جميع التحديثات
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.title}
              className="glass-card group cursor-pointer hover:border-slate-600/60 flex flex-col"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-slate-800/60 rounded-xl mb-4
                              group-hover:bg-slate-700/60 transition-colors" />

              {/* Category badge */}
              <span className={`text-xs px-3 py-1 rounded-full border self-start mb-3 ${item.color}`}>
                {item.category}
              </span>

              <h3 className="font-bold text-white mb-2 group-hover:text-teal-300
                             transition-colors leading-snug flex-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-slate-600 mt-auto">
                <span>{item.date}</span>
                <span className="text-teal-500 group-hover:text-teal-400 transition-colors">
                  اقرأ المزيد ←
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
  return (
    <section id="vision" className="section-padding bg-slate-900/30">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
            نظرة إلى الأمام
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">رؤيتنا للمستقبل</h2>
          <p className="text-slate-400 leading-relaxed text-lg mb-10">
            نسعى إلى بناء مسار كتابي متكامل وطويل المدى يخدم الأطفال والشباب داخل الكنيسة،
            مع تطوير مستمر للمناهج، وتوسيع نطاق الخدمة، وإضافة أدوات رقمية تساعد على التعلم
            والمتابعة والنمو الروحي بشكل أعمق وأكثر تأثيرًا.
          </p>

          {/* Vision pillars */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: "📚", label: "تطوير المناهج الحالية" },
              { icon: "🌐", label: "إضافة مناهج وبرامج جديدة" },
              { icon: "🏛", label: "التوسع للألحان والقبطي والطقس" },
            ].map((p) => (
              <div
                key={p.label}
                className="p-5 rounded-xl border border-slate-700/50 bg-slate-900/40 text-center"
              >
                <div className="text-3xl mb-2">{p.icon}</div>
                <p className="text-sm font-medium text-slate-300">{p.label}</p>
              </div>
            ))}
          </div>

          <Link href="/vision" className="btn-ghost">
            اعرف أكثر عن رؤيتنا
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Section 10: Final CTA ─────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="contact-us" className="section-padding">
      <div className="container-max">
        {/* Big CTA card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br
                        from-teal-900/50 to-slate-900/80 border border-teal-700/40 p-12 text-center">
          {/* Decorative blur */}
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full
                          bg-teal-600/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full
                          bg-amber-600/8 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هل ترغب في التعرف أكثر أو بدء التواصل معنا؟
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              إذا كنت تمثل كنيسة، أو ترغب في معرفة المزيد عن المركز، يسعدنا تواصلك معنا.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                تواصل معنا
              </Link>
              <Link href="/contact#demo" className="btn-gold px-8 py-4 text-base">
                اطلب عرضًا تعريفيًا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Export all bottom sections as one component ─────────────────────────────
// Flutter analogy: A Column widget containing multiple child sections
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
