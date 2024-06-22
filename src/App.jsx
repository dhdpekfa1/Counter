import React, { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  const onButtonClick = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onButtonClick={onButtonClick} />
      </section>
    </div>
  );
}

export default App;
