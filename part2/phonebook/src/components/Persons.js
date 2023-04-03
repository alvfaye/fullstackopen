import React from 'react';
import phoneService from '../services/phonebook';

const Person = ({ name, number, onDelete }) => {
  return (
    <tr>
      <td className="border px-8 py-4">{name}</td>
      <td className="border px-8 py-4">{number}</td>
      <td className="border px-8 py-4">
        <button
          className="rounded-xl border-2 bg-blue-700 p-2 border-solid text-blue-100 text-xs"
          onClick={onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

function Persons({ persons, updateOrigList, updateFilteredList }) {
  const deleteHandler = (id) => {
    console.log('delete button ', id);
    const person = persons.find((x) => x.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      const newList = persons.filter((x) => x.id !== id);
      phoneService.delete(id).then((data) => {
        console.log(data, `record ${id} deleted!`);
        updateOrigList(newList);
        updateFilteredList(newList);
        console.log('NEWLIST....', newList);
      });
    }
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
            onDelete={() => deleteHandler(person.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Persons;
