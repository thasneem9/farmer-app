


import React from 'react';
import '../assets/x.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloudSun, FaChartLine, FaLeaf, FaExchangeAlt, FaSignInAlt } from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';
import { Button ,Box,Text,Heading} from '@chakra-ui/react';

const iconStyle = {
    fontSize: '3rem',
    color: '#fff',
    margin: '1rem',
    transition: 'transform 0.3s ease',
    _hover: {
        bg: "blue.400",  // Background color on hover
        color: "white"   // Text color on hover
      }
    
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
            <Box
  id="weather"
  width="1460px"
  height="100px"
  ml="30px"
  mt="20px"
  bg="white"
  _hover={{ bg: "blue.400", color: "white" }}
  borderRadius="12px"
  display="flex"
  alignItems="center" 
  justifyContent="start" 
  onClick={handleBuy}
  
>
  <Text ml="20px" fontWeight="bold" fontSize="xx-large">
    Buy / Sell Products
  </Text>
</Box>
           

          
            <Box
  id="weather"
  width="1460px"
  height="100px"
  ml="30px"
  mt="20px"
  bg="white"
  _hover={{ bg: "orange.400", color: "white" }}
  borderRadius="12px"
  display="flex"
  alignItems="center" 
  justifyContent="start"
  onClick={handleMarketPrice}
>
  <Text ml="20px" fontWeight="bold" fontSize="xx-large">
    Market Prices
  </Text>
</Box>
<Box
  id="weather"
  width="1460px"
  height="100px"
  ml="30px"
  mt="20px"
  bg="white"
  _hover={{ bg: "blue.400", color: "white" }}
  borderRadius="12px"
  display="flex"
  alignItems="center" 
  justifyContent="start" 
  onClick={handleWeather} 
>
  <Text ml="20px" fontWeight="bold" fontSize="xx-large">
    Weather
  </Text>
</Box>
          
<Box
  id="weather"
  width="1460px"
  height="100px"
  ml="30px"
  mt="20px"
  bg="white"
  _hover={{ bg: "green.300", color: "white" }}
  borderRadius="12px"
  display="flex"
  alignItems="center"
  justifyContent="start" 
  onClick={handleTips} 
>
  <Text ml="20px" fontWeight="bold" fontSize="xx-large">
    Farming Tips
  </Text>
</Box>

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