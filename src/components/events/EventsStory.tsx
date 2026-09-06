'use client';

/**
 * The three photographed initiatives, told as one scroll.
 *
 * A tall block with a pinned frame inside it. Scroll position — not a timer —
 * moves through the three chapters: each one's photograph and its text cross
 * over the next, the picture settling out of a slight push-in as it takes
 * focus and drifting on as it loses it. Stop and it holds; scroll back and it
 * runs backwards.
 *
 * Chapter `i` owns the slot `d ∈ [0, 1]` of its third, and fades across `FADE`
 * of a slot on either side of it, so neighbours overlap and there is never a
 * blank frame between them. Every write is a transform or an opacity.
 *
 * A chapter is one element holding both its picture and its words, stacked on
 * its siblings. That is what makes the reduced-motion case honest: the
 * stylesheet drops the stacking and the three lay out one under another, three
 * complete chapters rather than three pictures and then three captions.
 */

import { useRef } from 'react';
import { pinned, useScrollLink } from '@/lib/useScrollLink';
import { alumniEvents, storyEventIds, strands as allStrands } from '@/data/pages/events';

const chapters = storyEventIds
  .map((id) => alumniEvents.find((event) => event.id === id))
  .filter((event): event is NonNullable<typeof event> => Boolean(event));

/** How far into the neighbouring slots a chapter fades, as a share of a slot. */
const FADE = 0.35;
const clamp = (v: number) => Math.min(Math.max(v, 0), 1);
const strandLabel = (id: string) => allStrands.find((s) => s.id === id)?.label ?? id;

export function EventsStory() {
  const block = useRef<HTMLDivElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useScrollLink(
    block,
    (p) => {
      const n = chapters.length;
      for (let i = 0; i < n; i += 1) {
        const item = items.current[i];
        if (!item) continue;
        const d = p * n - i;
        const on = clamp(Math.min(d + FADE, 1, 1 - d + FADE) / FADE);
        // −1 before its slot through +1 after it: the drift, and the settle
        const travel = Math.min(Math.max((d - 0.5) / (0.5 + FADE), -1), 1);
        item.style.setProperty('--on', String(on));
        item.style.setProperty('--drift', String(travel));
        item.style.visibility = on <= 0.001 ? 'hidden' : 'visible';
      }
    },
    pinned(pin),
    [],
    null, // reduced motion is laid out by the stylesheet, not by a progress value
  );

  return (
    <section className="ev-story" aria-label="Photographed initiatives" ref={block}>
      <div className="ev-story__pin" ref={pin}>
        <div className="ev-shell">
          <ol className="ev-story__chapters">
            {chapters.map((chapter, i) => (
              <li
                className="ev-story__chapter"
                key={chapter.id}
                ref={(el) => { items.current[i] = el; }}
                style={{ '--on': i === 0 ? 1 : 0, '--drift': i === 0 ? -0.5 : 1 } as React.CSSProperties}
              >
                <div className="ev-story__copy">
                  <p className="ev-story__index">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <span className="ev-story__of"> / {String(chapters.length).padStart(2, '0')}</span>
                  </p>
                  <h2 className="ev-story__title">{chapter.title}</h2>
                  <p className="ev-story__meta">
                    {chapter.date}
                    {chapter.place ? ` — ${chapter.place}` : ''}
                  </p>
                  <p className="ev-eyebrow ev-story__strand">{chapter.strands.map(strandLabel).join(' · ')}</p>
                </div>
                <figure className="ev-story__plate">
                  <img
                    src={chapter.images[0].src}
                    width={chapter.images[0].width}
                    height={chapter.images[0].height}
                    alt={chapter.images[0].alt}
                    loading={i === 0 ? undefined : 'lazy'}
                    decoding="async"
                    sizes="(max-width: 809.98px) calc(100vw - 40px), 620px"
                  />
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* the distance the pinned frame is scrolled through */}
      <div className="ev-story__track" aria-hidden="true" />
    </section>
  );
}
