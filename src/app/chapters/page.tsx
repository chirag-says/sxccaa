import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { ChapterHero } from '@/components/chapters/ChapterHero';
import { ChapterMeet } from '@/components/chapters/ChapterMeet';
import { ChapterNext } from '@/components/chapters/ChapterNext';

export const metadata: Metadata = {
  title: 'West Zone Chapter — SXCCAA',
  description:
    "The West Zone chapter of the St. Xavier's College (Calcutta) Alumni Association, and its Xaverians Nostalgia mega meets in Mumbai.",
};

/**
 * Everything that animates on this page starts hidden, so that nothing is seen
 * for a frame before its reveal runs. That start state is in the stylesheet,
 * which means a visitor whose script never arrives would be looking at an
 * empty page — so this puts it back. `<noscript>` is parsed only when
 * scripting is off, so it cannot fight the animation when it is on.
 */
const NO_SCRIPT = `
  .cw-frame { clip-path: inset(0% 0 0 0) }
  .cw-hero__word, .cw-hero__meta, .cw-bill li, .cw-panel, .cw-names {
    opacity: 1; transform: none;
  }
`;

export default function ChaptersPage() {
  return (
    <SiteShell lightPage={true}>
      <div className="ev-page cw-page">
        <noscript>
          <style>{NO_SCRIPT}</style>
        </noscript>
        <ChapterHero />
        <ChapterMeet />
        <ChapterNext />
      </div>
    </SiteShell>
  );
}
