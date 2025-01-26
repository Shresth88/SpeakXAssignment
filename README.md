# QuestSearch

QuestSearch is a search functionality for a question database built using Vite, React, MongoDB, gRPC, and Express. The project allows users to search and interact with a collection of questions efficiently. The backend uses gRPC for communication, while the frontend is built with React and Vite for faster development and builds.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16.0 or higher)
- MongoDB instance running locally or on a cloud service
- gRPC and protobuf installed for backend communication

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Shresth88/SpeakXAssignment
   cd SpeakXAssignment/backend
2. Install backend dependencies:
   ```bash
   npm install
3. Start the backend server:
   ```bash
   node server.js

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd SpeakXAssignment/frontend
2. Install frontend dependencies:
   ```bash
   npm install
3. Start the frontend server:
   ```bash
   npm run dev
   
### Usage
Once both the frontend and backend servers are running, you can access the application via http://localhost:5173 (or whichever port the frontend is running on). You can use the search functionality to query the question database.
