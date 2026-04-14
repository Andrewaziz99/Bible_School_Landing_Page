// components/sections/CTASection.tsx
"use client";

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import { Button } from '../ui';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';

export const CTASection = () => {
  const { t, dir } = useLang();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="contact-us" className="py-24 bg-white">
      <div className="container-max">
        <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden px-8 py-16 md:p-20 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] translate-y-1/2" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1]">
              {t('cta.heading')}
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
              {t('cta.description')}
            </p>

            <div className="flex flex-wrap gap-5">
              <Button 
                variant="primary" 
                size="lg" 
                href="/contact"
                className="bg-white text-slate-900 hover:bg-slate-100 border-none shadow-xl"
                icon={<ArrowIcon className="w-5 h-5" />}
                iconPosition="end"
              >
                {t('cta.primaryButton')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/contact#demo"
                className="text-white border-slate-700 hover:bg-slate-800"
              >
                {t('cta.secondaryButton')}
              </Button>
            </div>
          </div>

          {/* Icon Decoration */}
          <div className="absolute top-1/2 end-12 -translate-y-1/2 hidden lg:block opacity-10">
             <Mail className="w-64 h-64 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
