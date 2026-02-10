import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Linkedin,
    Twitter,
    Github,
    Lightbulb,
    Target,
    Award,
    Handshake,
    TrendingUp,
    Zap,
    Code,
    Palette,
    Smartphone,
    BarChart3,
    Rocket,
    CheckCircle,
    Users,
    Clock,
    Eye,
    Shield
} from 'lucide-react';
import { Button, CountUp, Reveal } from '../../components/common';
import { team, values, milestones } from '../../data/team';
import { COMPANY, ANIMATIONS } from '../../utils/constants';
import { openWhatsApp } from '../../utils/helpers';
import './About.css';

// Icon mapping for values
const iconMap = {
    Lightbulb: Lightbulb,
    Target: Target,
    Award: Award,
    Handshake: Handshake,
    TrendingUp: TrendingUp,
    Zap: Zap
};

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Learn about ChaarTech Technologies - a digital solutions company founded in 2026, dedicated to helping businesses succeed online."
                />
            </Helmet>

            {/* Vision Section - Engineering the Future */}
            <section className="vision-section">
                <div className="vision-bg">
                    {/* Floating Cubes */}
                    <div className="cube cube-1"></div>
                    <div className="cube cube-2"></div>
                    <div className="cube cube-3"></div>
                    <div className="cube cube-4"></div>
                    <div className="cube cube-5"></div>
                    <div className="cube cube-6"></div>
                    <div className="cube cube-7"></div>
                    <div className="cube cube-8"></div>
                    <div className="cube-lines"></div>
                </div>

                <Reveal once={false}>
                    <div className="container">
                        <div className="vision-grid">
                            <motion.div
                                className="vision-left"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="vision-label">// SYSTEM_VISION_01</span>
                                <h1>Engineering the<br />Future.</h1>
                                <p>
                                    To build a world where technology is a seamless
                                    extension of human intent, crafted with
                                    mathematical precision and artistic care.
                                </p>
                            </motion.div>

                            <motion.div
                                className="vision-right"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="vision-label">// CORE_MISSION_02</span>
                                <h2>BRIDGING THE GAP BETWEEN BLOATED TECH AND HUMAN-CRAFTED SOLUTIONS.</h2>

                                <div className="vision-features">
                                    <div className="vision-feature">
                                        <Eye size={18} />
                                        <div>
                                            <h4>RADICAL TRANSPARENCY</h4>
                                            <p>Every line of code serves a purpose. No fluff, no waste.</p>
                                        </div>
                                    </div>
                                    <div className="vision-feature">
                                        <Shield size={18} />
                                        <div>
                                            <h4>TECHNICAL RIGOR</h4>
                                            <p>We don't just ship; we engineer for high-availability and scale.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="vision-terminal"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="terminal-header">
                                <span className="terminal-dot red"></span>
                                <span className="terminal-dot yellow"></span>
                                <span className="terminal-dot green"></span>
                                <span className="terminal-title">CHAARTECH_MOTIVE_OUTPUT_LOG_v2.0</span>
                            </div>
                            <div className="terminal-body">
                                <span className="terminal-prompt">&gt;</span>
                                <p>
                                    "Technology has become a layer of complexity instead of
                                    a tool for clarity. We founded Chaartech to strip away
                                    the noise and return to raw engineering excellence."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Reveal>
            </section>

            {/* Hero Section - Services Focused */}
            <Reveal once={false}>
                <section className="about-hero about-hero-alt">
                    <div className="container">
                        <motion.div
                            className="about-hero-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <span className="section-label">About ChaarTech</span>
                            <h1>Transforming Ideas Into Digital Excellence</h1>
                            <p>
                                We craft innovative web solutions, mobile applications, and digital strategies
                                that help businesses thrive in today's competitive landscape.
                            </p>
                            <div className="hero-services-grid">
                                <div className="hero-service-item">
                                    <Code size={24} />
                                    <span>Web Development</span>
                                </div>
                                <div className="hero-service-item">
                                    <Smartphone size={24} />
                                    <span>Mobile Apps</span>
                                </div>
                                <div className="hero-service-item">
                                    <Palette size={24} />
                                    <span>UI/UX Design</span>
                                </div>
                                <div className="hero-service-item">
                                    <BarChart3 size={24} />
                                    <span>Digital Marketing</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </Reveal>

            {/* Why Choose Us Section - Replacing Story Section */}
            <Reveal once={false}>
                <section className="section why-choose-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            style={{ paddingBottom: '40px' }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <span className="section-label">Why Choose Us</span>
                            <h2>What Sets Us Apart</h2>
                        </motion.div>

                        <div className="why-choose-grid">
                            <motion.div
                                className="why-choose-content"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={ANIMATIONS.fadeInLeft}
                            >
                                <div className="why-choose-item">
                                    <div className="why-choose-icon">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div className="why-choose-text">
                                        <h3>End-to-End Solutions</h3>
                                        <p>From concept to deployment, we handle every aspect of your digital project with precision and expertise.</p>
                                    </div>
                                </div>
                                <div className="why-choose-item">
                                    <div className="why-choose-icon">
                                        <Users size={24} />
                                    </div>
                                    <div className="why-choose-text">
                                        <h3>Dedicated Team</h3>
                                        <p>Our skilled professionals work as an extension of your team, ensuring seamless collaboration.</p>
                                    </div>
                                </div>
                                <div className="why-choose-item">
                                    <div className="why-choose-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div className="why-choose-text">
                                        <h3>On-Time Delivery</h3>
                                        <p>We respect deadlines and deliver quality solutions within agreed timelines, every time.</p>
                                    </div>
                                </div>
                                <div className="why-choose-item">
                                    <div className="why-choose-icon">
                                        <Rocket size={24} />
                                    </div>
                                    <div className="why-choose-text">
                                        <h3>Scalable Solutions</h3>
                                        <p>We build with growth in mind, ensuring your digital assets scale seamlessly with your business.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="why-choose-stats"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={ANIMATIONS.fadeInRight}
                            >
                                <div className="stats-card">
                                    <div className="stat-item">
                                        <span className="stat-number">
                                            <CountUp end={10} suffix="+" />
                                        </span>
                                        <span className="stat-label">Projects Delivered</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">
                                            <CountUp end={100} suffix="%" />
                                        </span>
                                        <span className="stat-label">Client Satisfaction</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">
                                            <CountUp end={4} />
                                        </span>
                                        <span className="stat-label">Expert Founders</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">
                                            <CountUp end={24} suffix="/7" />
                                        </span>
                                        <span className="stat-label">Support Available</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </Reveal>

            {/* Values Section */}
            <Reveal once={false}>
                <section className="section values-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <span className="section-label">Our Values</span>
                            <h2>What Drives Us</h2>
                            <p>
                                Our core values guide every decision we make and every project we deliver.
                            </p>
                        </motion.div>

                        <motion.div
                            className="values-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.staggerContainer}
                        >
                            {values.map((value) => {
                                const IconComponent = iconMap[value.iconName];
                                return (
                                    <motion.div
                                        key={value.id}
                                        className="value-card"
                                        variants={ANIMATIONS.staggerItem}
                                    >
                                        <div className="value-icon">
                                            {IconComponent && <IconComponent size={28} />}
                                        </div>
                                        <h3>{value.title}</h3>
                                        <p>{value.description}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>
            </Reveal>

            {/* Timeline Section - Centered with Alternating Layout */}
            <Reveal once={false}>
                <section className="section timeline-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <span className="section-label">Our Journey</span>
                            <h2>Milestones</h2>
                        </motion.div>

                        <motion.div
                            className="timeline-centered"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.staggerContainer}
                        >
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    className={`timeline-item-centered ${index % 2 === 0 ? 'left' : 'right'}`}
                                    variants={ANIMATIONS.staggerItem}
                                >
                                    <div className="timeline-content-centered">
                                        <span className="timeline-date">{milestone.year} {milestone.quarter}</span>
                                        <h4>{milestone.title}</h4>
                                        <p>{milestone.description}</p>
                                    </div>
                                    <div className="timeline-marker-centered" />
                                </motion.div>
                            ))}
                            <div className="timeline-line" />
                        </motion.div>
                    </div>
                </section>
            </Reveal>

            {/* Team Section - 4 Cards in One Row */}
            <Reveal once={false}>
                <section className="section team-section" id="team">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            style={{ textAlign: 'center', marginBottom: '60px' }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInUp}
                        >
                            <span className="section-label">Our Team</span>
                            <h2>Brains Behind ChaarTech</h2>
                        </motion.div>

                        <motion.div
                            className="team-grid-four"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.staggerContainer}
                        >
                            {team.map((member) => (
                                <motion.div
                                    key={member.id}
                                    className="team-card"
                                    variants={ANIMATIONS.staggerItem}
                                >
                                    <div className="team-avatar">
                                        <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-bio">{member.bio}</p>
                                    <div className="team-skills">
                                        {member.skills.map((skill, index) => (
                                            <span key={index} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="team-social">
                                        <a href={member.social.linkedin} aria-label="LinkedIn">
                                            <Linkedin size={18} />
                                        </a>
                                        <a href={member.social.twitter} aria-label="Twitter">
                                            <Twitter size={18} />
                                        </a>
                                        <a href={member.social.github} aria-label="GitHub">
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </Reveal>

            {/* CTA Section */}
            <Reveal once={false}>
                <section className="section about-cta-section">
                    <div className="container">
                        <motion.div
                            className="about-cta-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.scaleIn}
                        >
                            <h2>Ready to Build Something Amazing?</h2>
                            <p>Let's discuss how we can help bring your vision to life.</p>
                            <Button
                                size="lg"
                                variant="primary"
                                rightIcon={<ArrowRight size={20} />}
                                onClick={() => openWhatsApp("Hi! I'm interested in working with ChaarTech.")}
                            >
                                Start a Conversation
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </Reveal>
        </>
    );
};

export default About;
