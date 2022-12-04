import axios from 'axios';
import React, { useState } from 'react';
const APIkey = 'b76dcd7e89746c4fd4baa3c11b0b0553';
//process.env.OpenWeatherAPIkey;

const Test = (city, setWeatherData) => {
  const fetchData = async (city) => {
    console.log('APIkey', APIkey);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

    console.log('api url', url);
    const { data } = await axios.get(url);
    console.log('data assigned to setWeatherDAta', JSON.stringify(data));
    return data;
  };
  fetchData(city)
    .then((response) => {
      console.log('inside response', city, JSON.stringify(response));
      const { weather, main, wind } = response;
      const weatherObj = {
        desc: weather[0].description,
        icon: weather[0].icon,
        temp: main.temp,
        wind: wind.deg,
      };
      let desc = `
      ${weather[0].description} \n
      temperature ${main.temp} \n
      wind ${wind.deg} m/s \n
      `;

      setWeatherData(desc);
      console.log('desc', desc, JSON.stringify(weatherObj));
    })
    .catch(console.error);
};

const Weather = ({ city }) => {
  const [weather, setWeatherData] = useState('');
  Test(city, setWeatherData);

  return (
    <>
      <div>{weather}</div>
    </>
  );
};

export default Weather;
