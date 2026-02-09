import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Smartphone, BarChart3, Palette, Cloud, Search } from 'lucide-react';
import { Button } from '../../components/common';
import { services, processSteps } from '../../data/services';
import { ANIMATIONS } from '../../utils/constants';
import { openWhatsApp } from '../../utils/helpers';
import './Services.css';

const Services = () => {
    const heroServices = [
        { icon: Code, label: 'Web Development' },
        { icon: Smartphone, label: 'Mobile Apps' },
        { icon: BarChart3, label: 'Digital Marketing' },
        { icon: Palette, label: 'UI/UX Design' },
        { icon: Cloud, label: 'Cloud Solutions' },
        { icon: Search, label: 'SEO' }
    ];

    return (
        <>
            <Helmet>
                <title>Our Services - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Explore ChaarTech's comprehensive digital services: web development, app development, digital marketing, SEO optimization, UI/UX design, and cloud solutions."
                />
            </Helmet>

            {/* Hero Section - Split Layout with Service Icons */}
            <section className="services-hero-unique">
                <div className="container">
                    <div className="services-hero-grid">
                        <motion.div
                            className="services-hero-left"
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATIONS.fadeInLeft}
                        >
                            <span className="hero-badge">What We Offer</span>
                            <h1>Digital Solutions <br />That <span className="text-gradient">Drive Results</span></h1>
                            <p>
                                From concept to launch, we provide end-to-end digital services
                                to help your business succeed in the digital age.
                            </p>
                            <div className="hero-actions">
                                <Button
                                    size="lg"
                                    rightIcon={<ArrowRight size={20} />}
                                    onClick={() => openWhatsApp("Hi! I'd like to discuss your services.")}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="services-hero-right"
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATIONS.fadeInRight}
                        >
                            <div className="services-icon-grid">
                                {heroServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="service-icon-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <service.icon size={28} />
                                        <span>{service.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="services-hero-bg-pattern" />
            </section>

            {/* Services List */}
            <section className="section services-list-section">
                <div className="container">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            className={`service-detail ${index % 2 === 1 ? 'service-detail-reverse' : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <div className="service-detail-content">
                                <div
                                    className="service-detail-icon"
                                    style={{ background: service.color }}
                                >
                                    <service.icon size={32} />
                                </div>
                                <h2>{service.title}</h2>
                                <p className="service-detail-description">{service.description}</p>

                                <h4>What's Included:</h4>
                                <ul className="service-features">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>
                                            <CheckCircle size={18} className="check-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="service-technologies">
                                    <span className="tech-label">Technologies:</span>
                                    <div className="tech-tags">
                                        {service.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <Button
                                    variant="primary"
                                    rightIcon={<ArrowRight size={18} />}
                                    onClick={() => openWhatsApp(`Hi! I'm interested in your ${service.title} services.`)}
                                >
                                    Get Started
                                </Button>
                            </div>

                            <div className="service-detail-visual">
                                <div
                                    className="service-visual-image"
                                    style={{ '--service-color': service.color }}
                                >
                                    <img src={service.image} alt={service.title} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <motion.section
                className="section process-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={ANIMATIONS.fadeInUp}
            >
                <div className="container">
                    <div
                        className="section-header"
                    >
                        <span className="section-label">Our Process</span>
                        <h2>How We Work</h2>
                        <p>
                            A proven approach that ensures your project is delivered on time and exceeds expectations.
                        </p>
                    </div>

                    <motion.div
                        className="process-grid"
                        variants={ANIMATIONS.staggerContainer}
                    >
                        {processSteps.map((step) => (
                            <motion.div
                                key={step.step}
                                className="process-card"
                                variants={ANIMATIONS.staggerItem}
                            >
                                <div className="process-number">{step.step}</div>
                                <div className="process-icon">
                                    <step.icon size={24} />
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>


        </>
    );
};

export default Services;
