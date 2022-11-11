import { useState } from 'react';

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
  console.log('good ', counter.good);
  const total = counter.good + counter.neutral + counter.bad
  return (
    <>
      <h2>good {counter.good}</h2>
      <h2>neutral {counter.neutral}</h2>
      <h2>bad {counter.bad}</h2>
      <h2>total {total}</h2>
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
    </div>
  );
}

export default App;
