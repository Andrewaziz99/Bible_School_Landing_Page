'use client';

import { useState, useCallback, useMemo } from 'react';
import { Bible, SearchResult } from '@/lib/bible-types';
import { searchBibleWithIndex, buildSearchIndex } from '@/lib/bible-search-optimized';

export interface UseBibleSearchProps {
  bibleData: Bible;
  language: 'en' | 'ar';
}

export function useBibleSearch({ bibleData, language }: UseBibleSearchProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchIndex = useMemo(() => {
    return buildSearchIndex(bibleData, language);
  }, [bibleData, language]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }
    return searchBibleWithIndex(searchTerm, bibleData, searchIndex, language);
  }, [searchTerm, bibleData, searchIndex, language]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    searchTerm,
    searchResults,
    handleSearch,
    handleClearSearch,
  };
}
