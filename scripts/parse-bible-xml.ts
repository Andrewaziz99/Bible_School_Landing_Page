import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise } from 'xml2js';

interface VerseData {
  number: number;
  text: string;
}

interface ChapterData {
  number: number;
  verses: VerseData[];
}

interface BookData {
  number: number;
  name: string;
  chapters: ChapterData[];
}

interface TestamentData {
  name: string;
  books: BookData[];
}

interface BibleData {
  translation: string;
  testaments: TestamentData[];
}

const BOOK_NAMES: { [key: string]: string } = {
  '1': 'Genesis',
  '2': 'Exodus',
  '3': 'Leviticus',
  '4': 'Numbers',
  '5': 'Deuteronomy',
  '6': 'Joshua',
  '7': 'Judges',
  '8': 'Ruth',
  '9': '1 Samuel',
  '10': '2 Samuel',
  '11': '1 Kings',
  '12': '2 Kings',
  '13': '1 Chronicles',
  '14': '2 Chronicles',
  '15': 'Ezra',
  '16': 'Nehemiah',
  '17': 'Esther',
  '18': 'Job',
  '19': 'Psalms',
  '20': 'Proverbs',
  '21': 'Ecclesiastes',
  '22': 'Isaiah',
  '23': 'Jeremiah',
  '24': 'Lamentations',
  '25': 'Ezekiel',
  '26': 'Daniel',
  '27': 'Hosea',
  '28': 'Joel',
  '29': 'Amos',
  '30': 'Obadiah',
  '31': 'Jonah',
  '32': 'Micah',
  '33': 'Nahum',
  '34': 'Habakkuk',
  '35': 'Zephaniah',
  '36': 'Haggai',
  '37': 'Zechariah',
  '38': 'Malachi',
  '39': 'Matthew',
  '40': 'Mark',
  '41': 'Luke',
  '42': 'John',
  '43': 'Acts',
  '44': 'Romans',
  '45': '1 Corinthians',
  '46': '2 Corinthians',
  '47': 'Galatians',
  '48': 'Ephesians',
  '49': 'Philippians',
  '50': 'Colossians',
  '51': '1 Thessalonians',
  '52': '2 Thessalonians',
  '53': '1 Timothy',
  '54': '2 Timothy',
  '55': 'Titus',
  '56': 'Philemon',
  '57': 'Hebrews',
  '58': 'James',
  '59': '1 Peter',
  '60': '2 Peter',
  '61': '1 John',
  '62': '2 John',
  '63': '3 John',
  '64': 'Jude',
  '65': 'Revelation',
};

async function parseBible(
  filePath: string,
  language: 'en' | 'ar'
): Promise<BibleData> {
  const xmlContent = fs.readFileSync(filePath, 'utf-8');
  const parser = require('xml2js');
  const parsed = await parser.parseStringPromise(xmlContent);

  const bible = parsed.bible;
  const translation = bible.$?.translation || 'Unknown';
  const testaments: TestamentData[] = [];

  for (const testamentXml of bible.testament) {
    const testamentName = testamentXml.$?.name || 'Unknown';
    const books: BookData[] = [];

    for (const bookXml of testamentXml.book) {
      const bookNumber = parseInt(bookXml.$?.number || '0', 10);
      const bookName = BOOK_NAMES[bookNumber.toString()] || `Book ${bookNumber}`;
      const chapters: ChapterData[] = [];

      for (const chapterXml of bookXml.chapter) {
        const chapterNumber = parseInt(chapterXml.$?.number || '0', 10);
        const verses: VerseData[] = [];

        for (const verseXml of chapterXml.verse) {
          const verseNumber = parseInt(verseXml.$?.number || '0', 10);
          const verseText = Array.isArray(verseXml._) ? verseXml._.join('') : (verseXml._ || '');

          verses.push({
            number: verseNumber,
            text: verseText.trim(),
          });
        }

        chapters.push({
          number: chapterNumber,
          verses,
        });
      }

      books.push({
        number: bookNumber,
        name: bookName,
        chapters,
      });
    }

    testaments.push({
      name: testamentName,
      books,
    });
  }

  return {
    translation,
    testaments,
  };
}

async function main() {
  try {
    const pdfDir = path.join(process.cwd(), 'public', 'assets', 'Bible');
    const dataDir = path.join(process.cwd(), 'public', 'data');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    console.log('📖 Parsing Bible XML files...');

    // Parse English Bible
    const enFilePath = path.join(pdfDir, 'EnglishNIVBible.xml');
    if (fs.existsSync(enFilePath)) {
      console.log('  Parsing English Bible...');
      const enBible = await parseBible(enFilePath, 'en');
      const enOutputPath = path.join(dataDir, 'bible-en.json');
      fs.writeFileSync(enOutputPath, JSON.stringify(enBible, null, 2), 'utf-8');
      console.log(`  ✓ English Bible saved to ${enOutputPath}`);
    } else {
      console.warn(`  ⚠ English Bible file not found at ${enFilePath}`);
    }

    // Parse Arabic Bible
    const arFilePath = path.join(pdfDir, 'ArabicAVDBible.xml');
    if (fs.existsSync(arFilePath)) {
      console.log('  Parsing Arabic Bible...');
      const arBible = await parseBible(arFilePath, 'ar');
      const arOutputPath = path.join(dataDir, 'bible-ar.json');
      fs.writeFileSync(arOutputPath, JSON.stringify(arBible, null, 2), 'utf-8');
      console.log(`  ✓ Arabic Bible saved to ${arOutputPath}`);
    } else {
      console.warn(`  ⚠ Arabic Bible file not found at ${arFilePath}`);
    }

    console.log('✅ Bible parsing complete!');
  } catch (error) {
    console.error('❌ Error parsing Bible:', error);
    process.exit(1);
  }
}

main();
