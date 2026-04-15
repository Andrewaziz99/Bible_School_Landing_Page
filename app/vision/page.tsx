"use client";

import React from 'react';
import { PageHero } from "@/components/ui/PageHero";
import { VisionSection } from "@/components/sections/VisionSection";
import { useLang } from "@/components/providers/LanguageProvider";

export default function VisionPage() {
  const { t } = useLang();

  const breadcrumbs = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.vision'), href: '/vision' }
  ];

  return (
    <>
      <PageHero 
        title={t('vision.heading')} 
        subtitle={t('vision.subheading', ' ')}
        breadcrumbs={breadcrumbs} 
      />
      <div className="py-20 bg-white">
        <div className="container-max prose prose-slate">
           {/* Decorative visual timeline/roadmap could be inserted here in the future */}
        </div>
      </div>
      <VisionSection />
    </>
  );
}
