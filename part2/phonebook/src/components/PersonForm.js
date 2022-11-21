import React, { useState } from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] p-4 leading-10';

function PersonForm({ addContact }) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <input
              className="outline-none"
              type="text"
              name="number"
              value={newNumber}
              placeholder="#99999-9999"
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <button
            onClick={() => addContact(newName, newNumber)}
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
