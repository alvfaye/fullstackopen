import React from 'react';
import Weather from './Weather';

function Details({ country }) {
  //let languages = ['Arabic', 'English'];
  let languages = Object.values(country?.languages);
  console.log('languages', languages);
  return (
    Object.keys(country).length && (
      <div
        //className="fixed inset-0 bg-gray-300 bg-opacity-50 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        {/* main details */}
        <h5>{country.name.common}</h5>
        <h6>capital {country.capital[0]}</h6>
        <h6>area {country.area}</h6>
        {/* list languages */}
        <h6>languages:</h6>
        {languages.map((language, id) => (
          <h6 key={id}>{language}</h6>
        ))}
        {/* display flag */}
        <img className="w-20 h-20" src={country.flags.svg} />
      </div>
    )
  );
}

export default Details;
