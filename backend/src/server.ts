import express from 'express';
import cors from 'cors';
import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

// Set the path to your service account key file
// Make sure this file is present in the backend directory!
process.env.GOOGLE_APPLICATION_CREDENTIALS = './dialogflow-key.json'; 

app.use(cors({ origin: 'http://localhost:4200' })); // Allow requests from Angular dev server
app.use(express.json());

const projectId = 'YOUR_GOOGLE_CLOUD_PROJECT_ID'; 
const sessionClient = new SessionsClient();

app.post('/send-message', async (req, res) => {
    const { message, sessionId } = req.body;
    
    if (!message || !sessionId) {
        return res.status(400).send('Missing message or sessionId');
    }

    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'en-US',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const queryResult = responses[0].queryResult;
        res.json({
            text: queryResult?.fulfillmentText || 'No response from agent.',
            intent: queryResult?.intent?.displayName || 'Unknown Intent'
        });
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).send('Dialogflow API error');
    }
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
