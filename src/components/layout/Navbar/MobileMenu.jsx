import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const MobileMenu = ({ isOpen, setIsOpen, navLinks, handleWhatsAppClick }) => {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="mobile-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mobile-menu-header">
                            <span className="mobile-menu-title">Menu</span>
                            <button
                                className="mobile-close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <ul className="mobile-nav-links">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.path}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="link-number">0{index + 1}</span>
                                        <span className="link-text">{link.name}</span>
                                        <ArrowUpRight size={18} className="link-arrow" />
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            className="mobile-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button
                                className="mobile-cta-btn"
                                onClick={() => {
                                    handleWhatsAppClick();
                                    setIsOpen(false);
                                }}
                            >
                                <span>Start a Project</span>
                                <ArrowUpRight size={20} />
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default MobileMenu;
