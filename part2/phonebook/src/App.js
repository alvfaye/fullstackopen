import { useState } from 'react';
import { Filter, Persons, PersonForm } from './components';
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const addNewContact = () => console.log(newName, newNumber);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} />

      <h3>Add a new contact</h3>

      <PersonForm
        name={newName}
        number={newNumber}
        addContact={addNewContact}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} />
    </div>
  );
};

export default App;
