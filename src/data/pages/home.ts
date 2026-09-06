import type { SiteImage } from '@/lib/images';

/**
 * Content of the home page's data-driven sections. Layout lives in the
 * components; change text and images here.
 */

export interface FacultySlide {
  tag: string;
  title: string;
  description: string;
  image: SiteImage;
}

/** "Our dedicated faculties" slideshow (desktop) and stacked cards (tablet, phone). */
export const faculties: FacultySlide[] = [
  {
    tag: 'Faculty',
    title: 'Business Studies',
    description:
      'Building developing global business minds with practical learning and modern strategies that prepare students to lead, innovate, and succeed in a competitive world.',
    image: { src: '/images/home/faculty-business-studies.jpg', width: 4704, height: 3136, widths: [512, 1024, 2048, 4096], alt: 'three friends studying from documents notebooks library' },
  },
  {
    tag: 'Faculty',
    title: 'Computer Science & Information Technology',
    description:
      'Empowering future tech leaders with cutting-edge knowledge in software development, cybersecurity, data science, and AI—focusing on hands-on projects and real-world problem-solving in a digitally driven world.',
    image: { src: '/images/home/faculty-computer-science.jpg', width: 6000, height: 4000, widths: [512, 1024, 2048, 4096], alt: 'three friends studying from documents notebooks library' },
  },
  {
    tag: 'Faculty',
    title: 'Health Sciences',
    description:
      'Dedicated to producing compassionate healthcare professionals through rigorous training, research, and practice—fostering innovation and excellence in patient care.',
    image: { src: '/images/home/faculty-health-sciences.jpg', width: 5472, height: 3648, widths: [512, 1024, 2048, 4096], alt: 'three friends studying from documents notebooks library' },
  },
];

export interface TabCard {
  image: SiteImage;
  text: string;
}

export interface FacultyTab {
  label: string;
  cards: [TabCard, TabCard];
}

/** The Research / Innovation / Community tabs under the faculties. */
export const facultyTabs: FacultyTab[] = [
  {
    label: 'Research',
    cards: [
      { image: { src: '/images/home/tab-research-1.jpg', width: 4096, height: 2734, widths: [512, 1024, 2048], alt: 'Image' }, text: 'Our libraries offer thousands of books, digital resources, and journals. Modern study spaces and advanced technology support students and researchers in learning and discovery.' },
      { image: { src: '/images/home/tab-research-2.png', width: 2544, height: 1920, widths: [512, 1024, 2048], alt: 'Modern interior library' }, text: 'Our central library is the hub of academic life, offering vast collections of books, e-journals, and digital resources. It provides students with a modern space to learn, collaborate, and conduct research.' },
    ],
  },
  {
    label: 'Innovation',
    cards: [
      { image: { src: '/images/home/tab-innovation-1.jpg', width: 3360, height: 2240, widths: [512, 1024, 2048], alt: 'young student looking book library' }, text: 'Our libraries offer thousands of books, digital resources, and journals. Modern study spaces and advanced technology support students and researchers in learning and discovery.' },
      { image: { src: '/images/home/tab-innovation-2.jpg', width: 7156, height: 4776, widths: [512, 1024, 2048, 4096], alt: 'Modern interior library' }, text: 'Our central library is the hub of academic life, offering vast collections of books, e-journals, and digital resources. It provides students with a modern space to learn, collaborate, and conduct research.' },
    ],
  },
  {
    label: 'Community',
    cards: [
      { image: { src: '/images/home/tab-community-1.jpg', width: 5241, height: 3498, widths: [512, 1024, 2048, 4096], alt: 'young student looking book library' }, text: 'Our libraries offer thousands of books, digital resources, and journals. Modern study spaces and advanced technology support students and researchers in learning and discovery.' },
      { image: { src: '/images/home/tab-community-2.jpg', width: 5824, height: 3328, widths: [512, 1024, 2048, 4096], alt: 'Modern interior library' }, text: 'Our central library is the hub of academic life, offering vast collections of books, e-journals, and digital resources. It provides students with a modern space to learn, collaborate, and conduct research.' },
    ],
  },
];

export interface CampusCard {
  title: string;
  description: string;
  image: SiteImage;
}

/** "Inside the world of campus": four cards in two columns. */
export const campusCards: CampusCard[] = [
  { title: 'Sports & Wellness', description: 'State-of-the-art facilities supporting fitness athletics, providing students with top-notch equipment and training spaces.', image: { src: '/images/home/campus-sports-wellness.jpg', width: 4852, height: 3239, widths: [512, 1024, 2048, 4096], alt: 'Card Image' } },
  { title: 'Libaries', description: 'State-of-the-art facilities supporting fitness athletics, providing students with top-notch equipment and training spaces.', image: { src: '/images/home/campus-libraries.jpg', width: 2832, height: 4256, widths: [1024, 2048, 4096], alt: 'Card Image', position: '59.4% 15.1%' } },
  { title: 'Gym', description: 'State of the art facilities supporting fitness athletics, providing students with top-notch equipment and training spaces.', image: { src: '/images/home/campus-gym.jpg', width: 6755, height: 4508, widths: [512, 1024, 2048, 4096], alt: 'Card Image' } },
  { title: 'University Lab', description: 'State-of-the-art facilities supporting fitness athletics, providing students with top-notch equipment and training spaces.', image: { src: '/images/home/campus-university-lab.jpg', width: 3840, height: 2160, widths: [512, 1024, 2048], alt: 'Card Image' } },
];

export interface EventCard {
  title: string;
  year: string;
  place: string;
  href: string;
  image: SiteImage;
}

/**
 * "Upcoming events & activities". Desktop and tablet show the first five in a
 * staggered grid (two stacks flanking a large centre card); phone shows all
 * six in a column. `href` points at the template's event pages.
 */
export const events: EventCard[] = [
  { title: 'Perspectives On Higher Education', year: '2025', place: 'Examination Hall', href: '/events/perspectives-on-higher-education', image: { src: '/images/events/perspectives-on-higher-education.png', width: 2984, height: 2080, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { title: 'Digital Transformation', year: '2025', place: 'Research Library', href: '/events/digital-transformation', image: { src: '/images/events/digital-transformation.png', width: 2248, height: 1600, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { title: 'Graduate Open House', year: '2025', place: 'On Campus (All Faculties)', href: '/events/graduate-open-house', image: { src: '/images/events/graduate-open-house.png', width: 2984, height: 2080, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { title: 'Poetry & Philosophy', year: '2025', place: 'Heritage Garden', href: '/events/poetry-philosophy', image: { src: '/images/events/poetry-philosophy.png', width: 2248, height: 1600, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { title: 'Innovations In Medical Research', year: '2025', place: 'Convocation House', href: '/events/innovations-in-medical-research', image: { src: '/images/events/innovations-in-medical-research.png', width: 2984, height: 2080, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
  { title: 'Global Entrepreneurship Summit', year: '2025', place: 'Innovation Hub', href: '/events/global-entrepreneurship-summit', image: { src: '/images/events/global-entrepreneurship-summit.png', width: 2984, height: 2080, widths: [512, 1024, 2048], alt: 'Thumbnail Image' } },
];
