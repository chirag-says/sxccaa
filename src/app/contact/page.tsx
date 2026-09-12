import type { Metadata } from 'next';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { ContactBanner } from '@/components/contact/ContactBanner';
import { AccessRequestSection } from '@/components/contact/AccessRequestSection';
import { FaqSection } from '@/components/contact/FaqSection';
import { Footer } from '@/components/layout/Footer';
import { LAYOUT_HASHES } from '@/lib/breakpoints';
import { turnstileSiteKey } from '@/lib/turnstile';

export const metadata: Metadata = { title: 'Contact SXCCAA' };

/**
 * Dynamic because the Turnstile site key is read at request time. It is a
 * public value, but reading it during a build would bake whatever was set then
 * into the HTML — and a stale key renders a widget that can never be solved.
 */
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <SiteShell rootClass="framer-tVDMH framer-50zb47" headerContainerClass="framer-4kmgod-container" lightPage spacerClass="framer-11ppgcl" footer={<Footer hashes={LAYOUT_HASHES.contact} containerClass="framer-pis4pp-container" />}>
      <div className="framer-S0pG3 framer-S2cF2 framer-PG8vB framer-f9Co9 framer-ytjKt framer-Z70cW framer-hZdsH framer-J7x2y framer-ShxJM framer-PSLVr framer-4ozm6q" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <ContactBanner />
        <AccessRequestSection siteKey={turnstileSiteKey()} />
        <FaqSection />
      </div>
    </SiteShell>
  );
}
