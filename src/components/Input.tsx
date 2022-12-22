import React, { useState } from 'react';

// import './App.css';


export function Input() {
  // const [date, setDate] = useState(new Date())
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(!focus)
  }
  return (
    <div>
      < input type="text" onFocus={onFocus} onBlur={onFocus} />
      <div className={`${focus ? "up" : "no"}`}>
        <p>message displayed</p>
      </div>
    </div>
  );
}

