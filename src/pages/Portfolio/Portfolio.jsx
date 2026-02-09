import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Layers, Briefcase, Award } from 'lucide-react';
import { Button } from '../../components/common';
import { portfolioProjects, categories } from '../../data/portfolio';
import { ANIMATIONS } from '../../utils/constants';
import { openWhatsApp } from '../../utils/helpers';
import './Portfolio.css';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? portfolioProjects
        : portfolioProjects.filter(project => project.category === activeCategory);

    return (
        <>
            <Helmet>
                <title>Our Portfolio - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Explore ChaarTech's portfolio of successful projects including web development, app development, digital marketing, and more."
                />
            </Helmet>

            {/* Hero Section - Stats Focused */}
            <section className="portfolio-hero-unique">
                <div className="container">
                    <motion.div
                        className="portfolio-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <div className="portfolio-hero-text">
                            <span className="hero-badge">Our Work</span>
                            <h1>Crafted with <span className="text-gradient">Precision</span></h1>
                            <p>
                                Real projects. Real results. Explore our portfolio of work
                                that has helped businesses grow and succeed.
                            </p>
                        </div>

                        <motion.div
                            className="portfolio-hero-stats"
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATIONS.staggerContainer}
                        >
                            <motion.div className="stat-box" variants={ANIMATIONS.staggerItem}>
                                <Briefcase size={24} />
                                <span className="stat-value">10+</span>
                                <span className="stat-text">Projects</span>
                            </motion.div>
                            <motion.div className="stat-box" variants={ANIMATIONS.staggerItem}>
                                <Layers size={24} />
                                <span className="stat-value">6</span>
                                <span className="stat-text">Industries</span>
                            </motion.div>
                            <motion.div className="stat-box" variants={ANIMATIONS.staggerItem}>
                                <Award size={24} />
                                <span className="stat-value">100%</span>
                                <span className="stat-text">Success Rate</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="portfolio-hero-decoration">
                    <div className="decoration-circle"></div>
                    <div className="decoration-circle-small"></div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="section portfolio-section">
                <div className="container">
                    {/* Filter Tabs */}
                    <motion.div
                        className="portfolio-filters"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATIONS.fadeInUp}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${activeCategory === category.id ? 'filter-btn-active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="portfolio-grid"
                        layout
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="portfolio-card"
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="portfolio-image">
                                        <div
                                            className="portfolio-image-placeholder"
                                            style={{ '--project-color': 'var(--color-primary)' }}
                                        >
                                            <span>{project.title.charAt(0)}</span>
                                        </div>
                                        <div className="portfolio-overlay">
                                            <span className="portfolio-category">{project.categoryLabel}</span>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="portfolio-tech">
                                            {project.technologies.slice(0, 3).map((tech, index) => (
                                                <span key={index} className="tech-badge">{tech}</span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="tech-badge">+{project.technologies.length - 3}</span>
                                            )}
                                        </div>
                                        <div className="portfolio-result">
                                            <strong>Result:</strong> {project.results}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="portfolio-empty">
                            <p>No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section portfolio-cta-section">
                <div className="container">
                    <motion.div
                        className="portfolio-cta-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATIONS.scaleIn}
                    >
                        <h2>Want to Be Our Next Success Story?</h2>
                        <p>Let's discuss your project and create something amazing together.</p>
                        <Button
                            size="lg"
                            variant="whatsapp"
                            rightIcon={<ArrowRight size={20} />}
                            onClick={() => openWhatsApp("Hi! I saw your portfolio and I'm interested in working with ChaarTech.")}
                        >
                            Start a Project
                        </Button>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
