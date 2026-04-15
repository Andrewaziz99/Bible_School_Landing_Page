// components/layout/PageWrapper.tsx
// Client component that triggers a GSAP fade animation on route changes.
'use client';

import React, { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from '@/animations/gsap-config';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [pathname]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
