import type { Metadata } from 'next';
import { SiteShell, PAGE_ROOT_STYLE } from '@/components/layout/SiteShell';
import { AlumniBanner } from '@/components/alumni/AlumniBanner';
import { FeaturedAlumni } from '@/components/alumni/FeaturedAlumni';
import { AlumniDirectory } from '@/components/alumni/AlumniDirectory';
import { ContactCta } from '@/components/shared/ContactCta';
import { demoNotice, directoryCopy } from '@/data/alumni';

export const metadata: Metadata = { title: 'Alumni Directory — SXCCAA' };

export default function AlumniPage() {
  return (
    <SiteShell>
      <div className="framer-OAXg4 framer-EpkeD framer-H9bCC framer-1ijzfe8" data-framer-root="" style={PAGE_ROOT_STYLE}>
        <AlumniBanner lead="Meet the " tail="Xaverian" display={['Community']} />
        <FeaturedAlumni />
        <section className="sx-section" id="directory" data-framer-name="Alumni Directory">
          <div className="sx-container">
            <div className="sx-wrapper">
              <div className="sx-notice">
                <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb">
                  {demoNotice} {directoryCopy.privacyNote}
                </p>
              </div>
              <AlumniDirectory />
            </div>
          </div>
        </section>
        <ContactCta />
      </div>
    </SiteShell>
  );
}
