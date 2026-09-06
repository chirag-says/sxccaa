import type { SiteImage } from '@/lib/images';

/**
 * "Explore the Xaverian network" — the accordion on the home page and on
 * /explore. The first entry opens by default.
 *
 * `id` is put on the item's outer element so the header, footer and dropdown
 * can link straight to one, e.g. /explore#chapters.
 */
export interface ExploreItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: SiteImage;
}

/** Label of the link inside each open accordion item. */
export const exploreDetailsLabel = 'Explore';

export const exploreItems: ExploreItem[] = [
  {
    id: 'alumni-directory',
    title: 'Alumni Directory',
    description: 'Discover Xaverians across graduating years, disciplines, industries and locations, and search the directory by name, company, designation or place.',
    href: '/alumni',
    image: { src: '/images/programs/bsc-computer-science.jpg', width: 6000, height: 4000, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    id: 'alumni-stories',
    title: 'Alumni Stories',
    description: 'Explore stories, achievements and contributions from across the Xaverian community, and from the College the community came out of.',
    href: '/alumni#featured',
    image: { src: '/images/programs/postgraduate.jpg', width: 8256, height: 5504, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    id: 'chapters',
    title: 'Chapters',
    description: "Discover the wider network connecting Xaverians beyond the campus. Chapter listings will be published here once the Association supplies them.",
    href: '/contact',
    image: { src: '/images/programs/professional-studies.jpg', width: 6000, height: 4000, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    id: 'events',
    title: 'Events & Activities',
    description: 'Stay connected with alumni gatherings, fellowship and the activities the Association runs through the year.',
    href: '/#events',
    image: { src: '/images/programs/certificate-courses.jpg', width: 5472, height: 3468, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    id: 'community-initiatives',
    title: 'Community Initiatives',
    description: "Explore the philanthropic and social initiatives the Association runs, and the ways Xaverians take part in them.",
    href: '/#events',
    image: { src: '/images/programs/online-programs.jpg', width: 3840, height: 2160, widths: [512, 1024, 2048], alt: 'Thumbnail Image' },
  },
  {
    id: 'connect',
    title: 'Connect',
    description: 'Find an alumnus and request a connection. Personal contact details are never shown publicly — a request reaches them only through the Association.',
    href: '/alumni',
    image: { src: '/images/programs/research-degrees.jpg', width: 8256, height: 5504, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
];
