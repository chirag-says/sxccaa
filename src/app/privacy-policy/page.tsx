import type { Metadata } from 'next';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { PolicyPlaceholder } from '@/components/shared/PolicyPlaceholder';

export const metadata: Metadata = { title: 'Privacy Policy — SXCCAA' };

export default function PrivacyPolicyPage() {
  return (
    <SiteShell lightPage>
      <div className="framer-OAXg4 framer-EpkeD framer-H9bCC framer-1ijzfe8" data-framer-root="" style={PAGE_ROOT_STYLE}>
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
        {/* The header's scroll variant keys off this 1px strip, as on every
        other page; the banner used to carry it. */}
        <div aria-label="Scroll Trigger" className="framer-fkc7tz" data-framer-name="Scroll Triger" id="scroll-trigger" />
      </div>
    </SiteShell>
  );
}
