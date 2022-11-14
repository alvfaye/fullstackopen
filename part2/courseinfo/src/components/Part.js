import React from 'react';

function Part({part}) {
  return <div className="font-medium text-sky-900">{part.name} {part.exercises}</div>;
}

export default Part;
