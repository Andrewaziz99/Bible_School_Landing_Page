// components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useLang } from "../providers/LanguageProvider";
import { cn } from "@/lib/utils/cn";
import { Button } from "../ui";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  { labelKey: "nav.home",      href: "/" },
  { labelKey: "nav.bible",     href: "/bible" },
  { labelKey: "nav.about",     href: "/about" },
  { labelKey: "nav.curricula", href: "/curricula" },
  { labelKey: "nav.app",       href: "/app-page" },
  { labelKey: "nav.news",      href: "/news" },
  { labelKey: "nav.vision",    href: "/vision" },
  { labelKey: "nav.contact",   href: "/contact-us" },
];

// Split for symmetric layout
const leftNavItems = navItems.slice(0, 4);
const rightNavItems = navItems.slice(4);

export default function Header() {
  const { t } = useLang();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        className={cn(
          "relative px-4 py-2 text-sm font-bold tracking-wide transition-colors duration-200 uppercase",
          isActive 
            ? "text-teal-600" 
            : "text-slate-600 hover:text-teal-600"
        )}
      >
        {t(item.labelKey)}
        {isActive && (
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-600 rounded-full" />
        )}
      </Link>
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-2"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container-max flex items-center justify-between">
          
          {/* Mobile Menu Toggle (Start) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-600 hover:text-teal-600 hover:bg-slate-50 transition-colors"
              aria-label={t('common.menu')}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse flex-1 justify-end">
            {leftNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Logo (Center) */}
          <div className="flex-shrink-0 mx-8">
            <Link href="/" className="flex flex-col items-center group">
              <div className={cn(
                "relative transition-all duration-500 rounded-2xl bg-white shadow-xl shadow-teal-900/5 border border-slate-100 flex items-center justify-center overflow-hidden",
                isScrolled ? "w-12 h-12 md:w-14 md:h-14" : "w-16 h-16 md:w-20 md:h-20"
              )}>
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              <div className={cn(
                "mt-2 text-center transition-all duration-500 overflow-hidden",
                isScrolled ? "h-0 opacity-0 -translate-y-2" : "h-auto opacity-100 translate-y-0"
              )}>
                <span className="block text-slate-900 font-black text-xl leading-none">
                   {t('common.brandName')}
                </span>
                <span className="block text-teal-600 text-xs font-bold uppercase tracking-widest mt-1">
                   {t('common.tagline')}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse flex-1">
            {rightNavItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Actions (End) */}
          <div className="flex items-center gap-2 md:gap-4 flex-1 lg:flex-none justify-end">
             <div className="hidden sm:block">
                <LanguageSwitcher />
             </div>
             <Button variant="secondary" size="sm" className="hidden sm:flex" href="/contact-us">
                {t('common.contactUs')}
             </Button>
             
             {/* Mobile Globe (visible only on mobile) */}
             <div className="sm:hidden">
               <LanguageSwitcher />
             </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navItems={navItems}
      />
    </>
  );
}
