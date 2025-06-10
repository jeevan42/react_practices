/**
 * 🧠 Concept: Creating a Custom Hook – `useLocalStorage`
 *
 * ------------------------------------------------------------
 * 🧾 Why?
 * - React state resets on page refresh.
 * - `localStorage` helps persist data across sessions.
 * - But mixing `useEffect` + `localStorage` in every component is messy.
 * 
 * ✅ Solution: Create a reusable hook to manage state that syncs with localStorage.
 */

import { useState, useEffect } from "react";

/**
 * 🛠 Custom Hook: useLocalStorage
 *
 * @param {string} key - The key to store the value under in localStorage
 * @param {*} initialValue - The default value if nothing exists in localStorage
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // If item exists in localStorage, parse and return
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Failed to read from localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const jsonValue = JSON.stringify(storedValue);
      window.localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("Failed to write to localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

/**
 * 🧪 Example: A component using useLocalStorage
 */

function NameForm() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>👋 Welcome, {name || "Guest"}!</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "0.5rem", width: "250px" }}
      />
    </div>
  );
}

/**
 * 🧵 Summary:
 * 
 * ✅ Benefits of useLocalStorage Hook:
 * - Persists state across refreshes and sessions
 * - Clean separation of logic from component
 * - Reusable in multiple components
 *
 * 🧩 Tip: Can be extended to support `sessionStorage`, or TTL (expiry), etc.
 */

export { useLocalStorage, NameForm };
