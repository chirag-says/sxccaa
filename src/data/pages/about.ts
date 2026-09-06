import type { SiteImage } from '@/lib/images';

/**
 * Content of the about page's data-driven sections.
 *
 * Every figure below is an institutional fact published on sxccal.edu. There
 * are deliberately no alumni figures: the Association has not supplied the
 * alumni dataset, and inventing one would misrepresent the client.
 */

/* -------------------------------------------------------------------------- */
/* Mission, vision and legacy — the accordion                                   */
/* -------------------------------------------------------------------------- */

export interface Pillar {
  /** Used as the element id, so /about#mission opens that panel. */
  id: string;
  /** The number shown in the header rail: "01", "02", "03". */
  ordinal: string;
  title: string;
  summary: string;
  points: string[];
}

/**
 * The three panels of the "What the College stands for" accordion. Exactly one
 * is open; the first opens by default.
 */
export const pillars: Pillar[] = [
  {
    id: 'mission',
    ordinal: '01',
    title: 'Our mission',
    summary:
      'To form men and women for others, rooted in human and spiritual values, and committed to learning, service and the greater good.',
    points: [
      'Education with purpose and character',
      'A commitment to service and social responsibility',
      'Nurturing individuals who contribute meaningfully to society',
    ],
  },
  {
    id: 'vision',
    ordinal: '02',
    title: 'Our vision',
    summary:
      'To continue as a leading institution of higher education, inspiring excellence, curiosity and a lifelong pursuit of knowledge.',
    points: [
      'Encourage intellectual and personal growth',
      'Foster creativity, curiosity and collaboration',
      'Carry the Xaverian spirit of excellence forward',
    ],
  },
  {
    id: 'legacy',
    ordinal: '03',
    title: 'Our legacy',
    summary:
      "Since 1860, St. Xaviers College (Calcutta) has grown from a small beginning into a distinguished institution with a lasting tradition of education, service and excellence.",
    points: [
      'Rooted in Jesuit educational heritage',
      'Guided by the ideal of Nihil Ultra',
      'A legacy carried forward by generations of Xaverians',
    ],
  },
];

export const pillarsHeading = {
  eyebrow: 'What we stand for',
  /** One display line each, as the template stacks its section titles. */
  lines: ['Mission,', 'vision', 'and legacy'],
};

/* -------------------------------------------------------------------------- */
/* History of the College                                                       */
/* -------------------------------------------------------------------------- */

export interface Milestone {
  year: string;
  title: string;
  text: string;
}

/**
 * The College's own account of its founding, as published on sxccal.edu.
 * Nothing here is embellished: each entry restates a dated fact from that page.
 */
export const history = {
  eyebrow: 'Since 1860',
  lines: ['History of', 'the College'],
  intro:
    "Both St. Xavier's School and College are proud of their contribution to the cause of education and culture in Bengal. The twin institutions have produced many great educationists and students who earned regard and respect for their alma mater.",
  image: {
    src: '/images/about/since-1960-image.jpg',
    width: 1000,
    height: 667,
    widths: [512],
    alt: "The façade of St. Xaviers College (Calcutta)",
  } as SiteImage,
  milestones: [
    {
      year: '1859',
      title: 'Seven Jesuits arrive in Calcutta',
      text: 'A host of seven Belgian Jesuits arrived in Calcutta in November 1859 under the leadership of Fr. H. Depelchin, Rector from 1860 to 1871 and the founding father of the second St. Xavier’s.',
    },
    {
      year: '1860',
      title: 'A home at the Sans Souci',
      text: "In January 1860 they moved St. Xavier's from Chowringhee to the Sans Souci Theatre, which has been the home of its professors and students ever since. Teaching began with 83 students.",
    },
    {
      year: '1864',
      title: 'The cyclone of November',
      text: 'The catastrophe might have been much greater had Fr. E. Lafont not signalled the timely warning. The storm proved the beginning of his fame as a teacher of physics.',
    },
    {
      year: '1871',
      title: 'Fr. E. Lafont is appointed Rector',
      text: 'A gifted teacher of physics, Fr. Lafont took charge of the College in October 1871.',
    },
    {
      year: '1904',
      title: 'The crest and the motto',
      text: 'Fr. O’Neill, Rector from 1904 to 1913, gave the College its crest and its motto: Nihil Ultra — significant and suggestive of a noble ideal, of an unconquerable hope, that urges the Xaverian to a consistent quest for the higher.',
    },
  ] satisfies Milestone[],
};

/* -------------------------------------------------------------------------- */
/* Why Xavier's                                                                 */
/* -------------------------------------------------------------------------- */

export interface Reason {
  ordinal: string;
  title: string;
  text: string;
}

export const why = {
  eyebrow: "Why Xavier's",
  lines: ['A tiny seed grown', 'into a mighty tree'],
  reasons: [
    {
      ordinal: '01',
      title: 'Heritage and tradition',
      text: "St. Xaviers College (Calcutta) is a 166-year-old institution with a rich heritage and a long tradition.",
    },
    {
      ordinal: '02',
      title: 'A Jesuit education',
      text: 'As a Jesuit higher educational institution, it aims to form men and women for others, with fundamental human and spiritual values.',
    },
    {
      ordinal: '03',
      title: 'From 83 students to 8,614',
      text: 'The tiny seed has grown into a mighty tree: from 83 students in 1860 to 8,614 students in December 2024.',
    },
    {
      ordinal: '04',
      title: 'Three shifts, five faculties',
      text: 'The College functions in three shifts — morning, day and evening — offering UG and PG courses in Humanities, Science, Education, Commerce and Business Administration.',
    },
  ] satisfies Reason[],
};

/* -------------------------------------------------------------------------- */
/* The College                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * What the rest of the page does not already say about the College: the four
 * marks a Jesuit formation is measured by, the motto in translation, and the
 * affiliations and programmes. The founding, the student numbers, the faculties
 * and the mission are stated elsewhere on the page and are not repeated here.
 */
export const college = {
  eyebrow: 'The College',
  lines: ['Four marks', 'of a', 'Xaverian'],
  lead: "Xavier's keeps its education open to students of every community, and measures a formation less by what it produces than by the four marks it asks each Xaverian to carry.",
  /** The four Cs, in the order the College states them. */
  marks: ['Competence', 'Commitment', 'Conscience', 'Compassion'],
  motto: {
    eyebrow: 'The motto',
    latin: 'Nihil Ultra',
    gloss: 'Nothing Beyond',
  },
  /** The rail under the motto. Each is an institutional fact from sxccal.edu. */
  facts: [
    { label: 'Affiliated', value: 'University of Calcutta, since 1862' },
    { label: 'Accredited', value: 'Grade A++ by NAAC' },
    { label: 'Programmes', value: 'Undergraduate, postgraduate and doctoral' },
    { label: 'Beyond the classroom', value: 'Research and outreach' },
  ],
};

export interface FactCard {
  /** The number the counter ends on, e.g. 1860 for "1860". */
  value: number;
  suffix: string;
  /** Set instead of `value` where the fact is not a number, e.g. "A++". */
  display?: string;
  /** Thousands separators: right for a count, wrong for a year. */
  group?: boolean;
  title: string;
  description: string;
}

/** The three fact cards under the story images. Each counts up when scrolled into view. */
export const facts: FactCard[] = [
  {
    value: 1860,
    suffix: '',
    title: 'Established',
    description: 'Founded by the Society of Jesus, and teaching in Kolkata every year since.',
  },
  {
    value: 8600,
    suffix: '+',
    group: true,
    title: 'Students',
    description: "On the rolls at St. Xaviers College (Calcutta).",
  },
  {
    value: 8,
    suffix: 'th',
    title: 'NIRF India Ranking 2025',
    description: 'In the College category of the National Institutional Ranking Framework.',
  },
];

export interface StatLine {
  value: number;
  suffix: string;
  /** Set instead of `value` where the fact is not a number. */
  display?: string;
  group?: boolean;
  text: string;
  /** Width the underline fills to, as on the original (92% and 30%). */
  lineWidth: string;
}

/** The two lines beside the "Since 1860" card. */
export const statLines: StatLine[] = [
  { value: 0, suffix: '', display: 'A++', text: 'The accreditation grade awarded to the College by NAAC', lineWidth: '92%' },
  { value: 0, suffix: '', display: 'Nihil Ultra', text: 'The College motto, and the standard every Xaverian is held to', lineWidth: '30%' },
];

/**
 * The lead that sits beside the banner title. It used to be the "Since 1860"
 * card down in the info section; it introduces the page better than it summed
 * it up, so it opens the page instead.
 */
export const bannerLead = {
  eyebrow: 'Since 1860',
  lead: 'A legacy that continues, carried forward by every Xaverian.',
  text: "Founded in 1860 by the Society of Jesus, St. Xaviers College (Calcutta) has grown into a leading institution of higher education while remaining rooted in its Jesuit educational tradition.",
};

/** The badge over the info section's photograph. */
export const aboutCard = {
  badgeValue: 'Est. 1860',
  badgeLabel: 'Jesuit tradition',
};

export interface NewsCard {
  category: string;
  date: string;
  title: string;
  href: string;
  image: SiteImage;
}

/**
 * "From the Xaverian community". Each item is drawn from the College's own
 * bulletin; the cards link out to sxccal.edu because this prototype has no
 * story pages of its own.
 */
export const news: NewsCard[] = [
  { category: 'College News', date: '25 August 2026', title: 'Xaverians shine at SEBI NFLQ 2026', href: 'https://www.sxccal.edu/', image: { src: '/images/news/pioneering-education-for-the-future-of-2025.jpg', width: 3840, height: 2400, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { category: 'Students', date: '2026', title: 'Six students receive the UN Millennium Fellowship 2026', href: 'https://www.sxccal.edu/', image: { src: '/images/news/innovative-projects-from-our-research-teams.jpg', width: 3840, height: 2160, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { category: 'Community', date: '22 August 2026', title: 'Ripples of Hope, an SXCCAA initiative at Bodhona', href: 'https://www.sxccal.edu/', image: { src: '/images/news/alumni-achievements-that-inspire.jpg', width: 8256, height: 5504, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' } },
  { category: 'College News', date: 'August 2026', title: "Students' Council Election 2026", href: 'https://www.sxccal.edu/', image: { src: '/images/news/integrating-tech-into-modern-education.png', width: 1472, height: 1200, widths: [512, 1024], alt: 'Thumbnail Image' } },
];
