import React from 'react';
import './App.css';
import Student from './Student.js';

function App() {
  return(
    <div>
      <h1>Hi man!</h1>
      what are your feelings about learning React?
      <Student progress='good'></Student>
    </div>
  )
}

export default App;
