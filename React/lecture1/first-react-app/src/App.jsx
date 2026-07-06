import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <h2>Counter</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </section>
    </>
  );
}

export default App;
