import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../../../utils/constants';
import { openWhatsApp } from '../../../utils/helpers';
import { useTheme } from '../../../context';
import logo from '../../../assets/logo.png';
import './Navbar.css';

/**
 * Modern navigation component with floating pill design
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme, isDark } = useTheme();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleWhatsAppClick = () => {
        openWhatsApp('Hi! I visited your website and would like to discuss a project.');
    };

    return (
        <header className={`navbar-modern ${isScrolled ? 'navbar-solid' : ''}`}>
            <div className="container">
                <nav className="navbar-wrapper">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="ChaarTech Logo" className="brand-logo" />
                        <span className="brand-text">{COMPANY.name}</span>
                    </Link>

                    {/* Center Navigation Pill */}
                    <div className="nav-pill">
                        <ul className="nav-pill-links">
                            {NAV_LINKS.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `nav-pill-link ${isActive ? 'nav-pill-link-active' : ''}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Actions */}
                    <div className="navbar-right">
                        {/* Theme Toggle */}
                        <motion.button
                            className="theme-btn"
                            onClick={toggleTheme}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Sun size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Moon size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* CTA Button */}
                        <motion.button
                            className="cta-btn"
                            onClick={handleWhatsAppClick}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Let's Talk</span>
                            <ArrowUpRight size={16} />
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="navbar-mobile-toggle">
                        <motion.button
                            className="theme-btn-mobile"
                            onClick={toggleTheme}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>

                        <button
                            className="menu-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            <span className={`menu-icon ${isOpen ? 'menu-icon-open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="mobile-menu-header">
                                <span className="mobile-menu-title">Menu</span>
                            </div>

                            <ul className="mobile-nav-links">
                                {NAV_LINKS.map((link, index) => (
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
                                    onClick={handleWhatsAppClick}
                                >
                                    <span>Start a Project</span>
                                    <ArrowUpRight size={20} />
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
