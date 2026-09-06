import type { SiteImage } from '@/lib/images';

/**
 * The programs listed in the accordion on the home page and on /programs.
 * The first entry opens by default. `href` points at the template's detail
 * pages, which this build does not include; change or remove as needed.
 */
export interface Program {
  title: string;
  description: string;
  href: string;
  image: SiteImage;
}

/** Label of the link inside each open accordion item. */
export const programDetailsLabel = 'View Details';

export const programs: Program[] = [
  {
    title: 'B.Sc. in Computer Science',
    description: 'Comprehensive bachelor degrees with modern curriculum personalized learning, effectively preparing students strong academic professional foundations for future success worldwide in the every field.',
    href: '/programs/b-sc-in-computer-science',
    image: { src: '/images/programs/bsc-computer-science.jpg', width: 6000, height: 4000, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    title: 'Postgraduate',
    description: 'Designed for future leaders, our postgraduate programs combine cutting-edge curriculum and individualized learning to build advanced expertise and global career readiness across all professional fields.',
    href: '/programs/postgraduate',
    image: { src: '/images/programs/postgraduate.jpg', width: 8256, height: 5504, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    title: 'Professional Studies',
    description: 'Our professional studies programs integrate modern, industry-relevant curriculum with personalized learning pathways—empowering learners to advance their careers with practical skills and global competence.',
    href: '/programs/professional-studies',
    image: { src: '/images/programs/professional-studies.jpg', width: 6000, height: 4000, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    title: 'Certificate & Courses',
    description: 'Flexible and targeted, our certificate programs and short courses offer modern, skills-based learning tailored to individual goals—ideal for upskilling, reskilling, or launching a new career in today’s competitive world.',
    href: '/programs/certificate-courses',
    image: { src: '/images/programs/certificate-courses.jpg', width: 5472, height: 3468, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    title: 'Online Programs',
    description: 'Our online programs offer the flexibility of remote learning combined with a modern, interactive curriculum and personalized support—designed to help students achieve academic and professional success from anywhere in the world.',
    href: '/programs/online-programs',
    image: { src: '/images/programs/online-programs.jpg', width: 3840, height: 2160, widths: [512, 1024, 2048], alt: 'Thumbnail Image' },
  },
  {
    title: 'Research Degrees',
    description: 'Our research degrees foster innovation and critical inquiry through a modern curriculum and dedicated supervision—empowering scholars to contribute original knowledge and solve real-world challenges across disciplines.',
    href: '/programs/research-degrees',
    image: { src: '/images/programs/research-degrees.jpg', width: 8256, height: 5504, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    title: 'Short-Term Programs',
    description: 'Our short-term programs offer fast, focused learning experiences with up-to-date curriculum and personalized instruction—perfect for gaining new skills, exploring interests, or advancing your career in a short time.',
    href: '/programs/short-term-programs',
    image: { src: '/images/programs/short-term-programs.jpg', width: 5184, height: 3456, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
  {
    title: 'Exchange Programs',
    description: 'Our exchange programs provide students with international academic experiences, blending modern curriculum with cultural immersion—fostering global awareness, adaptability, and a broader perspective on education and career.',
    href: '/programs/exchange-programs',
    image: { src: '/images/programs/exchange-programs.jpg', width: 6048, height: 4024, widths: [512, 1024, 2048, 4096], alt: 'Thumbnail Image' },
  },
];
