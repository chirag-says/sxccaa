import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/SiteShell';
import { AlumniProfileView } from '@/components/alumni/AlumniProfileView';
import { ContactCta } from '@/components/shared/ContactCta';
import { alumni, findAlumnus } from '@/data/alumni';

export function generateStaticParams() {
  return alumni.map((person) => ({ slug: person.slug }));
}

/**
 * SOW T-06: profile pages are `noindex` by default, so a record is never
 * surfaced by a search engine unless the Association asks for it.
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const person = findAlumnus((await params).slug);
  return {
    title: person ? `${person.name} — SXCCAA Alumni Directory` : 'Alumni Directory — SXCCAA',
    robots: { index: false, follow: false },
  };
}

export default async function AlumniProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const person = findAlumnus((await params).slug);
  if (!person) notFound();

  return (
    <SiteShell lightPage={true}>
      <div className="al-page">
        <AlumniProfileView person={person} />
        <ContactCta />
      </div>
    </SiteShell>
  );
}
