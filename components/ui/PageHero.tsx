// components/ui/PageHero.tsx
import React from 'react';
import { cn } from '@/lib/utils/cn';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const PageHero = ({
  title,
  subtitle,
  breadcrumbs,
  centered = true,
  className,
  children,
}: PageHeroProps) => {
  return (
    <section 
      className={cn(
        "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
        "bg-gradient-to-br from-teal-50 via-white to-amber-50",
        className
      )}
    >
      {/* Decorative Orbs */}
      <div className="absolute -top-48 start-[-12rem] w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 end-[-12rem] w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className={cn(
          "flex flex-col",
          centered ? "items-center text-center" : "items-start text-start"
        )}>
          <Breadcrumb items={breadcrumbs} className="mb-8" />
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
            {title}
          </h1>

          {subtitle && (
            <p className="max-w-2xl text-xl text-slate-600 leading-relaxed mb-8">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
