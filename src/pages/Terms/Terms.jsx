import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { COMPANY, ANIMATIONS } from '../../utils/constants';
import '../Privacy/Legal.css';

const Terms = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service - ChaarTech Technologies</title>
                <meta name="description" content="Terms of Service for ChaarTech Technologies" />
            </Helmet>

            <section className="legal-hero">
                <div className="legal-hero-bg" />
                <div className="container">
                    <motion.div className="legal-hero-content" initial="hidden" animate="visible" variants={ANIMATIONS.fadeInUp}>
                        <h1>Terms of Service</h1>
                        <p>Last updated: February 2026</p>
                    </motion.div>
                </div>
            </section>

            <section className="section legal-section">
                <div className="container">
                    <motion.div className="legal-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={ANIMATIONS.fadeInUp}>
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using {COMPANY.fullName}'s website and services, you agree to be bound by these Terms of Service.</p>

                        <h2>2. Services</h2>
                        <p>We provide web development, app development, digital marketing, SEO optimization, UI/UX design, and cloud solutions. Specific terms for each project will be outlined in individual service agreements.</p>

                        <h2>3. Intellectual Property</h2>
                        <p>All content on this website, including text, graphics, logos, and software, is the property of {COMPANY.fullName} and protected by intellectual property laws.</p>
                        <p>Upon full payment, clients receive ownership rights to deliverables as specified in individual project agreements.</p>

                        <h2>4. Payment Terms</h2>
                        <p>Payment terms and schedules will be outlined in individual project proposals and agreements. Standard terms typically require an upfront deposit with milestone-based payments.</p>

                        <h2>5. Project Timelines</h2>
                        <p>We commit to delivering projects on agreed timelines. Delays caused by client-side factors may result in timeline adjustments.</p>

                        <h2>6. Revisions and Changes</h2>
                        <p>Our project quotes include a specified number of revision rounds. Additional revisions may incur extra charges as outlined in project agreements.</p>

                        <h2>7. Confidentiality</h2>
                        <p>We maintain strict confidentiality of all client information and project details. We do not share client information with third parties without consent.</p>

                        <h2>8. Limitation of Liability</h2>
                        <p>{COMPANY.fullName} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>

                        <h2>9. Termination</h2>
                        <p>Either party may terminate services with written notice. Fees for work completed prior to termination remain payable.</p>

                        <h2>10. Governing Law</h2>
                        <p>These terms shall be governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with applicable laws.</p>

                        <h2>11. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.</p>

                        <h2>12. Contact</h2>
                        <p>For questions about these Terms of Service, please contact us at {COMPANY.email}.</p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Terms;
