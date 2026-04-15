import { getAllCurriculaSlugs } from '@/lib/data/curricula';
import CurriculumDetailClient from './CurriculumDetailClient';

export async function generateStaticParams() {
  const slugs = getAllCurriculaSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function CurriculumDetailPage({ params }: { params: { slug: string } }) {
  return <CurriculumDetailClient slug={params.slug} />;
}
