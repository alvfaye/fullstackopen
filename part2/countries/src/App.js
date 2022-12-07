import React from 'react';
import Details from './Details';
import Search from './Search';
import Weather from './Weather';

function App() {
  const [location, setLocation] = useState('');
  return (
    <div>
      <Search func={setLocation} />
      <h2>{location}</h2>
      <Details country={location} />
      <h2>Weather in {location}</h2>
      <Weather city={location} />
    </div>
  );
}

export default App;
