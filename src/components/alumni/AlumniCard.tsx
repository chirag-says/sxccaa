/**
 * One record in the directory and in the featured band.
 *
 * The template has no card of this shape, so this one is assembled from the
 * template's own parts: the grey card fill, the 15px radius, the image that
 * zooms on hover, the 30px pill and the site's text presets. Every card
 * carries a "Sample" pill while the Association's data is outstanding, so a
 * placeholder can never be read as a real Xaverian.
 */

import { DEMO_BADGE, IS_DEMO_DATA, type Alumnus } from '@/data/alumni';

export function AlumniCard({ person }: { person: Alumnus }) {
  return (
    <a className="sx-card" href={`/alumni/${person.slug}`}>
      <div className="sx-card__media">
        <img src={person.photo} width={400} height={400} alt="" decoding="async" />
        <div className="sx-card__tags">
          {IS_DEMO_DATA && (
            <span className="sx-pill sx-pill--demo">
              <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">{DEMO_BADGE}</p>
            </span>
          )}
          <span className="sx-pill">
            <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">Class of {person.graduationYear}</p>
          </span>
        </div>
      </div>
      <div className="sx-card__body">
        <h3 className="framer-text framer-styles-preset-b008ll" data-styles-preset="wv4_2UBIZ">{person.name}</h3>
        <p className="framer-text framer-styles-preset-1tfjym1 sx-card__meta" data-styles-preset="zbOnBKABb">
          {person.programme} · {person.department}
        </p>
        <p className="framer-text framer-styles-preset-1tfjym1 sx-card__meta" data-styles-preset="zbOnBKABb">
          {person.designation}, {person.company}
        </p>
        <p className="framer-text framer-styles-preset-1tfjym1 sx-card__meta" data-styles-preset="zbOnBKABb">
          {person.city}, {person.country}
        </p>
      </div>
      <div className="sx-card__foot">
        <p className="framer-text framer-styles-preset-1tfjym1 sx-card__meta" data-styles-preset="zbOnBKABb">
          {person.openToConnect ? 'Open to connect' : 'Not accepting requests'}
        </p>
        <span className="sx-card__cta">
          <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79">View profile</p>
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}
