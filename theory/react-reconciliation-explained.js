// react-reconciliation-explained.js

/*
📘 React Reconciliation - Explained

🔹 Definition:
Reconciliation is the **process by which React updates the DOM** when a component’s state or props change.

Instead of re-rendering the entire DOM, React uses a **virtual DOM** and an efficient **diffing algorithm** to only apply the minimal number of changes required.

---

🧠 Why is Reconciliation needed?

- Direct DOM updates are slow and expensive.
- React creates a virtual DOM (in-memory representation).
- When state/props change:
  1. A new virtual DOM is created.
  2. React compares (diffs) it with the previous one.
  3. Finds what actually changed.
  4. Updates only those parts in the real DOM.

---

🔍 How React performs Reconciliation (Step-by-step):

1. **Render Phase**:
   - React calls your component function to create a new virtual DOM tree.

2. **Diffing Phase**:
   - React compares the new virtual DOM with the old one.
   - If elements are the **same type**, it updates the props.
   - If not, it destroys the old node and builds a new one.

3. **Commit Phase**:
   - React applies the calculated changes to the real DOM.

---

🧪 Example:

return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);

⬇️ If we update to:

return (
  <div>
    <h1>Hello</h1>
    <p>React</p>
  </div>
);

🧠 React will:
- Keep `<h1>` as is.
- Update the text inside `<p>` only.
➡️ This is possible because `<p>` exists at the same place and type.

---

⚠️ Key Point: **Keys Help Reconciliation**

When rendering lists, keys help React identify which items changed:

✅ Good:
```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}

❌ Bad:
{items.map((item, index) => <li key={index}>{item.name}</li>)}
```
Bad keys can lead to incorrect DOM updates.

📌 Summary:

Reconciliation is the diffing & updating process React uses.
It enables React to perform fast, efficient updates.
It powers React’s declarative nature — you tell what UI should look like, React figures out the how.

*/
