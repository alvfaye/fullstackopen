import { useState } from 'react';

function App() {
  const [note, setNote] = useState('a new note');
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setNote(value);
  };

  return (
    <div>
      <div className="w-[40%] p-3 font-semibold text-blue-900 border-2 shadow-md border-slate-500">
        {note}
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <label className="text-sky-800 font-extrabold mt-8 mr-5">
          Enter new note
          <input
            className="from-neutral-900 font-normal mt-4 ml-4 border border-violet-600"
            name="note"
            type="text"
            onChange={handleChange}
          />
        </label>
        <input
          onClick={() => {
            console.log('submit clicked!');
          }}
          type="submit"
          className="rounded-xl outline outline-red-200 shadow-red-400 shadow-2xl px-2 py-1 m-3"
          value="submit"
        />
        {/* </form> */}
      </div>
    </div>
  );
}

export default App;
