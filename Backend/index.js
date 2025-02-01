require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
  });

// Endpoint to fetch suggestions
app.post('/suggest', async (req, res) => {
    const { category, location } = req.body;

    const typeMapping = {
        Hike: "park",
        "Café/Bar": "cafe",
        Restaurant: "restaurant",
        Sightseeing: "tourist_attraction",
    };

    // Map category to a query string
    const queryType = typeMapping[category] || "point_of_interest";

    try {
        // Make the request to Nominatim API
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: queryType, // Use the mapped category
                format: 'json', // JSON response format
                addressdetails: 1, // Include detailed address information
                limit: 10, // Limit results to 10
            },
        });

        // Parse the results
        const results = response.data.map(place => ({
            name: place.display_name,
            lat: place.lat,
            lon: place.lon,
            type: place.type || "Unknown",
        }));

        // Pick a random suggestion from the results
        const randomSuggestion = results[Math.floor(Math.random() * results.length)];

        // Respond with suggestions and a random one
        res.json({
            suggestions: results,
            randomSuggestion,
        });
    } catch (err) {
        console.error('Error calling Nominatim API:', err);
        res.status(500).json({ error: 'Something went wrong while fetching suggestions.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});