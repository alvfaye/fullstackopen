import React, { useState } from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] p-4 leading-10';

function PersonForm({ persons, addContact }) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const validateName = (e) => {
    const name = e.target.value;

    console.log('name entered ', name, persons);
    const found = persons.find((e) => e.name === name);
    if (found) {
      alert(`${name} is already added to phonebook`);
      setNewName('');
    } else setNewName(name);
  };
  const validateNumber = (e) => {
    const number = e.target.value;
    if (number === '') alert('number can`t be null');
    else setNewNumber(number);
  };

  const addNewContact = () => {
    addContact(newName, newNumber);
    setNewName('');
    setNewNumber('');
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={boxStyle}>
          <div>
            <input
              className="outline-none"
              type="text"
              name="name"
              value={newName}
              placeholder="Name"
              onChange={validateName}
            />
          </div>
          <div>
            <input
              className="outline-none"
              type="text"
              name="number"
              value={newNumber}
              placeholder="#99999-9999"
              onChange={validateNumber}
            />
          </div>
          <button
            onClick={addNewContact}
            className="border border-gray-300 rounded-md px-3 shadow-md bg-teal-200 my-3"
          >
            Add new contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
