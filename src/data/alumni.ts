/**
 * PROTOTYPE DATA — NOT REAL ALUMNI.
 *
 * SXCCAA has not supplied the alumni dataset (SOW §9.2), so every record below
 * is a placeholder that exists only to exercise the directory, the profile page
 * and the connection-request journey. The names are deliberately not names:
 * nothing here should ever be read as a claim about a real Xaverian, and no
 * achievement, employer or award is asserted.
 *
 * The shape matches the fields the SOW says are public (§4.1). The fields the
 * SOW says are stored but never published (§4.2) — email, phone, postal
 * address, date of birth, roll number — are deliberately absent from this file,
 * because this file feeds the public site.
 *
 * To go live: replace `alumni` with records loaded from the Association's
 * database, keeping the same shape. Nothing else needs to change.
 */

export const IS_DEMO_DATA = true;

/** Shown wherever a record is rendered, so a prototype is never mistaken for a record. */
export const DEMO_BADGE = 'Sample';

export const demoNotice =
  'These are sample records used to demonstrate the directory. The Association’s alumni data has not been loaded yet, so no profile below describes a real Xaverian.';

export interface Alumnus {
  slug: string;
  /** Deliberately a placeholder, not a name. */
  name: string;
  graduationYear: number;
  programme: string;
  department: string;
  designation: string;
  company: string;
  industry: string;
  city: string;
  country: string;
  bio: string;
  /** Honoured everywhere: false hides the connection form (SOW D-07, C-01). */
  openToConnect: boolean;
  /** SOW §4.1: mentorship, referrals, guest lectures, internships. */
  helpsWith: string[];
  linkedin?: string;
  x?: string;
  /** Missing-photo fallback (SOW D-08); real photographs come with the dataset. */
  photo: string;
}

const AVATAR = '/svg/alumni-avatar.svg';

export const alumni: Alumnus[] = [
  {
    slug: 'sample-profile-01', name: 'Sample Profile 01', graduationYear: 2018,
    programme: 'B.Com.', department: 'Commerce', designation: 'Marketing Professional',
    company: 'Sample Organisation', industry: 'Consumer Goods', city: 'Bengaluru', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Mentorship', 'Referrals'], linkedin: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-02', name: 'Sample Profile 02', graduationYear: 2012,
    programme: 'B.Sc.', department: 'Physics', designation: 'Research Scientist',
    company: 'Sample Organisation', industry: 'Research & Academia', city: 'Kolkata', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Mentorship', 'Guest lectures'], linkedin: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-03', name: 'Sample Profile 03', graduationYear: 2005,
    programme: 'B.A.', department: 'Economics', designation: 'Policy Adviser',
    company: 'Sample Organisation', industry: 'Public Sector', city: 'New Delhi', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: false, helpsWith: [], photo: AVATAR,
  },
  {
    slug: 'sample-profile-04', name: 'Sample Profile 04', graduationYear: 2021,
    programme: 'B.B.A.', department: 'Business Administration', designation: 'Product Manager',
    company: 'Sample Organisation', industry: 'Technology', city: 'Bengaluru', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Mentorship', 'Referrals', 'Internships'], linkedin: '#', x: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-05', name: 'Sample Profile 05', graduationYear: 1998,
    programme: 'B.A.', department: 'English', designation: 'Editor',
    company: 'Sample Organisation', industry: 'Media & Publishing', city: 'Mumbai', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Guest lectures'], photo: AVATAR,
  },
  {
    slug: 'sample-profile-06', name: 'Sample Profile 06', graduationYear: 2016,
    programme: 'B.Sc.', department: 'Computer Science', designation: 'Software Engineer',
    company: 'Sample Organisation', industry: 'Technology', city: 'London', country: 'United Kingdom',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Mentorship', 'Referrals'], linkedin: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-07', name: 'Sample Profile 07', graduationYear: 2009,
    programme: 'B.Com.', department: 'Commerce', designation: 'Chartered Accountant',
    company: 'Sample Organisation', industry: 'Financial Services', city: 'Kolkata', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: false, helpsWith: [], photo: AVATAR,
  },
  {
    slug: 'sample-profile-08', name: 'Sample Profile 08', graduationYear: 2023,
    programme: 'B.A.', department: 'Mass Communication', designation: 'Documentary Producer',
    company: 'Sample Organisation', industry: 'Media & Publishing', city: 'Kolkata', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Internships'], x: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-09', name: 'Sample Profile 09', graduationYear: 2001,
    programme: 'B.Sc.', department: 'Chemistry', designation: 'Clinical Researcher',
    company: 'Sample Organisation', industry: 'Healthcare', city: 'Toronto', country: 'Canada',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Mentorship'], linkedin: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-10', name: 'Sample Profile 10', graduationYear: 2014,
    programme: 'B.A.', department: 'Political Science', designation: 'Development Consultant',
    company: 'Sample Organisation', industry: 'Non-profit', city: 'Singapore', country: 'Singapore',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Mentorship', 'Guest lectures'], linkedin: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-11', name: 'Sample Profile 11', graduationYear: 2019,
    programme: 'B.Sc.', department: 'Statistics', designation: 'Data Analyst',
    company: 'Sample Organisation', industry: 'Financial Services', city: 'Hyderabad', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Referrals', 'Internships'], linkedin: '#', photo: AVATAR,
  },
  {
    slug: 'sample-profile-12', name: 'Sample Profile 12', graduationYear: 1993,
    programme: 'B.A.', department: 'Sociology', designation: 'School Principal',
    company: 'Sample Organisation', industry: 'Education', city: 'Kolkata', country: 'India',
    bio: 'Placeholder biography. In the live directory this paragraph carries the short professional summary the alumnus has supplied to the Association.',
    openToConnect: true, helpsWith: ['Mentorship', 'Guest lectures'], photo: AVATAR,
  },
];

export const findAlumnus = (slug: string) => alumni.find((a) => a.slug === slug);

/** The three profiles the "Xaverians making a difference" band shows. */
export const featuredSlugs = ['sample-profile-04', 'sample-profile-02', 'sample-profile-10'];

const unique = (values: string[]) => Array.from(new Set(values)).sort();

/** Filter options, derived from the records so they stay in step with the data. */
export const filterOptions = {
  graduationYear: unique(alumni.map((a) => String(a.graduationYear))).reverse(),
  programme: unique(alumni.map((a) => a.programme)),
  department: unique(alumni.map((a) => a.department)),
  industry: unique(alumni.map((a) => a.industry)),
  location: unique(alumni.map((a) => `${a.city}, ${a.country}`)),
};

export const directoryCopy = {
  title: 'Meet the Xaverian community',
  intro: 'Explore the journeys, professions and experiences of Xaverians across generations.',
  searchPlaceholder: 'Search by name, company, designation or location...',
  openToConnectLabel: 'Open to connect',
  clearLabel: 'Clear filters',
  emptyTitle: 'No Xaverians match that search',
  emptyBody: 'Try a different spelling, or clear a filter or two and search again.',
  privacyNote:
    'Email addresses and phone numbers are never shown here. To reach an alumnus, send a connection request and the Association will pass it on.',
};

export const filterLabels = {
  graduationYear: 'Graduation year',
  programme: 'Programme',
  department: 'Department',
  industry: 'Industry',
  location: 'Location',
} as const;

export type FilterKey = keyof typeof filterLabels;
