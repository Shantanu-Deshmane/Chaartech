import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../../common';
import { ANIMATIONS } from '../../../utils/constants';
import { openWhatsApp } from '../../../utils/helpers';
import './HomeCTA.css';

const HomeCTA = () => {
    return (
        <motion.section
            className="cta-final"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={ANIMATIONS.scaleIn}
        >
            <div className="container">
                <div className="cta-final-content">
                    <h2 className="cta-final-title">
                        Ready to engineer your next epoch?
                    </h2>
                    <div className="cta-final-buttons">
                        <Button
                            size="md"
                            onClick={() => openWhatsApp("Let's build the next epoch of technology together.")}
                        >
                            CONTACT OUR TEAM
                        </Button>
                        <Button
                            variant="outline"
                            size="md"
                            as={Link}
                            to="/services"
                        >
                            VIEW SERVICES
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default HomeCTA;
