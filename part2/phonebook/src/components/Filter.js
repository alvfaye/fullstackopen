import React, {useState} from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] px-4 rounded-md leading-10';
function Filter({ handleFilter }) {
  //const [filter, setFilter] = useState('')
  return (
    <div>
      <form>
        <div className={boxStyle}>
          <div>
            <input onChange={(e)=>handleFilter(e.target.value)} className="outline-none" type="text" name="search" placeholder="Search" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
