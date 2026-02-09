import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button, Input, Textarea } from '../../components/common';
import { COMPANY, ANIMATIONS } from '../../utils/constants';
import { openWhatsApp, isValidEmail, sanitizeInput } from '../../utils/helpers';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const serviceOptions = [
        'Website Development',
        'App Development',
        'Digital Marketing',
        'SEO Optimization',
        'UI/UX Design',
        'Cloud Solutions',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setIsSubmitting(true);

        const sanitizedData = {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            phone: sanitizeInput(formData.phone),
            service: sanitizeInput(formData.service),
            message: sanitizeInput(formData.message)
        };

        const whatsappMessage = `
Hi ChaarTech! 

I'm reaching out through your website contact form.

*Name:* ${sanitizedData.name}
*Email:* ${sanitizedData.email}
${sanitizedData.phone ? `*Phone:* ${sanitizedData.phone}` : ''}
${sanitizedData.service ? `*Interested In:* ${sanitizedData.service}` : ''}

*Message:*
${sanitizedData.message}
    `.trim();

        await new Promise(resolve => setTimeout(resolve, 500));

        openWhatsApp(whatsappMessage);

        toast.success('Opening WhatsApp to send your message!');

        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });

        setIsSubmitting(false);
    };

    const handleWhatsAppDirect = () => {
        openWhatsApp("Hi! I'd like to discuss a project with ChaarTech.");
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - ChaarTech Technologies</title>
                <meta
                    name="description"
                    content="Get in touch with ChaarTech Technologies. Contact us for web development, app development, digital marketing, and SEO services. We're here to help!"
                />
            </Helmet>

            {/* Hero Section - Minimal with Quick Contact */}
            <section className="contact-hero-unique">
                <div className="container">
                    <motion.div
                        className="contact-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATIONS.fadeInUp}
                    >
                        <span className="hero-badge">Get in Touch</span>
                        <h1>Let's Start a <span className="text-gradient">Conversation</span></h1>
                        <p>Have a project in mind? We'd love to hear from you.</p>

                        <div className="contact-hero-quick">
                            <motion.a
                                href={`mailto:${COMPANY.email}`}
                                className="quick-contact-item"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Mail size={20} />
                                <span>{COMPANY.email}</span>
                            </motion.a>
                            <motion.a
                                href={`tel:${COMPANY.phone}`}
                                className="quick-contact-item"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Phone size={20} />
                                <span>{COMPANY.phone}</span>
                            </motion.a>
                            <motion.button
                                className="quick-contact-item quick-whatsapp"
                                onClick={handleWhatsAppDirect}
                                whileHover={{ scale: 1.02 }}
                            >
                                <MessageCircle size={20} />
                                <span>WhatsApp Us</span>
                                <ArrowRight size={16} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <div className="contact-hero-lines">
                    <div className="hero-line"></div>
                    <div className="hero-line"></div>
                    <div className="hero-line"></div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInLeft}
                        >
                            <h2>Get in Touch</h2>
                            <p>
                                Ready to start your project? Contact us through any of the methods below
                                or fill out the form and we'll get back to you within 24 hours.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="contact-method-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4>Email Us</h4>
                                        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon contact-method-icon-secondary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4>Call Us</h4>
                                        <a href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon contact-method-icon-accent">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4>Location</h4>
                                        <p>{COMPANY.address}</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon contact-method-icon-success">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4>Business Hours</h4>
                                        <p>Mon - Sat: 10:00 AM - 7:00 PM IST</p>
                                    </div>
                                </div>
                            </div>

                            <div className="whatsapp-cta">
                                <h3>Prefer WhatsApp?</h3>
                                <p>Get instant responses on WhatsApp for quick queries.</p>
                                <Button
                                    variant="whatsapp"
                                    leftIcon={<MessageCircle size={18} />}
                                    onClick={handleWhatsAppDirect}
                                >
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={ANIMATIONS.fadeInRight}
                        >
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Send Us a Message</h3>

                                <div className="form-row">
                                    <Input
                                        label="Your Name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                        required
                                    />
                                </div>

                                <div className="form-row form-row-2">
                                    <Input
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        required
                                    />
                                    <Input
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="select-wrapper">
                                        <label className="input-label">
                                            Service Interested In
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="select-field"
                                        >
                                            <option value="">Select a service</option>
                                            {serviceOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <Textarea
                                        label="Your Message"
                                        name="message"
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={errors.message}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    fullWidth
                                    isLoading={isSubmitting}
                                    rightIcon={<Send size={18} />}
                                >
                                    Send Message via WhatsApp
                                </Button>

                                <p className="form-note">
                                    By submitting this form, you'll be redirected to WhatsApp to send your message directly.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
