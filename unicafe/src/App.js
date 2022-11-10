import { useState } from 'react';

const onClick = () => console.log('click');
const Feedback = () => {
  return (
    <>
      <Button text="good" onClick={onClick} />
      <Button text="neutral" onClick={onClick} />
      <Button text="bad" onClick={onClick} />
    </>
  );
};
const Statistics = () => {};
const Button = (props) => {
  <button onClick={props.onClick}>{props.text}</button>;
};
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
