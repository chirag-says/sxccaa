import type { Metadata } from 'next';
/*
 * Load order is the cascade: none of these sheets use !important to settle
 * disagreements, so the later one wins.
 *   fonts        @font-face declarations for Instrument Sans, Inter, Roboto
 *   framer       the site's own stylesheet, the styling baseline
 *   framer-runtime  component CSS Framer only injects on interaction (dropdown)
 *   breakpoints  which breakpoint copy of a component is visible
 *   site         the few hand-written rules the rebuild adds
 */
import '@/styles/fonts.css';
import '@/styles/framer.css';
import '@/styles/framer-runtime.css';
import '@/styles/breakpoints.css';
import '@/styles/site.css';
import { FramerEffects } from '@/components/motion/FramerEffects';

export const metadata: Metadata = {
  title: 'OX Versity - Modern Education & University Website Template',
  description:
    'Ox-Versity is a modern, conversion-focused Framer template built for universities, colleges, online courses, and education platforms. Featuring clean layouts, CMS-powered content, smooth animations, and responsive design for fast launches.',
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FramerEffects />
      </body>
    </html>
  );
}
