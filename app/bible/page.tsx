import BibleReader from '@/components/bible/BibleReader';
import Header from '@/components/layout/Header';
import { Bible } from '@/lib/bible-types';
import { Metadata } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

export const metadata: Metadata = {
  title: 'Bible Reader | Orthodox Christian Bible School',
  description: 'Search and read the Bible in English (NIV) and Arabic (AVD). Beautiful modern interface with verse search and highlighting.',
};

export const revalidate = 86400; // ISR: revalidate every 24 hours

function getBibleData() {
  try {
    // Read JSON files from public/data directory
    const dataDir = join(process.cwd(), 'public', 'data');
    
    const enPath = join(dataDir, 'bible-en.json');
    const arPath = join(dataDir, 'bible-ar.json');

    const enContent = readFileSync(enPath, 'utf-8');
    const arContent = readFileSync(arPath, 'utf-8');

    const enData = JSON.parse(enContent) as Bible;
    const arData = JSON.parse(arContent) as Bible;

    return {
      en: enData,
      ar: arData,
    };
  } catch (error) {
    console.error('Error reading Bible data files:', error);
    throw new Error('Failed to load Bible data. Ensure bible-en.json and bible-ar.json exist in public/data/');
  }
}

export default function BiblePage() {
  const bibleData = getBibleData();

  return (
    <div className="h-full bg-white overflow-hidden">
      <BibleReader bibleDataByLanguage={bibleData} />
    </div>
  );
}
