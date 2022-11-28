import Search from './components/Search';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  return <Search />;
}

export default App;
