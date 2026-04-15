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

const leftNavItems = navItems.slice(0, 4);
// Exclude Contact (index 7) from desktop text links since it has a dedicated CTA button
const rightNavItems = navItems.slice(4, 7);

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
          "relative px-2 xl:px-4 py-2 text-[13px] xl:text-sm font-bold tracking-wide transition-all duration-200 uppercase whitespace-nowrap rounded-lg",
          isActive 
            ? "text-teal-600 bg-teal-50/50" 
            : "text-slate-600 hover:text-teal-600 hover:bg-slate-50/80"
        )}
      >
        {t(item.labelKey)}
        {isActive && (
          <span className="absolute -bottom-1 left-3 right-3 h-[3px] bg-teal-600 rounded-full" />
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
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-2"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container-max flex items-center justify-between relative">
          
          {/* Section 1: Mobile Logo & Desktop Left Nav */}
          <div className="flex flex-1 items-center justify-start">
             {/* Logo visible ONLY on Mobile, positioned at the start */}
             <div className="lg:hidden flex-shrink-0">
               <Link href="/" className="flex items-center gap-3">
                  <div className={cn(
                    "relative transition-all duration-500 rounded-xl bg-white shadow-md shadow-teal-900/5 border border-slate-100 flex items-center justify-center overflow-hidden",
                    isScrolled ? "w-10 h-10" : "w-12 h-12"
                  )}>
                    <Image src="/assets/logo.png" alt="Logo" fill className="object-contain p-1.5" priority />
                  </div>
                  {/* Brand text for mobile */}
                  <div className={cn(
                    "flex flex-col transition-all duration-300", 
                    isScrolled ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
                  )}>
                    <span className="block text-slate-900 font-extrabold text-sm leading-none">
                       {t('common.brandName')}
                    </span>
                  </div>
               </Link>
             </div>

             {/* Desktop Left Nav */}
             <nav className="hidden lg:flex items-center gap-1 rtl:space-x-reverse">
                {leftNavItems.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
             </nav>
          </div>

          {/* Section 2: Relative Center Logo for Desktop */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 px-8 z-10">
             <Link href="/" className="flex flex-col items-center group relative pb-1">
                {/* Logo Image */}
                <div className={cn(
                  "relative transition-all duration-500 rounded-2xl bg-white shadow-xl shadow-teal-900/5 border border-slate-100 flex items-center justify-center overflow-hidden z-10",
                  isScrolled ? "w-12 h-12 md:w-14 md:h-14" : "w-16 h-16 md:w-18 md:h-18"
                )}>
                  <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                {/* Absolute Logo Text (Drops perfectly below the centerline) */}
                <div className={cn(
                  "absolute top-[calc(100%+0.5rem)] w-max text-center transition-all duration-500",
                  isScrolled ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
                )}>
                  <span className="block text-slate-900 font-black text-base leading-[1.2]">
                     {t('common.brandName')}
                  </span>
                  <span className="block text-teal-600 text-[9px] font-bold uppercase tracking-widest mt-0.5">
                     {t('common.tagline')}
                  </span>
                </div>
              </Link>
          </div>

          {/* Section 3: Desktop Right Nav & Actions */}
          <div className="flex flex-1 items-center justify-end gap-3 lg:gap-5">
            {/* Desktop Right Nav (excluding Contact text link) */}
            <nav className="hidden lg:flex items-center gap-1 rtl:space-x-reverse">
              {rightNavItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </nav>
            
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3 border-s border-slate-200/60 ps-4 lg:ps-6">
               <LanguageSwitcher />
               <Button variant="primary" size="sm" href="/contact-us" className="whitespace-nowrap text-[13px] px-5 py-2 shadow-teal-500/20">
                  {t('common.contactUs')}
               </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
               onClick={() => setIsMobileMenuOpen(true)}
               className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-teal-600 hover:bg-slate-100 transition-all active:scale-90"
               aria-label={t('common.menu')}
             >
               <Menu className="w-7 h-7" />
            </button>
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
