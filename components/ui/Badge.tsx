// components/ui/Badge.tsx
import React from 'react';
import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  variant?: 'default' | 'teal' | 'gold' | 'red' | 'purple' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  icon,
}: BadgeProps) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    teal: 'bg-teal-50 text-teal-700 border-teal-200',
    gold: 'bg-amber-50 text-amber-700 border-amber-200',
    red: 'bg-rose-50 text-rose-700 border-rose-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    outline: 'bg-transparent text-slate-600 border-slate-200',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-bold uppercase tracking-wider border rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="me-1">{icon}</span>}
      {children}
    </span>
  );
};
