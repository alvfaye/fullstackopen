import { useState, useEffect } from 'react';
import { Filter, Persons, PersonForm } from './components';
import phoneService from './services/phonebook';


const App = () => {
  const [persons, setPersons] = useState([]);

  const [filteredList, setFilteredList] = useState(persons);
  const addNewContact = (name, number) => {
    let maxId = persons.reduce((a, v) => v.id, 0);
    maxId += 1;

    const newContact = {
      name,
      number,
 
    };

    if (name !== '' && number !== '') {
      phoneService.create(newContact).then((data) => {
        console.log(data, 'record inserted');

        setPersons(persons.concat(data));
        setFilteredList(filteredList.concat(data));
      });
    }
  };

  const filterPersons = (filter) => {
    const newList = persons.filter(
      (x) => x.name.toLowerCase().indexOf(filter) !== -1
    );
    setFilteredList(newList);
  };

  useEffect(() => {
    phoneService.getAll().then((initialData) => {
      setPersons(persons.concat(...initialData));
      setFilteredList(filteredList.concat(...initialData));
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={filterPersons} />
      <h3>Add a new contact</h3>
      <PersonForm persons={persons} addContact={addNewContact} />
      <h3>Numbers</h3>
      <Persons persons={filteredList} updateOrigList={setPersons} updateFilteredList={setFilteredList} />
    </div>
  );
};

export default App;
