import { Globe, Smartphone, TrendingUp, Search, Palette, Cloud, Code, Shield, Zap, Database } from 'lucide-react';

export const services = [
    {
        id: 'web',
        icon: Globe,
        title: 'Website Development',
        shortDescription: 'Custom, responsive websites that convert visitors into customers.',
        description: 'We build stunning, fast, and SEO-optimized websites tailored to your business needs. From simple landing pages to complex e-commerce platforms, we deliver pixel-perfect solutions.',
        features: [
            'Custom Website Design',
            'E-commerce Solutions',
            'CMS Integration (WordPress, Strapi)',
            'Progressive Web Apps (PWA)',
            'Landing Page Design',
            'Website Maintenance'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify'],
        color: 'var(--color-primary)'
    },
    {
        id: 'app',
        icon: Smartphone,
        title: 'App Development',
        shortDescription: 'Native and cross-platform mobile apps for iOS and Android.',
        description: 'Transform your ideas into powerful mobile applications. We develop intuitive, high-performance apps that users love and businesses rely on.',
        features: [
            'iOS App Development',
            'Android App Development',
            'Cross-Platform (React Native, Flutter)',
            'App UI/UX Design',
            'API Integration',
            'App Store Optimization'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
        color: 'var(--color-secondary)'
    },
    {
        id: 'marketing',
        icon: TrendingUp,
        title: 'Digital Marketing',
        shortDescription: 'Data-driven marketing strategies that grow your business.',
        description: 'Reach your target audience with strategic digital marketing campaigns. We combine creativity with analytics to deliver measurable results.',
        features: [
            'Social Media Marketing',
            'Pay-Per-Click (PPC) Advertising',
            'Content Marketing',
            'Email Marketing',
            'Influencer Marketing',
            'Marketing Analytics'
        ],
        technologies: ['Google Ads', 'Meta Ads', 'HubSpot', 'Mailchimp', 'Analytics'],
        color: 'var(--color-accent)'
    },
    {
        id: 'seo',
        icon: Search,
        title: 'SEO Optimization',
        shortDescription: 'Boost your search rankings and organic traffic.',
        description: 'Get found by your customers with our comprehensive SEO services. We optimize your online presence to rank higher and drive qualified traffic.',
        features: [
            'Technical SEO Audit',
            'On-Page Optimization',
            'Off-Page SEO & Link Building',
            'Local SEO',
            'Keyword Research',
            'SEO Reporting & Analytics'
        ],
        technologies: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Moz', 'Screaming Frog'],
        color: 'var(--color-success)'
    },
    {
        id: 'design',
        icon: Palette,
        title: 'UI/UX Design',
        shortDescription: 'Beautiful, intuitive designs that delight users.',
        description: 'Create memorable user experiences with our design expertise. We combine aesthetics with usability to craft interfaces that engage and convert.',
        features: [
            'User Research & Analysis',
            'Wireframing & Prototyping',
            'Visual Design',
            'Design Systems',
            'Usability Testing',
            'Brand Identity Design'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
        color: 'var(--color-warning)'
    },
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Cloud Solutions',
        shortDescription: 'Scalable cloud infrastructure for modern businesses.',
        description: 'Leverage the power of cloud computing to scale your business. We provide end-to-end cloud solutions from migration to management.',
        features: [
            'Cloud Migration',
            'Infrastructure Setup',
            'DevOps & CI/CD',
            'Cloud Security',
            'Performance Optimization',
            '24/7 Monitoring & Support'
        ],
        technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
        color: 'var(--color-info)'
    }
];

export const processSteps = [
    {
        step: 1,
        icon: Search,
        title: 'Discovery',
        description: 'We start by understanding your business, goals, target audience, and competitors to create a tailored strategy.'
    },
    {
        step: 2,
        icon: Palette,
        title: 'Design',
        description: 'Our designers create wireframes and visual designs that align with your brand and delight your users.'
    },
    {
        step: 3,
        icon: Code,
        title: 'Development',
        description: 'Our developers bring designs to life using cutting-edge technologies and best practices.'
    },
    {
        step: 4,
        icon: Shield,
        title: 'Testing',
        description: 'Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.'
    },
    {
        step: 5,
        icon: Zap,
        title: 'Launch',
        description: 'We deploy your solution and provide training to ensure a smooth launch.'
    },
    {
        step: 6,
        icon: TrendingUp,
        title: 'Growth',
        description: 'Post-launch support, analytics, and optimization to help your business grow continuously.'
    }
];

export const homeMethodology = [
    {
        id: '01',
        title: 'Discovery',
        description: 'Defining the blueprint. We dissect your business logic to find the core friction points before a single line of code is committed.',
        icon: Search,
    },
    {
        id: '02',
        title: 'Synthesize',
        description: 'Engineering the core. We translate blueprint logic into a modular, high-performance systems designed for atomic scalability.',
        icon: Zap,
    },
    {
        id: '03',
        title: 'Materialize',
        description: 'Scaling to production. The final manifestation of the digital product, rigorously tested for uptime, security, and human experience.',
        icon: Smartphone,
    }
];

export const innovationCards = [
    {
        id: '1',
        title: 'Atomic Scalability',
        description: 'Architecture designed for micro-modularity, add capacity without refactoring the foundation.',
        icon: Zap,
    },
    {
        id: '2',
        title: 'Human-Centric UX',
        description: 'Complexity hidden behind intuitive interfaces. We build for the people who actually use the tech.',
        icon: Smartphone,
    },
    {
        id: '3',
        title: 'Legacy Integration',
        description: 'Bridging the gap between historic systems and modern tech stacks without disruption.',
        icon: Database,
    },
    {
        id: '4',
        title: 'Zero-Trust Backbone',
        description: 'Security isn\'t a feature, it\'s the environment. Encrypted at rest, in transit, and in execution.',
        icon: Shield,
    }
];

export default services;
