/**
 * Chat Response Logic
 * Provides auto-responses based on user message keywords
 */

// Company info for responses
const COMPANY_INFO = {
    name: 'ChaarTech Technologies',
    email: 'info@chaartech.in',
    phone: '+91 76669 64743',
    services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 'SEO', 'Tech Consulting']
};

// Response templates
const RESPONSES = {
    greeting: {
        keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'good afternoon'],
        response: "Hello! 👋 Welcome to ChaarTech Technologies! How can I help you today?",
        quickReplies: ['Tell me about your services', 'I need a website', 'Get a quote', 'Contact info']
    },

    services: {
        keywords: ['services', 'what do you do', 'what you do', 'offerings', 'provide'],
        response: `We offer a wide range of digital services:\n\n🌐 **Web Development** - Custom websites & web apps\n📱 **Mobile Apps** - iOS & Android development\n🎨 **UI/UX Design** - Beautiful, user-friendly interfaces\n📈 **Digital Marketing** - SEO, Social Media, PPC\n💡 **Tech Consulting** - Strategy & solutions\n\nWhich service interests you?`,
        quickReplies: ['Web Development', 'Mobile Apps', 'Get a quote']
    },

    pricing: {
        keywords: ['price', 'cost', 'quote', 'pricing', 'budget', 'how much', 'rates'],
        response: "Great question! 💰 Our pricing depends on project scope and requirements.\n\n**Typical ranges:**\n• Simple websites: ₹15,000 - ₹50,000\n• Custom web apps: ₹50,000 - ₹2,00,000+\n• Mobile apps: ₹1,00,000 - ₹5,00,000+\n\nWould you like to share your project details for a custom quote?",
        quickReplies: ['Describe my project', 'Contact sales']
    },

    website: {
        keywords: ['website', 'web development', 'web design', 'site', 'landing page'],
        response: "We build stunning, high-performance websites! 🌐\n\n**Our web services include:**\n• Business websites\n• E-commerce stores\n• Landing pages\n• Web applications\n• WordPress development\n\nAll our sites are mobile-responsive, SEO-optimized, and built for speed!",
        quickReplies: ['Get a quote', 'Timeline?']
    },

    mobile: {
        keywords: ['app', 'mobile', 'android', 'ios', 'application'],
        response: "We create powerful mobile apps! 📱\n\n**What we build:**\n• Native iOS apps\n• Native Android apps\n• Cross-platform (React Native)\n• Progressive Web Apps\n\nFrom idea to app store launch, we handle everything!",
        quickReplies: ['Get a quote', 'Development timeline']
    },

    contact: {
        keywords: ['contact', 'email', 'phone', 'reach', 'call', 'talk to'],
        response: `Here's how to reach us: 📞\n\n📧 **Email:** ${COMPANY_INFO.email}\n📱 **Phone:** ${COMPANY_INFO.phone}\n🌐 **Website:** chaartech.com\n\nOr you can continue chatting here - I'm happy to help!`,
        quickReplies: ['Send message', 'Get a quote', 'Office hours']
    },

    timeline: {
        keywords: ['timeline', 'how long', 'duration', 'time', 'deadline', 'delivery'],
        response: "Project timelines vary based on complexity: ⏱️\n\n• Landing pages: 1-2 weeks\n• Business websites: 2-4 weeks\n• Web applications: 4-12 weeks\n• Mobile apps: 8-16 weeks\n\nWe also offer rush delivery for urgent projects!",
        quickReplies: ['Start a project', 'Get a quote', 'Services']
    },



    thanks: {
        keywords: ['thank', 'thanks', 'appreciate', 'helpful'],
        response: "You're welcome! 😊 Is there anything else I can help you with?",
        quickReplies: ['No, that\'s all', 'One more question', 'Get a quote']
    },

    bye: {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'that\'s all', 'no thanks'],
        response: "Great chatting with you! 👋\n\nFeel free to come back anytime. Have a wonderful day!\n\n— Team ChaarTech",
        quickReplies: ['Start over', 'Contact info']
    },

    project: {
        keywords: ['project', 'idea', 'build', 'create', 'develop', 'need', 'want'],
        response: "Exciting! 🚀 I'd love to hear about your project!\n\nTo give you the best guidance, could you share:\n1. What type of project (website, app, etc.)?\n2. Key features you need?\n3. Any timeline in mind?",
        quickReplies: ['Website project', 'App project', 'Not sure yet']
    }
};

// Default response when no keywords match
const DEFAULT_RESPONSE = {
    response: "Thanks for your message! 🤔\n\nI'm here to help with questions about our services, pricing, or starting a project.\n\nYou can also reach our team directly for complex queries!",
    quickReplies: ['View services', 'Get a quote', 'Contact team']
};

/**
 * Find the best matching response for a user message
 * @param {string} message - User's message
 * @returns {Object} - Response object with text and quick replies
 */
export const getResponse = (message) => {
    const lowerMessage = message.toLowerCase().trim();

    // Check each response category for keyword matches
    for (const category of Object.values(RESPONSES)) {
        if (category.keywords.some(keyword => lowerMessage.includes(keyword))) {
            return {
                text: category.response,
                quickReplies: category.quickReplies || []
            };
        }
    }

    return {
        text: DEFAULT_RESPONSE.response,
        quickReplies: DEFAULT_RESPONSE.quickReplies
    };
};

/**
 * Get initial greeting message
 * @returns {Object} - Initial bot message
 */
export const getGreeting = () => ({
    id: 'greeting',
    sender: 'bot',
    text: "👋 Hi there! I'm the ChaarTech assistant.\n\nHow can I help you today?",
    timestamp: new Date(),
    quickReplies: ['Tell me about your services', 'I need a website', 'Get a quote', 'Contact info']
});

export default { getResponse, getGreeting };
