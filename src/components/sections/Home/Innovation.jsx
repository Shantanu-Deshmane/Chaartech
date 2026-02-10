import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { innovationCards } from '../../../data/services';
import { ANIMATIONS } from '../../../utils/constants';
import './Innovation.css';

const Innovation = () => {
    return (
        <section className="innovation-section">
            <div className="container">
                <div className="innovation-grid">
                    <div
                        className="innovation-sidebar"
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
                    </div>

                    <div className="innovation-cards">
                        {innovationCards.map((card) => (
                            <div
                                key={card.id}
                                className="innovation-card"
                            >
                                <div className="card-icon">
                                    <card.icon size={24} />
                                </div>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
