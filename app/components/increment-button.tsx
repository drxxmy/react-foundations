"use client"

import { useState } from 'react';

export default function IncrementButton() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    let newValue = counter + 1
    setCounter(newValue);
    console.log("Current counter value: " + newValue);
  }

  return (
    <button onClick={handleClick}>Increment ({counter})</button>
  )
}
