import React, { useState } from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] p-4 leading-10';

function PersonForm({ persons, addContact }) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addNewContact = () => {
    console.log(`newName ${newName} newNumber ${newNumber}`);
    const found = persons.find((e) => e.name === newName);
    if (found) {
      const ok = window.confirm(
        `${found.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (!ok) return null;
    }

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
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="outline-none"
              type="text"
              name="number"
              placeholder="999999999"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
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
