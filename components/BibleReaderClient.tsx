'use client';

import { Bible } from '@/lib/bible-types';
import BibleReader from './BibleReader/BibleReader';
import { useLang } from './LanguageProvider';
import { Suspense, useState, useEffect } from 'react';

interface BibleReaderClientProps {
  bibleData: {
    en: Bible;
    ar: Bible;
  };
}

function BibleLoadingSkeleton() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#e2e8f0' }}>
      📖 Loading Bible Reader...
    </div>
  );
}

export default function BibleReaderClient({ bibleData }: BibleReaderClientProps) {
  const [mounted, setMounted] = useState(false);
  const { locale } = useLang();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BibleLoadingSkeleton />;
  }

  return (
    <Suspense fallback={<BibleLoadingSkeleton />}>
      <BibleReader bibleDataByLanguage={bibleData} initialLanguage={locale} />
    </Suspense>
  );
}
