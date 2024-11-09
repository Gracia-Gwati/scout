import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={handleSearch}
      />
      <Weather city={city} />
    </div>
  );
}

export default App;
