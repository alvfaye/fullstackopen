import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState([]);
  const [tmpName, settmpName] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      console.log('inside fetchdata', data);
      return data;
    };
    fetchData()
      .then((response) => {
        console.log('inside response', name, response.data);
        setCountries(response.data);
      })
      .catch(console.error);
  }, [name]);

  const Modal = ({ country }) => {
    const languages = Object.values(country.languages);

    return (
      <div
        className="fixed inset-0 bg-gray-300 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <h3>name</h3>
        <h2>{country.name.common}</h2>
        <h3>capital</h3>
        <h2>{country.capital[0]}</h2>
        <h3>area</h3>
        <h2>{country.area}</h2>
        <h3>languages</h3>
        {languages.map((language, id) => (
          <h2 key={id}>{language}</h2>
        ))}
      </div>
    );
  };
  const Country = ({ country }) => {
    return (
      <div>
        {country.name.common}
        <button
          className="border-2 border-green-200 text-xl px-2 py-1 mx-3 bg-green-200 rounded-2xl shadow-lg"
          type="button"
          onClick={<Modal country={country} />}
        >
          Show
        </button>
      </div>
    );
  };

  function Modal(country) {
    console.log('inside modal---country');
    return (
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                {country.name.common}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">{country.common}</div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6
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
                className="px-6
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
