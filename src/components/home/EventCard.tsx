import type { CSSProperties } from 'react';
import { imageSrcSet } from '@/lib/images';
import type { EventCard as Card } from '@/data/pages/home';

/**
 * An event card (`framer-fY6u9`): image, title with year, and place. The
 * image zooms on hover (`site.css`). `primary` is the large card, `small` the
 * narrower one in the side stacks; `phone` is the single-column version.
 */

const PRIMARY_SIZES =
  '(min-width: 1200px) min((min(100vw, 1800px) - 40px) / 2, 754px), (max-width: 809.98px) max(min((min(100vw, 1800px) - 40px) / 2, 754px), 100vw), (min-width: 810px) and (max-width: 1199.98px) min((min(100vw, 990px) - 40px) / 2, 754px)';
const SMALL_SIZES =
  '(min-width: 1200px) min((min(100vw, 1800px) - 40px) * 0.39, 562px), (max-width: 809.98px) max(min((min(100vw, 1800px) - 40px) * 0.39, 562px), 100vw), (min-width: 810px) and (max-width: 1199.98px) min((min(100vw, 990px) - 40px) * 0.41, 562px)';

const VARIANT = {
  primary: { cls: 'framer-v-26re4l', name: 'Primary', radius: '15px', sizes: PRIMARY_SIZES },
  small: { cls: 'framer-v-1s4ngg6', name: 'Small', radius: '15px', sizes: SMALL_SIZES },
  phone: { cls: 'framer-v-1dv76fw', name: 'Phone', radius: '10px', sizes: PRIMARY_SIZES },
} as const;

const INK70 = 'var(--token-ff72e126-eaa7-4658-835f-12018bb581b7, rgba(17, 17, 17, 0.7))';
const RICH = { '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none' } as CSSProperties;
const MUTED = { '--extracted-r6o4lv': INK70, ...RICH } as CSSProperties;
const MUTED_TEXT = { '--framer-text-color': `var(--extracted-r6o4lv, ${INK70})` } as CSSProperties;
const FILL: CSSProperties = { position: 'absolute', borderRadius: 'inherit', top: 0, right: 0, bottom: 0, left: 0 };
const IMG: CSSProperties = { display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' };

export function EventCard({ event, variant, containerClass, reveal = 'translateY(40px)' }: { event: Card; variant: keyof typeof VARIANT; containerClass: string; reveal?: string }) {
  const v = VARIANT[variant];
  const radius = { borderBottomLeftRadius: v.radius, borderBottomRightRadius: v.radius, borderTopLeftRadius: v.radius, borderTopRightRadius: v.radius };
  return (
    <div className={containerClass} style={{ willChange: 'transform', opacity: 0, transform: reveal }}>
      <a className={`framer-fY6u9 framer-BPcYF framer-2iog4 framer-26re4l ${v.cls} framer-10gl8b3`} data-framer-name={v.name} href={event.href} style={{ width: '100%' }}>
        <div className="framer-y3xvb2" data-framer-name="Image Wrap" style={radius}>
          <div className="framer-1pw9j51" data-framer-name="Image" style={{ ...radius, transform: 'none' }}>
            <div style={FILL} data-framer-background-image-wrapper="true">
              <img decoding="async" width={event.image.width} height={event.image.height} sizes={v.sizes} srcSet={imageSrcSet(event.image)} src={event.image.src} alt={event.image.alt} style={IMG} />
            </div>
          </div>
        </div>
        <div className="framer-3g18ro" data-framer-name="Card Body">
          <div className="framer-hkeqo5" data-framer-name="Title Block">
            <div className="framer-1ixfpcb" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={RICH}>
              <h3 className="framer-text framer-styles-preset-b008ll" data-styles-preset="wv4_2UBIZ">
                {event.title}
              </h3>
            </div>
            <div className="framer-1vzmhmf" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={MUTED}>
              <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb" style={MUTED_TEXT}>
                {event.year}
              </p>
            </div>
          </div>
          <div className="framer-dwx09e" data-framer-name="Place" data-framer-component-type="RichTextContainer" style={MUTED}>
            <p className="framer-text framer-styles-preset-1tfjym1" data-styles-preset="zbOnBKABb" style={{ '--framer-text-alignment': 'left', ...MUTED_TEXT } as CSSProperties}>
              {event.place}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
