import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <section className="counter-section">
        <h2>Counter Component</h2>
        <p>{counter}</p>
        <div className="btn-container">
          <button onClick={decrement} className="btn">
            -1
          </button>
          <button onClick={reset} className="btn">
            Reset
          </button>
          <button onClick={increment} className="btn">
            +1
          </button>
        </div>
      </section>
    </>
  );
}

export default Counter;
