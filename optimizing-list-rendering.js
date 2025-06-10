/**
 * 🧠 Concept: Optimizing List Rendering in React
 *
 * ------------------------------------------------------------
 * 🧾 Why?
 * - Rendering long lists can slow down performance.
 * - Each re-render recalculates the full list, even for small changes.
 * - Bad `key` usage or unnecessary renders cause jank and poor UX.
 * 
 * ✅ Solution: Use best practices like proper `key`, `React.memo`, conditional rendering, pagination, and virtualization.
 */

import React, { memo, useMemo } from "react";

/**
 * 🛠 OptimizedListItem Component
 * 
 * - `memo` prevents unnecessary re-renders.
 * - Only re-renders when props change.
 */
const OptimizedListItem = memo(({ item }) => {
  console.log("Rendering:", item.name); // Debug: see which items re-render
  return <li>{item.name}</li>;
});

/**
 * 🧪 Example: A component using list rendering optimizations
 */
function OptimizedList({ items }) {
  // Simulate expensive sorting/filtering logic only once using useMemo
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>📋 Optimized List</h2>
      <ul>
        {sortedItems.map((item) => (
          <OptimizedListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

/**
 * 🧪 Example Usage
 */
function App() {
  const sampleData = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Charlie" },
    { id: 3, name: "Bob" }
  ];

  return <OptimizedList items={sampleData} />;
}

/**
 * 🧵 Summary:
 * 
 * ✅ Tips for Optimizing List Rendering:
 * - Use `key` prop correctly (unique + stable).
 * - Wrap list items with `React.memo`.
 * - Use `useMemo` for expensive calculations.
 * - Paginate or virtualize large lists.
 * 
 * 🧩 Tip: Libraries like `react-window` or `react-virtualized` help with large lists.
 */

export { OptimizedList, App };
