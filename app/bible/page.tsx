import { Bible } from '@/lib/bible-types';
import BibleReaderClient from '@/components/BibleReaderClient';
import { Metadata } from 'next';

// ✅ Static imports - best for Next.js, enables optimizations
import bibleEnData from '@/public/data/bible-en.json';
import bibleArData from '@/public/data/bible-ar.json';

export const metadata: Metadata = {
  title: 'Bible Reader | Orthodox Christian Bible School',
  description: 'Search and read the Bible in English (NIV) and Arabic (AVD). Beautiful modern interface with verse search and highlighting.',
};

export const revalidate = 86400; // ISR: revalidate every 24 hours

export default function BiblePage() {
  const bibleData = {
    en: bibleEnData as Bible,
    ar: bibleArData as Bible,
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <BibleReaderClient bibleData={bibleData} />
    </main>
  );
}
