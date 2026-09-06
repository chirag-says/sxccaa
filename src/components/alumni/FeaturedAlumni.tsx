/**
 * "Xaverians making a difference".
 *
 * The band exists so the Association can see and approve the treatment. It is
 * populated with the same sample records as the directory and states no
 * achievement, because the brief is explicit that none may be invented; the
 * real profiles drop into this grid unchanged once SXCCAA supplies them.
 */

import { AlumniCard } from './AlumniCard';
import { alumni, featuredSlugs } from '@/data/alumni';

const featured = featuredSlugs
  .map((slug) => alumni.find((person) => person.slug === slug))
  .filter((person): person is NonNullable<typeof person> => Boolean(person));

export function FeaturedAlumni() {
  return (
    <section className="sx-section sx-section--tight" id="featured" data-framer-name="Featured Alumni">
      <div className="sx-container">
        <div className="sx-wrapper">
          <div className="sx-head">
            <h2 className="framer-text framer-styles-preset-1tiwwlt" data-styles-preset="WXi_OMzDz">Xaverians making a difference</h2>
            <p className="framer-text framer-styles-preset-18gc2kl" data-styles-preset="mM0cFQnf6">
              The Association will feature Xaverians here whose work carries the College’s spirit into the world. The layout is ready; the profiles arrive with the alumni dataset.
            </p>
          </div>
          <div className="sx-grid">
            {featured.map((person) => <AlumniCard key={person.slug} person={person} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
