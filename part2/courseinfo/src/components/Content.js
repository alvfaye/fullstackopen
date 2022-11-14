import React from 'react';
import { Part } from '../components';

// const Part = ({part}) => {
//   return <div>part</div>
// }
function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </div>
  );
}

export default Content;
