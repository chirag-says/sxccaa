/**
 * Generated from the Framer site's server-rendered programs page by _extract/jsx.mjs.
 * Selector: #main > div > div:nth-child(3) --children=2:2
 *
 * Markup and class names are reproduced verbatim so the extracted Framer CSS
 * styles it exactly as the original.
 */

import { ProgramAccordion } from '@/components/programs/ProgramAccordion';
import { programs, programDetailsLabel } from '@/data/programs';

export function ProgramsList() {
  return (
    <>
      <section className={"framer-1n4fnum"} data-framer-name={"Programs Section"}>
        <div className={"framer-62970b"} data-framer-name={"Container"}>
          <div className={"framer-1wn0m64"} data-framer-name={"Content Wrapper"}>
            <div className={"ssr-variant hidden-o8vy71 hidden-6i04m6"}>
              <ProgramAccordion programs={programs} breakpoint="desktop" containerClass="framer-lexqjw-container" detailsLabel={programDetailsLabel} />
            </div>
            <div className={"ssr-variant hidden-1ijzfe8 hidden-6i04m6"}>
              <ProgramAccordion programs={programs} breakpoint="phone" containerClass="framer-lexqjw-container" detailsLabel={programDetailsLabel} />
            </div>
            <div className={"ssr-variant hidden-1ijzfe8 hidden-o8vy71"}>
              <ProgramAccordion programs={programs} breakpoint="tablet" containerClass="framer-lexqjw-container" detailsLabel={programDetailsLabel} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
