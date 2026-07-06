import { useState } from "react";
import Inputs from '../components/Inputs';

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Inputs />
    </>
  );
}

export default App;
