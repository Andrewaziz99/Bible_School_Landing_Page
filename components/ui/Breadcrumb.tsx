"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useLang } from '@/components/providers/LanguageProvider';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  className?: string;
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  const { dir } = useLang();
  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium", className)}
    >
      <ol className="flex items-center space-x-2 rtl:space-x-reverse">
        <li>
          <Link 
            href="/" 
            className="text-slate-500 hover:text-teal-600 transition-colors flex items-center"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center">
              <ChevronIcon className="w-4 h-4 text-slate-400 mx-1" />
              {isLast ? (
                <span className="text-teal-600 font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-teal-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
