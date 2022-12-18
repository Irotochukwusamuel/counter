import React, { useState } from 'react';
import { createCookie, readCookie, eraseCookie } from './OnReload';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(readCookie('isLoggedIn') || false);
  const [count, setCount] = useState(0);

  const handleLogin = () => {
    createCookie('isLoggedIn', true, 7);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    eraseCookie('isLoggedIn');
    setIsLoggedIn(false);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementByAmount = (amount) => {
    if (amount === '') {
      setCount(0);
    } else {
      setCount(count + parseInt(amount, 10));
    }
  };

  return (
    <div>
      {!isLoggedIn && (
        <div>
          <h1>Login</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <h1>Counter</h1>
          <p>{count}</p>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <input
            type="number"
            placeholder="Enter amount"
            onChange={(event) => handleIncrementByAmount(event.target.value)}
          />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
