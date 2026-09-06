'use client';

/**
 * Framer's "Number Counter" code component as the site configures it: the
 * number starts ten below its final value and counts up over 1.5s with an
 * ease-in-out curve once it scrolls into view, then stays. Reduced motion
 * shows the final value at once.
 */

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { animate } from 'motion';
import { useInView } from '@/lib/useInView';
import { prefersReducedMotion } from '@/lib/motion';

export const COUNTER_RUN_UP = 10;
const DURATION = 1.5;
const EASE: [number, number, number, number] = [0.44, 0, 0.56, 1];

export function NumberCounter({ end, suffix, style }: { end: number; suffix: string; style: CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const start = end - COUNTER_RUN_UP;
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setValue(end);
      return;
    }
    const controls = animate(start, end, { duration: DURATION, ease: EASE, onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, start, end]);

  return (
    <span
      ref={ref}
      style={{ display: 'inline-block', width: 'max-content', height: 'max-content', textAlign: 'center', ...style, cursor: 'default', userSelect: 'none' }}
      aria-live="polite"
      tabIndex={0}
    >
      {value}
      {suffix}
    </span>
  );
}
