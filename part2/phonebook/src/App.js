import { useState, useEffect } from 'react';
import { Filter, Persons, PersonForm } from './components';
import axios from 'axios';

const url = 'http://localhost:3004/persons';
// async function getPersons(url) {
//   try {
//     const response = await axios.get(url)
//     console.log(response.data)
//   } catch (error) {
//     console.error(error)
//   }
// }

// const items = getData(url)
// console.log(items)

// async function getData(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//       'X-API-Key': 'Testing',
//       'Content-Type': 'application/json'
//     }
//   })
//   console.log(response)
// }

const App = () => {
  const [persons, setPersons] = useState([]);
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  // ]);

  //console.log(getData(url))

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
        setFilteredList(response.data);
    },[]);
    // effect
    // return () => {
    //   cleanup
    // }
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
