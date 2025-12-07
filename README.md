This project implements a chat interface using Angular/TypeScript (Frontend) and Node.js/TypeScript (Backend) to interact with a Google Dialogflow agent that is configured with information about the FIFA World Cup 2026.
The architecture ensures security by handling sensitive Dialogflow API authentication securely in the backend server.
⚽ Project Overview
This is a conversational agent built to answer user questions about the FIFA World Cup 2026.
The agent leverages Google Dialogflow APIs for Natural Language Understanding (NLU) and response generation. The agent is grounded with specific data about the tournament (which is configured within the Google Cloud Dialogflow console).
Users can ask specific questions, such as:
"Which teams are in Group A for the 2026 World Cup?"
"When does England play their first match?"
"Tell me about the latest group stage draw."
The application is split into two main components:
Frontend (Angular): A user interface (UI) for chatting, hosted using the Angular CLI. It communicates with the backend via HTTP requests.
Backend (Node.js/Express): A secure server that receives messages from the frontend, authenticates with the Google Dialogflow API using service account credentials, sends the queries to the bot, and returns the bot's response to the frontend.
📁 Code Files Structure
The root directory is dialogFlowAgentFifa2026.
dialogFlowAgentFifa2026/
├── backend/
│   ├── src/
│   │   └── server.ts             # Backend logic for Express and Dialogflow API calls
│   ├── package.json              # Backend dependencies (express, dialogflow, types)
│   ├── tsconfig.json             # TypeScript configuration for Node
│   └── dialogflow-key.json       # **[PLACE YOUR GCP KEY FILE HERE]**
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.ts  # Main Angular chat logic
    │   │   ├── app.module.ts     # Angular module imports (HttpClient, FormsModule)
    │   │   └── chat.service.ts   # Service to talk to the Node.js backend
    │   └── ... (standard Angular files)
    ├── package.json              # Frontend dependencies (Angular, uuid)
    ├── angular.json
    └── tsconfig.json
🛠️ How to Run the Backend
The backend handles the secure connection to Google Cloud Dialogflow.
Prerequisites
Node.js and npm installed.
Google Cloud Project & Dialogflow Agent:
Set up a project in the Google Cloud Console.
Enable the Dialogflow API.
Create a Dialogflow ES or CX agent and configure its intents/responses with FIFA 2026 data.
Create a Service Account with the Dialogflow API Client role.
Generate and download the JSON key file for this service account.
Setup Instructions
Place the Key File: Move your downloaded Google Cloud JSON key file into the dialogFlowAgentFifa2026/backend/ directory and rename it to dialogflow-key.json.
Update Project ID: Open backend/src/server.ts and replace YOUR_GOOGLE_CLOUD_PROJECT_ID with your actual Google Cloud Project ID.
Install Dependencies and Start:
bash
cd dialogFlowAgentFifa2026/backend
npm install
npm start
Use code with caution.

The backend server will start running on http://localhost:3000. It must be running before you start the frontend.
🚀 How to Run the Frontend
The frontend provides the UI using the Angular framework.
Prerequisites
Angular CLI installed globally (npm install -g @angular/cli).
The Backend must be running (see instructions above).
Setup Instructions
Install Dependencies and Start:
bash
cd dialogFlowAgentFifa2026/frontend
npm install
# Ensure uuid is installed for session management
npm install uuid @types/uuid
ng serve --open
Use code with caution.

The Angular development server will typically open the application in your browser at http://localhost:4200. You can now chat with your Dialogflow agent!