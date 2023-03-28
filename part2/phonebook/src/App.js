import { useState, useEffect } from 'react';
import { Filter, Persons, PersonForm } from './components';
import axios from 'axios';

const url = 'http://localhost:3001/persons';


const App = () => {
  const [persons, setPersons] = useState([]);

  const [filteredList, setFilteredList] = useState(persons);
  const addNewContact = (name, number) => {
    let maxId = persons.reduce((a, v) => v.id, 0);
    maxId += 1;

    const newContact = [
      {
        name,
        number,
        id: maxId,
      },
    ];
    if (name !== '' && number !== '') {
      setPersons(persons.concat(newContact));
      setFilteredList(filteredList.concat(newContact));
    }
  };

  const filterPersons = (filter) => {
    const newList = persons.filter(
      (x) => x.name.toLowerCase().indexOf(filter) !== -1
    );
    setFilteredList(newList);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPersons(response.data);
        //setFilteredList(response.data);
    });
   
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={filterPersons} />
      <h3>Add a new contact</h3>
      <PersonForm persons={persons} addContact={addNewContact} />
      <h3>Numbers</h3>
      <Persons persons={filteredList} />
    </div>
  );
};

export default App;
