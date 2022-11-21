import React from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] p-4 leading-10';

function PersonForm({ name, number, addContact }) {
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
            />
          </div>
          <div>
            <input
              className="outline-none"
              type="text"
              name="number"
              placeholder="#99999-9999"
            />
          </div>
          <button
            onClick={addContact}
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
