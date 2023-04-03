import { useState, useEffect } from 'react';
import { Filter, Persons, PersonForm } from './components';
import Toast from './components/Toast';
import phoneService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredList, setFilteredList] = useState(persons);
  const [message, setMessage] = useState('');
  const [style, setStyle] = useState('');
  const [showToast, setShowToast] = useState(false);

  const successMsg = `text-xl text-green-700 border-2 border-solid border-green-800 rounded-lg`;
  const errorMsg = `text-xl border-2 border-solid text-red-700 border-red-800 rounded-lg`;

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

        setShowToast(true);
        setMessage(`Updated ${name}`);
        setStyle(successMsg);
        setTimeout(() => setShowToast(false), 5000);

        const newList = persons.map((x) => (x.id === id ? updatedRecord : x));
        const newFilteredList = filteredList.map((x) =>
          x.id === id ? updatedRecord : x
        );
        setPersons(newList);
        setFilteredList(newFilteredList);
      } else {
        phoneService.create(newContact).then((data) => {
          console.log(data, 'record inserted');
          setShowToast(true);
          setMessage(`Added ${data.name}`);
          setStyle(successMsg);
          setTimeout(() => setShowToast(false), 5000);

          setPersons(persons.concat(data));
          setFilteredList(filteredList.concat(data));
        });
      }
    }
  };

  const deleteContact = (id) => {
    console.log('delete button ', id);
    const person = persons.find((x) => x.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      const newList = persons.filter((x) => x.id !== id);

      phoneService.delete(id).then((data) => {
        console.log(data, `record ${id} deleted!`);

        setShowToast(true);
        setMessage(`Deleted ${data.name}`);
        setStyle(errorMsg);
        setTimeout(() => setShowToast(false), 5000);

        setPersons(newList);
        setFilteredList(newList);
        console.log('NEWLIST....', newList);
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
      {showToast && <Toast message={message} style={style} />}
      <Filter handleFilter={filterPersons} />
      <h3>Add a new contact</h3>
      <PersonForm persons={persons} addContact={addNewContact} />
      <h3>Numbers</h3>
      <Persons persons={filteredList} handleDelete={deleteContact} />
    </div>
  );
};

export default App;
