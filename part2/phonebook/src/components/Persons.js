import React from 'react';

const Person = ({ name, number, onDelete }) => {
  return (
    <tr>
      <td className="border px-8 py-4">{name}</td>
      <td className="border px-8 py-4">{number}</td>
      <button
        className="rounded-md border-2 border-orange-700"
        onDelete={onDelete}
      >
        Delete
      </button>
    </tr>
  );
};
function Persons({ persons }) {
  const deleteHandler = (id) => {
    console.log('delete button ', id);
  };

  return (
    <table className="m-6 shadow-lg bg-white text-sm leading-none">
      <thead>
        <tr>
          <td className="bg-blue-100 border text-left px-8 py-4">Name</td>
          <td className="bg-blue-100 border text-left px-8 py-4">Number</td>
        </tr>
      </thead>
      <tbody>
        {persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            onDelete={deleteHandler}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Persons;
