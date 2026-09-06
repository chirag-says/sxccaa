'use client';

/**
 * The home page's reveal preloader: a dark panel with the logo and a loading
 * bar, which fills and then slides the panel up out of view.
 *
 * Framer's "Reveal Preloader" component runs a four-step variant cycle on
 * timers, read from the site bundle:
 *   Start  ─100ms→  Step 2 (bar fills, 0.6s)  ─500ms→  Step 3 (panel leaves,
 *   1s)  ─400ms→  Finish
 * The panel is `position: absolute` over the first viewport with pointer
 * events off, so the page underneath is interactive the whole time and the
 * hero's own entrance animations run in parallel, as they do on the original.
 *
 * Markup and class names are the export's; the three copies are Framer's
 * per-breakpoint variants (the only difference is the gap token).
 */

import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { HOME_HASHES } from '@/components/shared/ContactCta';
import { siteLogo } from '@/data/site';

/** The bar's fill: Framer's `Vt` transition on the component. */
const FILL = { type: 'tween' as const, duration: 0.6, ease: [0.44, 0, 0.56, 1] as [number, number, number, number] };
/** The panel's exit: Framer's `Lt` transition on the component. */
const LEAVE = { type: 'tween' as const, duration: 1, ease: [0.96, -0.02, 0.38, 1.01] as [number, number, number, number] };
const STEP_DELAYS = { fill: 100, leave: 600 } as const; // 100ms to Step 2, +500ms to Step 3

const WHITE = 'var(--token-5cace45c-5aeb-4596-8405-46748e8b644b, rgb(255, 255, 255))';
const INK = 'var(--token-1c49fc01-5a06-4e84-9621-823d64297d7d, rgb(17, 17, 17))';

function Panel({ gap }: { gap: string }) {
  return (
    <section className="framer-GuZ9Y framer-1tp3qwe framer-v-1tp3qwe" data-framer-name="Start" data-highlight="true" style={{ height: '100%', width: '100%' }}>
      <div className="framer-1buw2z5" data-framer-name="BG" data-preloader-panel="" style={{ '--fs7grl': gap, filter: 'blur(0px)', WebkitFilter: 'blur(0px)', opacity: '1' } as React.CSSProperties}>
        <div className="framer-vazioe" data-framer-name="BG" style={{ backgroundColor: INK }} />
        <div className="framer-achjwa" data-framer-name="Logo Text">
          <div style={{ position: 'absolute', borderRadius: 'inherit', top: '0', right: '0', bottom: '0', left: '0' }} data-framer-background-image-wrapper="true">
            <img decoding="async" width="156" height="38" src={siteLogo.white} alt="" style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }} />
          </div>
        </div>
        <div
          className="framer-1byfyy1"
          data-border="true"
          style={{ '--border-bottom-width': '1px', '--border-color': WHITE, '--border-left-width': '1px', '--border-right-width': '1px', '--border-style': 'solid', '--border-top-width': '1px' } as React.CSSProperties}
        >
          <div className="framer-5194r6" data-preloader-bar="" style={{ backgroundColor: WHITE }} />
        </div>
      </div>
    </section>
  );
}

export function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const panels = Array.from(container.querySelectorAll<HTMLElement>('[data-preloader-panel]'));
    const bars = Array.from(container.querySelectorAll<HTMLElement>('[data-preloader-bar]'));
    const controls: { stop(): void }[] = [];

    const fill = window.setTimeout(() => {
      for (const bar of bars) {
        const track = bar.parentElement as HTMLElement;
        controls.push(animate(bar, { width: track.clientWidth + 2 }, reduced ? { duration: 0 } : FILL));
      }
    }, STEP_DELAYS.fill);
    const leave = window.setTimeout(() => {
      for (const panel of panels) controls.push(animate(panel, { y: -2000 }, reduced ? { duration: 0 } : LEAVE));
    }, STEP_DELAYS.leave);

    return () => {
      window.clearTimeout(fill);
      window.clearTimeout(leave);
      for (const c of controls) c.stop();
    };
  }, []);

  const { desktop, tablet, phone } = HOME_HASHES;
  return (
    <div className="framer-1i71b0h-container" ref={root} aria-hidden="true">
      <div className={`ssr-variant hidden-${phone} hidden-${tablet}`}>
        <Panel gap="24px" />
      </div>
      <div className={`ssr-variant hidden-${desktop} hidden-${tablet}`}>
        <Panel gap="16px" />
      </div>
      <div className={`ssr-variant hidden-${phone} hidden-${desktop}`}>
        <Panel gap="20px" />
      </div>
    </div>
  );
}
