import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTemperatureHigh, FaSun, FaCloud, FaTint, FaWind, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import regionsData from './regions.json'; // Adjust the path as needed

const WeatherPage = () => {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Use the imported data
    setRegions(regionsData);
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      // Fetch weather data based on selected region
      const fetchWeather = async () => {
        try {
          const apiKey = 'fd677d1b5a41490e9e285015240809'; // Replace with your actual API key
          const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
            params: {
              key: apiKey,
              q: selectedRegion,
            },
          });
          setWeather(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

      fetchWeather();
    }
  }, [selectedRegion]);

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="weather-page">
      <h1>Weather Information</h1>
      <div className="weather-select">
        <label htmlFor="region">Select Region:</label>
        <select id="region" value={selectedRegion} onChange={handleChange}>
          <option value="">Select a region</option>
          {regions.map((region) => (
            <option key={region.id} value={region.name}>{region.name}</option>
          ))}
        </select>
      </div>
      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.location.name}, {weather.location.region}</h2>
          <div className="weather-detail">
            <FaTemperatureHigh size={24} color="#ff5722" />
            <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
          </div>
          <div className="weather-detail">
            <FaSun size={24} color="#ffeb3b" />
            <p><strong>Feels Like:</strong> {weather.current.feelslike_c}°C</p>
          </div>
          <div className="weather-detail">
            <FaCloud size={24} color="#9e9e9e" />
            <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          </div>
          <div className="weather-detail">
            <FaTint size={24} color="#2196f3" />
            <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
          </div>
          <div className="weather-detail">
            <FaWind size={24} color="#4caf50" />
            <p><strong>Wind Speed:</strong> {weather.current.wind_kph} km/h</p>
          </div>
          <div className="weather-detail">
            <FaEye size={24} color="#607d8b" />
            <p><strong>Visibility:</strong> {weather.current.vis_km} km</p>
          </div>
          <div className="weather-detail">
            <FaSun size={24} color="#ff9800" />
            <p><strong>Dew Point:</strong> {weather.current.dewpoint_c}°C</p>
          </div>
          <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} className="weather-icon" />
        </div>
      )}
      <style jsx>{`
        .weather-page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 20px;
          max-width: 700px;
          margin: auto;
          text-align: center;
          background: #e0f7fa;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          color: #00796b;
          margin-bottom: 20px;
        }

        .weather-select {
          margin-bottom: 20px;
        }

        .weather-select label {
          font-size: 16px;
          color: #00796b;
        }

        select {
          padding: 10px;
          font-size: 16px;
          border-radius: 4px;
          border: 1px solid #00796b;
          outline: none;
        }

        .weather-info {
          border: 1px solid #00796b;
          padding: 20px;
          border-radius: 8px;
          background-color: #ffffff;
          color: #00796b;
        }

        .weather-info h2 {
          margin-bottom: 15px;
          color: #004d40;
        }

        .weather-detail {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 10px 0;
          font-size: 18px;
        }

        .weather-detail p {
          margin-left: 10px;
        }

        .weather-icon {
          width: 100px;
          height: 100px;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
};

export default WeatherPage;
