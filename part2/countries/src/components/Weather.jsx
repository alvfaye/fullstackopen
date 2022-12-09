import axios from 'axios';
import React, { useEffect, useState } from 'react';
// const APIkey = 'b76dcd7e89746c4fd4baa3c11b0b0553';
const APIkey = process.env.OpenWeatherAPIkey;

const WeatherInfo = ({ name, city }) => {
  let weatherObj = {
    desc: '',
    icon: '',
    temp: '',
    wind: '',
  };
  const [desc, setDesc] = useState(
    'weather data should display here...........'
  );
  const [weatherInfo, setWeatherInfo] = useState({ weatherObj });

  function filterCity(item, city, countryLocation) {
    console.log('item-city----------', item, city);
    return item.name === city || item.name === countryLocation;
  }

  const fetchData = async () => {
    //const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      },
    };
    try {
      const url = '/weather'; //`http://localhost:3004/weather`;
      axios.defaults.baseURL = 'http://localhost:3004';
      axios.defaults.headers.post['Content-Type'] =
        'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      const { data } = await axios.get(url);
      return data
    } catch (error) {
      console.error('error........',error);
    }
    //return data;
  };

  fetchData()
    .then((response) => {
      // console.log('response Weather', response);
      let weathr = response.filter((x) => filterCity(x, city, name));
      console.log('WEATHR', weathr[0]);
      const { weather, main, wind } = weathr[0];
      console.log('-***********', weather, main, wind);
      weatherObj = {
        desc: weather[0].description, // weather[0].description,
        icon: weather[0].icon,
        temp: main.temp,
        wind: wind.deg,
      };

      console.log('weatherObj', weatherObj);
      const d = `
      ${weather[0].description} \n
      temperature ${main.temp} \n
      wind ${wind.deg} m/s \n
      `;
      setDesc(d);
      setWeatherInfo(weatherObj);
      console.log('desc', d);
      //setWeatherData(weatherObj);
      //console.log('desc....', weatherObj['desc'], JSON.stringify(weatherObj));
    })
    .catch(console.error);

  return (
    <div>
      Weather Info
      <div>{desc}</div>
      <div>{weatherInfo['desc']}</div>
      <div>{weatherInfo['temp']} degrees</div>
      <div>{weatherInfo['wind']} m/s</div>
      <img
        src={`/images/${weatherInfo['icon']}@2x.png`}
        alt={weatherInfo['desc']}
      />
    </div>
  );
};

const Weather = ({ country }) => {
  //const [weather, setWeatherData] = useState({});
  // Test(country.capital[0], country.name.common);
  const capital = country.capital[0];
  const countryName = country.name.common;
  //setWeatherData(weatherInfo);
  // useEffect(() => {
  //   console.log('city...!',city)
  // },[city])
  //weather.icon = '10d';
  console.log('weather Info', countryName, capital);
  //const desc = weatherInfo['desc'];
  return (
    <div className="bg-slate-300 shadow-xl m-5 w-fit shadow-gray-500 border">
      <WeatherInfo name={countryName} city={capital} />
      {/* <div>{weatherInfo['desc']}</div>
      <div>{weatherInfo['temp']} degrees</div>
      <div>{weatherInfo['wind']} m/s</div>
      <img src={`/images/${weatherInfo['icon']}@2x.png`} alt={weatherInfo['desc']} /> */}
    </div>
  );
};

export default Weather;
