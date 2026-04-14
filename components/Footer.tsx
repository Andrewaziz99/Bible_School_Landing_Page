"use client";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";

const quickLinks = [
  { labelKey: "nav.home",       href: "/" },
  { labelKey: "nav.about",      href: "/about" },
  { labelKey: "nav.curricula",  href: "/curricula" },
  { labelKey: "nav.app",        href: "/app" },
  { labelKey: "nav.news",       href: "/news" },
  { labelKey: "nav.contact",    href: "/contact" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="container-max px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{t('footer.brand.name').charAt(0)}</span>
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">{t('footer.brand.name')}</p>
                <p className="text-teal-600 text-xs">{t('footer.brand.tagline')}</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('footer.brand.description')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-teal-600 text-sm transition-colors"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">{t('footer.contactUs')}</h4>
            <div className="space-y-3 text-sm text-slate-600">
              <p>📧 {t('footer.email')}</p>
              <p>📱 {t('footer.phone')}</p>
              <p>💬 {t('footer.whatsapp')}</p>
            </div>

            {/* Social media icons — Placeholder for now as per design */}
            <div className="flex gap-3 mt-5">
              {["FB", "YT"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-900
                             flex items-center justify-center text-slate-400
                             hover:text-teal-300 transition-all duration-200 text-xs font-bold"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-6 text-center text-slate-600 text-xs">
          {t('footer.copyright', { year: new Date().getFullYear().toString() })}
        </div>
      </div>
    </footer>
  );
}
