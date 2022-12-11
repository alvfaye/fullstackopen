import React, { useEffect, useState } from 'react';
import Details from './components/Details';
import Search from './components/Search';
import Weather from './components/Weather';

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

function weatherApi({ country }) {}

function App() {
  const [location, setLocation] = useState(defaultCountry);
  const [refreshDetails, setRefreshDetails] = useState(false);
  const [weather, setWeather] = useState({
    desc: '',
    icon: '',
    temp: '',
    wind: '',
  });
  useEffect(() => {}, [location]);
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
      <Weather weather={weather} />
    </div>
  );
}

export default App;
