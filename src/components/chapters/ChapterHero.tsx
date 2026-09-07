'use client';

/**
 * The West Zone chapter's opening: the poster the Association issued, and the
 * chapter's name over it.
 *
 * Three movements, all on the compositor — no frame here costs a layout:
 *
 *   1. The poster is uncovered rather than faded in. A `clip-path` inset opens
 *      from the foot of the frame while the picture inside it comes back from
 *      1.08, so the artwork appears to settle into a window that is opening
 *      over it. A fade would say "an image loaded"; this says "look at this".
 *   2. The name rises a word at a time, each 90ms behind the one before, from
 *      behind its own line. The words are clipped by their rows, so they come
 *      up out of the page rather than sliding across it.
 *   3. Once it is up, scroll drives the picture: it drifts a little slower
 *      than the page does, which is the whole of the depth effect and costs
 *      one transform per frame.
 *
 * Reduced motion: everything is simply in place, and scroll moves nothing.
 */

import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { imageSrcSet } from '@/lib/images';
import { prefersReducedMotion } from '@/lib/motion';
import { useScrollLink, crossing } from '@/lib/useScrollLink';
import { westZone } from '@/data/pages/chapters';

const SIZES = '(max-width: 809.98px) calc(100vw - 40px), (max-width: 1199.98px) calc(100vw - 80px), min(92vw, 1240px)';

/** The window opening. Long, because it is the first thing on the page. */
const OPEN = { type: 'tween' as const, duration: 1.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };
/** The picture settling back inside it, a beat longer so the two do not stop together. */
const SETTLE = { type: 'tween' as const, duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };
/** Each word of the name. */
const WORD = { type: 'tween' as const, duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

export function ChapterHero() {
  const frame = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const words = useRef<(HTMLSpanElement | null)[]>([]);
  const meta = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frameEl = frame.current;
    const imageEl = image.current;
    const metaEl = meta.current;
    const wordEls = words.current.filter(Boolean) as HTMLSpanElement[];
    if (!frameEl || !imageEl) return;

    if (prefersReducedMotion()) {
      frameEl.style.clipPath = 'inset(0% 0 0 0)';
      imageEl.style.transform = 'none';
      for (const w of wordEls) w.style.transform = 'none';
      if (metaEl) metaEl.style.opacity = '1';
      return;
    }

    const running = [
      animate(frameEl, { clipPath: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'] }, OPEN),
      animate(imageEl, { scale: [1.08, 1] }, SETTLE),
      ...wordEls.map((word, i) => animate(word, { y: ['110%', '0%'] }, { ...WORD, delay: 0.12 + i * 0.09 })),
    ];
    if (metaEl) running.push(animate(metaEl, { opacity: [0, 1], y: [16, 0] }, { ...WORD, delay: 0.42 }));

    return () => {
      for (const control of running) control.stop();
    };
  }, []);

  // the picture drifts slower than the page: depth, for one transform a frame
  useScrollLink(
    frame,
    (progress) => {
      const el = image.current;
      if (el) el.style.setProperty('--drift', `${progress * 8}%`);
    },
    crossing(0.9, -0.2),
    [],
    null,
  );

  return (
    <header className="cw-hero" aria-labelledby="chapter-title">
      <div className="ev-shell">
        <div className="cw-hero__type">
          <p className="ev-eyebrow">{westZone.eyebrow}</p>
          <h1 className="cw-hero__headline" id="chapter-title">
            {/* one line, both words: the row does the clipping so each word can
                still come up out of it on its own beat */}
            <span className="cw-hero__line">
              {westZone.headline.map((word, i) => (
                <span
                  className="cw-hero__word"
                  key={word}
                  ref={(el) => {
                    words.current[i] = el;
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          <div className="cw-hero__meta" ref={meta}>
            <span className="cw-hero__city">{westZone.city}</span>
            <span className="ev-rule" aria-hidden="true" />
            <span className="cw-hero__lede">{westZone.lede}</span>
          </div>
        </div>
      </div>

      <div className="cw-hero__stage">
        <div className="cw-frame" ref={frame}>
          <img
            ref={image}
            className="cw-frame__img"
            src={westZone.poster.src}
            srcSet={imageSrcSet(westZone.poster)}
            sizes={SIZES}
            width={westZone.poster.width}
            height={westZone.poster.height}
            alt={westZone.poster.alt}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
}
