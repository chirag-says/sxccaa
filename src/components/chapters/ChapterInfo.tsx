'use client';

/**
 * Registration info strip between the poster and the meet details:
 * a pricing table on the left and a payment QR code on the right.
 *
 * Animates in on scroll: the two cards rise together from below with
 * a stagger, transform + opacity only.
 */

import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { prefersReducedMotion } from '@/lib/motion';
import { useInView } from '@/lib/useInView';
import Image from 'next/image';

const RISE = {
  type: 'tween' as const,
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

export function ChapterInfo() {
  const section = useRef<HTMLDivElement>(null);
  const inView = useInView(section);
  const played = useRef(false);

  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-info-card]'));

    if (prefersReducedMotion()) {
      for (const el of cards) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
      return;
    }
    if (!inView || played.current) return;
    played.current = true;

    const running = cards.map((card, i) =>
      animate(card, { opacity: 1, y: 0 }, { ...RISE, delay: i * 0.12 }),
    );
    return () => {
      for (const control of running) control.stop();
    };
  }, [inView]);

  return (
    <section className="cw-info" aria-label="Registration details" ref={section}>
      <div className="ev-shell cw-info__grid">
        <div className="cw-info__card" data-info-card="">
          <p className="cw-info__label">Session Pricing</p>
          <Image
            src="/images/chapter-pricing.png"
            alt="Session pricing table — Full Day: Xaverian ₹5000, Spouse ₹3000; Day Session: Xaverian ₹2500, Spouse ₹2000; Awards & Dinner: Xaverian ₹3500, Spouse ₹2000; Non Xaverian ₹7500"
            width={470}
            height={220}
            className="cw-info__img"
          />
        </div>
        <div className="cw-info__card cw-info__card--qr" data-info-card="">
          <p className="cw-info__label">Scan to Pay</p>
          <Image
            src="/images/chapter-qr.png"
            alt="SXC Cal Alumni Association — UPI QR code for payment"
            width={340}
            height={360}
            className="cw-info__img cw-info__img--qr"
          />
        </div>
      </div>
    </section>
  );
}
