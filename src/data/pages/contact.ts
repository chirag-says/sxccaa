/** Content of the contact page: the intro, contact details, social links and FAQ. */

export const contactPage = {
  title: 'Get In Touch With Us',
  intro: 'Whether you need admission guidance, course details, scholarships, or campus info, our team is here to guide you with care and support.',
  phone: '+1 (800) 555-0199',
  phoneHref: 'tel:+18005550199',
  email: 'admission@university.edu',
  emailHref: 'mailto:admission@university.edu',
  followLabel: 'Follow Us -',
  socials: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: '/svg/icons/social-linkedin.svg' },
    { name: 'X', href: 'https://x.com/', icon: '/svg/icons/social-x.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/', icon: '/svg/icons/social-instagram.svg' },
    { name: 'Dribbble', href: 'https://dribbble.com/', icon: '/svg/icons/social-dribbble.svg' },
  ],
  form: {
    nameLabel: 'Full name*',
    namePlaceholder: 'Mason Ethan',
    emailLabel: 'Email*',
    emailPlaceholder: 'yourmail@email.com',
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
  faqTitle: 'FAQS',
};

export interface FaqItem {
  question: string;
  answer: string;
}

/** The FAQ accordion. The first item opens by default. */
export const faq: FaqItem[] = [
  {
    question: 'How can I apply for admission?',
    answer: 'Our admissions team provides step-by-step guidance to help you complete the application process smoothly, ensuring all requirements are met on time.',
  },
  {
    question: 'What courses are available in my program?',
    answer: 'The courses available in your program depend on your major and year of study. Core courses are typically mandatory, while electives allow you to explore specialized topics. You can find the full course list in the academic catalog or on your program’s webpage. Contact your academic advisor for personalized guidance.',
  },
  {
    question: 'Are scholarships available?',
    answer: 'Yes, most universities offer a range of scholarships, including merit-based, need-based, and program-specific awards. Some are automatic upon admission, while others require a separate application. Visit the Scholarships or Financial Aid section on the university website for eligibility criteria and deadlines.',
  },
  {
    question: 'What is campus life like?',
    answer: "Campus life is vibrant and diverse, with a variety of student clubs, events, sports, and cultural activities. Whether you're interested in leadership, arts, volunteering, or recreation, there are many opportunities to get involved and build a community.",
  },
  {
    question: 'How do I access student support services?',
    answer: 'Student support services are usually available online and on campus. These include academic advising, counseling, career services, health services, and tutoring. You can access them through the university’s student portal, by visiting the student services center, or scheduling appointments directly.',
  },
  {
    question: 'Can I transfer from another university?',
    answer: 'Yes, many universities accept transfer students. You’ll need to submit your transcripts, meet minimum GPA requirements, and possibly provide course descriptions for credit evaluation. Check the university’s transfer admission page for detailed steps and deadlines.',
  },
];
