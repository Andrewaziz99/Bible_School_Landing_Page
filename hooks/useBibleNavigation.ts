'use client';

import { useState, useCallback, useMemo } from 'react';
import { Bible, Testament, Book, Chapter } from '@/lib/bible-types';

export function useBibleNavigation(currentBibleData: Bible) {
  const [selectedTestament, setSelectedTestament] = useState<'OT' | 'NT'>('OT');
  const [selectedBookNumber, setSelectedBookNumber] = useState<number>(1);
  const [selectedChapter, setSelectedChapter] = useState<number>(1);

  const testaments = currentBibleData.testaments || [];
  
  const allBooks = useMemo(() => {
    return testaments.flatMap((t: Testament) => t.books);
  }, [testaments]);

  const currentTestamentBooks = useMemo(() => {
    const isOT = selectedTestament === 'OT';
    // Assumes OT is first element and NT is second
    return testaments[isOT ? 0 : 1]?.books || [];
  }, [testaments, selectedTestament]);

  const currentBook = useMemo(() => {
    return allBooks.find((b: Book) => b.number === selectedBookNumber) || allBooks[0];
  }, [allBooks, selectedBookNumber]);

  const availableChapters = useMemo(() => {
    if (!currentBook) return [];
    return currentBook.chapters.map((c: Chapter) => c.number);
  }, [currentBook]);

  const currentChapter = useMemo(() => {
    if (!currentBook) return null;
    return currentBook.chapters.find((c: Chapter) => c.number === selectedChapter) || currentBook.chapters[0];
  }, [currentBook, selectedChapter]);

  const handleSelectTestament = useCallback((testament: 'OT' | 'NT') => {
    setSelectedTestament(testament);
    const books = testaments[testament === 'OT' ? 0 : 1]?.books || [];
    if (books.length > 0) {
      setSelectedBookNumber(books[0].number);
      setSelectedChapter(1);
    }
  }, [testaments]);

  const handleSelectBook = useCallback((bookNumber: number) => {
    setSelectedBookNumber(bookNumber);
    setSelectedChapter(1);
    
    // Update testament based on book number (1-39 = OT, 40-66 = NT)
    if (bookNumber >= 40) {
      setSelectedTestament('NT');
    } else {
      setSelectedTestament('OT');
    }
  }, []);

  const handleSelectChapter = useCallback((chapter: number) => {
    setSelectedChapter(chapter);
  }, []);

  return {
    selectedTestament,
    selectedBookNumber,
    selectedChapter,
    allBooks,
    currentTestamentBooks,
    currentBook,
    availableChapters,
    currentChapter,
    handleSelectTestament,
    handleSelectBook,
    handleSelectChapter
  };
}
