import React from 'react';

function Header({ name }) {
  return (
    <div>
      <h1 className="font-extrabold">{name}</h1>
    </div>
  );
}

export default Header;
