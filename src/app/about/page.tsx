import type { Metadata } from 'next';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { AboutBanner } from '@/components/about/AboutBanner';
import { AboutStory } from '@/components/about/AboutStory';
import { InfoSection } from '@/components/about/InfoSection';
import { NewsSection } from '@/components/about/NewsSection';
import { ContactCta, ABOUT_HASHES, CTA_CONTAINERS } from '@/components/shared/ContactCta';

export const metadata: Metadata = { title: 'About Us - OX Versity' };

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="framer-b52HK framer-EpkeD framer-H9bCC framer-PSLVr framer-GKtVI framer-hZdsH framer-lytYB framer-PG8vB framer-r0yflc" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <AboutBanner />
        <div className="framer-1dyyrpu" data-framer-name="Section Wrapper">
          <AboutStory />
          <InfoSection />
          <NewsSection />
          <ContactCta hashes={ABOUT_HASHES} containerClass={CTA_CONTAINERS.about} />
        </div>
      </div>
    </SiteShell>
  );
}
