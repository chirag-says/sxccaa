import type { Metadata } from 'next';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { AlumniBanner } from '@/components/alumni/AlumniBanner';
import { PolicyPlaceholder } from '@/components/shared/PolicyPlaceholder';

export const metadata: Metadata = { title: 'Terms of Use — SXCCAA' };

export default function TermsOfUsePage() {
  return (
    <SiteShell>
      <div className="framer-OAXg4 framer-EpkeD framer-H9bCC framer-1ijzfe8" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <AlumniBanner lead="Terms" tail="of" display={['Use']} />
        <PolicyPlaceholder
          title="Terms of Use"
          intro="The Association's terms of use will be published here. Until SXCCAA supplies the wording, this page records the terms the platform is built to enforce."
          points={[
            'The directory is for the Xaverian community. It may not be scraped, copied or used to build a mailing list.',
            'Connection requests are for genuine contact — mentorship, career guidance, referrals or research. Requests are rate-limited and moderated.',
            'Misuse of the connection-request feature can result in a requester being blocked by the Association.',
            'The Association may correct, archive or remove any record in the directory.',
          ]}
        />
      </div>
    </SiteShell>
  );
}
