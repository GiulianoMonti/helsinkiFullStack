import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    <h4>{text}</h4>
  </button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(7).fill(0));

  const handleRandomClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVoteClick = () => {
    setPoints(
      points.map((point, index) => (index === selected ? point + 1 : point))
    );
  };

  return (
    <div>
      <h4>{anecdotes[selected]}</h4>
      <Button handleClick={handleVoteClick} text={"Vote"}></Button>
      <Button handleClick={handleRandomClick} text="next anecdote"></Button>
      <h4>Anecdote with most votes:</h4>
      <h4>{anecdotes[points.indexOf(Math.max(...points))]}</h4>
      has {Math.max(...points)} votes
    </div>
  );
};

export default App;
