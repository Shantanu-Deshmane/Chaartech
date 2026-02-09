import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { WHATSAPP, COMPANY } from '../../../utils/constants';
import { openWhatsApp } from '../../../utils/helpers';
import './WhatsAppWidget.css';

/**
 * Floating WhatsApp widget for instant contact
 */
const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleSend = () => {
        const textToSend = message.trim() || WHATSAPP.ctaMessage;
        openWhatsApp(textToSend);
        setMessage('');
        setIsOpen(false);
    };

    const quickMessages = [
        'I need a website for my business',
        'I want to discuss a mobile app project',
        'I need help with SEO/Digital Marketing',
        'I have a general inquiry',
    ];

    return (
        <div className="whatsapp-widget">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="whatsapp-popup"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="whatsapp-header">
                            <div className="whatsapp-header-info">
                                <div className="whatsapp-avatar">
                                    <span>CT</span>
                                </div>
                                <div>
                                    <h4>{COMPANY.name}</h4>
                                    <p>Typically replies within an hour</p>
                                </div>
                            </div>
                            <button
                                className="whatsapp-close"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="whatsapp-body">
                            <div className="whatsapp-message">
                                <p>👋 Hi there! How can we help you today?</p>
                            </div>

                            <div className="whatsapp-quick-actions">
                                <p className="quick-actions-label">Quick messages:</p>
                                {quickMessages.map((msg, index) => (
                                    <button
                                        key={index}
                                        className="quick-action-btn"
                                        onClick={() => openWhatsApp(msg)}
                                    >
                                        {msg}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="whatsapp-footer">
                            <div className="whatsapp-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    className="whatsapp-input"
                                />
                                <button
                                    className="whatsapp-send"
                                    onClick={handleSend}
                                    aria-label="Send message"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className={`whatsapp-fab ${isOpen ? 'whatsapp-fab-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <MessageCircle size={24} />
                )}
                {!isOpen && <span className="whatsapp-pulse" />}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
