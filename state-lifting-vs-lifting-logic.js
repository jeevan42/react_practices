/**
 * 🧠 Concept: State Lifting vs Lifting Logic in React
 *
 * ---------------------------------------------------------
 * 🧾 Definition:
 *
 * 🔹 **State Lifting**:
 *     - Move shared state **up** to a common parent component.
 *     - Ensures consistent data flow between sibling components.
 *
 * 🔹 **Lifting Logic**:
 *     - Move only the **functionality or behavior** (logic) up or into reusable functions/hooks.
 *     - The state can still reside lower, but logic is decoupled.
 *
 * ---------------------------------------------------------
 * ✅ Scenario: Two child components share a counter
 */

import { useState } from "react";

// 🔸 State Lifting Example
function ParentWithLiftingState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} />
    </div>
  );
}

function ChildA({ count, setCount }) {
  return (
    <div>
      <h3>Child A</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function ChildB({ count }) {
  return (
    <div>
      <h3>Child B</h3>
      <p>Count from sibling: {count}</p>
    </div>
  );
}

/**
 * 🔍 State is lifted to the parent to **share between siblings**.
 * 
 * 🧩 Problem: Repeating logic in each component can bloat code.
 * 
 * ---------------------------------------------------------
 * 🔄 Now let's lift just the logic (reusable behavior)
 */

// 🔸 Logic Lifting with Custom Hook
function useCounterLogic(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((prev) => prev + 1);
  return { count, increment };
}

// Each component maintains its own state, but reuses logic
function AComponent() {
  const { count, increment } = useCounterLogic();
  return (
    <div>
      <h3>Logic Hook - AComponent</h3>
      <button onClick={increment}>A Increment: {count}</button>
    </div>
  );
}

function BComponent() {
  const { count, increment } = useCounterLogic();
  return (
    <div>
      <h3>Logic Hook - BComponent</h3>
      <button onClick={increment}>B Increment: {count}</button>
    </div>
  );
}

/**
 * 🔍 Logic is lifted into a custom hook.
 * 🔄 Each component has **independent state**, but **shared behavior**.
 */

/**
 * ---------------------------------------------------------
 * 🧵 Summary:
 * 
 * 🔹 **State Lifting**
 *   - When multiple components need access to the same state.
 *   - State resides in common ancestor.
 *
 * 🔹 **Lifting Logic**
 *   - When logic (e.g., counter, fetching, toggling) can be reused.
 *   - Helps reduce duplication and increases code reuse.
 *
 * ✅ Best Practice:
 *   - Use state lifting for **shared state**.
 *   - Use logic lifting (custom hooks) for **shared behavior**.
 */

export {
  ParentWithLiftingState,
  AComponent,
  BComponent
};
