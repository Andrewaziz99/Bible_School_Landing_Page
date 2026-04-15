"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { getCurriculumBySlug } from '@/lib/data/curricula';
import { useLang } from '@/components/providers/LanguageProvider';
import { PageHero } from '@/components/ui/PageHero';

export default function CurriculumDetailClient({ slug }: { slug: string }) {
  const { t, locale } = useLang();
  const curriculum = getCurriculumBySlug(slug);

  if (!curriculum) {
    notFound();
  }

  const breadcrumbs = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.curricula'), href: '/curricula' },
    { label: curriculum.title[locale], href: `/curricula/${slug}` }
  ];

  return (
    <>
      <PageHero 
        title={curriculum.title[locale]} 
        subtitle={curriculum.description[locale]}
        breadcrumbs={breadcrumbs} 
      />
      
      <section className="py-16 bg-white">
        <div className="container-max prose prose-lg prose-slate max-w-4xl mx-auto">
          <h2>{t('curricula.details', 'تفاصيل المنهج')}</h2>
          <div className="grid grid-cols-2 gap-4 mb-8 not-prose">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block text-sm text-slate-500 mb-1">{t('curricula.duration', 'المدة')}</span>
              <span className="font-bold">{curriculum.duration[locale]}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block text-sm text-slate-500 mb-1">{t('curricula.audience', 'الفئة المستهدفة')}</span>
              <span className="font-bold">{curriculum.audience[locale]}</span>
            </div>
          </div>
          
          <h3>{t('curricula.content', 'المحتوى الدراسي')}</h3>
          {curriculum.fullContent ? (
            <p>{curriculum.fullContent[locale]}</p>
          ) : (
            <p>{curriculum.description[locale]}</p>
          )}
        </div>
      </section>
    </>
  );
}
