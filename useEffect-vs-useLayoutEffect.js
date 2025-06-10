/**
 * 🧠 Concept: useEffect vs useLayoutEffect
 *
 * ------------------------------------------------------------
 * 🧾 Why?
 * - React provides two side-effect hooks: `useEffect` and `useLayoutEffect`.
 * - Both are used to run code after a component renders, but they behave differently.
 * 
 * ✅ Goal: Understand their timing, usage, and differences with visual clarity.
 */

import React, { useEffect, useLayoutEffect, useRef } from "react";

/**
 * 📘 Summary:
 * - `useEffect`: Runs **after** paint (async), won't block UI rendering.
 * - `useLayoutEffect`: Runs **before** paint (sync), can block UI rendering.
 */

/**
 * 🧪 Example Component: useEffect vs useLayoutEffect Demo
 */
function LayoutEffectDemo() {
  const effectRef = useRef(null);
  const layoutRef = useRef(null);

  useEffect(() => {
    effectRef.current.style.color = "blue";
    effectRef.current.textContent = "👀 useEffect - after paint";
  }, []);

  useLayoutEffect(() => {
    layoutRef.current.style.color = "red";
    layoutRef.current.textContent = "🚀 useLayoutEffect - before paint";
  }, []);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>🔍 useEffect vs useLayoutEffect</h2>
      <p ref={layoutRef}>⏳ Initial layoutRef text</p>
      <p ref={effectRef}>⏳ Initial effectRef text</p>
    </div>
  );
}

/**
 * 🧵 Summary:
 * 
 * 🔁 useEffect:
 * - Non-blocking: Runs after paint.
 * - Good for API calls, analytics, subscriptions.
 * 
 * ⏱ useLayoutEffect:
 * - Blocking: Runs before paint.
 * - Best for measuring DOM, animations, syncing layout.
 * 
 * 🚨 Warning:
 * - Overusing `useLayoutEffect` can lead to performance issues.
 */

export { LayoutEffectDemo };
