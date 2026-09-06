'use client';

/**
 * The page's opening: a typographic statement, then the archive's one wide
 * photograph opening out from behind a mask.
 *
 * Type leads rather than a full-bleed photograph, for a reason that is about
 * the material and not about taste. SXCCAA has supplied seven pictures for
 * nine events, and the largest is 1121px across; blown across a 1440px hero it
 * would be visibly soft, and a soft photograph at the top of a page reads as a
 * cheap page. So the words carry the opening, and the photograph is held to a
 * band no wider than its own file — where it is sharp, and where the mask
 * makes arriving at it an event.
 *
 * The mask is scroll-linked, not timed: the band opens from the centre as the
 * reader comes down to it, and closes again on the way back up.
 */

import { useRef } from 'react';
import { crossing, useScrollLink } from '@/lib/useScrollLink';
import { alumniEvents, eventsPage, leadEventId } from '@/data/pages/events';

const lead = alumniEvents.find((event) => event.id === leadEventId)!;
const plate = lead.images[0];

export function EventsHero() {
  const band = useRef<HTMLDivElement>(null);

  useScrollLink(
    band,
    (p) => {
      const el = band.current;
      if (!el) return;
      // the mask opens from the centre; the picture inside settles out of a
      // slight push-in, so the two move against each other rather than together
      el.style.setProperty('--open', String(p));
    },
    crossing(0.95, 0.45),
  );

  return (
    <header className="ev-hero" id="events-hero">
      <div className="ev-shell">
        <div className="ev-hero__type">
          <p className="ev-eyebrow">{eventsPage.eyebrow}</p>
          <h1 className="ev-hero__headline">
            {eventsPage.headline.map((line, i) => (
              <span className="ev-hero__line" key={line}>
                <span className="ev-hero__word" style={{ animationDelay: `${0.08 + i * 0.09}s` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <div className="ev-hero__aside">
            <p className="ev-hero__intro">{eventsPage.intro}</p>
            <p className="ev-hero__count">
              <span>{alumniEvents.length}</span> recorded activities · 2023—2026
            </p>
          </div>
        </div>
      </div>

      <div className="ev-shell">
        <figure className="ev-hero__band" ref={band}>
          <div className="ev-hero__mask">
            <img
              src={plate.src}
              width={plate.width}
              height={plate.height}
              alt={plate.alt}
              fetchPriority="high"
              decoding="async"
              sizes="(max-width: 809.98px) calc(100vw - 40px), min(1121px, 86vw)"
            />
          </div>
          <figcaption className="ev-hero__caption">
            <span className="ev-rule" aria-hidden="true" />
            <span>{lead.title}</span>
            <span className="ev-hero__capdot" aria-hidden="true">·</span>
            <span>{lead.place}</span>
            <span className="ev-hero__capdot" aria-hidden="true">·</span>
            <span>{lead.date}</span>
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
