import React from 'react';
import '../assets/x.css'
import { CardFooter } from '@chakra-ui/react';

const HomePage = () => {
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
    "West Bengal", "Delhi", "Jammu and Kashmir", "Puducherry"
  ];
  return (
    
    <div>
      <header>
        <h1>AgriSmart</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#weather">Weather</a></li>
          <li><a href="#prices">Market Prices</a></li>
          <li><a href="#tips">Farming Tips</a></li>
          <li><a href="#sell">Buy/Sell</a></li>
          <li><a href="">LOGIN</a></li>
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

      <section id="sell">
        <h2>Buy/Sell Products</h2>
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
