import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { COMPANY } from '../../../utils/constants';
import { sendMessageToAI, getAIGreeting } from './chatService';
import { getResponse } from './chatResponses';
import './ChatWidget.css';

/**
 * AI-Powered Chatbot Widget for customer support
 */
const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Initialize with greeting when opened
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const greeting = getAIGreeting();
            setMessages([greeting]);
        }
    }, [isOpen, messages.length]);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Generate unique message ID
    const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Format timestamp
    const formatTime = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    };

    // Send message to AI
    const handleSend = async (text = inputValue) => {
        const messageText = text.trim();
        if (!messageText || isTyping) return;

        // Add user message
        const userMessage = {
            id: generateId(),
            sender: 'user',
            text: messageText,
            timestamp: new Date()
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInputValue('');
        setIsTyping(true);
        setIsConnecting(true);

        try {
            // Send to AI service
            const response = await sendMessageToAI(updatedMessages);

            let botResponseText = response.message;
            let success = response.success;

            // FALLBACK: If AI fails or key is missing, use keyword-based response
            if (!success) {
                console.log('AI Service unavailable, using keyword fallback...');
                const fallback = getResponse(messageText);
                botResponseText = fallback.text;
            }

            setIsConnecting(false);

            // Simulate typing delay for natural feel
            const typingDelay = Math.min(botResponseText.length * 10, 1500);
            await new Promise(resolve => setTimeout(resolve, typingDelay));

            // Add bot response
            const botMessage = {
                id: generateId(),
                sender: 'bot',
                text: botResponseText,
                timestamp: new Date(),
                quickReplies: getContextQuickReplies(messageText)
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Chat error:', error);

            // Final fallback
            const fallback = getResponse(messageText);

            // Add fallback response
            const errorMessage = {
                id: generateId(),
                sender: 'bot',
                text: fallback.text,
                timestamp: new Date(),
                quickReplies: fallback.quickReplies || ['Try again', 'Contact info']
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
            setIsConnecting(false);
        }
    };

    // Get context-aware quick replies
    const getContextQuickReplies = (lastMessage) => {
        const lower = lastMessage.toLowerCase();

        if (lower.includes('price') || lower.includes('cost')) {
            return ['Web development pricing', 'Mobile app pricing', 'Get a quote'];
        }
        if (lower.includes('web') || lower.includes('website')) {
            return ['Website timeline', 'Our services', 'Start a project'];
        }
        if (lower.includes('app') || lower.includes('mobile')) {
            return ['App features', 'Development process', 'Get estimate'];
        }
        if (lower.includes('contact') || lower.includes('talk')) {
            return ['Schedule call', 'Send email', 'Office location'];
        }

        // Default quick replies
        return ['Learn more', 'Get a quote', 'Contact team'];
    };

    // Handle quick reply click
    const handleQuickReply = (reply) => {
        handleSend(reply);
    };

    // Handle Enter key
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Get last message's quick replies
    const getQuickReplies = () => {
        const lastBotMessage = [...messages].reverse().find(m => m.sender === 'bot');
        return lastBotMessage?.quickReplies || [];
    };

    return (
        <div className="chat-widget">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        {/* Chat Header */}
                        <div className="chat-header">
                            <div className="chat-header-info">
                                <div className="chat-avatar">
                                    <Sparkles size={22} />
                                </div>
                                <div className="chat-header-text">
                                    <h4>{COMPANY.name} AI</h4>
                                    <span className="chat-status">
                                        <span className="status-dot"></span>
                                        {isConnecting ? 'Thinking...' : 'Online'}
                                    </span>
                                </div>
                            </div>
                            <button
                                className="chat-close"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="chat-messages">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`chat-message ${message.sender === 'user' ? 'chat-message-user' : 'chat-message-bot'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {message.sender === 'bot' && (
                                        <div className="message-avatar">
                                            <Bot size={16} />
                                        </div>
                                    )}
                                    <div className="message-content">
                                        <div className="message-bubble">
                                            {message.text.split('\n').map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))}
                                        </div>
                                        <span className="message-time">{formatTime(message.timestamp)}</span>
                                    </div>
                                    {message.sender === 'user' && (
                                        <div className="message-avatar message-avatar-user">
                                            <User size={16} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    className="chat-message chat-message-bot"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="message-avatar">
                                        <Bot size={16} />
                                    </div>
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        {getQuickReplies().length > 0 && !isTyping && (
                            <div className="chat-quick-replies">
                                {getQuickReplies().map((reply, index) => (
                                    <button
                                        key={index}
                                        className="quick-reply-btn"
                                        onClick={() => handleQuickReply(reply)}
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Chat Input */}
                        <div className="chat-input-area">
                            <input
                                ref={inputRef}
                                type="text"
                                className="chat-input"
                                placeholder={isTyping ? "AI is typing..." : "Type your message..."}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={isTyping}
                            />
                            <button
                                className="chat-send"
                                onClick={() => handleSend()}
                                disabled={!inputValue.trim() || isTyping}
                                aria-label="Send message"
                            >
                                <Send size={18} />
                            </button>
                        </div>

                        {/* AI Badge */}
                        <div className="chat-ai-badge">
                            <Sparkles size={12} />
                            <span>Powered by AI</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                className={`chat-fab ${isOpen ? 'chat-fab-active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <MessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && <span className="chat-pulse" />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
