import React, { useState } from 'react';
import Calender from './Calender';

import './App.css';


function Input() {
  const [date, setDate] = useState(new Date())
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(!focus)
  }
  console.log(focus)
  return (
    <>
      < input type="text" onFocus={onFocus} onBlur={onFocus} />
      <div className={`${focus ? "up" : "no"}`}>
        <Calender />
      </div>
    </>
  );
}

export default Input;
