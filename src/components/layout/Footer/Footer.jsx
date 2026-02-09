import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    Github,
    ArrowUp,
    Heart
} from 'lucide-react';
import { COMPANY, FOOTER_LINKS } from '../../../utils/constants';
import { openWhatsApp } from '../../../utils/helpers';
import logo from '../../../assets/logo.png';
import './Footer.css';

/**
 * Footer component with links, contact info, and social media
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialIcons = {
        linkedin: Linkedin,
        twitter: Twitter,
        instagram: Instagram,
        facebook: Facebook,
        github: Github,
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* Main Footer */}
                <div className="footer-main">
                    {/* Company Info */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="ChaarTech Logo" className="footer-logo-img" />
                            <span className="logo-text">{COMPANY.name}</span>
                        </Link>
                        <p className="footer-description">
                            {COMPANY.description}
                        </p>
                        <div className="footer-contact">
                            <a href={`mailto:${COMPANY.email}`} className="footer-contact-item">
                                <Mail size={18} />
                                <span>{COMPANY.email}</span>
                            </a>
                            <a href={`tel:${COMPANY.phone}`} className="footer-contact-item">
                                <Phone size={18} />
                                <span>{COMPANY.phone}</span>
                            </a>
                            <div className="footer-contact-item">
                                <MapPin size={18} />
                                <span>{COMPANY.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h4 className="footer-heading">Company</h4>
                            <ul className="footer-links">
                                {FOOTER_LINKS.company.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">Services</h4>
                            <ul className="footer-links">
                                {FOOTER_LINKS.services.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">Resources</h4>
                            <ul className="footer-links">
                                {FOOTER_LINKS.resources.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>
                            © {currentYear} {COMPANY.fullName}.
                        </p>
                    </div>

                    <div className="footer-social">
                        {Object.entries(COMPANY.social).map(([key, url]) => {
                            const Icon = socialIcons[key];
                            return (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    aria-label={key}
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>

                    <div className="footer-legal">
                        {FOOTER_LINKS.legal.map((link, index) => (
                            <span key={link.path}>
                                <Link to={link.path} className="footer-legal-link">
                                    {link.name}
                                </Link>
                                {index < FOOTER_LINKS.legal.length - 1 && ' • '}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    );
};

export default Footer;
