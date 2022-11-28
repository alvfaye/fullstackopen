import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://restcountries.com/v3.1/name/';

function Search() {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        //console.log(response.data);
        setCountries(response.data);
        console.log(countries);
      });
  }, []);

  return (
    <div>
      <div className="text-4xl font-serif text-amber-800">
        <label>
          find countries
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <h1>Countries</h1>
      </div>
    </div>
  );
}

export default Search;
