import React from 'react';
import { Part } from '../components';

function Content({ parts }) {
  console.log('parts-->>',parts)
  return (<>
    <div className="ml-2 border-2 p-2 rounded-md shadow-lg w-64 border-solid">
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
    <div className="ml-2.5 mb-5">Total Exercises {parts.reduce((total, num) => {
      return total + num.exercises;
    }, 0)}
    </div>
    </>
  );
}

export default Content;
