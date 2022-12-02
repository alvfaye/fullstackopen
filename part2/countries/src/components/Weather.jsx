import axios from 'axios';
import React from 'react';
const APIkey = process.env.OpenWeatherAPIkey;
const fetchData = async (city) => {
  const data = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
  );
  return data;
};

function Weather({ location }) {
  const [weatherData, setWeatherData] = useState({});
  const location = 'Manila,PH';
  fetchData(location).then((response) => {
    setWeatherData(response.data);
  });
  return <div>{weatherData}</div>;
}

export default Weather;
