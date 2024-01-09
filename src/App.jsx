import { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleClick = (e) => {
    setAnswer(eval(`${a} ${e.target.textContent} ${b}`));
    setA(0);
    setB(0);
  };

  return (
    <>
      <h1>NOT FILE EXPLORER</h1>
      <div>
        <input
          type="number"
          id="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          id="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>/</button>
      </div>
      <h1>Answer: {answer}</h1>
    </>
  );
}

export default App;
