/**
 * 🧠 Concept: React Render Phases – Render & Commit
 *
 * ---------------------------------------------------------
 * 📘 Definition:
 * React’s rendering process is split into two main **phases**:
 * 
 * 1. **Render Phase**: 
 *    - Pure & side-effect-free.
 *    - Determines **what to render**.
 *    - Can be paused, aborted, and restarted by React (especially in Concurrent Mode).
 * 
 * 2. **Commit Phase**:
 *    - Applies DOM updates.
 *    - Executes side effects (`useEffect`, `useLayoutEffect`, refs, etc).
 *    - This phase is **not interruptible**.
 *
 * ---------------------------------------------------------
 *
 * 🔄 FLOW OF A RENDER CYCLE (Functional Component):
 * 
 * ➤ Function Component Runs → JSX → React Element
 * ➤ Reconciliation (diffing virtual DOM)
 * ➤ Commit DOM changes
 * ➤ Run effects (useEffect/useLayoutEffect)
 *
 * ---------------------------------------------------------
 *
 * 🔍 Render Phase Details:
 */

function ExampleComponent({ count }) {
  console.log("🖊️ Render phase: Component running");

  // No DOM side-effects here!
  // DON'T: document.querySelector, timers, subscriptions, etc

  return (
    <div>
      <p>Count is: {count}</p>
    </div>
  );
}

/**
 * React can run this render multiple times
 * without committing changes if needed.
 * e.g., StrictMode intentionally runs components twice in dev
 */

/**
 * ---------------------------------------------------------
 * 🔥 Commit Phase Example with useEffect & useLayoutEffect:
 */

import { useEffect, useLayoutEffect } from "react";

function Demo() {
  useEffect(() => {
    console.log("✅ useEffect (runs in commit phase - after paint)");
  }, []);

  useLayoutEffect(() => {
    console.log("🛠️ useLayoutEffect (runs in commit phase - before paint)");
  }, []);

  console.log("🖊️ Rendering...");

  return <div>Open the console and check logs!</div>;
}

/**
 * Output (DOM painted after useLayoutEffect):
 * 🖊️ Rendering...
 * 🛠️ useLayoutEffect (before paint)
 * ✅ useEffect (after paint)
 */

/**
 * ---------------------------------------------------------
 * 🧪 Real-World Use Case:
 * 
 * 🔹 useEffect: Good for API calls, timers, event listeners.
 * 🔹 useLayoutEffect: Needed when measuring DOM size before paint.
 * 
 * Example:
 */

useLayoutEffect(() => {
  const width = document.getElementById("box").offsetWidth;
  console.log("Box width before painting:", width);
});

/**
 * ---------------------------------------------------------
 * 🧵 React Fiber (Concurrent Rendering engine)
 * 
 * In Concurrent Mode:
 * - React may "pause" work in Render Phase.
 * - It can throw away a render and re-render again.
 * - Commit Phase is always atomic and consistent.
 *
 * ⚠️ So: avoid side-effects in render logic!
 */

/**
 * ✅ Summary:
 * ------------------------------
 * 🔸 Render Phase → Prepare UI (pure, side-effect-free)
 * 🔸 Commit Phase → Apply UI (DOM mutations, effects, refs)
 * 🔸 useEffect/useLayoutEffect → Commit phase tools
 * 🔸 React may discard renders, but never commits
 * 🔸 Always treat render as a pure function
 */
