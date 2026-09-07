import type { SiteImage } from '@/lib/images';

/**
 * "Chapters" — the West Zone chapter, at /chapters.
 *
 * One chapter, and only what SXCCAA has published about it. Everything here is
 * read either off the poster the Association issued for the 2023 meet or off
 * sxccaa.org, which is the chapter's own site. Two things on that poster are
 * deliberately left in the artwork and not repeated as text: the donor-pass
 * mobile numbers and the UPI id. Showing the poster is one thing; setting
 * personal numbers and a payment handle as machine-readable copy on a public
 * page is another.
 */

export const westZone = {
  eyebrow: 'SXCCAA Chapter',
  /** Set one word to a line in the hero. */
  headline: ['West', 'Zone'],
  city: 'Mumbai',
  lede: 'The Association in the west of India, and the meets it brings Xaverians together for.',

  meet: {
    title: 'Xaverians Nostalgia ’23',
    subtitle: 'West Zone Mega Meet',
    date: 'Saturday, 26 August 2023',
    place: 'Jade Hall, Hotel Sahara Star, Mumbai',
    /** What the day held, in the poster's own words. */
    bill: ['4 intellectual panels', 'Bollywood fireside chat', 'Awards night', 'Gala dinner'],
    /** The four panels, as the poster sets them. */
    panels: [
      { title: 'Markets & Economy', detail: 'Optics and substance of FII / FDI in India' },
      { title: 'Start up', detail: 'Navigating the funding winter and consequent challenges' },
      { title: 'Mental Health & Wellness', detail: 'Mantras for Love you Zindagi' },
      { title: 'Women Impact', detail: 'Breaking barriers and leading with impact' },
    ],
    note: 'Fifteen industry leaders, subject experts and Xaverian honchos across four panels, and a fireside chat marking Raj Kapoor’s birth centenary.',
    names: ['Bickram Ghosh', 'Prasenjit Chatterjee', 'Arindam Sil', 'Karishma Kapoor', 'Randhir Kapoor'],
  },

  poster: {
    src: '/images/chapters/nostalgia-23.jpg',
    width: 1280,
    height: 720,
    widths: [512, 1024],
    alt:
      "Poster for Xaverians Nostalgia '23, the SXCCAA West Zone Mega Meet, Saturday 26 August 2023 at Jade Hall, Hotel Sahara Star, Mumbai. It lists four panel discussions, a Bollywood fireside chat, an awards night and a gala dinner, and shows Bickram Ghosh, Prasenjit Chatterjee, Arindam Sil, Karishma Kapoor and Randhir Kapoor.",
  } as SiteImage,

  next: {
    label: 'Next from the chapter',
    title: 'Nostalgia ’26 cum Shakti',
    date: '3 October 2026 · Taj Santacruz, Mumbai',
    href: '/events',
  },

  source: { label: 'sxccaa.org', href: 'https://www.sxccaa.org/' },
  contact: { label: 'Contact SXCCAA', href: '/contact' },
};
