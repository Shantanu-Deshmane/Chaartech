// Company Information
export const COMPANY = {
  name: 'ChaarTech',
  fullName: 'ChaarTech Technologies',
  tagline: 'Building Digital Futures',
  description: 'We transform ideas into powerful digital solutions. From stunning websites to cutting-edge apps, we help businesses thrive in the digital age.',
  founded: 2026,
  email: 'info@chaartech.in',
  phone: '+91 7666964743',
  whatsapp: '917666964743',
  address: 'India',
  social: {
    linkedin: 'https://linkedin.com/company/chaartech',
    twitter: 'https://twitter.com/chaartech',
    instagram: 'https://instagram.com/chaartech',
  }
};

// WhatsApp Configuration
export const WHATSAPP = {
  number: '917666964743',
  defaultMessage: 'Hi ChaarTech! I\'m interested in your services. I would like to know more about:',
  ctaMessage: 'Hi! I visited your website and would love to discuss a project with you.',
  serviceInquiry: (service) => `Hi! I'm interested in your ${service} services. Can we discuss?`,
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Web Development', path: '/services#web' },
    { name: 'App Development', path: '/services#app' },
    { name: 'Digital Marketing', path: '/services#marketing' },
    { name: 'SEO Optimization', path: '/services#seo' },
  ],
  resources: [
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/services#faq' },
    { name: 'Support', path: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ],
};

// Animation Variants for Framer Motion
export const ANIMATIONS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
};

// SEO Default Meta
export const SEO_DEFAULTS = {
  titleTemplate: '%s | ChaarTech Technologies',
  defaultTitle: 'ChaarTech Technologies - Building Digital Futures',
  description: 'ChaarTech Technologies is a leading digital solutions company offering web development, app development, digital marketing, and SEO services.',
  keywords: 'web development, app development, digital marketing, SEO, website design, mobile apps, react, nodejs',
  author: 'ChaarTech Technologies',
  siteUrl: 'https://chaartech.com',
  image: '/og-image.jpg',
};
