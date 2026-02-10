import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Reveal } from '../../components/common';
import { COMPANY, ANIMATIONS } from '../../utils/constants';
import './Legal.css';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - ChaarTech Technologies</title>
                <meta name="description" content="Privacy Policy for ChaarTech Technologies" />
            </Helmet>

            <Reveal once={false}>
                <section className="legal-hero">
                    <div className="legal-hero-bg" />
                    <div className="container">
                        <motion.div className="legal-hero-content" initial="hidden" animate="visible" variants={ANIMATIONS.fadeInUp}>
                            <h1>Privacy Policy</h1>
                            <p>Last updated: February 2026</p>
                        </motion.div>
                    </div>
                </section>
            </Reveal>

            <Reveal once={false}>
                <section className="section legal-section">
                    <div className="container">
                        <motion.div className="legal-content" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={ANIMATIONS.fadeInUp}>
                            <h2>1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via WhatsApp or email.</p>
                            <p>This may include your name, email address, phone number, and details about your project requirements.</p>

                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Send you project updates and relevant communications</li>
                                <li>Improve our services and website experience</li>
                                <li>Comply with legal obligations</li>
                            </ul>

                            <h2>3. Information Sharing</h2>
                            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.</p>

                            <h2>4. Data Security</h2>
                            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

                            <h2>5. Cookies</h2>
                            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>

                            <h2>6. Third-Party Links</h2>
                            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>

                            <h2>7. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal information. Contact us at {COMPANY.email} to exercise these rights.</p>

                            <h2>8. Changes to This Policy</h2>
                            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

                            <h2>9. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at {COMPANY.email}.</p>
                        </motion.div>
                    </div>
                </section>
            </Reveal>
        </>
    );
};

export default PrivacyPolicy;
