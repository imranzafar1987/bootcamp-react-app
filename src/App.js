import React, { useState } from "react";
import "./App.css";
import Student from "./Student.jsx";
import Teacher from "./teacher.jsx";

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
      <Teacher teacherName="Imran Zafar" />
      <Teacher teacherName="Kamran Zafar" />
      <Teacher teacherName="Adnan Zafar" />
      <Teacher teacherName="Zafar Mehmood Zafar" />
    </div>
  );
}

export default App;
