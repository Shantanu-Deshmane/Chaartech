export const portfolioProjects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'web',
        categoryLabel: 'Web Development',
        description: 'A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.',
        image: null,
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        client: 'RetailMax',
        year: 2026,
        features: ['User Authentication', 'Payment Gateway', 'Admin Dashboard', 'Order Tracking'],
        results: '200% increase in online sales'
    },
    {
        id: 2,
        title: 'Food Delivery App',
        category: 'app',
        categoryLabel: 'App Development',
        description: 'Cross-platform mobile app for food ordering with real-time tracking and in-app payments.',
        image: null,
        technologies: ['React Native', 'Firebase', 'Google Maps API'],
        client: 'FoodieExpress',
        year: 2026,
        features: ['Real-time Tracking', 'Push Notifications', 'Rating System', 'Multiple Payment Options'],
        results: '10,000+ downloads in first month'
    },
    {
        id: 3,
        title: 'Healthcare Booking System',
        category: 'web',
        categoryLabel: 'Web Development',
        description: 'Patient appointment booking and management system with video consultation integration.',
        image: null,
        technologies: ['Next.js', 'PostgreSQL', 'Twilio', 'AWS'],
        client: 'HealthFirst Clinic',
        year: 2026,
        features: ['Online Booking', 'Video Consultations', 'Medical Records', 'Prescription Management'],
        results: '60% reduction in no-shows'
    },
    {
        id: 4,
        title: 'Digital Marketing Campaign',
        category: 'marketing',
        categoryLabel: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategy including SEO, PPC, and social media marketing.',
        image: null,
        technologies: ['Google Ads', 'Meta Ads', 'SEMrush', 'HubSpot'],
        client: 'GrowthHub India',
        year: 2026,
        features: ['SEO Optimization', 'PPC Campaigns', 'Content Strategy', 'Analytics Dashboard'],
        results: '300% increase in organic traffic'
    },
    {
        id: 5,
        title: 'Corporate Website Redesign',
        category: 'design',
        categoryLabel: 'UI/UX Design',
        description: 'Complete brand refresh and website redesign with modern aesthetics and improved UX.',
        image: null,
        technologies: ['Figma', 'React', 'GSAP', 'Framer Motion'],
        client: 'TechStart Solutions',
        year: 2026,
        features: ['Brand Identity', 'Responsive Design', 'Interactive Animations', 'Accessibility'],
        results: '150% increase in lead conversion'
    },
    {
        id: 6,
        title: 'Cloud Migration Project',
        category: 'cloud',
        categoryLabel: 'Cloud Solutions',
        description: 'Migrated legacy infrastructure to AWS with improved scalability and 99.9% uptime.',
        image: null,
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        client: 'CloudNine Tech',
        year: 2026,
        features: ['Auto-scaling', 'Load Balancing', 'CI/CD Pipeline', '24/7 Monitoring'],
        results: '40% reduction in infrastructure costs'
    }
];

export const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'cloud', label: 'Cloud Solutions' }
];

export default portfolioProjects;
