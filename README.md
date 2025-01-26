# QuestSearch

QuestSearch is a search functionality for a question database built using Vite, React, MongoDB, gRPC, and Express. The project allows users to search and interact with a collection of questions efficiently. The backend leverages gRPC for communication, while the frontend is developed using React with Vite for faster development and builds.

## Project Structure

### Backend

backend ├── src
│   ├── models
│   │   └── questionModel.js    # Mongoose schema and model
│   ├── routes
│   │   └── apiRoutes.js        # API routes
├── questions.json              # Sample data
├── importData.js               # Script to import data
├── .env                        # Environment variables
├── package.json                # Project metadata and dependencies  

### Frontend
frontend ├── src
│   ├── assets
│   │   └── logo.png                # Logo and other static assets
│   ├── components
│   │   ├── SearchBar.js            # Search bar component for querying questions
│   │   └── QuestionList.js         # Component to display the list of questions
│   ├── pages
│   │   └── HomePage.js             # Homepage of the application
│   ├── services
│   │   └── apiService.js           # API calls to the backend for searching questions
│   ├── App.js                      # Root component that ties everything together
│   ├── index.js                    # Entry point for the React application
├── public
│   └── index.html                  # Main HTML file
├── package.json                    # Frontend project metadata and dependencies
└── vite.config.js                  # Configuration file for Vite
