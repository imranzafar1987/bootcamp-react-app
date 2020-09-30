import React, { useState } from "react";
import "./App.css";
import Student from "./Student.js";

function App() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hi man!</h1>
      what are your feelings about learning React?
      <Student progress="good"></Student>
      Value of count is {count}
      <br />
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Count
      </button>
    </div>
  );
}

export default App;
