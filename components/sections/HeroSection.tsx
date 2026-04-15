// components/sections/HeroSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useLang } from '../providers/LanguageProvider';
import { Badge, Button } from '../ui';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export default function HeroSection() {
  const { t, dir, locale } = useLang();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const stats = [
    { value: t('hero.stats.curricula.value'), label: t('hero.stats.curricula.label') },
    { value: t('hero.stats.audiences.value'), label: t('hero.stats.audiences.label') },
    { value: t('hero.stats.years.value'),     label: t('hero.stats.years.label') },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-white to-amber-50/20 -z-10" />
      
      {/* Animated Decorative Orbs */}
      <div className="absolute top-1/4 start-[-5%] w-[30rem] h-[30rem] bg-teal-400/5 rounded-full blur-[100px] animate-pulse pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 end-[-5%] w-[25rem] h-[25rem] bg-amber-400/5 rounded-full blur-[80px] animate-pulse pointer-events-none -z-10" style={{ animationDelay: '2s' }} />

      <div className="container-max relative z-10 w-full px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-start max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
            <Badge 
              variant="primary" 
              className="mb-6 py-2 px-5 text-sm uppercase tracking-[0.2em] font-black animate-fade-in-up"
            >
              {t('hero.badge')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-slate-900 mb-6 animate-fade-in-up-delay-1">
              {t('hero.heading')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-amber-600">
                {t('hero.headingHighlight')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-10 animate-fade-in-up-delay-2 font-medium">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mb-14 animate-fade-in-up-delay-3">
              <Button 
                variant="primary" 
                size="lg" 
                href="#curricula"
                icon={<ArrowIcon className="w-5 h-5" />}
                iconPosition="end"
                className="px-10 shadow-lg shadow-teal-900/10"
              >
                {t('hero.cta.primary')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="#app"
                className="px-10 border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                {t('hero.cta.secondary')}
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 md:gap-12 w-full pt-8 border-t border-slate-200/60 animate-fade-in-up-delay-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="group">
                  <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-1 transition-transform duration-300 group-hover:scale-110 origin-start">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-fade-in-up-delay-2">
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none">
               {/* Decorative background shapes for the image */}
               <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-[3rem] rotate-6 scale-95" />
               <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-[3rem] -rotate-3 scale-95" />
               
               <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
                  <Image 
                    src="/assets/hero_mockup.png" 
                    alt="App Mockup"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
               </div>

               {/* Floating elements */}
               <div className="absolute -top-6 -end-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce duration-[3s] hidden md:flex">
                  <Sparkles className="w-10 h-10 text-amber-500" />
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 hidden md:flex flex-col items-center gap-2 animate-bounce cursor-pointer group z-20">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-teal-600 transition-colors">
          {t('hero.scrollIndicator')}
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-200 flex justify-center p-1 group-hover:border-teal-400 transition-colors">
           <div className="w-1 h-2 bg-teal-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
