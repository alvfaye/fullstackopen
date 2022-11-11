import React, { useState } from 'react';
import Button from './Button';
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later.',
  'Premature optimization is the root of all evil!',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
];
const points = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
};

function Anecdote() {
  const [selected, setSelected] = useState(0);
  const clickVote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    console.log('vote ', copy[selected]);
  };
  return (
    <div className="mt-4">
      <h1 className="font-extrabold">Anecdote of the day</h1>
      <h2>
        {anecdotes[selected]} has {points[selected]} votes
      </h2>
      <hr className="mb-2" />
      <Button text="vote" onClick={clickVote} />
      <Button
        text="next anecdote"
        onClick={() => console.log('next anecdote')}
      />

      <h1>Anecdote with most votes</h1>
    </div>
  );
}

export default Anecdote;
