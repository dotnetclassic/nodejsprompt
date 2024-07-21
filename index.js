require('dotenv').config();
const OpenAIAPI = require('openai');
const client = new OpenAIAPI.OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function runChatGPT() {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                //{ role: "system", content: "You are a helpful assistant." },
                { role: "user", content: "Where is pakistan located?" }
            ],
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error);
    }
}

runChatGPT();