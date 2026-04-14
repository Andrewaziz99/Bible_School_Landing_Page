// components/sections/AudienceSection.tsx
"use client";

import React from 'react';
import { useLang } from '../providers/LanguageProvider';
import { SectionHeader, Card, Badge } from '../ui';
import { Church, Users, GraduationCap, CheckCircle2 } from 'lucide-react';
import { audiences } from '@/lib/data/audiences';
import { cn } from '@/lib/utils/cn';

export default function AudienceSection() {
  const { t } = useLang();

  const iconMap: Record<string, any> = {
    Church: Church,
    Users: Users,
    GraduationCap: GraduationCap,
  };

  const colorConfig: Record<string, { bg: string; text: string; light: string }> = {
    teal:   { bg: "bg-teal-600", text: "text-teal-600", light: "bg-teal-50" },
    amber:  { bg: "bg-amber-600", text: "text-amber-600", light: "bg-amber-50" },
    purple: { bg: "bg-purple-600", text: "text-purple-600", light: "bg-purple-50" },
  };

  return (
    <section id="audience" className="py-24 bg-slate-50 relative">
      <div className="container-max">
        <SectionHeader 
          eyebrow={t('audience.eyebrow')}
          heading={t('audience.heading')}
          description={t('audience.subheading')}
          centered
          className="mb-20"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => {
            const Icon = iconMap[audience.icon] || Church;
            const colors = colorConfig[audience.color] || colorConfig.teal;
            
            // Get translated description from i18n since it's a long block
            const description = t(`audience.${audience.id}.description`);
            const translatedFeatures = t(`audience.${audience.id}.features`, { returnObjects: true }) as unknown as string[];

            return (
              <Card 
                key={audience.id}
                variant="elevated"
                hoverEffect="lift"
                className="p-8 flex flex-col h-full border-slate-200/60"
              >
                {/* Icon Header */}
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border-b-4",
                  colors.light,
                  colors.text,
                  `border-${audience.color}-200`
                )}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 mb-4">
                  {t(`audience.${audience.id}.title`)}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                  {description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {Array.isArray(translatedFeatures) && translatedFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 group/feat">
                      <CheckCircle2 className={cn("w-4 h-4 mt-0.5 transition-transform group-hover/feat:scale-125", colors.text)} />
                      <span className="text-sm font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Badge 
                  variant="outline" 
                  className={cn("self-start border-none px-0 font-black tracking-widest text-[10px] uppercase opacity-40", colors.text)}
                >
                   Optimized for {audience.id}
                </Badge>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
