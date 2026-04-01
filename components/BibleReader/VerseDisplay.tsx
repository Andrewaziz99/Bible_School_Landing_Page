'use client';

import { SearchResult } from '@/lib/bible-types';
import { highlightText } from '@/lib/highlight-utils';
import { useState, useEffect } from 'react';
import styles from './BibleReader.module.css';

interface VerseDisplayProps {
  result: SearchResult;
  language: 'en' | 'ar';
  index: number;
}

export default function VerseDisplay({
  result,
  language,
  index,
}: VerseDisplayProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);
  const bookmarkKey = `bible-bookmark-${result.bookNumber}-${result.chapterNumber}-${result.verseNumber}`;

  // Load bookmark state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(bookmarkKey);
      setIsBookmarked(saved === 'true');
    } catch (e) {
      // localStorage might not be available or disabled
      console.warn('localStorage not available:', e);
    }
  }, [bookmarkKey]);

  const handleCopyVerse = () => {
    const verseText = `${result.verseRef}\n${result.text}`;
    navigator.clipboard.writeText(verseText).then(() => {
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2000);
    });
  };

  const handleBookmark = () => {
    try {
      const newState = !isBookmarked;
      setIsBookmarked(newState);
      localStorage.setItem(bookmarkKey, newState ? 'true' : 'false');
    } catch (e) {
      console.warn('Failed to save bookmark:', e);
    }
  };

  const highlightedText = highlightText(result.text, result.matches);

  // Memoize verse rendering to prevent unnecessary re-renders
  const verseContent = (
    <article className={styles.verseCard}>
      {/* Verse Reference */}
      <div className={styles.verseHeader}>
        <span className={styles.verseReference}>
          <strong>{result.verseRef}</strong>
        </span>
        <div className={styles.verseActions}>
          <button
            onClick={handleBookmark}
            className={`${styles.iconButton} ${isBookmarked ? styles.bookmarked : ''}`}
            title={language === 'en' ? 'Bookmark' : 'علامة مرجعية'}
          >
            {isBookmarked ? '❤️' : '🤍'}
          </button>
          <button
            onClick={handleCopyVerse}
            className={styles.iconButton}
            title={language === 'en' ? 'Copy verse' : 'نسخ الآية'}
          >
            📋
          </button>
        </div>
      </div>

      {/* Verse Text */}
      <p className={styles.verseText}>{highlightedText}</p>

      {/* Copy Toast */}
      {showCopyToast && (
        <div className={styles.copyToast}>
          {language === 'en' ? 'Copied!' : 'تم النسخ!'}
        </div>
      )}

      {/* Match Counter for Search Results */}
      {result.matches.length > 0 && (
        <div className={styles.matchBadge}>
          {result.matches.length === 1
            ? language === 'en'
              ? '1 match'
              : 'تطابق واحد'
            : `${result.matches.length} ${language === 'en' ? 'matches' : 'تطابقات'}`}
        </div>
      )}
    </article>
  );

  return verseContent;
}
