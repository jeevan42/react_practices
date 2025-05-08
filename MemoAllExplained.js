// App.js
import React, { useState, useCallback, useMemo } from 'react';

/*
 * ✅ React.memo:
 * Memoizes a component — it only re-renders if its props change.
 */
const MemoizedChild = React.memo(({ onClick }) => {
  console.log('✅ Memoized Child rendered');
  return <button onClick={onClick}>Memoized Child Button</button>;
});

/*
 * ❌ NormalChild: Not memoized, always re-renders
 */
const NormalChild = ({ onClick }) => {
  console.log('❌ Normal Child rendered');
  return <button onClick={onClick}>Normal Child Button</button>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(10);

  /*
   * ✅ useCallback:
   * Memoizes a function to keep its reference stable across renders.
   */
  const memoizedClick = useCallback(() => {
    console.log('Memoized button clicked');
  }, []);

  /*
   * ❌ If we use a normal function, it changes on every render
   */
  const normalClick = () => {
    console.log('Normal button clicked');
  };

  /*
   * ✅ useMemo:
   * Memoizes a computed value to avoid recalculating on every render.
   */
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return sum + value;
  }, [value]);

  return (
    <div>
      <h2>React.memo, useCallback, useMemo Demo</h2>
      <h3>Count: {count}</h3>
      <h3>Expensive Computed Value: {expensiveValue}</h3>

      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
      <button onClick={() => setValue(v => v + 1)}>Change Value</button>

      <br /><br />

      {/* ❌ NormalChild will re-render on every count change */}
      <NormalChild onClick={normalClick} />

      {/* ✅ MemoizedChild will NOT re-render when only count changes */}
      <MemoizedChild onClick={memoizedClick} />
    </div>
  );
};

export default App;
