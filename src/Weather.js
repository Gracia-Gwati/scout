import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "at2obb91e70467311d4bbf00ba2957c4";
  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              units: "metric",
              appid: API_KEY,
            },
          }
        );
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError("City not found");
        setWeatherData(null);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather">
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
