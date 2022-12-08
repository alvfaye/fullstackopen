import React, { useState, useEffect } from 'react';
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

function Search({ func }) {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3004/countries');
      //`https://restcountries.com/v3.1/name/${name}`
      const newdata = data.filter((item) => {
        return item.name.common
          .toLowerCase()
          .includes(name.toLocaleLowerCase());
      });
      console.log('inside fetchdata', newdata[0]);
      return newdata;
    };
    fetchData()
      .then((response) => {
        setCountries(response.slice(-5));
      })
      .catch(console.error);
  }, [name]);

  const Country = ({ country }) => {
    return (
      <div>
        {country.name.common}
        <button
          className="border-2 border-green-200 text-xl px-2 py-1 mx-3 bg-green-200 rounded-2xl shadow-lg"
          type="button"
          onClick={() => func(country)} //setSelectedCountry(country)}
        >
          Show
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="text-xl font-serif text-amber-800">
        <label>
          find countries
          <input
            className="border-blue-500 border-2 shadow-lg mt-3 mb-5 text-2xl"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <h1>Countries</h1>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Search;
