// components/ui/SectionHeader.tsx
import React from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  eyebrow?: string;           // Small label above heading
  heading: string;
  subheading?: string;
  alignment?: 'center' | 'start';
  showAccent?: boolean;       // Gold decorative line
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  heading,
  subheading,
  alignment = 'center',
  showAccent = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col',
        alignment === 'center' ? 'items-center text-center' : 'items-start text-start',
        className
      )}
    >
      {eyebrow && (
        <span className="text-teal-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
        {heading}
      </h2>

      {showAccent && (
        <div 
          className={cn(
            "h-1.5 w-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full my-6",
            alignment === 'center' ? "mx-auto" : ""
          )} 
        />
      )}

      {subheading && (
        <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
};
