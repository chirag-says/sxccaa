import type { PartnerLogo } from '@/components/about/PartnerTicker';
import type { SiteImage } from '@/lib/images';

/** Content of the about page's data-driven sections. */

/** Partner logos in the ticker. `boxWidth`/`boxHeight` is the rendered size. */
export const partnerLogos: PartnerLogo[] = [
  { src: '/svg/about/partner-logo-1.svg', width: 857, height: 160, boxWidth: 150, boxHeight: 30, alt: 'Company Logo' },
  { src: '/svg/about/partner-logo-2.svg', width: 866, height: 160, boxWidth: 78, boxHeight: 30, alt: 'Company Logo' },
  { src: '/svg/about/partner-logo-3.svg', width: 912, height: 160, boxWidth: 146, boxHeight: 28, alt: 'Company Logo' },
  { src: '/svg/about/partner-logo-4.svg', width: 765, height: 160, boxWidth: 170, boxHeight: 40, alt: 'Company Logo' },
  { src: '/svg/about/partner-logo-5.svg', width: 723, height: 160, boxWidth: 65, boxHeight: 52, alt: 'Company Logo' },
  { src: '/svg/about/partner-logo-6.svg', width: 1274, height: 160, boxWidth: 170, boxHeight: 32, alt: 'Company Logo' },
];

export interface FactCard {
  /** The number the counter ends on, e.g. 98 for "98%". */
  value: number;
  suffix: string;
  title: string;
  description: string;
}

/** The three fact cards under the story images. Each counts up when scrolled into view. */
export const facts: FactCard[] = [
  { value: 98, suffix: '%', title: 'Happy Students', description: 'Our dedication to nurturing green spaces ensures the every client enjoys a vibrant, healthy, and beautiful outdoor haven.' },
  { value: 25, suffix: '+', title: 'Years of Expertise', description: "For over two a decades, we've cultivated stunning a landscapes, adapting our craft to every unique garden's needs vision." },
  { value: 500, suffix: '+', title: 'University Topers', description: 'With a proven track record a consistently bringing lush visions to the life, we deliver impactful gardening solutions.' },
];

export interface StatLine {
  value: number;
  suffix: string;
  text: string;
  /** Width the underline fills to, as on the original (92% and 30%). */
  lineWidth: string;
}

/** The two counters with underlines beside the "Since 1960" card. */
export const statLines: StatLine[] = [
  { value: 92, suffix: '%', text: 'Graduates employed or in grad school within 6 months', lineWidth: '92%' },
  { value: 25, suffix: '%', text: 'Students regularly receive scholarships each year', lineWidth: '30%' },
];

export const aboutCard = {
  eyebrow: 'SINCE 1960',
  title: 'When curiosity truly meets new opportunities, brighter futures open wide.',
  text: 'Founded in 1960, Brivora is a vibrant, community-driven university where groundbreaking research, dedicated a mentorship, impactful real-world projects seamlessly come together.',
  reviewsCount: '5000+',
  reviewsLabel: 'Student reviews',
};

export interface NewsCard {
  category: string;
  date: string;
  title: string;
  href: string;
  image: SiteImage;
}

/** "Latest news". `href` points at the template's blog pages. */
export const news: NewsCard[] = [
  { category: 'Academics', date: 'Sep 23, 2025', title: 'Pioneering Education for the Future of 2025', href: '/blog/pioneering-education-for-the-future-of-2025', image: { src: '/images/news/pioneering-education-for-the-future-of-2025.jpg', width: 3840, height: 2400, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { category: 'Community', date: 'Sep 10, 2025', title: 'Innovative Projects From Our Research Teams', href: '/blog/innovative-projects-from-our-research-teams', image: { src: '/images/news/innovative-projects-from-our-research-teams.jpg', width: 3840, height: 2160, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { category: 'Alumni', date: 'Sep 9, 2025', title: 'Alumni Achievements That Inspire', href: '/blog/alumni-achievements-that-inspire', image: { src: '/images/news/alumni-achievements-that-inspire.jpg', width: 8256, height: 5504, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' } },
  { category: 'Technology', date: 'Sep 8, 2025', title: 'Integrating Tech into Modern Education', href: '/blog/integrating-tech-into-modern-education', image: { src: '/images/news/integrating-tech-into-modern-education.png', width: 1472, height: 1200, widths: [512, 1024], alt: 'Thumbnail Image' } },
];
