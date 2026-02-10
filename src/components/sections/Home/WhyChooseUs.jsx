import { motion } from 'framer-motion';
import { CheckCircle, Users, Clock, Rocket } from 'lucide-react';
import { ANIMATIONS } from '../../../utils/constants';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-home-section">
            <div className="container">
                <div className="section-header-center">
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
        </section>
    );
};

export default WhyChooseUs;
