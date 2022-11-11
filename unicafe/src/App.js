import { useState } from 'react';

const onClick = () => console.log('click');
const Button = (props) => {
  console.log('inside Button component...', props.text);
  return (
    <button
      className="ml-1 border-solid border-2 border-teal-800 bg-yellow-400 rounded-md text-blue-900"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
const Feedback = () => {
  console.log('inside feedback');
  return (
    <>
      <Button text="good" onClick={onClick} />
      <Button text="neutral" onClick={onClick} />
      <Button text="bad" onClick={onClick} />
    </>
  );
};
const Statistics = () => {};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <Feedback />
      <h1>statistics</h1>
      <Statistics />
    </div>
  );
}

export default App;