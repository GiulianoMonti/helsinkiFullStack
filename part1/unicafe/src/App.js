import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const all = good - bad;
  const average = (good - bad) / total;
  const positive = good / total;

  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      Good: {good} <br />
      Neutral: {neutral} <br />
      Bad: {bad} <br />
      All: {total} <br />
      Average: {average} <br />
      Positive: {positive} <br />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
