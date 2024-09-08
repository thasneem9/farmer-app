import React, { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa'; 
import tipsData from './tips.json';

const FarmingTips = () => {
  const [selectedState, setSelectedState] = useState('Andhra Pradesh'); 
  const [tips, setTips] = useState(tipsData.states[0].tips.slice(0, 5));


  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    const tips = tipsData.states.find(s => s.name === state).tips;
    setTips(tips.slice(0, 5)); 
  };

 
  const refreshTips = () => {
    const tips = tipsData.states.find(s => s.name === selectedState).tips;
    const shuffledTips = shuffleTips(tips, 5); 
    setTips(shuffledTips);
  };

  
  const shuffleTips = (tipsArray, count) => {
    const shuffled = [...tipsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); 
  };

  return (
    <div className="container">
      <h2>Farming Tips for {selectedState}</h2>
      <div className="tip-box">
        {tips.map((tip, index) => (
          <div key={index} className="tip-item">
            <FaLightbulb className="bulb-icon" />
            <p className="tip-text">{tip}</p>
          </div>
        ))}
      </div>
      <select onChange={handleStateChange} className="state-select">
        {tipsData.states.map((state, index) => (
          <option key={index} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <button onClick={refreshTips} className="refresh-btn">Refresh Tips</button>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: Arial, sans-serif;
        }

        h2 {
          margin-bottom: 20px;
          margin-top:50px;
          font-weight:bold;
          
        }

        .tip-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #f0f0f0;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          width: 80%;
          max-width: 500px;
        }

        .tip-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .bulb-icon {
          color: #ffc107;
          font-size: 30px;
          margin-right: 10px;
        }

        .tip-text {
          font-size: 18px;
        }

        .state-select {
          padding: 10px;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .refresh-btn {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .refresh-btn:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default FarmingTips;
