import { useState } from 'react';
import { Filter, Persons, PersonForm } from './components';
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [filteredList, setFilteredList] = useState(persons);
  const addNewContact = (name, number) => {
    let maxId = persons.reduce((a, v) => v.id, 0);
    maxId += 1;

    const newContact = [
      {
        name,
        number,
        id: maxId + 1,
      },
    ];
    setPersons(persons.concat(newContact));

    setFilteredList(filteredList.concat(newContact));
  };

  const filterPersons = (filter) => {
    const newList = persons.filter(
      (x) => x.name.toLowerCase().indexOf(filter) != -1
    );
    setFilteredList(newList);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilter={filterPersons} />

      <h3>Add a new contact</h3>

      <PersonForm addContact={addNewContact} />

      <h3>Numbers</h3>

      <Persons persons={filteredList} />
    </div>
  );
};

export default App;
