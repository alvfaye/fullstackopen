import React, { useEffect, useState } from 'react';
import Details from './components/Details';
import Search from './components/Search';
import Weather from './components/Weather';
import axios from 'axios';

const defaultCountry = {
  name: {
    common: 'Philippines',
    official: 'Republic of the Philippines',
  },
  capital: ['Manila'],
  languages: {
    eng: 'English',
    fil: 'Filipino',
  },
  area: 342353,
  flags: {
    png: 'https://flagcdn.com/w320/ph.png',
    svg: 'https://flagcdn.com/ph.svg',
  },
  maps: {
    googleMaps: 'https://goo.gl/maps/k8T2fb5VMUfsWFX6A',
    openStreetMaps: 'https://www.openstreetmap.org/relation/443174',
  },
  timezones: ['UTC+08:00'],
};

function App() {
  const [location, setLocation] = useState(defaultCountry);
  const [refreshDetails, setRefreshDetails] = useState(false);
  const [weatherObj, setWeatherObj] = useState({
    desc: 'weather desc',
    icon: '10d',
    temp: '-10F',
    wind: '99.00',
  });
  useEffect(() => {
    const APIkey = 'b76dcd7e89746c4fd4baa3c11b0b0553'; //process.env.REACT_APP_OPENWEATHER_APIKEY;
    const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${location.capital[0]}&appid=${APIkey}`;
    try {
      axios.get(api_url).then((response) => {
        const { weather, main, wind } = response.data;

        const newWeather = {
          desc: weather[0].description,
          icon: weather[0].icon,
          temp: main.temp,
          wind: wind.deg,
        };
        setWeatherObj(newWeather);
      });
    } catch (error) {
      console.error(error);
    }
  }, [location]);
  return (
    <div>
      <Search func={setLocation} />
      <h2 className="m-5 text-2xl font-semibold text-white bg-lime-600">
        {location.name['common']}
      </h2>
      {refreshDetails && <Details country={location} />}
      <h2 className="m-5 text-2xl font-semibold text-stone-100 bg-lime-300">
        Weather in {location.capital[0]}
      </h2>
      <Weather weather={weatherObj} />
    </div>
  );
}

export default App;
