import React from 'react';
const boxStyle = 'm-6 border shadow-md rounded-md w-[50%] p-4 leading-10';
function PersonForm(props) {
  return (
    <div>
      <form>
        <div className={boxStyle}>
          <div>
            <input
              className="outline-none"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="outline-none"
              type="text"
              name="number"
              placeholder="#99999-9999"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
