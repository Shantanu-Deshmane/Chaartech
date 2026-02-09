/**
 * Chat Service - Google Gemini AI Integration
 * 
 * HOW TO GET YOUR FREE API KEY:
 * =============================
 * 1. Go to: https://aistudio.google.com/apikey
 * 2. Sign in with your Google account
 * 3. Click "Create API Key"
 * 4. Copy the key and replace GEMINI_API_KEY below
 * 
 * FREE TIER LIMITS:
 * - 60 requests per minute
 * - 1 million tokens per month
 * - No credit card required!
 */

// ⚠️ REPLACE THIS WITH YOUR ACTUAL API KEY
const GEMINI_API_KEY = 'AIzaSyDWHmSmkuqmopE1eSxdJCpCeptn4PoqMEM';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';

// System prompt with ChaarTech knowledge
const SYSTEM_PROMPT = `You are the friendly AI assistant for ChaarTech Technologies, a professional IT services company. Your role is to help potential customers learn about our services and guide them towards working with us.

## About ChaarTech Technologies
- Modern IT solutions company based in India
- Specializes in custom software development
- Focus on quality, innovation, and client satisfaction

## Our Services & Pricing

### 1. Web Development
- **What we offer:** Custom websites, e-commerce stores, web applications, landing pages, WordPress development
- **Technologies:** React, Next.js, Node.js, PHP, WordPress
- **Pricing:** ₹15,000 - ₹2,00,000+ depending on complexity
- **Timeline:** 1-12 weeks

### 2. Mobile App Development
- **What we offer:** iOS apps, Android apps, Cross-platform (React Native), Progressive Web Apps
- **Pricing:** ₹1,00,000 - ₹5,00,000+ depending on features
- **Timeline:** 8-16 weeks

### 3. UI/UX Design
- **What we offer:** User interface design, User experience research, Prototyping, Brand identity
- **Pricing:** ₹25,000 - ₹1,50,000
- **Timeline:** 2-6 weeks

### 4. Digital Marketing & SEO
- **What we offer:** Search engine optimization, Social media marketing, Content marketing, PPC advertising
- **Pricing:** ₹10,000 - ₹50,000/month
- **Timeline:** Ongoing monthly services

### 5. Tech Consulting
- **What we offer:** Technology strategy, Architecture planning, Code reviews, Performance optimization
- **Pricing:** Custom quotes based on scope

## Contact Information
- 📧 Email: info@chaartech.in
- 📱 Phone: +91 76669 64743
- 🌐 Website: chaartech.com

## Your Behavior Guidelines
1. Be friendly, professional, and helpful
2. Keep responses concise but informative (2-3 paragraphs max)
3. Always encourage booking a consultation for detailed discussions
4. If asked about exact pricing, give ranges and suggest a consultation for accurate quotes
5. Use emojis sparingly to keep conversations engaging
6. If you don't know something specific, offer to connect them with our team
7. Never make up information - stick to what's provided above

## Response Format
- Use short paragraphs
- Include relevant emojis (1-2 per response)
- End with a helpful follow-up question or call-to-action when appropriate`;

/**
 * Send message to Gemini AI
 * @param {Array} messages - Conversation history
 * @returns {Promise<string>} - AI response
 */
export const sendMessageToAI = async (messages) => {
    // Check if API key is set
    if (GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        // Return helpful message if no API key
        return {
            success: false,
            message: "🔑 AI chatbot not configured yet. Please add your Gemini API key to enable AI responses.\n\nIn the meantime, feel free to contact us directly at info@chaartech.in or +91 76669 64743!"
        };
    }

    try {
        // Build conversation history for context, ensuring roles alternate correctly
        // We skip the initial greeting if it's the first message to ensure history starts with 'user'
        // which is often required by the API.
        const conversationHistory = messages
            .filter((msg, index) => index > 0 || msg.sender === 'user') // Skip first if it's bot greeting
            .map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            }));

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: `${SYSTEM_PROMPT}\n\nUser is initiating a conversation. Please respond as the ChaarTech AI assistant.` }]
                    },
                    {
                        role: 'model',
                        parts: [{ text: "Understood. I am the ChaarTech assistant. I'll provide professional and helpful information about your services, pricing, and contact details while being friendly and encouraging consultations. How can I help you today?" }]
                    },
                    ...conversationHistory
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1000,
                }
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error Details:', JSON.stringify(errorData, null, 2));

            // Check for specific error types
            if (errorData.error?.status === 'PERMISSION_DENIED') {
                throw new Error('Invalid API Key or permission denied. Please check your Gemini API key.');
            }

            throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Extract the response text
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!aiResponse) {
            console.error('Unexpected Gemini Response Format:', data);
            throw new Error('No response content received from AI');
        }

        return {
            success: true,
            message: aiResponse
        };

    } catch (error) {
        console.error('Chat Service Detailed Error:', error);

        // Return fallback response with a hint of the error for the user
        let userMessage = "I apologize, but I'm having trouble connecting right now. 😅";

        if (error.message.includes('API Key') || error.message.includes('PERMISSION_DENIED')) {
            userMessage = "🔑 It looks like there's an issue with the API Key provided. Please double-check it in `chatService.js`.";
        } else if (error.message.includes('status 429')) {
            userMessage = "⏳ Too many requests! Please wait a moment and try again.";
        }

        return {
            success: false,
            message: `${userMessage}\n\nYou can also reach out to us directly:\n📧 info@chaartech.in\n📱 +91 76669 64743`
        };
    }
};

/**
 * Get initial greeting from AI
 * @returns {Object} - Greeting message object
 */
export const getAIGreeting = () => ({
    id: 'greeting',
    sender: 'bot',
    text: "👋 Hi there! I'm the ChaarTech AI assistant.\n\nI can help you with questions about our services, pricing, timelines, and more. What would you like to know?",
    timestamp: new Date(),
    quickReplies: ['Tell me about your services', 'I need a website', 'Mobile app pricing', 'Contact info']
});

export default { sendMessageToAI, getAIGreeting };
