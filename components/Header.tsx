"use client";
// components/Header.tsx
// 📖 Flutter analogy: This is like AppBar() but smarter — it sticks to the top
//    and changes style when you scroll. "use client" means it runs in the browser.
//    In Flutter terms: it has state (isScrolled, isMenuOpen).

"use client";

import { useState, useEffect } from "react";
import { useLang } from "../components/providers/LanguageProvider";
import Link from "next/link"; // Flutter analogy: like Navigator.pushNamed()
import Image from "next/image";

const navItems = [
  { labelKey: "nav.home",      href: "/" },
  { labelKey: "nav.bible",     href: "/bible" },
  { labelKey: "nav.about",     href: "/about" },
  { labelKey: "nav.curricula", href: "/curricula" },
  { labelKey: "nav.app",       href: "/app" },
  { labelKey: "nav.news",      href: "/news" },
  { labelKey: "nav.vision",    href: "/vision" },
  { labelKey: "nav.contact",   href: "/contact-us" },
];

export default function Header() {
  const { t, locale, setLocale } = useLang();
  // Flutter analogy: useState is like late bool _isScrolled = false;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Flutter analogy: useEffect is like initState() + dispose()
  // This listens to scroll events and cleans up when the component unmounts
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup = dispose()
  }, []); // [] = runs once on mount, like initState()

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-white/90 via-white/85 to-slate-50/80 backdrop-blur-xl border-b border-teal-400/20 shadow-md"
          : "bg-gradient-to-b from-white/70 via-white/50 to-transparent"
      }`}
      style={{
        boxShadow: isScrolled
          ? '0 4px 16px 0 rgba(13,148,136,0.08), 0 2px 12px 0 rgba(13,148,136,0.06)'
          : '0 2px 8px 0 rgba(13,148,136,0.04)',
        borderBottom: isScrolled ? '0.5px solid #d1fae5' : 'none',
      }}
    >
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-2 md:px-6 whitespace-nowrap overflow-x-auto">
        {/* Language Switcher */}
        <div className="absolute left-4 top-4 flex gap-2 z-40">
          <button
            className={`px-3 py-1 rounded-lg text-sm font-bold ${locale === 'ar' ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-600'}`}
            onClick={() => setLocale('ar')}
          >
            {t('common.arabic')}
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm font-bold ${locale === 'en' ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-600'}`}
            onClick={() => setLocale('en')}
          >
            {t('common.english')}
          </button>
        </div>

        {/* Logo + Name — Flutter: Row with Icon + Text */}
        <Link href="/" className="flex items-center gap-3 group min-w-0">
          {/* Smaller logo for better fit */}
          <div className="w-12 h-12 md:w-16 md:h-16 p-1 md:p-2 rounded-2xl bg-teal-50 backdrop-blur-md border-2 border-teal-300 flex items-center justify-center overflow-hidden shadow-md shadow-teal-200/50 group-hover:scale-105 transition-transform duration-300 relative">
            <Image
              src="/assets/logo.png"
              alt={`${t('footer.brand.name')} Logo`}
              width={64}
              height={64}
              priority
              className="object-contain drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 2px 8px #0D9488AA)' }}
            />
          </div>
          <div className="hidden sm:block text-right min-w-0">
            <p className="text-slate-900 font-bold text-lg md:text-xl tracking-wide leading-tight drop-shadow-sm truncate" style={{fontFamily: 'var(--font-sultan-ruqah)'}}>{t('footer.brand.name')}</p>
            <p className="text-teal-600 text-sm md:text-lg leading-tight font-semibold drop-shadow-sm truncate">{t('footer.brand.tagline')}</p>
          </div>
        </Link>

        {/* Desktop Navigation — Flutter: Row of TextButtons */}
        <nav className="hidden lg:flex items-center gap-1 flex-nowrap overflow-x-auto">
          {navItems.map((item) => (
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-base font-bold text-slate-700 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all duration-200 shadow-sm hover:shadow-teal-200/40 tracking-wide border border-transparent hover:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 whitespace-nowrap"
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector(item.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t(item.labelKey)}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-base font-bold text-slate-700 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all duration-200 shadow-sm hover:shadow-teal-200/40 tracking-wide border border-transparent hover:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 whitespace-nowrap"
              >
                {t(item.labelKey)}
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button + Mobile menu toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact-us"
            className="btn-gold hidden sm:inline-flex text-base px-6 py-3 shadow-md hover:shadow-gold/40"
            onClick={e => {
              e.preventDefault();
              const el = document.querySelector('#contact-us');
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t('common.contactUs')}
          </a>

          {/* Hamburger button — only visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-teal-600
                       hover:bg-teal-50 transition-colors"
            aria-label={t('common.menu')}
          >
            {/* Simple hamburger icon using divs */}
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer — Flutter: AnimatedContainer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white/98 via-slate-50/95 to-slate-100/90 backdrop-blur-xl border-t border-teal-200 px-4 py-6 rounded-b-3xl shadow-lg">
          {navItems.map((item) => (
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const el = document.querySelector(item.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="block px-4 py-3 text-lg font-semibold text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-teal-200/30"
              >
                {t(item.labelKey)}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-teal-200/30"
              >
                {t(item.labelKey)}
              </Link>
            )
          ))}
          <div className="mt-6 px-4">
            <a
              href="#contact-us"
              className="btn-gold w-full justify-center text-lg py-3 shadow-md hover:shadow-teal-200/40"
              onClick={e => {
                e.preventDefault();
                setIsMenuOpen(false);
                const el = document.querySelector('#contact-us');
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t('common.contactUs')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
