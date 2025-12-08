**⚽ Dialogflow FIFA World Cup 2026 Chat Agent**

Angular Frontend + Node.js/TypeScript Backend

This project implements a conversational chat interface using Angular (Frontend) and Node.js/TypeScript (Backend) to interact with a Google Dialogflow agent grounded in data about the FIFA World Cup 2026.

All sensitive Dialogflow authentication is handled in the backend to ensure security.


**🌍 Project Overview**

This chatbot answers user questions about the FIFA World Cup 2026, including groups, teams, match details, and more.
It uses Google Dialogflow for Natural Language Understanding (NLU) and response generation.

Users can ask things like:

“Which teams are in Group A?”

“Tell me the group stage draw.”

“When does England play its first match?”

System Components
Frontend — Angular

Clean chat interface

Sends user messages to backend via REST

Displays chatbot responses from Dialogflow

Backend — Node.js / Express / TypeScript

Securely authenticates with Google Dialogflow

Sends user messages to the agent

Returns agent answers to the Angular app


**📁 Project Structure**

<img width="734" height="510" alt="image" src="https://github.com/user-attachments/assets/e6b8c7c2-4773-43c8-ad6e-1e5112b60d66" />


**🛠️ Backend Setup (Node.js + Dialogflow)**

Prerequisites

Node.js + npm installed

Google Cloud Platform project

Dialogflow ES or CX agent with FIFA 2026 intents

Service account with Dialogflow API Client role

JSON credentials file downloaded

1. Place Service Account Credentials

Copy your downloaded service account key file into:

dialogFlowAgentFifa2026/backend/dialogflow-key.json

2. Set Google Cloud Project ID

Open:

backend/src/server.ts


Replace:

const projectId = "YOUR_GOOGLE_CLOUD_PROJECT_ID";


With the actual project ID.

3. Install and Start Backend
cd dialogFlowAgentFifa2026/backend
npm install
npm start


Backend runs at:

👉 http://localhost:3000


**🚀 Frontend Setup (Angular)**

Prerequisites

Install Angular CLI:

npm install -g @angular/cli


Backend must be running.

1. Install Frontend Dependencies
cd dialogFlowAgentFifa2026/frontend
npm install


Ensure session management dependency is installed:

npm install uuid @types/uuid

2. Start Angular App
ng serve --open


App runs at:

👉 http://localhost:4200

Start chatting with your World Cup 2026 Dialogflow agent!

🧠 Powered By

Angular 17+

Node.js + Express

TypeScript

Google Cloud Dialogflow

FIFA World Cup 2026 structured data grounding


**📌 Future Enhancements (Optional)**

If you want, I can generate any of these:

UI redesign with Material components

Team search and group tables UI

Cloud Run deployment

CI/CD (GitHub Actions / Cloud Build)

Docker containerization

Automated tests

Just tell me!
