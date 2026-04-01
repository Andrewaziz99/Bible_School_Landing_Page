// components/home/AboutSection.tsx
// Section 3: من نحن / ماذا نقدم

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-slate-50/80">
      <div className="container-max">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 block">
            تعرّف علينا
          </span>
          <h2 className="section-heading heading-accent">من نحن / ماذا نقدم</h2>
        </div>

        {/* Two-column layout — Flutter: Row with two Expanded widgets */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left (RTL: right side) — text */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">من نحن</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              أرثوذكسي للدراسات الكتابية للأطفال هو مبادرة تعليمية كتابية
              تهدف إلى تقديم دراسة منظمة وعميقة ومناسبة للأطفال والنشء حتى المرحلة
              الثانوية داخل الكنيسة، من خلال مناهج متدرجة ومنصة رقمية حديثة.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">ماذا نقدم</h3>
            <p className="text-slate-600 leading-relaxed">
              نقدم مسارًا متكاملًا يشمل مناهج كتابية متعددة المراحل، وتطبيقًا يخدم
              الأطفال والخدام وإدارة الكنائس، مع أدوات للمتابعة والواجبات والامتحانات
              والتشجيع الروحي والتحفيز المستمر.
            </p>
          </div>

          {/* Right (RTL: left side) — feature list */}
          <div className="space-y-4">
            {[
              {
                icon: "📖",
                title: "مناهج متدرجة",
                desc: "5 مناهج مصممة لتناسب المراحل العمرية المختلفة من الحضانة حتى الثانوي",
              },
              {
                icon: "📱",
                title: "منصة رقمية متكاملة",
                desc: "تطبيق يربط الكنائس والخدام والمخدومين في تجربة تعليمية واحدة",
              },
              {
                icon: "⛪",
                title: "خدمة الكنيسة",
                desc: "أدوات عملية تساعد الكنائس والخدام على تقديم دراسة أكثر تنظيمًا",
              },
              {
                icon: "✨",
                title: "تحفيز وتشجيع",
                desc: "نقاط وشارات وماراثونات تجعل الدراسة الكتابية تجربة ممتعة وتفاعلية",
              },
            ].map((item) => (
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
