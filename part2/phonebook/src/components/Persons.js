import React from 'react'

const Person = ({name, number}) => {
  return (
    <h3>{name} {number}</h3>
  )
}
function Persons({persons}) {
  return (
    <div>
      {
        persons.map(person=><Person name={persons.name} number={persons.number} />)
      }
    </div>
  )
}

export default Persons
props