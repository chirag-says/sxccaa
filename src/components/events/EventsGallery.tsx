'use client';

/**
 * Every photograph the Association has supplied, in one composition.
 *
 * The layout is placed by hand rather than generated, because there are seven
 * pictures and they are all different sizes — a masonry pass would make that
 * look like an accident, where a set composition makes it look like a choice.
 * Each figure is given a column span and a vertical offset in the stylesheet,
 * and none is drawn wider than its own file: the smallest here is 278px across
 * and is set small on purpose.
 *
 * On scroll each figure drifts at its own rate, a few dozen pixels of parallax
 * tied to scroll position rather than to a clock. Clicking one opens it in the
 * viewer, which flies from the box that was clicked.
 */

import { useRef, useState } from 'react';
import { crossing, useScrollLink } from '@/lib/useScrollLink';
import { gallery } from '@/data/pages/events';
import { Lightbox } from './Lightbox';

/** Drift rate per figure, in px across the section's travel. Placed, not random. */
const DRIFT = [-46, 26, -18, 40, -34, 18, -26];

export function EventsGallery() {
  const section = useRef<HTMLElement>(null);
  const figures = useRef<(HTMLElement | null)[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [origin, setOrigin] = useState<DOMRect | null>(null);

  useScrollLink(
    section,
    (p) => {
      const shift = (p - 0.5) * 2; // −1 → 1 across the section's pass
      figures.current.forEach((figure, i) => {
        if (figure) figure.style.transform = `translate3d(0, ${shift * (DRIFT[i % DRIFT.length] ?? 0)}px, 0)`;
      });
    },
    crossing(1, -0.2),
    [],
    null,
  );

  const openAt = (i: number, event: React.MouseEvent<HTMLButtonElement>) => {
    const img = event.currentTarget.querySelector('img');
    setOrigin(img ? img.getBoundingClientRect() : null);
    setOpen(i);
  };

  const close = () => {
    const figure = figures.current[open ?? 0];
    setOpen(null);
    setOrigin(null);
    figure?.querySelector('button')?.focus();
  };

  return (
    <section className="ev-gallery" id="gallery" ref={section} aria-labelledby="gallery-heading">
      <div className="ev-shell">
        <div className="ev-gallery__head">
          <h2 className="ev-section-title" id="gallery-heading">The pictures</h2>
          <p className="ev-gallery__note">
            {gallery.length} photographs, supplied by SXCCAA for {new Set(gallery.map((g) => g.eventId)).size} of the {' '}
            activities on this page. Shown at the size each file can hold.
          </p>
        </div>

        <ul className="ev-gallery__grid">
          {gallery.map((entry, i) => (
            <li
              className="ev-gallery__cell"
              key={entry.image.src}
              data-slot={i + 1}
              ref={(el) => { figures.current[i] = el; }}
            >
              <button type="button" className="ev-gallery__button" onClick={(e) => openAt(i, e)}>
                <span className="ev-gallery__frame" style={{ maxWidth: `${entry.image.width}px` }}>
                  <img
                    src={entry.image.src}
                    width={entry.image.width}
                    height={entry.image.height}
                    alt={entry.image.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 809.98px) calc(100vw - 40px), (max-width: 1199.98px) 44vw, 30vw"
                  />
                  <span className="ev-gallery__zoom" aria-hidden="true">View</span>
                </span>
                <span className="ev-gallery__caption">
                  <span className="ev-gallery__title">{entry.title}</span>
                  <span className="ev-gallery__date">{entry.date}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open !== null ? (
        <Lightbox
          items={gallery.map((g) => ({ image: g.image, title: g.title, date: g.date, place: g.place }))}
          index={open}
          origin={origin}
          onClose={close}
          onStep={(next) => { setOrigin(null); setOpen(next); }}
        />
      ) : null}
    </section>
  );
}
