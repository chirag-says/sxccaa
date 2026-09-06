'use client';

/**
 * Editorial text-only hero for the Alumni page.
 * No image — just oversized typography, animated stat counters, and a ghosted
 * watermark behind the content for depth.
 */

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/lib/useInView';
import { alumni } from '@/data/alumni';

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setCount(Math.round(eased * end));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return <span ref={ref} className="al-hero__stat-number">{count}{suffix}</span>;
}

export function AlumniHero() {
  const countries = new Set(alumni.map((a) => a.country)).size;
  const industries = new Set(alumni.map((a) => a.industry)).size;

  return (
    <section className="al-hero" id="alumni-hero">
      <div className="al-shell">
        <div className="al-hero__content">
          <p className="al-eyebrow">The Xaverian Network</p>
          <h1 className="al-hero__headline">
            <span>One Legacy.</span>
            <span>Thousands of</span>
            <span className="al-hero__accent">Journeys.</span>
          </h1>
          <p className="al-hero__desc">
            Reconnect with Xaverians across generations, disciplines, professions
            and locations — and find the people whose path you want to follow.
          </p>
          <div className="al-hero__stats">
            <div className="al-hero__stat">
              <Counter end={alumni.length} suffix="+" />
              <span className="al-hero__stat-label">Alumni</span>
            </div>
            <div className="al-hero__stat">
              <Counter end={countries} />
              <span className="al-hero__stat-label">Countries</span>
            </div>
            <div className="al-hero__stat">
              <Counter end={industries} />
              <span className="al-hero__stat-label">Industries</span>
            </div>
            <div className="al-hero__stat">
              <Counter end={1860} />
              <span className="al-hero__stat-label">Est.</span>
            </div>
          </div>
        </div>
        <div className="al-hero__watermark" aria-hidden="true">SXC</div>
      </div>
    </section>
  );
}
