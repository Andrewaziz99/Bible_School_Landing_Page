// components/sections/VisionSection.tsx
"use client";

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import { SectionHeader, Card, Button } from '../ui';
import { Sparkles, Target, Zap, Waves } from 'lucide-react';

export const VisionSection = () => {
  const { t } = useLang();
  
  // Custom icons for the pillars
  const pillarIcons: Record<number, React.ReactNode> = {
    0: <Zap className="w-8 h-8 text-amber-500" />,
    1: <Target className="w-8 h-8 text-teal-500" />,
    2: <Waves className="w-8 h-8 text-purple-500" />
  };

  const pillars = t('vision.pillars', { returnObjects: true }) as unknown as any[];

  return (
    <section id="vision" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50" />
      
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            eyebrow={t('vision.eyebrow')}
            heading={t('vision.heading')}
            centered
            className="mb-8"
          />
          <p className="text-slate-600 text-xl leading-relaxed mb-16 font-medium">
            {t('vision.description')}
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {Array.isArray(pillars) && pillars.map((p, index) => (
              <Card 
                key={index}
                variant="default"
                hoverEffect="lift"
                className="p-8 flex flex-col items-center text-center bg-white/50 border-slate-200"
              >
                <div className="mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                   {pillarIcons[index] || <Sparkles className="w-8 h-8 text-teal-500" />}
                </div>
                <p className="text-lg font-black text-slate-800 leading-tight">
                  {p.label}
                </p>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="secondary" size="lg" href="/vision">
              {t('vision.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
