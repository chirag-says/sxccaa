'use client';

/**
 * Featured Xaverians — editorial tab section.
 * Left: clickable list of featured profiles. Right: sticky portrait that
 * swaps with a fade transition when the active tab changes.
 */

import { useState } from 'react';
import { alumni, featuredSlugs, IS_DEMO_DATA, DEMO_BADGE } from '@/data/alumni';

const featured = featuredSlugs
  .map((slug) => alumni.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export function AlumniFeatured() {
  const [active, setActive] = useState(0);
  const person = featured[active];

  return (
    <section className="al-featured" id="featured">
      <div className="al-shell">
        <div className="al-featured__head">
          <p className="al-eyebrow">Spotlight</p>
          <h2 className="al-featured__title">Featured Xaverians</h2>
        </div>

        <div className="al-featured__layout">
          {/* Left — tab list */}
          <div className="al-featured__tabs" role="tablist">
            {featured.map((p, i) => (
              <button
                key={p.slug}
                role="tab"
                aria-selected={i === active}
                className="al-featured__tab"
                data-active={String(i === active)}
                onClick={() => setActive(i)}
              >
                <p className="al-featured__tab-year">Class of {p.graduationYear}</p>
                <p className="al-featured__tab-name">{p.name}</p>
                <p className="al-featured__tab-meta">
                  {p.designation}, {p.company}
                </p>
                <p className="al-featured__tab-meta">
                  {p.city}, {p.country}
                </p>
              </button>
            ))}
          </div>

          {/* Right — portrait */}
          <div className="al-featured__portrait">
            <div className="al-featured__portrait-frame">
              <img
                key={person.slug}
                src={person.photo}
                width={400}
                height={533}
                alt=""
                decoding="async"
              />
            </div>
            <div className="al-featured__portrait-info">
              <h3 className="al-featured__portrait-name">{person.name}</h3>
              <p className="al-featured__portrait-role">
                {person.designation}, {person.company}
              </p>
              <p className="al-featured__portrait-location">
                {person.city}, {person.country}
              </p>
              {IS_DEMO_DATA && (
                <span className="al-featured__portrait-badge">{DEMO_BADGE}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
