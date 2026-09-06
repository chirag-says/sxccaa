import type { SiteImage } from '@/lib/images';

/**
 * Content of the home page's data-driven sections. Layout lives in the
 * components; change text and images here.
 *
 * Nothing in this file asserts a fact about the alumni body — no counts, no
 * names, no achievements — because the Association has not supplied the
 * alumni dataset yet. Statements about the College come from sxccal.edu.
 */

/**
 * The hero: the College named across the top, the heading and the buttons down
 * the lower left, the founding year small at the bottom right.
 *
 * The College's name, address and founding are the only facts asserted here,
 * and all three are on sxccal.edu.
 */
export const hero = {
  /** The College, centred at the top, one entry per word so it can wrap. */
  display: ["St.", "Xavier's", 'College'],
  /** The founding year, very small, directly under the name. */
  eyebrow: 'Since 1860',
  /** The line at the bottom right. */
  paragraph:
    'One legacy. One community. One Xaverian experience — the Association keeps Xaverians connected with their alma mater and with one another.',
  /** Both buttons now sit in the About section below the hero. */
  primaryCta: { label: 'Explore Alumni', href: '/alumni' },
  secondaryCta: { label: 'Discover SXCCAA', href: '/about' },
};

export interface FacultySlide {
  tag: string;
  title: string;
  description: string;
  /**
   * Left unset while SXCCAA's own photography is outstanding: the card then
   * shows a "coming soon" plate. Supplying an image restores the photograph.
   */
  image?: SiteImage;
}

/** "The Xaverian community" slideshow (desktop) and stacked cards (tablet, phone). */
export const faculties: FacultySlide[] = [
  {
    tag: 'SXCCAA',
    title: 'Alumni',
    description:
      'Reconnect with Xaverians across generations, disciplines, professions and locations — and find the people whose path you want to follow.',
  },
  {
    tag: 'SXCCAA',
    title: 'Chapters',
    description:
      "Stay connected with the wider Xaverian community through the Association's chapters and network, in India and beyond.",
  },
  {
    tag: 'SXCCAA',
    title: 'Initiatives',
    description:
      "Discover the Association's initiatives, activities and contribution to the wider community, from fellowship to philanthropy.",
  },
];

export interface CampusCard {
  title: string;
  description: string;
  image: SiteImage;
}

/** "Inside the Xaverian experience": four cards in two columns. */
export const campusCards: CampusCard[] = [
  { title: 'Campus', description: "St. Xavier's College (Autonomous), Kolkata — 30, Mother Teresa Sarani, in the heart of the city.", image: { src: '/images/home/campus-sports-wellness.jpg', width: 4852, height: 3239, widths: [512, 1024, 2048, 4096], alt: 'Card Image' } },
  { title: 'Academics', description: 'Humanities, Science, Commerce, Business Administration and Education.', image: { src: '/images/home/campus-libraries.jpg', width: 2832, height: 4256, widths: [1024, 2048, 4096], alt: 'Card Image', position: '59.4% 15.1%' } },
  { title: 'Culture & Community', description: 'The activities, societies and gatherings that bring Xaverians together across generations.', image: { src: '/images/home/campus-gym.jpg', width: 6755, height: 4508, widths: [512, 1024, 2048, 4096], alt: 'Card Image' } },
  { title: 'Chapters', description: 'The wider SXCCAA network, connecting Xaverians beyond the campus and beyond Kolkata.', image: { src: '/images/home/campus-university-lab.jpg', width: 3840, height: 2160, widths: [512, 1024, 2048], alt: 'Card Image' } },
];
