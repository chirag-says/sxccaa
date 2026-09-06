import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { AlumniBanner } from '@/components/alumni/AlumniBanner';
import { AlumniProfile } from '@/components/alumni/AlumniProfile';
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
    <SiteShell>
      <div className="framer-OAXg4 framer-EpkeD framer-H9bCC framer-1ijzfe8" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <AlumniBanner lead="A " tail="Xaverian" display={['Profile']} />
        <AlumniProfile person={person} />
        <ContactCta />
      </div>
    </SiteShell>
  );
}
