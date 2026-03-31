"use client";
// components/Header.tsx
// 📖 Flutter analogy: This is like AppBar() but smarter — it sticks to the top
//    and changes style when you scroll. "use client" means it runs in the browser.
//    In Flutter terms: it has state (isScrolled, isMenuOpen).

import { useState, useEffect } from "react";
import { useLang } from "../components/LanguageProvider";
import Link from "next/link"; // Flutter analogy: like Navigator.pushNamed()

const navItems = [
  { label: "الرئيسية",           href: "/" },
  { label: "الكتاب المقدس",      href: "/bible" },
  { label: "من نحن",             href: "#about" },
  { label: "المناهج",            href: "#curricula" },
  { label: "التطبيق",            href: "#app" },
  { label: "الأخبار",            href: "#news" },
  { label: "رؤيتنا للمستقبل",   href: "#vision" },
  { label: "تواصل معنا",         href: "#contact-us" },
];

export default function Header() {
  const { locale, setLocale } = useLang();
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
          ? "bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-800/80 backdrop-blur-xl border-b border-teal-400/60 shadow-2xl"
          : "bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-transparent"
      }`}
      style={{
        boxShadow: isScrolled
          ? '0 8px 32px 0 rgba(20,184,166,0.10), 0 2px 24px 0 rgba(20,184,166,0.10)'
          : '0 2px 24px 0 rgba(20,184,166,0.08)',
        borderBottom: isScrolled ? '0.5px solid #2dd4bf' : 'none',
      }}
    >
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-2 md:px-6 whitespace-nowrap overflow-x-auto">
        {/* Language Switcher */}
        <div className="absolute left-4 top-4 flex gap-2 z-40">
          <button
            className={`px-3 py-1 rounded-lg text-sm font-bold ${locale === 'ar' ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-300'}`}
            onClick={() => setLocale('ar')}
          >
            العربية
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm font-bold ${locale === 'en' ? 'bg-teal-600 text-white' : 'bg-slate-800 text-slate-300'}`}
            onClick={() => setLocale('en')}
          >
            English
          </button>
        </div>

        {/* Logo + Name — Flutter: Row with Icon + Text */}
        <Link href="/" className="flex items-center gap-3 group min-w-0">
          {/* Smaller logo for better fit */}
          <div className="w-12 h-12 md:w-16 md:h-16 p-1 md:p-2 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-teal-400/60 flex items-center justify-center overflow-hidden shadow-xl shadow-teal-900/30 group-hover:scale-105 transition-transform duration-300 relative">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 2px 8px #14B8A6AA)' }}
            />
          </div>
          <div className="hidden sm:block text-right min-w-0">
            <p className="text-white font-bold text-lg md:text-xl tracking-wide leading-tight drop-shadow-md truncate" style={{fontFamily: 'var(--font-sultan-ruqah)'}}>المركز الأرثوذكسي</p>
            <p className="text-gold text-sm md:text-lg leading-tight font-semibold drop-shadow-md truncate">للدراسات الكتابية للأطفال</p>
          </div>
        </Link>

        {/* Desktop Navigation — Flutter: Row of TextButtons */}
        <nav className="hidden lg:flex items-center gap-1 flex-nowrap overflow-x-auto">
          {navItems.map((item) => (
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-base font-bold text-slate-100 hover:text-gold rounded-lg hover:bg-teal-900/40 transition-all duration-200 shadow-sm hover:shadow-gold/30 tracking-wide border border-transparent hover:border-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40 whitespace-nowrap"
                onClick={e => {
                  e.preventDefault();
                  const el = document.querySelector(item.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-base font-bold text-slate-100 hover:text-gold rounded-lg hover:bg-teal-900/40 transition-all duration-200 shadow-sm hover:shadow-gold/30 tracking-wide border border-transparent hover:border-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40 whitespace-nowrap"
              >
                {item.label}
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
            تواصل معنا
          </a>

          {/* Hamburger button — only visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white
                       hover:bg-slate-800 transition-colors"
            aria-label="فتح القائمة"
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
        <div className="lg:hidden bg-gradient-to-b from-slate-950/98 via-slate-900/95 to-slate-800/90 backdrop-blur-xl border-t border-teal-700/40 px-4 py-6 rounded-b-3xl shadow-2xl">
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
                className="block px-4 py-3 text-lg font-semibold text-slate-200 hover:text-gold hover:bg-slate-800/60 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-gold/30"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-lg font-semibold text-slate-200 hover:text-gold hover:bg-slate-800/60 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-gold/30"
              >
                {item.label}
              </Link>
            )
          ))}
          <div className="mt-6 px-4">
            <a
              href="#contact-us"
              className="btn-gold w-full justify-center text-lg py-3 shadow-md hover:shadow-gold/40"
              onClick={e => {
                e.preventDefault();
                setIsMenuOpen(false);
                const el = document.querySelector('#contact-us');
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              تواصل معنا
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
