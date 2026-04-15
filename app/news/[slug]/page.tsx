import { getAllNewsSlugs } from '@/lib/data/news';
import NewsDetailClient from './NewsDetailClient';

export async function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  return <NewsDetailClient slug={params.slug} />;
}
