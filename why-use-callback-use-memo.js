/**
 * 🧠 Concept: Why and When to Use `useCallback` and `useMemo` in React
 *
 * ---------------------------------------------------------
 * 📘 Definition:
 * `useCallback` and `useMemo` are React hooks that help optimize performance.
 * They **prevent unnecessary re-renders** and **expensive computations** by memoizing values/functions.
 *
 * - `useCallback(fn, deps)` returns a memoized **callback function**.
 * - `useMemo(fn, deps)` returns a memoized **computed value**.
 *
 * ---------------------------------------------------------
 * ⚠️ Problem: Unnecessary re-renders of child components or re-computation
 */

import React, { useState, useCallback, useMemo } from "react";

// 🔴 BAD: function recreated on every render
const BadChild = ({ onClick }) => {
  console.log("👶 BadChild Rendered");
  return <button onClick={onClick}>Click Me</button>;
};

export function BadParent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <BadChild onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

/**
 * ➤ Problem:
 * Even if `handleClick` is the same logic, it's a **new function** every render.
 * If `BadChild` is wrapped in `React.memo`, it would still re-render.
 *
 * ✅ Solution: Use `useCallback` to memoize the function.
 */

const GoodChild = React.memo(({ onClick }) => {
  console.log("✅ GoodChild Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export function GoodParent() {
  const [count, setCount] = useState(0);

  // ✅ Memoize the function
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <GoodChild onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

/**
 * ---------------------------------------------------------
 * 💡 useMemo Example: Avoid expensive calculations
 */

function Fibonacci({ num }) {
  // 🔴 This function runs on every render (expensive)
  const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };

  // ✅ Use useMemo to memoize result
  const fibValue = useMemo(() => fib(num), [num]);

  return <div>Fibonacci of {num}: {fibValue}</div>;
}

/**
 * ---------------------------------------------------------
 * 📝 Summary:
 *
 * 🔹 `useCallback(fn, deps)`
 *     → Use when you pass functions as props to child components.
 *     → Prevents unnecessary re-creations.
 *
 * 🔹 `useMemo(fn, deps)`
 *     → Use when expensive computation is involved.
 *     → Avoids recomputation unless dependencies change.
 *
 * ⚠️ Don't overuse them — only use when optimization is **measurable**.
 *
 * 🧪 Tools:
 * - React DevTools Profiler helps identify unnecessary re-renders.
 */
