import type { Metadata } from 'next';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { AlumniBanner } from '@/components/alumni/AlumniBanner';
import { PolicyPlaceholder } from '@/components/shared/PolicyPlaceholder';

export const metadata: Metadata = { title: 'Privacy Policy — SXCCAA' };

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <div className="framer-OAXg4 framer-EpkeD framer-H9bCC framer-1ijzfe8" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <AlumniBanner lead="Privacy" tail="at" display={['SXCCAA']} />
        <PolicyPlaceholder
          title="Privacy Policy"
          intro="The Association's privacy policy will be published here. Until SXCCAA supplies the wording, this page records how the platform is built to treat personal data."
          points={[
            'No alumnus’s email address, phone number, postal address, date of birth or roll number is shown anywhere on the public site.',
            'A connection request reaches an alumnus only after the Association has reviewed it, and contact details are released only if the alumnus accepts.',
            'Every alumni record carries visibility and consent flags. A record can be withdrawn from the public directory at any time.',
            'Alumni profile pages are excluded from search-engine indexing by default.',
            'All alumni data remains the property of SXCCAA.',
          ]}
        />
      </div>
    </SiteShell>
  );
}
