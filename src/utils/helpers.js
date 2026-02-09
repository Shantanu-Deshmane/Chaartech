import { WHATSAPP } from './constants';

/**
 * Opens WhatsApp with a pre-filled message
 * @param {string} message - Custom message to send
 */
export const openWhatsApp = (message = WHATSAPP.defaultMessage) => {
    const url = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Formats a phone number for display
 * @param {string} phone - Phone number string
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone) => {
    return phone.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
};

/**
 * Validates email format
 * @param {string} email - Email string to validate
 * @returns {boolean} Whether email is valid
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates phone number (basic validation)
 * @param {string} phone - Phone number string
 * @returns {boolean} Whether phone is valid
 */
export const isValidPhone = (phone) => {
    const phoneRegex = /^[+]?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
};

/**
 * Sanitizes user input to prevent XSS
 * @param {string} input - User input string
 * @returns {string} Sanitized string
 */
export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .trim();
};

/**
 * Generates a unique ID
 * @returns {string} Unique identifier
 */
export const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in ms
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit = 300) => {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

/**
 * Scrolls to element by ID with offset
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top in pixels
 */
export const scrollToElement = (elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

/**
 * Truncates text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
};

/**
 * Formats a date string
 * @param {string|Date} date - Date to format
 * @param {string} locale - Locale string
 * @returns {string} Formatted date
 */
export const formatDate = (date, locale = 'en-IN') => {
    return new Date(date).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

/**
 * Gets reading time estimate
 * @param {string} text - Text content
 * @returns {number} Reading time in minutes
 */
export const getReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
};

/**
 * Checks if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {boolean} Whether element is visible
 */
export const isInViewport = (element, threshold = 0.1) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= 0;
};

/**
 * Creates class names from conditions
 * @param  {...(string|object)} classes - Class names or condition objects
 * @returns {string} Combined class names
 */
export const cn = (...classes) => {
    return classes
        .filter(Boolean)
        .map((cls) => {
            if (typeof cls === 'string') return cls;
            if (typeof cls === 'object') {
                return Object.entries(cls)
                    .filter(([, value]) => value)
                    .map(([key]) => key)
                    .join(' ');
            }
            return '';
        })
        .join(' ')
        .trim();
};
