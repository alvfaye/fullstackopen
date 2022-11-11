import { useState } from 'react';
import Anecdote from './components/Anecdote';

const Button = (props) => {
  // console.log('inside Button component...', props.text);
  return (
    <button
      className="ml-1 border-solid border-2 border-teal-800 bg-yellow-400 rounded-md text-blue-900"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
const Feedback = ({ feedback }) => {
  // console.log('inside feedback');

  return (
    <>
      <Button text="good" onClick={feedback['good']} />
      <Button text="neutral" onClick={feedback['neutral']} />
      <Button text="bad" onClick={feedback['bad']} />
    </>
  );
};
const Statistics = ({ feedback, counter }) => {
  // console.log('good ', counter.good);
  const total = counter.good + counter.neutral + counter.bad;
  const average = (counter.good + counter.bad * -1) / total;
  return (
    <>
      <h2>good {counter.good}</h2>
      <h2>neutral {counter.neutral}</h2>
      <h2>bad {counter.bad}</h2>
      <h2>all {total}</h2>
      <h3>average {average?.toFixed(10)}</h3>
      <h3>positive {((counter.good / total) * 100).toFixed(10)}%</h3>
    </>
  );
};

function App() {
  const setFeedback = {
    good: () => setGood(good + 1),
    neutral: () => setNeutral(neutral + 1),
    bad: () => setBad(bad + 1),
  };

  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counter = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Feedback feedback={setFeedback} />
      <h1>statistics</h1>
      <Statistics counter={counter} feedback={setFeedback} />
      <Anecdote />
    </div>
  );
}

export default App;
