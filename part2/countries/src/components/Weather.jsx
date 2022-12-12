import React from 'react';

const Weather = ({ weather }) => {
  return (
    <div className="bg-slate-300 shadow-xl m-5 w-fit shadow-gray-500 border">
      <div>{weather['desc']}</div>
      <div>{weather['temp']} degrees</div>
      <div>{weather['wind']} m/s</div>
      <img src={`/images/${weather['icon']}@2x.png`} alt={weather['desc']} />
    </div>
  );
};

export default Weather;
