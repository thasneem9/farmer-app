import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
          console.log(response.data); // Log the response data
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
      <h1>Weather Page</h1>
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
          <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
          <p><strong>Feels Like:</strong> {weather.current.feelslike_c}°C</p>
          <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
          <p><strong>Precipitation:</strong> {weather.current.precip_mm} mm</p>
          <p><strong>Wind Speed:</strong> {weather.current.wind_kph} km/h</p>
          <p><strong>Wind Direction:</strong> {weather.current.wind_dir}</p>
          <p><strong>UV Index:</strong> {weather.current.uv}</p>
          <p><strong>Visibility:</strong> {weather.current.vis_km} km</p>
          <p><strong>Dew Point:</strong> {weather.current.dewpoint_c}°C</p>
          <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} />
        </div>
      )}
      <style jsx>{`
        .weather-page {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 600px;
          margin: auto;
          text-align: center;
        }

        .weather-select {
          margin-bottom: 20px;
        }

        .weather-info {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
        }

        .weather-info h2 {
          margin-bottom: 10px;
        }

        .weather-info p {
          margin: 5px 0;
        }

        .weather-info img {
          width: 50px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default WeatherPage;
