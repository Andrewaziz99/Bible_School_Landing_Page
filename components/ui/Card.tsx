// components/ui/Card.tsx
import React from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  variant?: 'default' | 'glass' | 'feature' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  accentColor?: 'teal' | 'gold' | 'crimson' | 'none';
  hoverable?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  variant = 'default',
  padding = 'md',
  accentColor = 'none',
  hoverable = false,
  children,
  className,
}: CardProps) => {
  const variants = {
    default: 'bg-white border border-slate-200 shadow-sm',
    glass: 'bg-white/60 backdrop-blur-xl border border-white/30 shadow-sm',
    feature: 'bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm',
    elevated: 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const accents = {
    teal: 'border-t-4 border-t-teal-500',
    gold: 'border-t-4 border-t-amber-500',
    crimson: 'border-t-4 border-t-rose-600',
    none: '',
  };

  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        variants[variant],
        paddings[padding],
        accents[accentColor],
        hoverable && 'hover:-translate-y-1 hover:shadow-lg hover:border-slate-300',
        className
      )}
    >
      {children}
    </div>
  );
};
