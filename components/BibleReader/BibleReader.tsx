'use client';

import { Bible } from '@/lib/bible-types';
import { useBibleSearch } from '@/hooks/useBibleSearch';
import BibleSidebar from './BibleSidebar';
import BibleContent from './BibleContent';
import styles from './BibleReader.module.css';

interface BibleReaderProps {
  bibleDataByLanguage: {
    en: Bible;
    ar: Bible;
  };
  initialLanguage?: 'en' | 'ar';
}

export default function BibleReader({ bibleDataByLanguage, initialLanguage = 'ar' }: BibleReaderProps) {
  const {
    language,
    selectedBookNumber,
    selectedChapter,
    searchTerm,
    searchResults,
    currentBook,
    currentChapter,
    availableChapters,
    allBooks,
    handleSelectBook,
    handleSelectChapter,
    handleSearch,
    handleToggleLanguage,
    handleClearSearch,
  } = useBibleSearch({
    bibleDataByLanguage,
    initialLanguage,
  });

  return (
    <div
      className={styles.bibleContainer}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <BibleSidebar
        language={language}
        books={allBooks}
        selectedBookNumber={selectedBookNumber}
        selectedChapter={selectedChapter}
        availableChapters={availableChapters}
        onSelectBook={handleSelectBook}
        onSelectChapter={handleSelectChapter}
        onToggleLanguage={handleToggleLanguage}
      />

      <BibleContent
        language={language}
        currentBook={currentBook}
        currentChapter={currentChapter}
        searchTerm={searchTerm}
        searchResults={searchResults}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />
    </div>
  );
}
