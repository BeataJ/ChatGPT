import openai from "./config/open-ai.js";
import readlineSync from  'readline-sync';
import colors from 'colors';

async function main() {
    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'What is the capital of BC?'
            }
        ]
    });

    console.log(chatCompletion.data.choices[0].message.content);
}

main();