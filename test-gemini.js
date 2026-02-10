
const GEMINI_API_KEY = 'AIzaSyChUo07FWWRcOE9SgY2UrQHeGjD4STuYos';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

async function testGemini() {
    try {
        console.log('Testing Gemini API (v1/gemini-pro)...');
        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: "Hello, this is a connectivity test." }]
                }]
            }),
        });

        const data = await response.json();
        if (response.ok) {
            console.log('SUCCESS: Gemini is working!');
            console.log('Response:', data.candidates[0].content.parts[0].text);
        } else {
            console.error('FAILURE: Error.');
            console.error('Status:', response.status);
            console.error('Error Details:', JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error('CONNECTION ERROR:', error.message);
    }
}

testGemini();
