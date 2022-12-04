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
      // console.log('inside response', name, response.data);
      // setCountries(response.data.slice(0, 5));
      let desc = '';
      desc = response.weather[0].description;
      desc += '\n temperature ' + response.main.temp;
      desc += '\n wind ' + response.wind.gust + ' m/s';
      setWeatherData(desc);
      console.log('desc', desc);
    })
    .catch(console.error);
};

const Weather = ({ city }) => {
  const [weather, setWeatherData] = useState('');
  Test(city, setWeatherData);

  return (
    <>
      <h3>hey</h3>
      <div>{weather}</div>
    </>
  );
};

export default Weather;
