import React from 'react';
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
