import { useState, useEffect } from 'react';
import { Filter, Persons, PersonForm } from './components';
import phoneService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [filteredList, setFilteredList] = useState(persons);

  const addNewContact = (name, number) => {
    const newContact = {
      name,
      number,
    };

    if (name !== '' && number !== '') {
      const found = persons.find((x) => x.name === name);
      if (found) {
        const id = found.id;
        console.log('update person ', found);
        const updatedRecord = { id, ...newContact };
        phoneService.update(id, updatedRecord);
        const newList = persons.map((x) => (x.id === id ? updatedRecord : x));
        const newFilteredList = filteredList.map((x) =>
          x.id === id ? updatedRecord : x
        );
        setPersons(newList);
        setFilteredList(newFilteredList);
        
      } else {
        phoneService.create(newContact).then((data) => {
          console.log(data, 'record inserted');

          setPersons(persons.concat(data));
          setFilteredList(filteredList.concat(data));
        });
      }
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
      <Persons
        persons={filteredList}
        updateOrigList={setPersons}
        updateFilteredList={setFilteredList}
      />
    </div>
  );
};

export default App;
