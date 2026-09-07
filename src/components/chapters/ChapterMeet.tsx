'use client';

/**
 * What the 2023 meet held, kept to the length it deserves: a date, a venue,
 * four panels and the names on the bill.
 *
 * The animation carries the section rather than the copy doing it. The four
 * panels wipe up one after another behind their own rule, 70ms apart, which
 * reads as a list being set rather than four cards arriving; the bill's chips
 * scale in from 0.92 on the same stagger. Both are transform and opacity only.
 *
 * Reduced motion renders the rest state and never observes.
 */

import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { prefersReducedMotion } from '@/lib/motion';
import { useInView } from '@/lib/useInView';
import { westZone } from '@/data/pages/chapters';

const RISE = { type: 'tween' as const, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

export function ChapterMeet() {
  const section = useRef<HTMLDivElement>(null);
  const inView = useInView(section);
  const played = useRef(false);

  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const chips = Array.from(root.querySelectorAll<HTMLElement>('[data-chip]'));
    const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-row]'));

    if (prefersReducedMotion()) {
      for (const el of [...chips, ...rows]) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
      return;
    }
    if (!inView || played.current) return;
    played.current = true;

    const running = [
      ...chips.map((chip, i) => animate(chip, { opacity: 1, scale: 1 }, { ...RISE, delay: i * 0.07 })),
      ...rows.map((row, i) => animate(row, { opacity: 1, y: 0 }, { ...RISE, delay: 0.18 + i * 0.07 })),
    ];
    return () => {
      for (const control of running) control.stop();
    };
  }, [inView]);

  const { meet } = westZone;

  return (
    <section className="cw-meet" aria-labelledby="meet-heading" ref={section}>
      <div className="ev-shell cw-meet__grid">
        <div className="cw-meet__head">
          <p className="ev-eyebrow">{meet.subtitle}</p>
          <h2 className="cw-meet__title" id="meet-heading">
            {meet.title}
          </h2>
          <p className="cw-meet__when">
            {meet.date}
            <span className="cw-dot" aria-hidden="true">·</span>
            {meet.place}
          </p>
          <ul className="cw-bill">
            {meet.bill.map((line) => (
              <li key={line} data-chip="">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="cw-meet__body">
          <p className="cw-meet__note">{meet.note}</p>
          <ol className="cw-panels">
            {meet.panels.map((panel, i) => (
              <li className="cw-panel" key={panel.title} data-row="">
                <span className="cw-panel__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="cw-panel__title">{panel.title}</span>
                <span className="cw-panel__detail">{panel.detail}</span>
              </li>
            ))}
          </ol>
          <p className="cw-names" data-row="">
            {meet.names.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  );
}
