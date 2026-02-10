import { motion } from 'framer-motion';
import { homeMethodology } from '../../../data/services';
import { ANIMATIONS } from '../../../utils/constants';
import './Methodology.css';

const Methodology = () => {
    return (
        <section className="methodology-section">
            <div className="container">
                <div className="methodology-header">
                    <h2 className="methodology-title">
                        The Chaartech <span className="italic-text">Methodology</span>
                    </h2>
                    <p className="methodology-subtitle">
                        Precision is our primary constraint. Every project follows a rigorous quasi-linear path from
                        ambiguity to production integrity.
                    </p>
                </div>

                <div className="methodology-steps">
                    {homeMethodology.map((step) => (
                        <div
                            key={step.id}
                            className="methodology-step"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
