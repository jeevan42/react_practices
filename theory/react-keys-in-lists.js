// react-keys-in-lists.js

/*
📘 Understanding `key` in React Lists

🔹 What is a `key`?

In React, a `key` is a special attribute you pass to list elements to help React **identify which items changed, added, or removed**.

It improves performance and avoids bugs during the reconciliation (diffing) process.

---

🧠 Why are `keys` important?

When rendering a list, React reuses DOM elements if it knows they match from the previous render.

Keys allow React to:
- Track which item is which.
- Avoid unnecessary DOM manipulations.
- Efficiently re-render only the changed items.

---

✅ Good Example (Stable Keys):

```jsx
const users = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
return (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
);


🧠 Why it works well:
Keys (user.id) uniquely identify each element.
React can easily map the old and new list items.

❌ Bad Example (Using Index as Key):
{users.map((user, index) => <li key={index}>{user.name}</li>)}

🛑 Problem:
If the list changes (insert, reorder, delete), using index leads to incorrect mapping.

Example:
React may update the wrong item.
Causes glitches in animation, form state, etc.


🔄 Real-World Bug with Bad Keys:

Imagine this:

List of todo items.
Each <li> contains an input box.
If you use index as key and delete the 2nd item,
→ React may keep the input state from the wrong item!

📌 Summary:

✅ Use stable, unique keys (like IDs).
❌ Avoid using array indexes as keys, unless the list is static and never changes.

Proper keys help React:
Do better diffing.
Prevent bugs.
Optimize rendering.

*/
