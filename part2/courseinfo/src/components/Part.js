import React from 'react';

function Part({ part }) {
  return (
    <div className="font-medium text-sky-900">
      {part.name} <span className="text-yellow-400">{part.exercises}</span>
    </div>
  );
}

export default Part;
