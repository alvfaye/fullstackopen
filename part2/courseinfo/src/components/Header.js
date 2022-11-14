import React from 'react';

function Header({ name }) {
  return (
    <div>
      <h1 className="ml-1 mb-1 font-extrabold">{name}</h1>
    </div>
  );
}

export default Header;
