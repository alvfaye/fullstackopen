import React from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] px-4 rounded-md leading-10';
function Filter(props) {
  return (
    <div>
      <form>
        <div className={boxStyle}>
          <div>
            <input className="outline-none" type="text" name="search" placeholder="Search" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
