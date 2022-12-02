// require('dotenv').config();
import axios from 'axios';
import React, { useState } from 'react';
const APIkey = 'b76dcd7e89746c4fd4baa3c11b0b0553';
//process.env.OpenWeatherAPIkey;
const fetchData = async (city) => {
  console.log('APIkey', APIkey);
  const data = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
  );
  return data;
};

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState({});
  // const city = 'Manila,PH';
  fetchData(city).then((response) => {
    setWeatherData(response.data);
    console.log(weatherData);
  });
  return <div>{weatherData}</div>;
}

export default Weather;
