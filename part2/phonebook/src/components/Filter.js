import React from 'react';

function Filter(props) {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div>
          <input type="text" name="text" placeholder="Take a note..." />
        </div>
      </form>
    </div>
  );
}

export default Filter;
