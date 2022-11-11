import React, { useState } from 'react';
import Button from './Button';
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later.',
  'Premature optimization is the root of all evil!',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
];

function Anecdote() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="mt-4">
      <h1 className="font-extrabold">Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <hr className="mb-2" />
      <Button text="vote" onClick={() => console.log('vote')} />
      <Button
        text="next anecdote"
        onClick={() => console.log('next anecdote')}
      />

      <h1>Anecdote with most votes</h1>
    </div>
  );
}

export default Anecdote;
