/* import React from 'react';
import '../assets/x.css'
import { CardFooter } from '@chakra-ui/react';
import {useNavigate} from'react-router-dom';
import { Box } from '@chakra-ui/react';
const HomePage = () => {
 
  const navigate=useNavigate()
  const handleLogin=()=>{
    navigate('/auth');
  } 
  const handleBuy=()=>{
    navigate('/buy');
  }  
  const handleTips=()=>{
    navigate('/tips');
  }  
  const handleMarketPrice=()=>{
    navigate('/marketprice');
  } 
  const handleWeather=()=>{
    navigate('/weather');
  }  
  return (
     
    <div className='homepage'>
      
      <header>
        <h1>AgriSmart</h1>
      </header>

      <nav>
        <ul>
          <li><a href="" onClick={handleWeather}>Weather</a></li>
          <li><a href="" onClick={handleMarketPrice}>Market Prices</a></li>
          <li><a  onClick={handleTips}href="">Farming Tips</a></li>
          <li><a onClick={handleBuy} href="">Buy/Sell</a></li>
          <li onClick={handleLogin}><a href="">LOGIN</a></li>
        </ul>
      </nav>

      <section id="weather">
        <h2 >Weather Information</h2>
        <div id="weather-info"></div>
      </section>

      <section id="prices">
        <h2>Market Prices</h2>
        <div id="price-list">
          <ul></ul>
        </div>
      </section>

      <section id="tips">
        <h2>Farming Tips</h2>
        <div id="tips-list"></div>
      </section>

      <section id="sell"  style={{
    color: 'black',
    ':hover': {
      color: 'blue'
    }
  }}>
      <h2 
  onClick={handleBuy} 
 
>
Buy/Sell Products</h2>
        <form>
          <input type="text" placeholder="Product Name" required />
          <input type="number" placeholder="Price" required />
          <textarea placeholder="Description"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 AgriSmart</p>
      </footer>
    </div>
  );
};

export default HomePage;
 */



import React from 'react';
import '../assets/x.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloudSun, FaChartLine, FaLeaf, FaExchangeAlt, FaSignInAlt } from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';

const iconStyle = {
    fontSize: '3rem',
    color: '#fff',
    margin: '1rem',
    transition: 'transform 0.3s ease',
};
const iconStyle2= {
  fontSize: '3rem',
  color: '#fff',
  margin: '1rem',
  transition: 'transform 0.3s ease',
};

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/auth');
    };
    const handleBuy = () => {
        navigate('/buy');
    };
    const handleTips = () => {
        navigate('/tips');
    };
    const handleMarketPrice = () => {
        navigate('/marketprice');
    };
    const handleWeather = () => {
        navigate('/weather');
    };
    const headerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    height:"150px",// Takes up full viewport height
      position: 'relative',
      padding: '1rem',
      boxSizing: 'border-box',
  };

  const typerStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
  };

  const textStyle = {
      fontSize: '3rem', // Adjust font size as needed
      fontWeight: 'bold',
      margin: 0,
      whiteSpace: 'nowrap', // Prevent text from wrapping
  };

    return (
        <div className="homepage"  style={{ width: '100%', boxSizing: 'border-box' }}>
            <header style={headerStyle}>
            <h1 className='typer'style={typerStyle}>
                    <Typewriter
                        textStyle={textStyle}
                        startDelay={100}
                        cursorColor="#fff"
                        multiText={[
                            "AgriSmart", // First text
                            "Your Smart Agri Solution", // Second text
                            "Innovating Farming", // Add more texts as needed
                            "AgriSmart", // First text
                            "Your Smart Agri Solution", // Second text
                            "Innovating Farming" ,// Add more texts as needed
                            "AgriSmart", // First text
                            "Your Smart Agri Solution", // Second text
                            "Innovating Farming", // Add more texts as needed
                            "AgriSmart" // Add more texts as needed
                        ]}
                        multiTextDelay={1500} // Delay between texts
                        typeSpeed={100}
                        deleteSpeed={50}
                        loop // Set to true to loop through texts
                    />
                </h1>
            </header>

            <nav>
                <ul className="icon-list">
                    <li>
                        <motion.div
                            className="icon-container"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaCloudSun style={iconStyle} color='blue.100' onClick={handleWeather} />
                            <p>Weather</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            className="icon-container"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaChartLine style={iconStyle} onClick={handleMarketPrice} />
                            <p>Market Prices</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            className="icon-container"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLeaf style={iconStyle} onClick={handleTips} />
                            <p>Farming Tips</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            className="icon-container"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaExchangeAlt style={iconStyle} onClick={handleBuy} />
                            <p>Buy/Sell</p>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            className="icon-container"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaSignInAlt style={iconStyle} onClick={handleLogin} />
                            <p>LOGIN</p>
                        </motion.div>
                    </li>
                </ul>
            </nav>

            <section id="weather">
                <h2>Weather Information</h2>
                <div id="weather-info"></div>
            </section>

            <section id="prices">
                <h2>Market Prices</h2>
                <div id="price-list">
                    <ul></ul>
                </div>
            </section>

            <section id="tips">
                <h2>Farming Tips</h2>
                <div id="tips-list"></div>
            </section>

            <footer>
                <p>&copy; 2024 AgriSmart</p>
            </footer>
            
        </div>
    );
};

export default HomePage;

















/* import React from 'react';
import { motion } from 'framer-motion';
import { FaCloudSun, FaChartLine, FaLeaf, FaExchangeAlt, FaSignInAlt } from 'react-icons/fa';
import './HomePage.css'; // Include custom styles for your homepage

const iconStyle = {
    fontSize: '3rem',
    color: '#fff',
    margin: '1rem',
    transition: 'transform 0.3s ease'
};

const HomePage = () => {
    return (
        <div className="homepage-container">
            <motion.div
                className="icon-container"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaCloudSun style={iconStyle} />
                <p>Weather</p>
            </motion.div>
            <motion.div
                className="icon-container"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaChartLine style={iconStyle} />
                <p>Market Prices</p>
            </motion.div>
            <motion.div
                className="icon-container"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaLeaf style={iconStyle} />
                <p>Farming Tips</p>
            </motion.div>
            <motion.div
                className="icon-container"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaExchangeAlt style={iconStyle} />
                <p>Buy/Sell</p>
            </motion.div>
            <motion.div
                className="icon-container"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaSignInAlt style={iconStyle} />
                <p>LOGIN</p>
            </motion.div>
        </div>
    );
};

export default HomePage;
 */