import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const url = 'https://restcountries.com/v3.1/name/';

function Search() {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  const [tmpName, settmpName] = useState('');
  // setName('south sudan');
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`, {
        params: {
          per_page: 10,
        },
      })
      .then((response) => {
        //console.log(response.data);
        const data = response.data;
        setCountries(data);
        console.log(name.common, countries);
      });
  }, [name]);

  const Country = ({ name }) => {
    return (
      <div>
        {name.common}
        <button
          type="button"
          onClick={(e) => {
            console.log(name.common);
          }}
        >
          Show
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="text-4xl font-serif text-amber-800">
        <label>
          find countries
          <input
            className="border-blue-500 border-2 shadow-lg mt-3 mb-5 text-2xl"
            id="name"
            type="text"
            value={tmpName}
            onChange={(e) => settmpName(e.target.value)}
          />
          <button onClick={(e) => setName(tmpName)}>submit</button>
        </label>
        <h1>Countries</h1>
        {countries.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </div>
  );
}

export default Search;
