import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    Github,
    ArrowUp
} from 'lucide-react';
import { COMPANY, FOOTER_LINKS } from '../../../utils/constants';
import logo from '../../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Linkedin, url: COMPANY.social.linkedin, label: 'LinkedIn' },
        { icon: Facebook, url: COMPANY.social.facebook, label: 'Facebook' },
        { icon: Instagram, url: COMPANY.social.instagram, label: 'Instagram' },
        { icon: Twitter, url: COMPANY.social.twitter, label: 'Twitter' },
        { icon: Github, url: COMPANY.social.github, label: 'GitHub' },
    ];

    return (
        <footer className="footer">
            {/* Social Icons Bar */}
            <div className="footer-social-bar">
                <div className="container">
                    <div className="footer-social-row">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label={item.label}
                            >
                                <item.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                                <img src={logo} alt="ChaarTech Logo" className="footer-logo-img" />
                                <span className="logo-text">{COMPANY.name}</span>
                            </Link>
                            <p className="footer-description">
                                {COMPANY.description}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                {FOOTER_LINKS.company.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Contact</h4>
                            <ul className="footer-links">
                                <li><span className="footer-link-text">{COMPANY.email}</span></li>
                                <li><span className="footer-link-text">{COMPANY.phone}</span></li>
                                <li><span className="footer-link-text">{COMPANY.address}</span></li>
                                <li><Link to="/contact" className="footer-link">Contact Us →</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="footer-column">
                            <h4 className="footer-heading">Legal</h4>
                            <ul className="footer-links">
                                {FOOTER_LINKS.legal.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright-bar">
                <div className="container">
                    <p className="footer-copyright-text">
                        © {currentYear} {COMPANY.fullName}. All rights reserved.
                    </p>
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
