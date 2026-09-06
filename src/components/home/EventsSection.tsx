/**
 * Generated from the Framer site's server-rendered home page by _extract/jsx.mjs.
 * Selector: #main > div > div:nth-child(3) > .framer-18qsyp8 --children=5:5
 *
 * Markup and class names are reproduced verbatim so the extracted Framer CSS
 * styles it exactly as the original.
 */

import { EventCard } from './EventCard';
import { Variant } from '@/components/layout/Variant';
import { PAGE_HASHES } from '@/lib/breakpoints';
import { events } from '@/data/pages/home';

const H = PAGE_HASHES.home;

export function EventsSection() {
  return (
    <>
      <section className={"framer-1r1183x"} data-framer-name={"Events Section"}>
        <div className={"framer-gv5ene"} data-framer-name={"Container"}>
          <div className={"framer-1heahnx"} data-framer-name={"Content Wrapper"}>
            <div className={"framer-mroxpt"} data-framer-name={"Title Block"}>
              <div className={"framer-yooplo"} data-framer-name={"Title Wrap"}>
                <div className={"ssr-variant hidden-1n3ggvs"}>
                  <div className={"framer-1g89kp2"} data-framer-name={"TItle"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "translateY(80px)" } as React.CSSProperties}>
                    <h2 className={"framer-text framer-styles-preset-1tiwwlt"} data-styles-preset={"WXi_OMzDz"} style={{ '--framer-text-alignment': "center" } as React.CSSProperties}>
                      {"Upcoming events "}
                    </h2>
                  </div>
                </div>
                <div className={"ssr-variant hidden-72rtr7 hidden-11qy7e3"}>
                  <div className={"framer-1g89kp2"} data-framer-name={"TItle"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "translateY(30px)" } as React.CSSProperties}>
                    <h2 className={"framer-text framer-styles-preset-1tiwwlt"} data-styles-preset={"WXi_OMzDz"} style={{ '--framer-text-alignment': "center" } as React.CSSProperties}>
                      {"Upcoming events "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className={"framer-14wjg6v"} data-framer-name={"Title Wrap"}>
                <div className={"ssr-variant hidden-1n3ggvs hidden-11qy7e3"}>
                  <div className={"framer-831eai"} data-framer-name={"TItle"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "translateY(80px)" } as React.CSSProperties}>
                    <h2 className={"framer-text framer-styles-preset-1tiwwlt"} data-styles-preset={"WXi_OMzDz"} style={{ '--framer-text-alignment': "center" } as React.CSSProperties}>
                      {"& activities"}
                    </h2>
                  </div>
                </div>
                <div className={"ssr-variant hidden-72rtr7 hidden-11qy7e3"}>
                  <div className={"framer-831eai"} data-framer-name={"TItle"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "translateY(30px)" } as React.CSSProperties}>
                    <h3 className={"framer-text framer-styles-preset-1tiwwlt"} data-styles-preset={"WXi_OMzDz"} style={{ '--framer-text-alignment': "center" } as React.CSSProperties}>
                      {"& activities"}
                    </h3>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1n3ggvs hidden-72rtr7"}>
                  <div className={"framer-831eai"} data-framer-name={"TItle"} data-framer-component-type={"RichTextContainer"} style={{ willChange: "transform", opacity: "0", transform: "translateY(80px)" } as React.CSSProperties}>
                    <h3 className={"framer-text framer-styles-preset-1tiwwlt"} data-styles-preset={"WXi_OMzDz"} style={{ '--framer-text-alignment': "center" } as React.CSSProperties}>
                      {"& activities"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={"framer-743kbg"} data-framer-name={"Event Card Block"}>
<div className={"framer-17rkbq7 hidden-1n3ggvs"} data-framer-name={"Event Card Stack"}>
                <div className={"framer-3g08kb"} data-framer-name={"Event Card Wrap"}>
                  <Variant hashes={H} on={['desktop', 'phone']}><EventCard event={events[0]} variant="primary" containerClass="framer-5mov61-container" /></Variant>
                  <Variant hashes={H} on="tablet"><EventCard event={events[0]} variant="phone" containerClass="framer-5mov61-container" /></Variant>
                </div>
                <div className={"framer-1pizrmq"} data-framer-name={"Event Card Wrap"}>
                  <Variant hashes={H} on={['desktop', 'phone']}><EventCard event={events[1]} variant="small" containerClass="framer-1r2mtj3-container" reveal="translateX(40px)" /></Variant>
                  <Variant hashes={H} on="tablet"><EventCard event={events[1]} variant="phone" containerClass="framer-1r2mtj3-container" reveal="translateX(40px)" /></Variant>
                </div>
              </div>
              <div className={"framer-13rnvi7"} data-framer-name={"Event Card Wrap"}>
                <Variant hashes={H} on={['desktop', 'tablet']}>
                  <Variant hashes={H} on={['desktop', 'phone']}><EventCard event={events[2]} variant="primary" containerClass="framer-4kzgrb-container" /></Variant>
                  <Variant hashes={H} on={['tablet', 'phone']}><EventCard event={events[2]} variant="phone" containerClass="framer-4kzgrb-container" /></Variant>
                </Variant>
                <Variant hashes={H} on="phone">
                  {events.map((event) => <EventCard key={event.title} event={event} variant="phone" containerClass="framer-4kzgrb-container" />)}
                </Variant>
              </div>
              <div className={"framer-1169nts hidden-1n3ggvs"} data-framer-name={"Event Card Stack"}>
                <div className={"framer-5z1lc2"} data-framer-name={"Event Card Wrap"}>
                  <Variant hashes={H} on={['desktop', 'phone']}><EventCard event={events[3]} variant="small" containerClass="framer-1yas68c-container" reveal="translateX(-40px)" /></Variant>
                  <Variant hashes={H} on="tablet"><EventCard event={events[3]} variant="phone" containerClass="framer-1yas68c-container" reveal="translateX(-40px)" /></Variant>
                </div>
                <div className={"framer-1tqwk5f"} data-framer-name={"Event Card Wrap"}>
                  <Variant hashes={H} on={['desktop', 'phone']}><EventCard event={events[4]} variant="primary" containerClass="framer-es9y1s-container" reveal="translateX(40px)" /></Variant>
                  <Variant hashes={H} on="tablet"><EventCard event={events[4]} variant="phone" containerClass="framer-es9y1s-container" reveal="translateX(40px)" /></Variant>
                </div>
              </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}
