import { useState } from 'react';

function App() {
  const [note, setNote] = useState('a new note');
  const handleSubmit = () => {
    return <h3>handle submit</h3>;
  };
  return (
    <div>
      <div className="w-[40%] p-3 font-semibold text-blue-900 border-2 shadow-md border-slate-500">
        {note}
      </div>
      <form onSubmit={handleSubmit}>
        <label for="note" className="text-sky-800 font-extrabold m-4">Enter new note</label>
        <input
          name="note"
          value={note}
          type="text"
          onChange={(e) => setNote(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
