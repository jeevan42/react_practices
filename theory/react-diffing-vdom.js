// react-diffing-vdom.js

/*
📘 React's Diffing Algorithm & Virtual DOM vs Real DOM

---
🔹 What is the Virtual DOM?

The Virtual DOM (VDOM) is a lightweight, in-memory representation of the Real DOM.
React uses it to optimize UI updates.

✅ Benefits:
- Faster rendering
- Efficient updates
- Batched and minimal DOM manipulation

---
🔁 Virtual DOM Workflow:
1. Component renders → creates a Virtual DOM tree.
2. On state/props change → new Virtual DOM tree is created.
3. React **diffs** the new tree with the previous one.
4. React applies minimal changes (patches) to the Real DOM.

---
🔍 What is the Diffing Algorithm?

React’s diffing algorithm is an O(n) heuristic that compares two Virtual DOM trees.
Instead of comparing every node recursively (which is slow), it uses rules:

---
📜 Diffing Rules:

1. **Elements of different types**:
   → Replace entire subtree.
   ```jsx
   <div /> → <span />  ⛔ Different type → full replacement
   ```

2. **Same type elements**:
   → Compare props and update only what's changed.
   ```jsx
   <div className="a" /> → <div className="b" /> ✅ Only class changes
   ```

3. **Keys in lists**:
   → Helps identify moved/added/removed items accurately.
   → Without keys, React falls back to index-based comparison (leads to bugs).

4. **Component elements (like <MyComponent />)**:
   → React compares based on component identity (not structure).
   → If same component, diff its rendered result.
   → If different, unmount old and mount new.

---
📌 Summary:

- React creates a VDOM for performance.
- It uses a fast diffing algorithm with smart rules.
- Keys in lists are critical to accurate diffing.
- DOM updates are minimized for speed and efficiency.

The combination of **Virtual DOM + diffing algorithm + keys** is what makes React performant and reliable for dynamic UIs.
*/
