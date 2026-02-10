import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button, CountUp } from '../../common';
import { ANIMATIONS } from '../../../utils/constants';
import { openWhatsApp } from '../../../utils/helpers';
import './Hero.css';

const Hero = () => {
    return (
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
                        YOUR GROWTH PARTNER IN TECH
                    </motion.span>
                    <motion.h1
                        className="hero-title-next"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        We Build Digital<br />
                        Products That<br />
                        People <span className="hero-highlight">Love.</span>
                    </motion.h1>
                    <motion.p
                        className="hero-description-next"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        From stunning websites to powerful apps — we turn your ideas into
                        beautiful, scalable products that drive real business results.
                    </motion.p>
                    <motion.div
                        className="hero-cta-next"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <Button
                            size="md"
                            rightIcon={<ArrowRight size={18} />}
                            onClick={() => openWhatsApp("Hi! I'd love to discuss a project with ChaarTech.")}
                        >
                            START YOUR PROJECT
                        </Button>
                        <Button
                            variant="outline"
                            size="md"
                            as={Link}
                            to="/services"
                        >
                            EXPLORE SERVICES
                        </Button>
                    </motion.div>
                    <motion.div
                        className="hero-trust"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <div className="trust-chip">
                            <span className="trust-number">
                                <CountUp end={100} suffix="+" />
                            </span>
                            <span className="trust-label">Projects Delivered</span>
                        </div>
                        <div className="trust-divider" />
                        <div className="trust-chip">
                            <span className="trust-number">
                                <CountUp end={50} suffix="+" />
                            </span>
                            <span className="trust-label">Happy Clients</span>
                        </div>
                        <div className="trust-divider" />
                        <div className="trust-chip">
                            <span className="trust-number">
                                <CountUp end={4.9} decimals={1} suffix="★" />
                            </span>
                            <span className="trust-label">Client Rating</span>
                        </div>
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
    );
};

export default Hero;
