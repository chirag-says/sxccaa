/**
 * The foot: what the chapter is doing next, and the way to reach it.
 *
 * Two links and nothing else. The card lifts a little under the pointer and
 * its arrow steps out — the site's own hover language, so this reads as the
 * same hand that made the rest.
 */

import { westZone } from '@/data/pages/chapters';

export function ChapterNext() {
  return (
    <section className="cw-next" aria-label="Next from the chapter">
      <div className="ev-shell cw-next__inner">
        <a className="cw-next__card" href={westZone.next.href}>
          <span className="ev-eyebrow">{westZone.next.label}</span>
          <span className="cw-next__title">{westZone.next.title}</span>
          <span className="cw-next__date">{westZone.next.date}</span>
          <span className="cw-next__arrow" aria-hidden="true">↗</span>
        </a>

        <div className="cw-next__side">
          <a className="cw-next__cta" href={westZone.contact.href}>
            <span>{westZone.contact.label}</span>
            <span aria-hidden="true">↗</span>
          </a>
          <a className="ev-link cw-next__source" href={westZone.source.href} target="_blank" rel="noreferrer">
            {westZone.source.label}
          </a>
        </div>
      </div>
    </section>
  );
}
