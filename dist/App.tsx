import React, { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date())
  const [focus, setFocus] = useState(false)
  const onFocus = () => {
    setFocus(!focus)
  }
  console.log(focus)
  return (
    <div className="App">
      <input type="text" onFocus={onFocus}  onBlur={onFocus} />
      <div className={`${focus ? "up" : "no"}`}>
        <p>Hi im am a calendar</p>
      </div>
    </div>
  );
}

export default App;
