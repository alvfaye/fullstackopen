import React from 'react';

const Person = ({ name, number }) => {
  return (
    <tr>
      <td className="border px-8 py-4">{name}</td>
      <td className="border px-8 py-4">{number}</td>
    </tr>
  );
};
function Persons({ persons }) {
  return (
    <table className="m-6 shadow-lg bg-white text-sm leading-none">
      <tr>
        <td className="bg-blue-100 border text-left px-8 py-4">Name</td>
        <td className="bg-blue-100 border text-left px-8 py-4">Number</td>
      </tr>
      {persons.map((person) => (
        <Person name={person.name} number={person.number} />
      ))}
    </table>
  );
}

export default Persons;
