import axios from 'axios';
import React from 'react';
const APIkey = process.env.OpenWeatherAPIkey;
const fetchData = async (city) => {
  const data = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`
  );
  return data;
};

function Weather({ location }) {
  const [weatherData, setWeatherData] = useState({});
  fetchData(location).then((response) => {
    setWeatherData(response.data);
  });
  return <div>{weatherData}</div>;
}

export default Weather;
