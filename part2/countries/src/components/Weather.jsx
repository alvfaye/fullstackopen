// require('dotenv').config();
import axios from 'axios';
import React, { useState } from 'react';
const APIkey = 'b76dcd7e89746c4fd4baa3c11b0b0553';
//process.env.OpenWeatherAPIkey;
async function fetchData(city, setWeatherData) {
  console.log('APIkey', APIkey);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
  console.log('api url', url);
  const { data } = await axios.get(url);
  console.log('data assigned to setWeatherDAta', data);

  return data;
}

function Weather({ city }) {
  //const [weatherData, setWeatherData] = useState({});
  // const city = 'Manila,PH';
  const data = fetchData(city);
  //setWeatherData(base);
  //.then((response) => {
  //setWeatherData(response .data);
  console.log('WEATHER DATA', data);
  //});

  return <div>{data.weather[0].description}</div>;
}

export default Weather;
