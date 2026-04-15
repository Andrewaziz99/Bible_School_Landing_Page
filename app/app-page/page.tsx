"use client";

import React from 'react';
import { PageHero } from "@/components/ui/PageHero";
import AppSection from "@/components/sections/AppSection";
import { useLang } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui";

export default function AppPage() {
  const { t } = useLang();

  const breadcrumbs = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.app'), href: '/app-page' }
  ];

  return (
    <>
      <PageHero 
        title={t('app.heading')} 
        subtitle={t('app.description', ' ')}
        breadcrumbs={breadcrumbs} 
      />
      <div className="py-24 bg-white text-center">
         <div className="container-max">
            <h2 className="text-3xl font-black mb-8 text-slate-800">Download Our App Today</h2>
            <div className="flex justify-center gap-4">
              <Button variant="primary" size="lg">App Store (Coming Soon)</Button>
              <Button variant="secondary" size="lg">Google Play (Coming Soon)</Button>
            </div>
         </div>
      </div>
      <AppSection />
    </>
  );
}
