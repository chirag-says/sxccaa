import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { AlumniHero } from '@/components/alumni/AlumniHero';
import { AlumniFeatured } from '@/components/alumni/AlumniFeatured';
import { AlumniDiscover } from '@/components/alumni/AlumniDiscover';
import { ContactCta } from '@/components/shared/ContactCta';

export const metadata: Metadata = {
  title: 'Alumni Directory — SXCCAA',
  description:
    'Reconnect with Xaverians across generations. Search the alumni directory, discover featured Xaverians, and connect with the global network.',
};

export default function AlumniPage() {
  return (
    <SiteShell lightPage={true}>
      <div className="al-page">
        <AlumniHero />
        <AlumniFeatured />
        <AlumniDiscover />
        <ContactCta />
      </div>
    </SiteShell>
  );
}
