import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    MessageSquare,
    Zap,
    Smartphone,
    Search,
    Database,
    Shield,
    CheckCircle,
    Users,
    Clock,
    Rocket,
    Quote,
    Star
} from 'lucide-react';
import { Button } from '../../components/common';
import { homeMethodology, innovationCards } from '../../data/services';
import { testimonialsData } from '../../data/testimonials';
import { ANIMATIONS } from '../../utils/constants';
import { openWhatsApp } from '../../utils/helpers';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page-container">
            <Helmet>
                <title>ChaarTech - Engineering the Next Epoch of Technology</title>
                <meta
                    name="description"
                    content="Human-crafted software solutions built for pragmatism and scale. We don't just build software, we engineer architectural legacies."
                />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-next">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content-next"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATIONS.staggerContainer}
                    >
                        <motion.span
                            className="hero-subtitle"
                            variants={ANIMATIONS.fadeInDown}
                        >
                            BUILT FOR THE FUTURE
                        </motion.span>
                        <motion.h1
                            className="hero-title-next"
                            variants={ANIMATIONS.fadeInUp}
                        >
                            Engineering the<br />
                            <span className="hero-highlight">Next Epoch</span><br />
                            of Technology.
                        </motion.h1>
                        <motion.p
                            className="hero-description-next"
                            variants={ANIMATIONS.fadeInUp}
                        >
                            Human-crafted B2B/B2C solutions built for pragmatism and scale.
                            We don't just build software, we engineer architectural legacies.
                        </motion.p>
                        <motion.div
                            className="hero-cta-next"
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <Button
                                size="lg"
                                rightIcon={<ArrowRight size={20} />}
                                as={Link}
                                to="/services"
                            >
                                OUR SERVICES
                            </Button>
                            <Button
                                variant="outline-light"
                                size="lg"
                                onClick={() => openWhatsApp("Hi! I'm interested in discussing a project with ChaarTech.")}
                            >
                                GET IN TOUCH
                            </Button>
                        </motion.div>
                    </motion.div>

                    <div className="hero-visual">
                        <div className="floating-cube">
                            <div className="cube-face front"></div>
                            <div className="cube-face back"></div>
                            <div className="cube-face left"></div>
                            <div className="cube-face right"></div>
                            <div className="cube-face top"></div>
                            <div className="cube-face bottom"></div>
                        </div>
                        <div className="visual-background"></div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div>
                        <span className="m_scroll_arrows first"></span>
                        <span className="m_scroll_arrows second"></span>
                        <span className="m_scroll_arrows third"></span>
                    </div>
                </motion.div>
            </section>



            {/* Why Choose Us Section */}
            <motion.section
                className="why-choose-home-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={ANIMATIONS.fadeInUp}
            >
                <div className="container">
                    <div
                        className="section-header-center"
                    >
                        <span className="section-label-light">WHY CHOOSE US</span>
                        <h2 className="section-title-light">What Sets Us Apart</h2>
                    </div>

                    <div className="why-choose-home-grid">
                        <motion.div
                            className="why-choose-home-item"
                            variants={ANIMATIONS.staggerItem}
                        >
                            <div className="why-choose-home-icon">
                                <CheckCircle size={28} />
                            </div>
                            <h3>End-to-End Solutions</h3>
                            <p>From concept to deployment, we handle every aspect of your digital project with precision.</p>
                        </motion.div>

                        <motion.div
                            className="why-choose-home-item"
                            variants={ANIMATIONS.staggerItem}
                        >
                            <div className="why-choose-home-icon">
                                <Users size={28} />
                            </div>
                            <h3>Dedicated Team</h3>
                            <p>Our skilled professionals work as an extension of your team, ensuring seamless collaboration.</p>
                        </motion.div>

                        <motion.div
                            className="why-choose-home-item"
                            variants={ANIMATIONS.staggerItem}
                        >
                            <div className="why-choose-home-icon">
                                <Clock size={28} />
                            </div>
                            <h3>On-Time Delivery</h3>
                            <p>We respect deadlines and deliver quality solutions within agreed timelines, every time.</p>
                        </motion.div>

                        <motion.div
                            className="why-choose-home-item"
                            variants={ANIMATIONS.staggerItem}
                        >
                            <div className="why-choose-home-icon">
                                <Rocket size={28} />
                            </div>
                            <h3>Scalable Solutions</h3>
                            <p>We build with growth in mind, ensuring your digital assets scale seamlessly with your business.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Methodology Section */}
            <motion.section
                className="methodology-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={ANIMATIONS.fadeInUp}
            >
                <div className="container">
                    <div
                        className="methodology-header"
                    >
                        <h2 className="methodology-title">
                            The Chaartech <span className="italic-text">Methodology</span>
                        </h2>
                        <p className="methodology-subtitle">
                            Precision is our primary constraint. Every project follows a rigorous quasi-linear path from
                            ambiguity to production integrity.
                        </p>
                    </div>

                    <div className="methodology-steps">
                        {homeMethodology.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="methodology-step"
                                variants={ANIMATIONS.fadeInUp}
                            >
                                <div className="step-content">
                                    <span className="step-number-floating">STEP {step.id}</span>
                                    <h3>{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>

                                <div className="step-marker">
                                    <step.icon size={20} />
                                </div>

                                <div className="step-visual">
                                    <div className="step-visual-box">
                                        <div className="visual-bar"></div>
                                        <div className="visual-dot"></div>
                                    </div>
                                </div>
                                <div className="step-bg-number">{step.id}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Founding Principle Section */}
            <section className="founding-principle-section">
                <div className="container">
                    <motion.div
                        className="founding-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="founding-label">FOUNDING PRINCIPLE</span>
                        <blockquote className="founding-quote">
                            "Technology has become a layer of complexity instead of a tool for clarity. We founded Chaartech to strip away the noise and return to raw engineering excellence."
                        </blockquote>
                        <div className="founding-footer">
                            <span className="founding-line"></span>
                            <span className="founding-motive">THE CHAARTECH MOTIVE</span>
                            <span className="founding-line"></span>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Innovation Section */}
            <motion.section
                className="innovation-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={ANIMATIONS.fadeInUp}
            >
                <div className="container">
                    <div className="innovation-grid">
                        <motion.div
                            className="innovation-sidebar"
                            variants={ANIMATIONS.fadeInLeft}
                        >
                            <span className="sidebar-label">THE VALUES</span>
                            <h2 className="innovation-title">
                                Pragmatic<br />
                                <span className="italic-text">Innovation</span>
                            </h2>
                            <p className="innovation-description">
                                We reject the "move fast and break things" mantra.
                                We prefer "move with intent and build things that last."
                            </p>
                            <Link to="/services" className="innovation-link">
                                OUR TECHNICAL STACK <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <div className="innovation-cards">
                            {innovationCards.map((card) => (
                                <motion.div
                                    key={card.id}
                                    className="innovation-card"
                                    variants={ANIMATIONS.staggerItem}
                                >
                                    <div className="card-icon">
                                        <card.icon size={24} />
                                    </div>
                                    <h3 className="card-title">{card.title}</h3>
                                    <p className="card-description">{card.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="testimonials-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={ANIMATIONS.fadeInUp}
            >
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-label-light">CLIENTS FEEDBACK</span>
                        <h2 className="section-title-light">What They Say About Us</h2>
                    </div>

                    <div className="testimonials-grid-staggered">
                        {testimonialsData.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="testimonial-card-unique"
                                variants={ANIMATIONS.staggerItem}
                                whileHover={{ y: -10, zIndex: 10, scale: 1.02 }}
                            >
                                <div className="quote-icon-container">
                                    <Quote size={24} fill="currentColor" />
                                </div>
                                <p className="testimonial-message">"{testimonial.message}"</p>
                                <div className="testimonial-footer">
                                    <div className="rating-stars">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={14} fill="#ffc107" color="#ffc107" />
                                        ))}
                                    </div>
                                    <h4 className="client-name">{testimonial.name}</h4>
                                    <span className="client-role">{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Final Hook */}
            <motion.section
                className="cta-final"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={ANIMATIONS.scaleIn}
            >
                <div className="container">
                    <div
                        className="cta-final-content"
                    >
                        <h2 className="cta-final-title">
                            Ready to engineer your next epoch?
                        </h2>
                        <div className="cta-final-buttons">
                            <Button
                                size="lg"
                                onClick={() => openWhatsApp("Let's build the next epoch of technology together.")}
                            >
                                CONTACT OUR TEAM
                            </Button>
                            <Button
                                variant="outline-light"
                                size="lg"
                                as={Link}
                                to="/services"
                            >
                                VIEW SERVICES
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
