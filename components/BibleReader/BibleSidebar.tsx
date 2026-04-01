'use client';

import { Book } from '@/lib/bible-types';
import { getBookName } from '@/lib/book-names';
import styles from './BibleReader.module.css';

interface BibleSidebarProps {
  language: 'en' | 'ar';
  books: Book[];
  selectedBookNumber: number;
  selectedChapter: number;
  availableChapters: number[];
  onSelectBook: (bookNumber: number) => void;
  onSelectChapter: (chapterNumber: number) => void;
  onToggleLanguage: () => void;
}

export default function BibleSidebar({
  language,
  books,
  selectedBookNumber,
  selectedChapter,
  availableChapters,
  onSelectBook,
  onSelectChapter,
  onToggleLanguage,
}: BibleSidebarProps) {
  const currentBook = books.find((b) => b.number === selectedBookNumber);

  return (
    <aside className={styles.sidebar}>
      {/* Language Toggle */}
      <div className={styles.languageToggle}>
        <button
          onClick={onToggleLanguage}
          className={styles.languageButton}
          title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
          {language === 'en' ? '🌍 EN' : '🌍 ع'}
        </button>
      </div>

      {/* Books List */}
      <nav className={styles.booksList}>
        <h3 className={styles.sidebarTitle}>
          {language === 'en' ? 'Books' : 'الأسفار'}
        </h3>
        <div className={styles.booksGrid}>
          {books.map((book) => (
            <div key={book.number}>
              <button
                onClick={() => onSelectBook(book.number)}
                className={`${styles.bookButton} ${
                  selectedBookNumber === book.number ? styles.active : ''
                }`}
              >
                <span className={styles.bookName}>
                  {getBookName(book.number, language)}
                </span>
              </button>

              {/* Chapters - only show for selected book */}
              {selectedBookNumber === book.number && (
                <div className={styles.chaptersList}>
                  {availableChapters.map((chapterNum) => (
                    <button
                      key={chapterNum}
                      onClick={() => onSelectChapter(chapterNum)}
                      className={`${styles.chapterButton} ${
                        selectedChapter === chapterNum ? styles.active : ''
                      }`}
                      title={`Chapter ${chapterNum}`}
                    >
                      {chapterNum}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Info Footer */}
      <div className={styles.sidebarFooter}>
        {currentBook && (
          <p className={styles.footerText}>
            {language === 'en' ? 'Selected:' : 'المختار:'}{' '}
            <strong>
              {currentBook.name} {selectedChapter}
            </strong>
          </p>
        )}
      </div>
    </aside>
  );
}
