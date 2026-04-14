// components/sections/HeroSection.tsx
"use client";

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import { Badge, Button } from '../ui';
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function HeroSection() {
  const { t, dir } = useLang();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const stats = [
    { value: t('hero.stats.curricula.value'), label: t('hero.stats.curricula.label'), icon: <Sparkles className="w-5 h-5" /> },
    { value: t('hero.stats.audiences.value'), label: t('hero.stats.audiences.label'), icon: <Sparkles className="w-5 h-5" /> },
    { value: t('hero.stats.years.value'),     label: t('hero.stats.years.label'), icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-amber-50/30 -z-10" />
      
      {/* Animated Decorative Orbs */}
      <div className="absolute top-1/4 start-[-10%] w-[40rem] h-[40rem] bg-teal-400/10 rounded-full blur-[120px] animate-pulse pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 end-[-10%] w-[35rem] h-[35rem] bg-amber-400/10 rounded-full blur-[100px] animate-pulse pointer-events-none -z-10" style={{ animationDelay: '2s' }} />

      <div className="container-max relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Badge/Eyebrow */}
          <Badge 
            variant="primary" 
            className="mb-8 py-2 px-5 text-sm uppercase tracking-widest font-black animate-fade-in-up"
          >
            {t('hero.badge')}
          </Badge>

          {/* Main Heading with Display Scale */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-slate-900 mb-8 animate-fade-in-up-delay-1">
            {t('hero.heading')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              {t('hero.headingHighlight')}
            </span>
          </h1>

          {/* Subtitle with refined typography */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 animate-fade-in-up-delay-2 font-medium">
            {t('hero.subtitle')}
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap gap-5 animate-fade-in-up-delay-3">
            <Button 
              variant="primary" 
              size="lg" 
              href="#curricula"
              icon={<ArrowIcon className="w-5 h-5" />}
              iconPosition="end"
              className="px-10 shadow-xl shadow-teal-900/10"
            >
              {t('hero.cta.primary')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="#app"
              className="px-10"
            >
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-20 pt-10 border-t border-slate-200/60 animate-fade-in-up-delay-3">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2 transition-transform duration-300 group-hover:scale-110 origin-start">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-3 animate-bounce cursor-pointer group">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-teal-600 transition-colors">
          {t('hero.scrollIndicator')}
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-200 flex justify-center p-1 group-hover:border-teal-400 transition-colors">
           <div className="w-1 h-2 bg-teal-500 rounded-full animate-wheel" />
        </div>
      </div>
    </section>
  );
}
