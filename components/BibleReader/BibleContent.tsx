'use client';

import { Book, Chapter, SearchResult } from '@/lib/bible-types';
import { createMatchSummary } from '@/lib/highlight-utils';
import { getBookName } from '@/lib/book-names';
import VerseDisplay from './VerseDisplay';
import { useRef } from 'react';
import styles from './BibleReader.module.css';

interface BibleContentProps {
  language: 'en' | 'ar';
  currentBook: Book | undefined;
  currentChapter: Chapter | undefined;
  searchTerm: string;
  searchResults: SearchResult[];
  onSearch: (term: string) => void;
  onClearSearch: () => void;
}

export default function BibleContent({
  language,
  currentBook,
  currentChapter,
  searchTerm,
  searchResults,
  onSearch,
  onClearSearch,
}: BibleContentProps) {
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Debounce the search to prevent lag
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      onSearch(value);
    }, 300); // 300ms debounce
  };

  const handleSearchClear = () => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    onClearSearch();
  };

  return (
    <main className={styles.content}>
      {/* Search Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={language === 'en' ? 'Search Bible verses...' : 'ابحث عن آيات...'}
            className={styles.searchInput}
            aria-label={language === 'en' ? 'Search Bible' : 'البحث في الكتاب المقدس'}
          />
          {searchTerm && (
            <button
              onClick={handleSearchClear}
              className={styles.clearButton}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
          <span className={styles.searchIcon}>🔍</span>
        </div>

        {/* Match Counter */}
        {searchTerm && (
          <div className={styles.matchCounter}>
            {createMatchSummary(searchResults, searchTerm)}
          </div>
        )}
      </div>

      {/* Chapter Header */}
      {!searchTerm && currentBook && currentChapter && (
        <div className={styles.chapterHeader}>
          <h1 className={styles.chapterTitle}>
            {getBookName(currentBook.number, language)} {language === 'en' ? 'Chapter' : 'الفصل'}{' '}
            {currentChapter.number}
          </h1>
          <p className={styles.verseCount}>
            {language === 'en' ? 'Verses:' : 'الآيات:'} {currentChapter.verses.length}
          </p>
        </div>
      )}

      {/* Search Results Header */}
      {searchTerm && (
        <div className={styles.searchResultsHeader}>
          <h2 className={styles.searchTitle}>
            {language === 'en' ? 'Search Results' : 'نتائج البحث'}
          </h2>
        </div>
      )}

      {/* Verses List */}
      <div className={styles.versesList}>
        {searchResults.length > 0 ? (
          searchResults.map((result, idx) => (
            <VerseDisplay
              key={`${result.bookNumber}-${result.chapterNumber}-${result.verseNumber}`}
              result={result}
              language={language}
              index={idx}
            />
          ))
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>
              {searchTerm
                ? language === 'en'
                  ? `No verses found containing "${searchTerm}"`
                  : `لم يتم العثور على آيات تحتوي على "${searchTerm}"`
                : language === 'en'
                ? 'Select a book and chapter to view verses'
                : 'اختر سفرًا وفصلًا لعرض الآيات'}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
