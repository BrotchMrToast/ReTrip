import React, { useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [suggestion, setSuggestion] = useState(null);

  const handleCategoryClick = async (selectedCategory) => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        const response = await axios.post("http://localhost:3000/suggest", {
          category: selectedCategory,
          location: { lat: latitude, lng: longitude },
        });
        console.log("Suggestions:", response.data.suggestions);
        console.log("Random Suggestion:", response.data.randomSuggestion);
        setSuggestion(response.data.randomSuggestion); // Display random suggestion
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>What do you want to do?</h1>

      {/* Dynamic Buttons for Categories */}
      <div>
        {["Hike", "Café/Bar", "Restaurant", "Sightseeing", "Random"].map((option) => (
          <button
            key={option}
            onClick={() => handleCategoryClick(option)}
            style={{ margin: "10px" }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Explicit "Find Restaurants" Button */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handleCategoryClick("Restaurant")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Find Restaurants
        </button>
      </div>

      {/* Display Suggestion */}
      {suggestion && (
        <div style={{ marginTop: "20px" }}>
          <h2>Suggestion:</h2>
          <p><strong>Name:</strong> {suggestion.name}</p>
          <p><strong>Address:</strong> {suggestion.address}</p>
          <p><strong>Rating:</strong> {suggestion.rating || "No rating available"}</p>
        </div>
      )}
    </div>
  );
};

export default MainPage;