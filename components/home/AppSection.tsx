// components/home/AppSection.tsx
// Section 6: نظرة سريعة على التطبيق

import Link from "next/link";

const features = [
  { icon: "📅", label: "دروس أسبوعية منظمة" },
  { icon: "📝", label: "واجبات وامتحانات" },
  { icon: "⭐", label: "نقاط وشارات تشجيعية" },
  { icon: "🏆", label: "ماراثونات كتابية" },
  { icon: "📊", label: "تقارير ومتابعة" },
  { icon: "📖", label: "كتاب مقدس داخل التطبيق" },
  { icon: "🔔", label: "تواصل وإشعارات" },
  { icon: "🎁", label: "متجر للمكافآت بالنقاط" },
];

export default function AppSection() {
  return (
    <section id="app" className="section-padding">
      <div className="container-max">

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              المنصة الرقمية
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              منصة رقمية تخدم
              <br />
              <span style={{ color: "#F0C040" }}>التعليم والمتابعة</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              إلى جانب المناهج، يقدم المركز تطبيقًا رقميًا متكاملًا يساعد الكنائس
              والخدام والمخدومين على متابعة الدراسة الأسبوعية، والواجبات، والامتحانات،
              والحضور، والنقاط التشجيعية، والتقدم داخل كل منهج.
            </p>

            <Link href="/app" className="btn-primary">
              اكتشف التطبيق
              <span className="text-teal-300">←</span>
            </Link>
          </div>

          {/* Features grid side */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 p-4 rounded-xl
                           bg-slate-900/60 border border-slate-800/50
                           hover:border-teal-800/50 hover:bg-slate-800/40
                           transition-all duration-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {f.icon}
                </span>
                <span className="text-sm text-slate-300 font-medium">{f.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
