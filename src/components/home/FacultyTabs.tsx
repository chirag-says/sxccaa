'use client';

/**
 * The Research / Innovation / Community tabs: three pill buttons and two
 * image-plus-text cards for the active tab. Only the buttons animate on a
 * switch (background and text colour, 0.4s ease); the cards swap at once, as
 * on the original.
 */

import { useState, type CSSProperties } from 'react';
import { imageSrcSet } from '@/lib/images';
import { tokens } from '@/lib/tokens';
import type { FacultyTab } from '@/data/pages/home';

const BUTTON_CLASSES = ['framer-ynqjpd-container', 'framer-bbf97r-container', 'framer-3osfff-container'];
const CARD_CLASSES = ['framer-81btpf-container', 'framer-ny0p9m-container'];
const SIZES = '(min-width: 1200px) min(max((min(min(100vw, 1800px) - 40px, 1296px) - 24px) / 2, 1px), 636px), (max-width: 809.98px) 100vw, (min-width: 810px) and (max-width: 1199.98px) min(max((min(min(100vw, 990px) - 40px, 1296px) - 24px) / 2, 1px), 636px)';
const EASE = '0.4s cubic-bezier(0.44, 0, 0.56, 1)';
/** The pill buttons' variants: desktop pills are larger than the phone ones. */
const BUTTON_VARIANT = {
  desktop: { active: 'framer-v-1j7f6lh', inactive: 'framer-v-1sjvr7z', activeName: 'Active', inactiveName: 'Inactive' },
  phone: { active: 'framer-v-1abnh0b', inactive: 'framer-v-17zbw3k', activeName: 'Active Phone', inactiveName: 'Inactive Phone' },
} as const;

export function FacultyTabs({ tabs, variantClass = 'framer-v-1vq6u2k', name = 'Desktop Tab 01', cardVariantClass = 'framer-v-1tqbnkb', cardName = 'Desktop', buttonVariant = 'desktop' }: { tabs: FacultyTab[]; variantClass?: string; name?: string; cardVariantClass?: string; cardName?: string; buttonVariant?: keyof typeof BUTTON_VARIANT }) {
  const [active, setActive] = useState(0);
  const bv = BUTTON_VARIANT[buttonVariant];
  return (
    <div className="framer-uokml-container">
      <div className={`framer-gfNHf framer-1vq6u2k ${variantClass}`} data-framer-name={name} style={{ width: '100%' }}>
        <div className="framer-1gdabvi" data-framer-name="Tab Buttons" role="tablist">
          {tabs.map((tab, i) => {
            const on = i === active;
            const color = on ? tokens.ink : tokens.white;
            return (
              <div key={tab.label} className={BUTTON_CLASSES[i] ?? BUTTON_CLASSES[BUTTON_CLASSES.length - 1]}>
                <div
                  className={`framer-3BXqT framer-yylGA framer-1sjvr7z ${on ? bv.active : bv.inactive}`}
                  data-border="true"
                  data-framer-name={on ? bv.activeName : bv.inactiveName}
                  data-highlight="true"
                  role="tab"
                  aria-selected={on}
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}
                  style={{ '--border-bottom-width': '0.6000000238418579px', '--border-color': tokens.white, '--border-left-width': '0.6000000238418579px', '--border-right-width': '0.6000000238418579px', '--border-style': 'solid', '--border-top-width': '0.6000000238418579px', backgroundColor: on ? tokens.white : tokens.white20, borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', borderTopLeftRadius: '30px', borderTopRightRadius: '30px', transition: `background-color ${EASE}`, cursor: 'pointer' } as CSSProperties}
                >
                  <div className="framer-ijqx7n" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': color, '--framer-paragraph-spacing': '0px', transform: 'none' } as CSSProperties}>
                    <p className="framer-text framer-styles-preset-c29y5p" data-styles-preset="MIzrA6q79" style={{ '--framer-text-color': `var(--extracted-r6o4lv, ${color})`, transition: `color ${EASE}` } as CSSProperties}>{tab.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="framer-2ewlv5" data-framer-name="Tab Content Wrapper" role="tabpanel">
          {tabs[active].cards.map((card, i) => (
            <div key={`${active}-${i}`} className={CARD_CLASSES[i]} {...(active === 0 ? { 'data-framer-appear-id': CARD_CLASSES[i].replace('framer-', '').replace('-container', '') } : {})}>
              <div className={`framer-gLsVy framer-RqKzS framer-1tqbnkb ${cardVariantClass}`} data-framer-name={cardName} style={{ maxWidth: '100%', width: '100%' }}>
                <div className="framer-tv1cc1" data-framer-name="Image" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                  <div style={{ position: 'absolute', borderRadius: 'inherit', top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
                    <img decoding="async" width={card.image.width} height={card.image.height} sizes={SIZES} srcSet={imageSrcSet(card.image)} src={card.image.src} alt={card.image.alt} style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="framer-2bzq7s" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': tokens.white, '--framer-paragraph-spacing': '0px', transform: 'none' } as CSSProperties}>
                  <p className="framer-text framer-styles-preset-1yx751z" data-styles-preset="kfKr753OE" style={{ '--framer-text-color': `var(--extracted-r6o4lv, ${tokens.white})` } as CSSProperties}>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
