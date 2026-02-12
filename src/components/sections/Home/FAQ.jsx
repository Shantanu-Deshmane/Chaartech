import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Reveal } from '../../common';
import { faqs } from '../../../data/faq';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <Reveal>
                    <div className="faq-header">
                        <span className="section-label">
                            <HelpCircle size={14} />
                            FAQ
                        </span>
                        <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
                        <p className="faq-subtitle">
                            Everything you need to know about our services and process.
                        </p>
                    </div>
                </Reveal>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <Reveal key={faq.id} delay={index * 0.05}>
                            <div
                                className={`faq-item ${activeIndex === index ? 'faq-item-active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question">
                                    <span className="faq-number">0{index + 1}</span>
                                    <h4>{faq.question}</h4>
                                    <motion.div
                                        className="faq-icon"
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            className="faq-answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
