/**
 * 🧠 Concept: Stale Closures in useEffect
 *
 * ------------------------------------------------------------
 * 🧾 Why This Matters?
 * - React hooks heavily rely on closures
 * - Stale closures are a common source of bugs in useEffect
 * - Understanding this helps write more predictable effects
 * 
 * 💡 Key Insight: Effects "close over" the values from their render
 */

import { useState, useEffect } from "react";

/**
 * 🛠 Demonstration Component: Counter with Stale Closure Issue
 */
function StaleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 🚨 Problem: This will always use the initial `count` value
      // because it's closed over in the initial effect
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Stale Closure Example</h2>
      <p>Counter: {count}</p>
      <p style={{ color: "red" }}>
        ❌ Bug: Counter will only update to 1 and stop
      </p>
    </div>
  );
}

/**
 * 🛠 Solution Component: Correct Dependency Handling
 */
function FixedCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // ✅ Solution 1: Use functional update to avoid stale closure
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty deps okay here because we're using functional update

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Fixed Version</h2>
      <p>Counter: {count}</p>
      <p style={{ color: "green" }}>
        ✅ Fixed: Counter increments correctly using functional update
      </p>
    </div>
  );
}

/**
 * 🛠 Alternative Solution: Proper Dependency Array
 */
function DependencyCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]); // ✅ Solution 2: Include count in dependencies

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Dependency Array Solution</h2>
      <p>Counter: {count}</p>
      <p style={{ color: "green" }}>
        ✅ Fixed: Counter increments correctly with proper dependencies
      </p>
      <p style={{ color: "orange" }}>
        ⚠️ Note: This causes the effect to re-run on every count change,
        which may not be optimal for intervals
      </p>
    </div>
  );
}

/**
 * 🧵 Summary:
 * 
 * 💥 Stale Closure Problem:
 * - Effects capture (close over) values when they're created
 * - Without proper dependencies, they don't "see" updates
 * 
 * 🔧 Solutions:
 * 1. Use functional updates (for state setters)
 * 2. Include all dependencies in the dependency array
 * 3. For callbacks, consider useCallback to avoid recreating functions
 * 
 * � When to Use Which:
 * - Functional updates: When you only need previous state
 * - Dependency array: When you need current props/state in effect
 */

export { StaleCounter, FixedCounter, DependencyCounter };
