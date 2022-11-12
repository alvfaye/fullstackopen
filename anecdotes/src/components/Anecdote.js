import React, { useState } from 'react';
import Button from './Button';
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later.',
  'Premature optimization is the root of all evil!',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Ruby is rubbish! PHP is phpantastic!',
  'Code is like humor.When you have to explain it, it’s bad.',
  'Fix the cause, not the symptom.',
  'Optimism is an occupational hazard of programming: feedback is the treatment.',
  'When to use iterative development? You should use iterative development only on projects that you want to succeed.',
  'Simplicity is the soul of efficiency.',
  'Before software can be reusable it first has to be usable.',
  'Make it work, make it right, make it fast.',
];
const points = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  // 13: 0,
  // 14: 0,
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
        {anecdotes[selected]}{' '}
        <span className="text-violet-700 block">
          has {points[selected]} votes
        </span>
      </h2>
      <hr className="mb-2" />
      <Button text="vote" onClick={clickVote} />
      <Button
        text="next anecdote"
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      />

      <h1 className="text-fuchsia-800 font-bold mt-7">Anecdote with most votes</h1>
    </div>
  );
}

export default Anecdote;
