import { useState } from 'react';

function App() {
  const [note, setNote] = useState('a new note');
  function handleSubmit(e) {
    // return <h3>handle submit</h3>;
    e.preventDefault();
    console.log('hello ', e.target);
  }
  return (
    <div>
      <div className="w-[40%] p-3 font-semibold text-blue-900 border-2 shadow-md border-slate-500">
        {note}
      </div>
      <form onSubmit={handleSubmit}>
        <label className="text-sky-800 font-extrabold mt-8 mr-5">
          Enter new note
          <input
            className="from-neutral-900 font-normal mt-4 ml-4"
            name="notefield"
            value={note}
            type="text"
            onChange={(e) => setNote(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="rounded-xl outline outline-red-200 shadow-red-400 shadow-2xl px-2 py-1 m-3"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
