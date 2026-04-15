'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { Chapter, BibleMetadata, MetadataBook, MetadataTestament } from '@/lib/bible-types';

export function useBibleNavigation(metadata: BibleMetadata, lang: 'en' | 'ar') {
  const [selectedTestament, setSelectedTestament] = useState<'OT' | 'NT'>('OT');
  const [selectedBookNumber, setSelectedBookNumber] = useState<number>(1);
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [currentChapterData, setCurrentChapterData] = useState<Chapter | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const testaments = metadata.testaments || [];
  
  const allBooks = useMemo<MetadataBook[]>(() => {
    return testaments.flatMap((t: MetadataTestament) => t.books);
  }, [testaments]);

  const currentTestamentBooks = useMemo<MetadataBook[]>(() => {
    const isOT = selectedTestament === 'OT';
    // Assumes OT is 0 and NT is 1
    return (testaments[isOT ? 0 : 1]?.books || []) as MetadataBook[];
  }, [testaments, selectedTestament]);

  const currentBook = useMemo<MetadataBook | undefined>(() => {
    return allBooks.find((b: MetadataBook) => b.number === selectedBookNumber) || allBooks[0];
  }, [allBooks, selectedBookNumber]);

  const availableChapters = useMemo(() => {
    if (!currentBook) return [];
    // Generate array of numbers from 1 to chapterCount
    return Array.from({ length: currentBook.chapterCount }, (_, i) => i + 1);
  }, [currentBook]);

  // Fetch chapter data when selection changes
  useEffect(() => {
    let isMounted = true;
    
    async function fetchChapter() {
      setIsLoading(true);
      try {
        const response = await fetch(`/data/bible/${lang}/${selectedBookNumber}/${selectedChapter}.json`);
        if (!response.ok) throw new Error('Failed to fetch chapter');
        const data = await response.json();
        
        if (isMounted) {
          setCurrentChapterData(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching chapter:', error);
        if (isMounted) setIsLoading(false);
      }
    }

    fetchChapter();

    return () => {
      isMounted = false;
    };
  }, [lang, selectedBookNumber, selectedChapter]);

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
    currentChapter: currentChapterData,
    isLoading,
    handleSelectTestament,
    handleSelectBook,
    handleSelectChapter
  };
}
