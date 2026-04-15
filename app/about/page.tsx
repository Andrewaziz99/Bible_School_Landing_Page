"use client";

import React from 'react';
import { PageHero } from "@/components/ui/PageHero";
import AboutSection from "@/components/sections/AboutSection";
import { useLang } from "@/components/providers/LanguageProvider";

export default function AboutPage() {
  const { t } = useLang();

  const breadcrumbs = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' }
  ];

  return (
    <>
      <PageHero 
        title={t('about.heading')} 
        subtitle={t('about.subheading', ' ')}
        breadcrumbs={breadcrumbs} 
      />
      <div className="py-12 bg-white">
        <div className="container-max prose prose-lg prose-slate max-w-4xl mx-auto">
          {/* Expanded simulated content. In a real application, this would come from a real CMS or localization file */}
          <h2 className="text-3xl font-bold mb-4">{t('about.whoWeAre.title')}</h2>
          <p className="mb-8">{t('about.whoWeAre.description')} {t('about.whoWeAre.description')}</p>
          
          <h2 className="text-3xl font-bold mb-4">{t('about.whatWeOffer.title')}</h2>
          <p className="mb-12">{t('about.whatWeOffer.description')}</p>
        </div>
      </div>
      <AboutSection />
    </>
  );
}
