import React from 'react';

function Details({ country }) {
  const languages = Object.values(country.languages);
  return (
    <div
      //className="fixed inset-0 bg-gray-300 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <h1>{country.name.common}</h1>
      <h2>capital {country.capital[0]}</h2>
      <h2>area {country.area}</h2>
      <h3>languages:</h3>

      {languages.map((language, id) => (
        <h2 key={id}>{language}</h2>
      ))}
    </div>
  );
}

export default Details;
