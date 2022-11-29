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
          className="border-2 border-green-200 text-xl px-2 py-1 mx-3 bg-green-200 rounded-2xl shadow-lg"
          type="button"
          // onClick={(e) => {
          //   console.log('country', country);
          // }}
          onClick={() => Modal(country)}
        >
          Show
        </button>
      </div>
    );
  };

  function Modal(country) {
    console.log('inside modal---country')
    console.log('name',country.name.common);
    console.log('capital', country.capital[0]);
    console.log('area', country.area)
    const languages = Object.values(country.languages)
    console.log('languages', languages)
    languages.map(language=>console.log(language))
    return (
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                {country.name.common}
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-4">{country.common}</div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
