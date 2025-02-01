ReTrip App
ReTrip is a simple and interactive web application designed to help users find fun ways to spend their time. With ReTrip, users can explore suggestions like hiking spots, cafés/bars, restaurants, sightseeing, and even a random option for spontaneous adventures. The app integrates OpenStreetMap's Nominatim API to search for nearby locations and displays recommendations based on user preferences.

Features
Dynamic Suggestions: Choose from categories like Hike, Café/Bar, Restaurant, Sightseeing, or let ReTrip surprise you with a random suggestion.
Location-Based Recommendations: Utilizes geolocation to find nearby places tailored to your preferences.
Integration with OpenStreetMap: Uses the Nominatim API for fetching suggestions.
Simple and Intuitive Interface: User-friendly design with easy navigation.
Tech Stack
Frontend:
React: Used for building the user interface.
Axios: For making HTTP requests to the backend.
Backend:
Node.js with Express.js: To handle API requests and process data.
Axios: For communicating with the OpenStreetMap API.
APIs:
OpenStreetMap Nominatim API: Provides location-based data.
Prerequisites
To run this application, ensure the following tools are installed on your system:

Node.js (v16+ recommended)
npm (Node Package Manager)
Getting Started
Clone the Repository
bash
Kopieren
Bearbeiten
git clone https://github.com/yourusername/retrip-app.git
cd retrip-app
Directory Structure
plaintext
Kopieren
Bearbeiten
ReTrip/
├── backend/                # Backend folder
│   ├── index.js            # Main backend server file
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables
├── frontend/               # Frontend folder
│   ├── src/                # Frontend source files
│   │   ├── App.js          # Main React component
│   │   ├── MainPage.js     # Main page logic
│   │   ├── components/     # Additional React components
│   │   ├── App.css         # CSS styles
│   ├── package.json        # Frontend dependencies
├── README.md               # Documentation (this file)
Setup Instructions
Backend Setup
Navigate to the backend directory:
bash
Kopieren
Bearbeiten
cd backend
Install dependencies:
bash
Kopieren
Bearbeiten
npm install
Create a .env file for environment variables:
plaintext
Kopieren
Bearbeiten
PORT=3001
Start the backend server:
bash
Kopieren
Bearbeiten
node index.js
Confirm the backend is running: Open http://localhost:3001 in your browser. It should display a welcome message.
Frontend Setup
Navigate to the frontend directory:
bash
Kopieren
Bearbeiten
cd frontend
Install dependencies:
bash
Kopieren
Bearbeiten
npm install
Start the React development server:
bash
Kopieren
Bearbeiten
npm start
Open http://localhost:3000 in your browser.
How to Use the App
Open the app at http://localhost:3000.
Choose a category (e.g., "Restaurant", "Hike", etc.) or select "Random" for a surprise.
Allow location permissions when prompted to enable location-based suggestions.
View suggestions and enjoy your next adventure!
API Integration
Backend Endpoint
POST /suggest
Request Body:
json
Kopieren
Bearbeiten
{
  "category": "Restaurant",
  "location": { "lat": 52.5200, "lng": 13.4050 }
}
Response:
json
Kopieren
Bearbeiten
{
  "suggestions": [
    {
      "name": "Place Name",
      "lat": "52.520645",
      "lon": "13.409779",
      "type": "restaurant"
    }
  ],
  "randomSuggestion": {
    "name": "Random Place Name",
    "lat": "52.520645",
    "lon": "13.409779",
    "type": "restaurant"
  }
}
Troubleshooting
Common Issues
Frontend not connecting to backend:

Ensure the backend is running on http://localhost:3001.
Verify that the Axios URL in the frontend matches the backend URL.
CORS Issues:

Install and configure CORS in your backend:
bash
Kopieren
Bearbeiten
npm install cors
Add the following to your index.js:
javascript
Kopieren
Bearbeiten
const cors = require('cors');
app.use(cors());
Missing .env File:

Create a .env file in the backend directory with the necessary variables.
Future Improvements
Add more categories like "Shopping" or "Nightlife".
Integrate additional APIs for richer data (e.g., Yelp or Google Places).
Implement user authentication for saving preferences.
License
This project is licensed under the MIT License.

Contact
If you have any questions or feedback, feel free to reach out:

Author: Sandro Bilobrk
Email: [your-email@example.com]
