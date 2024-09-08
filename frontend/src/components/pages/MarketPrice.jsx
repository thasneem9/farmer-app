import React, { useState, useEffect } from 'react';

const RESOURCE_ID = '35985678-0d79-46b4-9ed6-6f13308a1d24';
const API_KEY = '579b464db66ec23bdd000001f9c0853db9f54c335867b0b1f042b166';

const MarketPrices = () => {
  const [stateCode, setStateCode] = useState('');
  const [district, setDistrict] = useState('');
  const [commodity, setCommodity] = useState('');
  const [commodityData, setCommodityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCommodityPrices = async () => {
    setLoading(true);
    setError('');

    let apiUrl = `https://api.data.gov.in/resource/${RESOURCE_ID}?api-key=${API_KEY}&format=json&limit=10`;

    if (stateCode) {
      apiUrl += `&filters[State.keyword]=${encodeURIComponent(stateCode)}`;
    }
    if (district) {
      apiUrl += `&filters[District.keyword]=${encodeURIComponent(district)}`;
    }
    if (commodity) {
      apiUrl += `&filters[Commodity.keyword]=${encodeURIComponent(commodity)}`;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      console.log("API Response Data:", data); // Log response for debugging

      if (data && data.records && data.records.length > 0) {
        setCommodityData(data.records);
      } else {
        setError("No data available for the selected filters.");
      }
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (stateCode || district || commodity) {
      fetchCommodityPrices();
    }
  }, [stateCode, district, commodity]);

  return (
    <div className="commodity-prices">
      <h1>Commodity Prices</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Enter State"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Commodity"
          value={commodity}
          onChange={(e) => setCommodity(e.target.value)}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>District</th>
            <th>Market</th>
            <th>Commodity</th>
            <th>Variety</th>
            <th>Min Price</th>
            <th>Max Price</th>
            <th>Modal Price</th>
            <th>Arrival Date</th>
          </tr>
        </thead>
        <tbody>
          {commodityData.map((item, index) => (
            <tr key={index}>
              <td>{item.State}</td>
              <td>{item.District}</td>
              <td>{item.Market}</td>
              <td>{item.Commodity}</td>
              <td>{item.Variety}</td>
              <td>{item.Min_Price}</td>
              <td>{item.Max_Price}</td>
              <td>{item.Modal_Price}</td>
              <td>{item.Arrival_Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .commodity-prices {
          padding: 20px;
        }
        .filters {
          margin-bottom: 20px;
        }
        .filters input {
          margin-right: 10px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          background-color: #f4f4f4;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default MarketPrices;
