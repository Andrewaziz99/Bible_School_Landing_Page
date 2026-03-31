// components/Footer.tsx
// Flutter analogy: A bottom widget that appears on every page

import Link from "next/link";

const quickLinks = [
  { label: "الرئيسية",       href: "/" },
  { label: "من نحن",         href: "/about" },
  { label: "المناهج",        href: "/curricula" },
  { label: "التطبيق",        href: "/app" },
  { label: "الأخبار",        href: "/news" },
  { label: "تواصل معنا",    href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="container-max px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">م</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">المركز الأرثوذكسي</p>
                <p className="text-teal-400 text-xs">للدراسات الكتابية للأطفال</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              رحلة متكاملة للدراسة الكتابية عبر مناهج متدرجة ومنصة رقمية حديثة.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-slate-400">
              {/* 📝 TODO: Replace with actual contact info */}
              <p>📧 example@email.com</p>
              <p>📱 01000000000</p>
              <p>💬 واتساب: 01000000000</p>
            </div>

            {/* Social media icons */}
            <div className="flex gap-3 mt-5">
              {["فيسبوك", "يوتيوب"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-900
                             flex items-center justify-center text-slate-400
                             hover:text-teal-300 transition-all duration-200 text-xs"
                >
                  {social[0]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-6 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} المركز الأرثوذكسي للدراسات الكتابية للأطفال — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
