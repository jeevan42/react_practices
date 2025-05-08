// ControlledVsUncontrolled.jsx
import React, { useState, useRef } from 'react';

/*
✅ Controlled Component:
- React controls the form input via `useState`.
- Input value is synced with React state.

React controls the input through state (useState). Every input change updates the state.
🔹 Use when: you want to validate, transform, or monitor input in real-time.

✅ Uncontrolled Component:
- DOM manages the form input using `ref`.
- Useful when you don’t need real-time input updates or want quick access to the value.

The DOM handles the input internally. You access the value via a ref.
🔹 Use when: you don't need to track changes on every keystroke, just get the final value.
*/

const ControlledComponent = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Input: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Controlled Component</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Input: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Uncontrolled Component</h3>
      <input type="text" ref={inputRef} placeholder="Type your name" />
      <button type="submit">Submit</button>
    </form>
  );
};

const ControlledVsUncontrolled = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Controlled vs Uncontrolled Components</h2>
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  );
};

export default ControlledVsUncontrolled;
