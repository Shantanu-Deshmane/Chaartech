import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Palette, Camera, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../../components/common';
import { ANIMATIONS } from '../../utils/constants';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'The Portrait House',
        category: 'Photography Website',
        description: 'A luxury photography studio website for The Portrait House in Karad, Maharashtra. Featuring elegant monochrome design, responsive gallery, client testimonials, and booking functionality.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        liveUrl: 'https://the-portrait-house-ghg.vercel.app/',
        icon: Camera,
        color: '#8B5CF6',
        status: 'live',
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        category: 'Web Application',
        description: 'A full-stack e-commerce platform with product management, cart functionality, payment integration, and analytics dashboard.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        icon: Globe,
        color: '#3B82F6',
        status: 'coming-soon',
    },
    {
        id: 3,
        title: 'Brand Identity Suite',
        category: 'UI/UX Design',
        description: 'Complete brand identity and design system for a fintech startup, including logo design, color palette, typography, and UI component library.',
        technologies: ['Figma', 'Adobe Illustrator', 'Design Systems'],
        icon: Palette,
        color: '#F59E0B',
        status: 'coming-soon',
    }
];

const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Explore ChaarTech's portfolio of delivered projects including websites, web apps, and design solutions."
                />
            </Helmet>

            {/* Hero */}
            <section className="portfolio-hero">
                <div className="container">
                    <motion.div
                        className="portfolio-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <span className="section-label">
                            <Globe size={14} />
                            Our Work
                        </span>
                        <h1>Projects We've <span className="gradient-text">Delivered</span></h1>
                        <p className="portfolio-hero-desc">
                            Real solutions we've built for real businesses. Each project reflects our
                            commitment to quality, performance, and beautiful design.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="portfolio-projects">
                <div className="container">
                    <div className="portfolio-grid">
                        {projects.map((project, index) => (
                            <Reveal key={project.id} delay={index * 0.1}>
                                <motion.div
                                    className={`portfolio-card ${project.status === 'coming-soon' ? 'portfolio-card-coming' : ''}`}
                                    whileHover={project.status === 'live' ? { y: -6 } : {}}
                                >
                                    {/* Card Header */}
                                    <div className="portfolio-card-header" style={{ '--project-color': project.color }}>
                                        <div className="portfolio-card-icon">
                                            <project.icon size={24} />
                                        </div>
                                        {project.status === 'coming-soon' && (
                                            <span className="portfolio-badge">
                                                <Clock size={12} />
                                                Coming Soon
                                            </span>
                                        )}
                                        {project.status === 'live' && (
                                            <span className="portfolio-badge portfolio-badge-live">
                                                Live
                                            </span>
                                        )}
                                    </div>

                                    {/* Card Body */}
                                    <div className="portfolio-card-body">
                                        <span className="portfolio-category">{project.category}</span>
                                        <h3 className="portfolio-card-title">{project.title}</h3>
                                        <p className="portfolio-card-desc">{project.description}</p>

                                        <div className="portfolio-tech">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="portfolio-tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="portfolio-card-footer">
                                        {project.status === 'live' ? (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="portfolio-link"
                                            >
                                                View Live Site <ExternalLink size={16} />
                                            </a>
                                        ) : (
                                            <span className="portfolio-coming-text">
                                                Under Development
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="portfolio-cta">
                <div className="container">
                    <Reveal>
                        <div className="portfolio-cta-content">
                            <h2>Have a project in mind?</h2>
                            <p>Let's build something amazing together.</p>
                            <Link to="/contact" className="portfolio-cta-btn">
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
