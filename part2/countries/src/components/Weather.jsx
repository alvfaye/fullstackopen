import axios from 'axios';
import React, { useState } from 'react';
const APIkey = 'b76dcd7e89746c4fd4baa3c11b0b0553';
//process.env.OpenWeatherAPIkey;
async function fetchData(city, setWeatherData) {
  console.log('APIkey', APIkey);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
  console.log('api url', url);
  const { data } = await axios.get(url);
  console.log('data assigned to setWeatherDAta', JSON.stringify(data));

  return data;
}

const Weather = ({ city }) => {
  let desc = '';
  fetchData(city).then((response) => {
    desc = response.weather[0].description;
    desc += '\n temperature ' + response.main.temp;
    desc += '\n wind ' + response.wind.gust + ' m/s';
    console.log('desc', desc);
    return (
      <>
        <h3>hey</h3>
        <div>{desc}</div>
        {/* console.error(desc) */}
      </>
    );
  });
};

export default Weather;
