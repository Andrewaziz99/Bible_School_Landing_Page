'use client';

import { Chapter } from '@/lib/bible-types';
import { ContinuousText } from './ContinuousText';
import { SearchOverlay } from './SearchOverlay';
import { ChapterGrid } from './ChapterGrid';
import { SearchResult } from '@/lib/bible-types';
import { getBookName } from '@/lib/book-names';

interface BibleContentProps {
  currentChapter: Chapter | null;
  currentBookNumber: number;
  availableChapters: number[];
  selectedChapter: number;
  onSelectChapter: (c: number) => void;
  sidebarOpen: boolean;
  lang: 'ar' | 'en';
  searchTerm: string;
  searchResults: SearchResult[];
  onSearchResultClick: (bookNumber: number, chapterNumber: number) => void;
}

export function BibleContent({
  currentChapter,
  currentBookNumber,
  availableChapters,
  selectedChapter,
  onSelectChapter,
  sidebarOpen,
  lang,
  searchTerm,
  searchResults,
  onSearchResultClick
}: BibleContentProps) {
  const isSearching = searchTerm.trim().length > 0;
  const bookName = getBookName(currentBookNumber, lang);

  return (
    <div className="flex-1 flex flex-col overflow-hidden w-full h-full relative">
      {/* Chapter Grid Bar at the top of content area */}
      {!isSearching && (
        <ChapterGrid 
          chapters={availableChapters}
          selectedChapter={selectedChapter}
          onSelectChapter={onSelectChapter}
          lang={lang}
        />
      )}

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full relative" id="bible-scroll-container">
        {isSearching ? (
          <SearchOverlay 
            results={searchResults} 
            searchTerm={searchTerm} 
            onResultClick={onSearchResultClick}
            lang={lang}
          />
        ) : (
          <ContinuousText 
            chapter={currentChapter} 
            bookName={bookName}
            lang={lang}
          />
        )}
      </div>
    </div>
  );
}
