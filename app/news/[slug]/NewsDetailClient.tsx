"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getNewsBySlug } from '@/lib/data/news';
import { useLang } from '@/components/providers/LanguageProvider';
import { PageHero } from '@/components/ui/PageHero';
import { Badge } from '@/components/ui';
import { Calendar, User } from 'lucide-react';

export default function NewsDetailClient({ slug }: { slug: string }) {
  const { t, locale } = useLang();
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.news'), href: '/news' },
    { label: article.category[locale], href: '/news' }
  ];

  return (
    <>
      <PageHero 
        title={article.title[locale]} 
        subtitle={article.excerpt[locale]}
        breadcrumbs={breadcrumbs} 
      />
      
      <section className="py-16 bg-white">
        <div className="container-max max-w-4xl mx-auto">
          {article.image && (
            <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-12 shadow-xl">
               <Image 
                  src={article.image} 
                  alt={article.title[locale]} 
                  fill 
                  className="object-cover" 
               />
            </div>
          )}

          <div className="flex items-center gap-6 mb-12 border-b border-slate-100 pb-8">
             <Badge variant="secondary" className="bg-teal-50 text-teal-700 border-teal-100 uppercase tracking-tighter">
                {article.category[locale]}
             </Badge>
             <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
             </div>
             {article.author && (
               <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
               </div>
             )}
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl leading-relaxed text-slate-700 font-medium">
               {article.body[locale]}
            </p>
            {/* Extended dummy content for aesthetics */}
            <h2 className="text-3xl font-bold mt-12 mb-6">More about this update</h2>
            <p>
              This is a dummy paragraph acting as placeholder for future rich text rendering. 
              The actual implementation will likely parse rich text or markdown from a backend CMS context.
              Using Next.js makes this easy with MDX or portable text renderers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
