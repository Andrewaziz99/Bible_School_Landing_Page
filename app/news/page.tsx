"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from "@/components/ui/PageHero";
import { useLang } from "@/components/providers/LanguageProvider";
import { Card, Badge } from "@/components/ui";
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { news } from '@/lib/data/news';

export default function NewsPage() {
  const { t, dir, locale } = useLang();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const breadcrumbs = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.news'), href: '/news' }
  ];

  return (
    <>
      <PageHero 
        title={t('news.heading')} 
        breadcrumbs={breadcrumbs} 
      />
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="group block focus:outline-none h-full">
                <Card 
                  variant="elevated" 
                  hoverEffect="lift"
                  className="flex flex-col p-4 h-full border-none shadow-lg"
                >
                  <div className="aspect-[16/10] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative">
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.title[locale]} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    )}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-teal-50 text-teal-700 border-teal-100 uppercase tracking-tighter">
                      {item.category[locale]}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                    {item.title[locale]}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt[locale]}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-teal-600 inline-flex items-center gap-2">
                       {t('news.readMore')}
                       <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
