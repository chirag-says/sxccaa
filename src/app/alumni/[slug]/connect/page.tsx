import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { AlumniBanner } from '@/components/alumni/AlumniBanner';
import { ConnectFlow } from '@/components/alumni/ConnectFlow';
import { alumni, findAlumnus } from '@/data/alumni';

export function generateStaticParams() {
  return alumni.filter((person) => person.openToConnect).map((person) => ({ slug: person.slug }));
}

export const metadata: Metadata = {
  title: 'Request a connection — SXCCAA',
  robots: { index: false, follow: false },
};

export default async function ConnectPage({ params }: { params: Promise<{ slug: string }> }) {
  const person = findAlumnus((await params).slug);
  // A record with `openToConnect` off has no request form anywhere on the
  // site, including here — the flag is honoured on the route, not just the UI.
  if (!person || !person.openToConnect) notFound();

  return (
    <SiteShell>
      <div className="framer-OAXg4 framer-EpkeD framer-H9bCC framer-1ijzfe8" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <AlumniBanner lead="Request a " tail="Xaverian" display={['Connection']} />
        <ConnectFlow person={person} />
      </div>
    </SiteShell>
  );
}
