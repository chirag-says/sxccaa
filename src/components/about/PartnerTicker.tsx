'use client';

/**
 * Framer's Ticker as configured on the about page: the partner logos scroll
 * to the right at 80px per second in a loop, 80px apart, with the edges
 * fading over the outer 12.5% of the strip. The logos are repeated four times
 * and the strip is offset so a seam is never visible.
 */

import { useEffect, useRef } from 'react';
import type { SiteImage } from '@/lib/images';

const SPEED = 80; // px per second
const GAP = 80;
const COPIES = 4;
const LOGO_CLASSES = ['framer-wskgcu', 'framer-12itou7', 'framer-67s1l7', 'framer-1xltzyz', 'framer-1xblm30', 'framer-tmum7j'];

export interface PartnerLogo extends SiteImage {
  /** Rendered size of the logo box. */
  boxWidth: number;
  boxHeight: number;
}

export function PartnerTicker({ logos }: { logos: PartnerLogo[] }) {
  const track = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = track.current;
    if (!ul || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let animation: Animation | undefined;
    const start = () => {
      animation?.cancel();
      // one copy's width, gaps included
      const copy = (ul.scrollWidth + GAP) / COPIES;
      ul.style.left = `${-copy * 2}px`;
      animation = ul.animate([{ transform: 'translateX(0px)' }, { transform: `translateX(${copy}px)` }], { duration: (copy / SPEED) * 1000, iterations: Infinity, easing: 'linear' });
    };
    start();
    window.addEventListener('resize', start);
    return () => { window.removeEventListener('resize', start); animation?.cancel(); };
  }, []);

  const items = Array.from({ length: logos.length * COPIES }, (_, i) => logos[i % logos.length]);
  return (
    <section
      style={{ display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: 0, padding: 10, listStyleType: 'none', maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)', overflow: 'hidden' }}
      aria-label="Partner logos"
    >
      <ul ref={track} style={{ display: 'flex', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', placeItems: 'center', margin: 0, padding: 0, listStyleType: 'none', gap: GAP, position: 'relative', flexDirection: 'row', willChange: 'transform' }}>
        {items.map((logo, i) => (
          <li key={i} aria-hidden={i >= logos.length}>
            <div className={LOGO_CLASSES[i % logos.length] ?? LOGO_CLASSES[0]} data-framer-name={`Logo ${(i % logos.length) + 1}`} style={{ flexShrink: 0 }}>
              <div style={{ position: 'absolute', borderRadius: 'inherit', top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
                <img decoding="async" width={logo.boxWidth} height={logo.boxHeight} src={logo.src} alt={logo.alt} style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'contain' }} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
