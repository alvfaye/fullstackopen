import React from 'react';
import Details from './Details';
import Search from './Search';
import Weather from './Weather';

function App() {
  const [location, setCountry] = useState('')
  return (
    <div>
      <Search func={setCountry} />
      <Details country={location}/>
      <Weather city={location}/>
    </div>
  );
}

export default App;
