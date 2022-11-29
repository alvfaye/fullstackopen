import React, { useState, useEffect } from 'react';
import axios from 'axios';
// const url = 'https://restcountries.com/v3.1/name/';

function Search() {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  const [tmpName, settmpName] = useState('');
  // setName('south sudan');
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      console.log('inside fetchdata', data);
      return data;
    };
    // axios
    //   .get(`https://restcountries.com/v3.1/name/${name}`, {
    //     params: {
    //       per_page: 10,
    //     },
    //   })
    fetchData()
      .then((response) => {
        console.log('inside response', name, response.data);
        setCountries(response.data);
      })
      .catch(console.error);
  }, [name]);

  const Country = ({ country }) => {
    return (
      <div>
        {country.name.common}
        <button
          className="border-2 border-green-300 text-xl px-2 py-1 mx-3 bg-green-200 rounded-2xl shadow-lg"
          type="button"
          onClick={(e) => {
            console.log('country', country);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <button onClick={(e) => setName(tmpName)}>submit</button> */}
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
