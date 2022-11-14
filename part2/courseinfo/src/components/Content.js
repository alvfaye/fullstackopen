import React from 'react';
import { Part } from '../components';

// const Part = ({part}) => {
//   return <div>part</div>
// }
function Content({ parts }) {
  console.log('parts-->>',parts)
  return (<>
    <div>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
    <div>Total Exercises {parts.reduce((total, num) => {
      return total + num.exercises;
    }, 0)}
    </div>
    </>
  );
}

export default Content;
