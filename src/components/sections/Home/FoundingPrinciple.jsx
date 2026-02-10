import { motion } from 'framer-motion';
import './FoundingPrinciple.css';

const FoundingPrinciple = () => {
    return (
        <section className="founding-principle-section">
            <div className="container">
                <div className="founding-content">
                    <span className="founding-label">FOUNDING PRINCIPLE</span>
                    <blockquote className="founding-quote">
                        "Technology has become a layer of complexity instead of a tool for clarity. We founded Chaartech to strip away the noise and return to raw engineering excellence."
                    </blockquote>
                    <div className="founding-footer">
                        <span className="founding-line"></span>
                        <span className="founding-motive">THE CHAARTECH MOTIVE</span>
                        <span className="founding-line"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundingPrinciple;
