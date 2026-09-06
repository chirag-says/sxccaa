import type { SiteImage } from '@/lib/images';

/**
 * "Alumni events & activities" — the content of its own page at /events.
 *
 * Every event, date, place and description here was supplied by SXCCAA along
 * with the official page it is published on; nothing is inferred. Where the
 * Association has not supplied a photograph the entry carries none, and the
 * page says so rather than standing in another picture: an unrelated
 * photograph captioned as one of these events would misrepresent it. That is
 * why Eid Milan, the visit to Mahavir Seva Sadan, the chess championship, the
 * soccer league and Looking Beyond are listed without pictures.
 *
 * Two fields are editorial rather than supplied, and neither asserts anything
 * new. `stamp` is the supplied date split for setting — "22 August 2026"
 * becomes 22 / AUG / 2026 — and is left partly empty where SXCCAA gave only a
 * month or a season. `strands` group the entries for the archive's filter,
 * each read off the description the Association wrote: the chess championship
 * and the soccer league name the Department of Sports, UDAAN names the Centre
 * of Gender Studies and rural women, Mahavir Seva Sadan and Women's Day name
 * the Women's Forum.
 */

export type Strand = 'community' | 'women' | 'sport' | 'fellowship';

export const strands: { id: Strand | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'community', label: 'Community' },
  { id: 'women', label: "Women's Forum" },
  { id: 'sport', label: 'Sport' },
  { id: 'fellowship', label: 'Fellowship' },
];

/** The supplied date, split for setting. Any part SXCCAA did not give is absent. */
export interface DateStamp {
  /** "22", or "09–11" for the dates given as a span. */
  day?: string;
  /** Three letters, as the archive sets them. */
  month?: string;
  year: string;
}

export interface AlumniEvent {
  /** Short slug, used as the anchor id. */
  id: string;
  title: string;
  /** Date as SXCCAA gives it; an empty string where only a year is known. */
  date: string;
  stamp: DateStamp;
  /** Venue or place, empty where none was supplied. */
  place: string;
  description: string;
  strands: Strand[];
  /** The Association's or the College's own page for the event. */
  source?: { label: string; href: string };
  /** Supplied photographs, in the order they should be shown. */
  images: SiteImage[];
}

/** The poster SXCCAA supplied for Alumni Connect. */
export const featuredEvent = {
  id: 'alumni-connect',
  title: 'Alumni Connect',
  date: '21 August 2026',
  place: "St. Xavier's College (Autonomous), Kolkata",
  description:
    'The College’s events listing records Alumni Connect as a completed event on 21 August 2026.',
  source: { label: 'Official event page', href: 'https://www.sxccal.edu/' },
  poster: {
    src: '/images/events/alumni-connect.png',
    width: 414,
    height: 637,
    alt: 'Alumni Connect poster',
  } as SiteImage,
};

export const alumniEvents: AlumniEvent[] = [
  {
    id: 'ripples-of-hope',
    title: 'Ripples of Hope',
    date: '22 August 2026',
    stamp: { day: '22', month: 'Aug', year: '2026' },
    place: 'Bodhona, Newtown',
    description:
      "Organised by the St. Xavier's College (Calcutta) Alumni Association. The initiative brought care and companionship to gifted and specially-abled children, with distribution of ration, stationery, apparel and essentials, lunch, musical performances, dance and a drawing competition.",
    strands: ['community'],
    source: { label: 'Official Ripples of Hope page', href: 'https://www.sxccal.edu/' },
    images: [
      { src: '/images/events/ripples-of-hope.png', width: 1121, height: 744, alt: 'Children and volunteers at Ripples of Hope, Bodhona, Newtown' },
      { src: '/images/events/ripples-of-hope-2.png', width: 508, height: 338, alt: 'Ripples of Hope: distribution of essentials to the children' },
    ],
  },
  {
    id: 'alumni-connect',
    title: 'Alumni Connect',
    date: '21 August 2026',
    stamp: { day: '21', month: 'Aug', year: '2026' },
    place: "St. Xavier's College (Autonomous), Kolkata",
    description:
      'The College’s events listing records Alumni Connect as a completed event on 21 August 2026.',
    strands: ['fellowship'],
    source: { label: 'Official event page', href: 'https://www.sxccal.edu/' },
    images: [],
  },
  {
    id: 'mahavir-seva-sadan',
    title: 'Visit to Mahavir Seva Sadan, Pailan',
    date: '14 April 2026',
    stamp: { day: '14', month: 'Apr', year: '2026' },
    place: 'Mahavir Seva Sadan Rehabilitation & Research Centre, Pailan',
    description:
      "The SXCCAA Women's Forum visited the centre, made a contribution towards its work, toured the facility and interacted with children attending therapy sessions.",
    strands: ['community', 'women'],
    source: { label: 'Official SXCCAA page', href: 'https://www.sxccal.edu/' },
    images: [],
  },
  {
    id: 'eid-milan',
    title: 'SXCCAA Eid Milan 2026',
    date: '27 March 2026',
    stamp: { day: '27', month: 'Mar', year: '2026' },
    place: "Big Parlour, St. Xavier's College",
    description:
      'Xaverians and their families gathered for Eid Milan, with an address by Rev. Dr. Dominic Savio, SJ, President of SXCCAA, followed by traditional Eid delicacies and community bonding.',
    strands: ['fellowship'],
    source: { label: 'Official SXCCAA Eid Milan page', href: 'https://www.sxccal.edu/' },
    images: [],
  },
  {
    id: 'international-womens-day',
    title: "International Women's Day — Women's Forum",
    date: 'March 2026',
    stamp: { month: 'Mar', year: '2026' },
    place: "St. Xavier's College (Autonomous), Kolkata",
    description:
      "The College's In Press archive records International Women's Day by Alumni under March 2026. The SXCCAA Women's Forum also runs the established Women & Beyond series; the 2024 edition was organised by the Women's Forum of the Association.",
    strands: ['women'],
    source: { label: "Official Women & Beyond page", href: 'https://www.sxccal.edu/' },
    images: [
      { src: '/images/events/womens-day.png', width: 588, height: 423, alt: "International Women's Day, organised by the alumni Women's Forum" },
      { src: '/images/events/womens-day-2.png', width: 278, height: 183, alt: "Women's Forum gathering on International Women's Day" },
    ],
  },
  {
    id: 'project-udaan',
    title: 'Project UDAAN — Learn & Earn',
    date: '8 March 2026',
    stamp: { day: '08', month: 'Mar', year: '2026' },
    place: 'Raghabpur Campus',
    description:
      'An SXCCAA initiative launched in collaboration with the Centre of Gender Studies to empower rural women through skill development and livelihood opportunities. More than 250 women registered, with training planned for products such as designer envelopes, rakhis, gift bags and pickles. Training and marketing support is led by the SXCCAA Philanthropy Team.',
    strands: ['women', 'community'],
    source: { label: 'Official Project UDAAN page', href: 'https://www.sxccal.edu/' },
    images: [
      { src: '/images/events/udaan.png', width: 647, height: 423, alt: 'Project UDAAN at the Raghabpur Campus' },
      { src: '/images/events/udaan-2.png', width: 647, height: 423, alt: 'Project UDAAN: women registering for the Learn & Earn training' },
    ],
  },
  {
    id: 'chess-championship',
    title: 'SXCCAA FIDE Rated Rapid Chess Championship 2.0',
    date: '9–11 June 2025',
    stamp: { day: '09–11', month: 'Jun', year: '2025' },
    place: "St. Xavier's College (Autonomous), Kolkata",
    description:
      "Organised by SXCCAA in association with St. Xavier's College and the Department of Sports. The championship and its event material are recorded in the College's official documentation.",
    strands: ['sport'],
    source: { label: 'Official championship page', href: 'https://www.sxccal.edu/' },
    images: [],
  },
  {
    id: 'xaverian-soccer-league',
    title: 'Xaverian Soccer League',
    date: 'Season 2, May 2025 · Season 3, 2026',
    stamp: { year: '2025' },
    place: "St. Xavier's College (Autonomous), Kolkata",
    description:
      "SXCCAA and the St. Xavier's College Department of Sports organised Season 2 of the Xaverian Soccer League in May 2025. The College's 2026 In Press archive records Season 3, including the opening, the player auction and related coverage.",
    strands: ['sport'],
    source: { label: "Official gallery", href: 'https://www.sxccal.edu/' },
    images: [],
  },
  {
    id: 'looking-beyond',
    title: 'Looking Beyond — National Convention of Xaverians',
    date: '22–24 September 2023',
    stamp: { day: '22–24', month: 'Sep', year: '2023' },
    place: 'Siliguri',
    description:
      'SXCCAA, with its North Bengal Chapter, organised the fourth edition of Looking Beyond, the annual national convention of Xaverians. Alumni, Jesuit Fathers, professors, friends and family took part. The programme included fellowship, music and the Xaverian Awards for Exemplary Service.',
    strands: ['fellowship'],
    images: [],
  },
];

/** The entry the page leads with, and the three it tells as a scroll story. */
export const leadEventId = 'ripples-of-hope';
export const storyEventIds = ['ripples-of-hope', 'project-udaan', 'international-womens-day'];

/** Every photograph SXCCAA has supplied, with the event it belongs to. */
export const gallery = alumniEvents.flatMap((event) =>
  event.images.map((image) => ({ image, eventId: event.id, title: event.title, date: event.date, place: event.place })),
);

export const eventsPage = {
  eyebrow: 'Events & activities',
  titleLead: 'Alumni events',
  titleTail: '&',
  display: ['activities'],
  /** The hero's three lines. Editorial copy, not a claim about any event. */
  headline: ['Life', 'beyond the', 'classroom'],
  intro:
    "Initiatives, gatherings and championships run by the St. Xavier's College Alumni Association and its forums, with the Association's own record of each.",
  /** Said plainly on the page, so no photograph is taken for something it is not. */
  photoNote:
    'Photographs are shown only where SXCCAA has supplied them for that event. The remaining entries are recorded from the official pages and are awaiting pictures.',
  featuredLabel: 'Latest',
};
