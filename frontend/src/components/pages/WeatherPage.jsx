import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTemperatureHigh, FaSun, FaCloud, FaTint, FaWind, FaEye } from 'react-icons/fa'; // Import icons from react-icons
import regionsData from './regions.json'; // Adjust the path as needed
import { Flex,Container, HStack ,Box,Heading,Button,Text,Link} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
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
    <>    <Flex
    as="nav"
    bg="blue.600"
    color="white"
    p="10px"
    justifyContent="space-between"
    alignItems="center"
    boxShadow="md"
  >
    <HStack spacing="20px">
      <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
        <Text fontSize="xl" fontWeight="bold">Home</Text>
      </Link>
      <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none' }}>
        <Text fontSize="xl" fontWeight="bold">About</Text>
      </Link>
      <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none' }}>
        <Text fontSize="xl" fontWeight="bold">Contact</Text>
      </Link>
    </HStack>
    <Button
      as={RouterLink}
      to="/sell"
      colorScheme="teal"
      variant="solid"
    >
      Upload Product
    </Button>
  </Flex>
    <div className="weather-page">
      {/* Navbar */}

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
          <h2>{weather.location.name}, {weather.location.region}</h2>
          <div className="weather-detail">
            <FaTemperatureHigh size={28} color="#FF6F61" className="icon" />
            <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
          </div>
          <div className="weather-detail">
            <FaSun size={28} color="#FFD54F" className="icon" />
            <p><strong>Feels Like:</strong> {weather.current.feelslike_c}°C</p>
          </div>
          <div className="weather-detail">
            <FaCloud size={28} color="#B0BEC5" className="icon" />
            <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          </div>
          <div className="weather-detail">
            <FaTint size={28} color="#64B5F6" className="icon" />
            <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
          </div>
          <div className="weather-detail">
            <FaWind size={28} color="#4CAF50" className="icon" />
            <p><strong>Wind Speed:</strong> {weather.current.wind_kph} km/h</p>
          </div>
          <div className="weather-detail">
            <FaEye size={28} color="#78909C" className="icon" />
            <p><strong>Visibility:</strong> {weather.current.vis_km} km</p>
          </div>
          <div className="weather-detail">
            <FaSun size={28} color="#FFB300" className="icon" />
            <p><strong>Dew Point:</strong> {weather.current.dewpoint_c}°C</p>
          </div>
          <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} className="weather-icon" />
        </div>
      )}
      <style jsx>{`
        .weather-page {
          font-family: 'Roboto', sans-serif;
          padding: 20px;
          max-width: 800px;
          margin: auto;
          text-align: center;
          background: linear-gradient(135deg, #f5f5f5, #e3f2fd);
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-in-out;
          margin-Top:100px
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        h1 {
          color: #333;
          margin-bottom: 20px;
          font-size: 2rem;
        }

        .weather-select {
          margin-bottom: 20px;
          animation: slideIn 1s ease-in-out;
        }

        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .weather-select label {
          font-size: 1rem;
          color: #333;
        }

        select {
          padding: 12px;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #ddd;
          outline: none;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          transition: border-color 0.3s ease;
        }

        select:focus {
          border-color: #64B5F6;
          box-shadow: 0 0 5px rgba(100, 181, 246, 0.5);
        }

        .weather-info {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 12px;
          background-color: #ffffff;
          color: #333;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .weather-info h2 {
          margin-bottom: 15px;
          color: #444;
          font-size: 1.5rem;
        }

        .weather-detail {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 12px 0;
          font-size: 1.1rem;
          color: #555;
          transition: transform 0.3s ease;
        }

        .weather-detail:hover {
          transform: scale(1.05);
          color: #00796b;
        }

        .weather-detail p {
          margin-left: 12px;
          font-size: 1rem;
        }

        .weather-icon {
          width: 120px;
          height: 120px;
          margin-top: 20px;
          animation: bounceIn 1s ease-in-out;
        }

        @keyframes bounceIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .icon {
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
    </>
  );
};

export default WeatherPage;
