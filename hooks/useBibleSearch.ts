'use client';

import { useState, useCallback, useMemo } from 'react';
import { Bible, SearchResult, Book } from '@/lib/bible-types';
import { searchBibleWithIndex, buildSearchIndex, SearchIndex } from '@/lib/bible-search-optimized';
import { getBookName } from '@/lib/book-names';

export interface UseBibleSearchProps {
  bibleDataByLanguage: {
    en: Bible;
    ar: Bible;
  };
  initialLanguage?: 'en' | 'ar';
}

export function useBibleSearch({
  bibleDataByLanguage,
  initialLanguage = 'ar',
}: UseBibleSearchProps) {
  const [language, setLanguage] = useState<'en' | 'ar'>(initialLanguage);
  const [selectedBookNumber, setSelectedBookNumber] = useState<number>(1); // Genesis
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Get current Bible data based on selected language
  const currentBibleData = useMemo(() => {
    return bibleDataByLanguage[language];
  }, [bibleDataByLanguage, language]);

  // Build search index for current language Bible
  const searchIndex = useMemo(() => {
    return buildSearchIndex(currentBibleData, language);
  }, [currentBibleData, language]);

  // Get all books from all testaments (66 total)
  const allBooks = useMemo(() => {
    const books: Book[] = [];
    currentBibleData.testaments.forEach((testament) => {
      books.push(...testament.books);
    });
    return books;
  }, [currentBibleData]);

  // Get current book
  const currentBook = useMemo(() => {
    return allBooks.find((b) => b.number === selectedBookNumber);
  }, [allBooks, selectedBookNumber]);

  // Get available chapters for current book
  const availableChapters = useMemo(() => {
    return currentBook?.chapters.map((c) => c.number) || [];
  }, [currentBook]);

  // Get current chapter data
  const currentChapter = useMemo(() => {
    return currentBook?.chapters.find((c) => c.number === selectedChapter);
  }, [currentBook, selectedChapter]);

  // Perform search using optimized index
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      // If no search term, return all verses from current chapter
      if (currentChapter && currentBook) {
        const translatedBookName = getBookName(currentBook.number, language);
        return currentChapter.verses.map((verse) => ({
          verseRef: `${translatedBookName} ${currentChapter!.number}:${verse.number}`,
          bookNumber: currentBook!.number,
          bookName: translatedBookName,
          chapterNumber: currentChapter!.number,
          verseNumber: verse.number,
          text: verse.text,
          matches: [],
        }));
      }
      return [];
    }

    // Search entire Bible using optimized index
    return searchBibleWithIndex(searchTerm, currentBibleData, searchIndex, language);
  }, [searchTerm, currentBibleData, searchIndex, language, currentBook, currentChapter]);

  // Handlers
  const handleSelectBook = useCallback((bookNumber: number) => {
    setSelectedBookNumber(bookNumber);
    setSelectedChapter(1); // Reset to chapter 1 when book changes
  }, []);

  const handleSelectChapter = useCallback((chapterNumber: number) => {
    setSelectedChapter(chapterNumber);
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleToggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    setSearchTerm(''); // Clear search when switching language
    setSelectedBookNumber(1); // Reset to first book
    setSelectedChapter(1); // Reset to first chapter
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    // State
    language,
    selectedBookNumber,
    selectedChapter,
    searchTerm,
    searchResults,

    // Data
    currentBook,
    currentChapter,
    availableChapters,
    allBooks,

    // Handlers
    handleSelectBook,
    handleSelectChapter,
    handleSearch,
    handleToggleLanguage,
    handleClearSearch,
  };
}

