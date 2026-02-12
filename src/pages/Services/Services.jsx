import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { ANIMATIONS } from '../../utils/constants';
import { openWhatsApp } from '../../utils/helpers';
import { Reveal } from '../../components/common';
import { HowItWorks, FAQ } from '../../components/sections/Home';
import './Services.css';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Explore ChaarTech's comprehensive digital services: web development, app development, digital marketing, SEO optimization, UI/UX design, and cloud solutions."
                />
            </Helmet>

            {/* Services Grid Section */}
            <Reveal once={false}>
                <section className="svc-section">
                    <div className="container">
                        <motion.div
                            className="svc-header"
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <h1 className="svc-title">Our Services</h1>
                            <p className="svc-subtitle">
                                We partner with businesses to provide reliable technology solutions that
                                drive sustainable growth and digital excellence.
                            </p>
                        </motion.div>

                        <div className="svc-grid">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    className="svc-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.08 }}
                                >
                                    <div className="svc-card-icon">
                                        <service.icon size={22} />
                                    </div>
                                    <h3 className="svc-card-title">{service.title}</h3>
                                    <p className="svc-card-desc">{service.shortDescription}</p>
                                    <ul className="svc-card-features">
                                        {service.features.slice(0, 3).map((feature, i) => (
                                            <li key={i}>
                                                <CheckCircle size={14} className="svc-check" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}

                            {/* CTA Card */}
                            <motion.div
                                className="svc-card svc-card-cta"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + services.length * 0.08 }}
                            >
                                <h3 className="svc-cta-title">Need something else?</h3>
                                <p className="svc-cta-desc">
                                    We offer custom solutions tailored to your unique business needs.
                                </p>
                                <button
                                    className="svc-cta-link"
                                    onClick={() => openWhatsApp("Hi! I need a custom solution for my business.")}
                                >
                                    Get in Touch <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </Reveal>

            {/* Process Section */}
            <Reveal once={false}>
                <HowItWorks />
            </Reveal>

            {/* FAQ Section */}
            <FAQ />
        </>
    );
};

export default Services;
