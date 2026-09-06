/**
 * Site-wide content: the brand, contact details and the link lists that the
 * header and footer render. Edit here; the components only lay it out.
 */

export const siteLogo = {
  /** White wordmark, used over the dark hero images and in the preloader. */
  white: '/svg/logo-white.svg',
  /** Dark wordmark, used in the footer and the scrolled header. */
  dark: '/svg/logo-dark.svg',
  width: 156,
  height: 38,
};

export const siteName = 'OX Versity';

export const contact = {
  officeLabel: 'Campus Office',
  /** Rendered one line each (an empty string is a blank line), as the original's forced line breaks. */
  address: ['45 College Street, Greenfield', '', 'Boston, MA 02115, USA'],
  addressHref:
    'https://www.google.com/maps/search/45+College+Street,+Greenfield%E2%80%A8%E2%80%A8Boston,+MA+02115,+USA/@42.4924877,-72.52468,136694m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D',
  emailLabel: 'Email',
  email: 'hello@mflowtcompany.com',
};

export interface NavLink {
  label: string;
  href: string;
}

/** The main navigation. `/programs` and `/contact` are real routes; the rest are the template's. */
export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
];

/** The "Pages" dropdown in the desktop header, three columns. */
export const pagesMenu: { title: string; links: NavLink[] }[] = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Program', href: '/programs' },
      { label: 'Event', href: '/events' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Details Pages',
    links: [
      { label: 'Blog Details', href: '/blog/innovating-education-for-2025-future' },
      { label: 'Program Details', href: '/programs/b-sc-in-computer-science' },
      { label: 'Event Details', href: '/events/perspectives-on-higher-education' },
    ],
  },
  {
    title: 'Uility Pages',
    links: [
      { label: 'Terms & Condition', href: '/terms-conditions' },
      { label: 'Privacy-Policy', href: '/privacy-policy' },
      { label: '404', href: '/404' },
    ],
  },
];

/** The phone and tablet menu, one flat list. */
export const mobileMenu: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Program Details', href: '/programs/b-sc-in-computer-science' },
  { label: 'Blog', href: '/blog' },
  { label: 'Blog Details', href: '/blog/innovating-education-for-2025-future' },
  { label: 'Event', href: '/events' },
  { label: 'Event Details', href: '/events/perspectives-on-higher-education' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Condition', href: '/terms-conditions' },
  { label: '404', href: '/404' },
];

export const headerCta: NavLink = { label: 'Contact Us', href: '/contact' };

/** The "Questions?" form block at the foot of the home and about pages. */
export const contactCta = {
  title: 'Questions? We’re here to help',
  form: {
    nameLabel: 'Full name*',
    namePlaceholder: 'Mason Ethan',
    emailLabel: 'Email*',
    emailPlaceholder: 'hello@mflowtcompany.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Plan your campus future with us...',
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
      { label: 'About Us', href: '/about' },
      { label: 'Events', href: '/events' },
      { label: 'Programs', href: '/programs' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Undergraduate', href: '/programs/b-sc-in-computer-science' },
      { label: 'Postgraduate', href: '/programs/postgraduate' },
      { label: 'Professional Studies', href: '/programs/professional-studies' },
      { label: 'Certificate &  Courses', href: '/programs/certificate-courses' },
    ],
  },
  {
    title: 'Support',
    links: [{ label: 'Contact Us', href: '/contact' }],
  },
  {
    title: 'Utility Pages',
    links: [
      { label: '404', href: '/404' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
];
