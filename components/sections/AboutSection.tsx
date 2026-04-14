// components/sections/AboutSection.tsx
"use client";

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import { SectionHeader, Card } from '../ui';
import { BookOpen, Smartphone, Church, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLang();

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-teal-600" />,
      title: t('about.features.curricula.title'),
      desc: t('about.features.curricula.description'),
    },
    {
      icon: <Smartphone className="w-6 h-6 text-amber-600" />,
      title: t('about.features.platform.title'),
      desc: t('about.features.platform.description'),
    },
    {
      icon: <Church className="w-6 h-6 text-purple-600" />,
      title: t('about.features.church.title'),
      desc: t('about.features.church.description'),
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      title: t('about.features.motivation.title'),
      desc: t('about.features.motivation.description'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container-max">
        <SectionHeader 
          eyebrow={t('about.eyebrow')}
          heading={t('about.heading')}
          centered
          className="mb-20"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -start-4 top-0 w-1 h-full bg-teal-500 rounded-full opacity-20" />
              <h3 className="text-3xl font-black text-slate-900 mb-6">{t('about.whoWeAre.title')}</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {t('about.whoWeAre.description')}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -start-4 top-0 w-1 h-full bg-amber-500 rounded-full opacity-20" />
              <h3 className="text-3xl font-black text-slate-900 mb-6">{t('about.whatWeOffer.title')}</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {t('about.whatWeOffer.description')}
              </p>
            </div>
          </div>

          {/* Feature Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, idx) => (
              <Card 
                key={idx}
                variant="default"
                hoverEffect="lift"
                className="p-8 border-slate-100 bg-slate-50/50 hover:bg-white"
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
