/**
 * Site-wide content: the brand, contact details and the link lists that the
 * header and footer render. Edit here; the components only lay it out.
 *
 * Facts about the College come from the official site, sxccal.edu. Nothing
 * about the alumni body itself is stated as a number here, because the
 * Association has not supplied the alumni dataset yet.
 */

export const siteLogo = {
  /** Crest and wordmark in white, used over the dark hero images and in the preloader. */
  white: '/svg/logo-white.svg',
  /** The ink cut, used in the footer and the scrolled header. */
  dark: '/svg/logo-dark.svg',
  /** The oversized mark behind the footer, drawn at roughly 1245×227. */
  watermark: '/svg/logo-watermark.svg',
  width: 156,
  height: 38,
};

/** The institution. */
export const siteName = "St. Xavier's College (Autonomous), Kolkata";
/** The Association this site belongs to. */
export const associationName = "St. Xavier's College Alumni Association";
export const associationShortName = 'SXCCAA';
/** The College motto, used as a quiet sign-off. */
export const motto = 'Nihil Ultra';

export const contact = {
  officeLabel: 'Association Office',
  /** Rendered one line each (an empty string is a blank line), as the original's forced line breaks. */
  address: ['30, Mother Teresa Sarani', '', 'Kolkata – 700016, West Bengal, India'],
  addressHref:
    "https://www.google.com/maps/search/?api=1&query=St+Xavier's+College+Autonomous+Kolkata%2C+30%2C+Mother+Teresa+Sarani%2C+Kolkata+700016",
  emailLabel: 'Email',
  email: 'contact@sxccal.edu',
  /** College reception, as published on sxccal.edu. */
  phone: '033-2255-1101',
  phoneHref: 'tel:+913322551101',
};

export interface NavLink {
  label: string;
  href: string;
}

/**
 * The three pills in the desktop bar. The "Explore" dropdown is rendered
 * between the second and third, so the reading order is
 * Home · About SXCCAA · Explore · Contact.
 */
export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About SXCCAA', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/** Label on the desktop dropdown pill. */
export const pagesMenuLabel = 'Explore';

/** The dropdown in the desktop header, three columns. */
export const pagesMenu: { title: string; links: NavLink[] }[] = [
  {
    title: 'Alumni',
    links: [
      { label: 'Alumni Directory', href: '/alumni' },
      { label: 'Xaverians Making a Difference', href: '/alumni#featured' },
      { label: 'Connect with an Alumnus', href: '/alumni' },
      { label: 'Chapters', href: '/explore#chapters' },
      { label: 'Community Initiatives', href: '/explore#community-initiatives' },
    ],
  },
  {
    title: 'Association',
    links: [
      { label: 'About SXCCAA', href: '/about' },
      { label: 'Events & Activities', href: '/#events' },
      { label: 'Contact SXCCAA', href: '/contact' },
    ],
  },
  {
    title: 'More',
    links: [
      { label: 'Search', href: '/search' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
    ],
  },
];

/** The phone and tablet menu, one flat list. */
export const mobileMenu: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About SXCCAA', href: '/about' },
  { label: 'Alumni Directory', href: '/alumni' },
  { label: 'Xaverians Making a Difference', href: '/alumni#featured' },
  { label: 'Explore the Network', href: '/explore' },
  { label: 'Chapters', href: '/explore#chapters' },
  { label: 'Events & Activities', href: '/#events' },
  { label: 'Community Initiatives', href: '/explore#community-initiatives' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
];

export const headerCta: NavLink = { label: 'Explore Alumni', href: '/alumni' };

/** The enquiry block at the foot of the home and about pages. */
export const contactCta = {
  title: 'Stay connected with SXCCAA',
  intro: 'Have a question, or want to reconnect with the Xaverian community? Get in touch with us.',
  form: {
    nameLabel: 'Full name*',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email*',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us how we can help...',
    consent: 'I agree to the terms and conditions.',
    submit: 'Send Message',
    sending: 'Sending…',
    sent: 'Message sent',
    error: 'Could not send, try again',
    /** Endpoint that accepts the multipart POST. Unset: submitting only shows the sent state. */
    action: undefined as string | undefined,
  },
};

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About SXCCAA', href: '/about' },
      { label: 'Alumni', href: '/alumni' },
      { label: 'Events', href: '/#events' },
      { label: 'Stories', href: '/alumni#featured' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Alumni Directory', href: '/alumni' },
      { label: 'Chapters', href: '/explore#chapters' },
      { label: 'Community Initiatives', href: '/explore#community-initiatives' },
      { label: 'Connect', href: '/explore#connect' },
    ],
  },
  {
    title: 'Support',
    links: [{ label: 'Contact SXCCAA', href: '/contact' }],
  },
  {
    title: 'Utility Pages',
    links: [
      { label: 'Search', href: '/search' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
    ],
  },
];
