
import React from 'react';
import '../assets/x.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloudSun, FaChartLine, FaLeaf, FaExchangeAlt, FaSignInAlt } from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';
import { Button ,Box,Text,Heading} from '@chakra-ui/react';
import { Flex,Container, HStack,Link} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
const iconStyle = {
    fontSize: '3rem',
    color: '#fff',
    margin: '1rem',
    transition: 'transform 0.3s ease',
    _hover: {
        bg: "blue.400",  
        color: "white"   
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
    height:"150px",
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
      fontSize: '3rem', 
      fontWeight: 'bold',
      margin: 0,
      whiteSpace: 'nowrap', 
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
                            "AgriSmart", 
  "Your Smart Agri Solution", 
  "Innovating Farming", 
  "AgriSmart", 
  "Empowering Farmers, Enhancing Yields", 
  "Smart Solutions for a Sustainable Future", 
  "Where Technology Meets Agriculture", 
  "Your Partner in Farming Excellence", 
  "Innovate, Cultivate, Harvest", 
  "AgriSmart The Future of Farming" 

                        ]}
                        multiTextDelay={1500} 
                        typeSpeed={100}
                        deleteSpeed={50}
                        loop 
                    />
                </h1>
            </header>

    <Flex
    mt={"0px"}
    mb={"0px"}
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
        Sell your Product
      </Button>
    </Flex>

            <nav className='nav3'>
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


 







/* 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCloudSun, FaChartLine, FaLeaf, FaExchangeAlt, FaSignInAlt } from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';
import { Button, Box, Text, Heading, Flex, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const iconStyle = {
    fontSize: '3rem',
    color: '#fff',
    transition: 'transform 0.3s ease',
};

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogin = () => navigate('/auth');
    const handleBuy = () => navigate('/buy');
    const handleTips = () => navigate('/tips');
    const handleMarketPrice = () => navigate('/marketprice');
    const handleWeather = () => navigate('/weather');

    return (
        <Box width="100%" boxSizing="border-box">
           
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="150px"
                position="relative"
                bg="blue.600"
                color="white"
                p="2rem"
            >
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                >
                    <Typewriter
                        textStyle={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}
                        startDelay={100}
                        cursorColor="#fff"
                        multiText={[
                            "AgriSmart",
                            "Your Smart Agri Solution",
                            "Innovating Farming"
                        ]}
                        multiTextDelay={1500}
                        typeSpeed={100}
                        deleteSpeed={50}
                        loop
                    />
                </Box>
            </Box>

           
            <Flex
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
                    Sell Your Product
                </Button>
            </Flex>

          <Flex
                direction="row"
                wrap="wrap"
                justifyContent="center"
                mt="20px"
                p="20px"
            >
                <motion.div
                    className="icon-container"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleWeather}
                    style={{
                        ...iconStyle,
                        backgroundColor: '#38B2AC',
                        borderRadius: '50%',
                        padding: '1.5rem', // Increased padding for better centering
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FaCloudSun color="#fff" />
                    <Text color="white" mt="10px">Weather</Text>
                </motion.div>
                <motion.div
                    className="icon-container"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleMarketPrice}
                    style={{
                        ...iconStyle,
                        backgroundColor: '#3182CE',
                        borderRadius: '50%',
                        padding: '1.5rem', // Increased padding for better centering
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FaChartLine color="#fff" />
                    <Text color="white" mt="10px">Market Prices</Text>
                </motion.div>
                <motion.div
                    className="icon-container"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleTips}
                    style={{
                        ...iconStyle,
                        backgroundColor: '#48BB78',
                        borderRadius: '50%',
                        padding: '1.5rem', // Increased padding for better centering
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FaLeaf color="#fff" />
                    <Text color="white" mt="10px">Farming Tips</Text>
                </motion.div>
                <motion.div
                    className="icon-container"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleBuy}
                    style={{
                        ...iconStyle,
                        backgroundColor: '#ED8936',
                        borderRadius: '50%',
                        padding: '1.5rem', // Increased padding for better centering
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FaExchangeAlt color="#fff" />
                    <Text color="white" mt="10px">Buy/Sell</Text>
                </motion.div>
                <motion.div
                    className="icon-container"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleLogin}
                    style={{
                        ...iconStyle,
                        backgroundColor: '#F56565',
                        borderRadius: '50%',
                        padding: '1.5rem', // Increased padding for better centering
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FaSignInAlt color="#fff" />
                    <Text color="white" mt="10px">Login</Text>
                </motion.div>
            </Flex>

           
            <Flex
                direction="column"
                alignItems="center"
                mt="20px"
                p="20px"
            >
                <Box
                    width="80%"
                    maxWidth="1200px"
                    height="100px"
                    mb="10px"
                    bg="teal.500"
                    color="white"
                    borderRadius="12px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    _hover={{ bg: "teal.400" }}
                    onClick={handleBuy}
                >
                    <Text fontWeight="bold" fontSize="2xl">Buy / Sell Products</Text>
                </Box>
                <Box
                    width="80%"
                    maxWidth="1200px"
                    height="100px"
                    mb="10px"
                    bg="blue.500"
                    color="white"
                    borderRadius="12px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    _hover={{ bg: "blue.400" }}
                    onClick={handleMarketPrice}
                >
                    <Text fontWeight="bold" fontSize="2xl">Market Prices</Text>
                </Box>
                <Box
                    width="80%"
                    maxWidth="1200px"
                    height="100px"
                    mb="10px"
                    bg="yellow.500"
                    color="white"
                    borderRadius="12px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    _hover={{ bg: "yellow.400" }}
                    onClick={handleWeather}
                >
                    <Text fontWeight="bold" fontSize="2xl">Weather</Text>
                </Box>
                <Box
                    width="80%"
                    maxWidth="1200px"
                    height="100px"
                    mb="10px"
                    bg="green.500"
                    color="white"
                    borderRadius="12px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    _hover={{ bg: "green.400" }}
                    onClick={handleTips}
                    marginBottom={"100px"}
                >
                    <Text fontWeight="bold" fontSize="2xl">Farming Tips</Text>
                </Box>
            
            </Flex>

      
            <Box
                as="footer"
                textAlign="center"
                p="20px"
                bg="blue.600"
                color="white"
                position="fixed"
                bottom="0"
                width="100%"
            >
                <Text>&copy; 2024 AgriSmart</Text>
            </Box>
        </Box>
    );
};

export default HomePage;





 */