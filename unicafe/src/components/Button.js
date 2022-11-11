import React from 'react';

function Button({ text, onClick }) {
  return (
    <>
      <button
        className="border-solid border-2 m-1 border-gray-500 p-1 rounded-lg"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
