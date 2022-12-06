import axios from 'axios';
import React, { useState } from 'react';
// const APIkey = 'b76dcd7e89746c4fd4baa3c11b0b0553';
const APIkey = process.env.OpenWeatherAPIkey;
let weatherObj = {};

const Test = (city) => {
  const fetchData = async (city) => {
    console.log('APIkey', APIkey);
    //const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    const url = `http://localhost:3004/weather`;
    const { data } = await axios.get(url);

    //console.log('data assigned to setWeatherDAta', JSON.stringify(data));
    let weathr = data.filter(
      (x) => x.name.toLowerCase() === city.toLowerCase()
    );
    console.log('weathr', weathr);

    //return data;
    return weathr[0];
  };

  fetchData(city)
    .then((response) => {
      console.log('inside response', city, JSON.stringify(response));

      const { weather, main, wind } = response;
      weatherObj = {
        "desc": weather[0].description,
        "icon": weather[0].icon,
        "temp": main.temp,
        "wind": wind.deg,
      };
      let desc = `
      ${weather[0].description} \n
      temperature ${main.temp} \n
      wind ${wind.deg} m/s \n
      <img src="" />
      `;
console.log('desc',desc)
      //setWeatherData(weatherObj);
      console.log('desc....', weatherObj["desc"], JSON.stringify(weatherObj));
    })
    .catch(console.error);
  
  return { "desc": weatherObj["desc"], "icon": weatherObj["icon"] }
};

const Weather = ({ city }) => {
  //const [weather, setWeatherData] = useState({});
  const weatherInfo = Test(city);
  //weather.icon = '10d';
  console.log('weather Info', city, JSON.stringify(weatherInfo));
  const desc = weatherInfo["desc"]
  return (
    <>
      <div>{weatherInfo["desc"]}</div>
      <img src={`/images/${weatherInfo["icon"]}@2x.png`} alt={weatherInfo["desc"]} />
    </>
  );
};

export default Weather;
