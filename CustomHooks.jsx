// CustomHooks.jsx
import React, { useState } from 'react';

/*
✅ What is a Custom Hook?
A custom hook is a reusable JavaScript function that starts with 'use' and uses other hooks inside.
It helps you extract and share logic between components without repeating code.
*/

// 🔁 Custom Hook: useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(prev => !prev);
  return [value, toggle];
}

// 🔁 Another Custom Hook: useCounter
function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => c - step);
  const reset = () => setCount(initial);
  return { count, increment, decrement, reset };
}

// ✅ Example Component using useToggle and useCounter
const CustomHooks = () => {
  const [isVisible, toggleVisibility] = useToggle();
  const counter = useCounter(0, 5);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Custom Hooks Example</h1>

      <section>
        <h2>useToggle Hook</h2>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && <p>Hello from useToggle!</p>}
      </section>

      <section>
        <h2>useCounter Hook</h2>
        <p>Count: {counter.count}</p>
        <button onClick={counter.increment}>Increment</button>
        <button onClick={counter.decrement}>Decrement</button>
        <button onClick={counter.reset}>Reset</button>
      </section>
    </div>
  );
};

export default CustomHooks;
