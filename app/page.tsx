"use client"

import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const users = ['User1', 'User2', 'User3'];
  const [counter, setCounter] = useState(0);

  function handleClick() {
    let newValue = counter + 1
    setCounter(newValue);
    console.log("Current counter value: " + newValue);
  }

  return <div>
    <Header title="Example" />
    <ul>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Increment ({counter})</button>
  </div>;
}
