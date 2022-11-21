import React from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] p-4 leading-10';

function Search(props) {
  return (
    <div>
      <form>
        <div className={boxStyle}>
          <div>
            <input type="text" name="title" placeholder="Title" />
          </div>
          <div>
            <input type="text" name="text" placeholder="Take a note..." />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
