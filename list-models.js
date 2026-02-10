
const GEMINI_API_KEY = 'YOUR_KEY_HERE'; // I will replace this in the next step or just use the one from .env if I can
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

async function listModels() {
    try {
        console.log('Listing available Gemini models...');
        // We'll try to get the key from environment or just use the hardcoded one if it's there
        const key = process.env.VITE_GEMINI_API_KEY || 'AIzaSyChUo07FWWRcOE9SgY2UrQHeGjD4STuYos';

        const response = await fetch(`${GEMINI_API_URL}?key=${key}`);
        const data = await response.json();

        if (response.ok) {
            console.log('SUCCESS: Models found!');
            data.models.forEach(m => console.log(`- ${m.name}`));
        } else {
            console.error('FAILURE: Error listing models.');
            console.error('Status:', response.status);
            console.error('Error Details:', JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error('CONNECTION ERROR:', error.message);
    }
}

listModels();
