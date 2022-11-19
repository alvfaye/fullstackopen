import { useState } from 'react';
function App() {
  const [note, setNote] = useState('a new note');

  return (
    <div className="w-[40%] p-3 font-semibold text-blue-900 border-2 shadow-md border-slate-500">
      {note}
    </div>
  );
}

export default App;
