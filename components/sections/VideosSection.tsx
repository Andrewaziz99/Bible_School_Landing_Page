// components/sections/VideosSection.tsx
"use client";

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import { SectionHeader } from '../ui';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export const VideosSection = () => {
  const { t } = useLang();
  
  // We'll move this to data later, but for now we pull from i18n as before
  const videos = t('videos.items', { returnObjects: true }) as unknown as any[];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="container-max relative z-10">
        <SectionHeader 
          eyebrow={t('videos.heading')}
          heading={t('videos.subheading')}
          centered
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(videos) && videos.map((v) => (
            <div
              key={v.key}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-2">
                {/* Placeholder Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-amber-500/5 group-hover:opacity-0 transition-opacity duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>

                <div className="absolute inset-0 border-4 border-transparent group-hover:border-teal-500/10 rounded-3xl transition-all duration-500" />
              </div>
              <h3 className={cn(
                "mt-6 text-center font-bold text-slate-800 transition-colors duration-300 group-hover:text-teal-600",
                v.color // Using the color class from data
              )}>
                {v.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
