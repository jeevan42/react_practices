/*
📘 React Fiber - Definition:

React Fiber is the new reconciliation engine in React (since version 16) 
that improves rendering performance and enables advanced features like 
concurrent rendering, time slicing, and suspense.

It allows React to pause, abort, and resume rendering work.

------------------------------------------------------------

🔍 Why was Fiber introduced?

Before Fiber:
- React rendering was synchronous and blocking.
- Any long rendering component could freeze the UI.

With Fiber:
- Rendering is split into units of work (called Fiber nodes).
- React can stop rendering mid-way and do something more urgent (like handling user input).

------------------------------------------------------------

🧱 What is a Fiber?

Each component is represented internally as a Fiber node.
A Fiber node is just a JavaScript object that holds:
- component type (function/class)
- props
- DOM state
- parent, child, sibling pointers
- update queue
- effect tags
- expiration time (priority)

------------------------------------------------------------

⚙️ React Rendering Phases using Fiber:

1️⃣ Render Phase (Can be paused)
- React builds a Fiber tree by diffing the new virtual DOM with the previous one.
- This phase is interruptible and helps with prioritization.

2️⃣ Commit Phase (Cannot be paused)
- DOM is updated based on the Fiber tree.
- Runs lifecycle methods like componentDidMount.

------------------------------------------------------------

🎯 Key Features enabled by Fiber:
- Interruptible rendering
- Time slicing
- Error boundaries
- Suspense and concurrent features
- Better performance with large trees

------------------------------------------------------------

🧠 Real-world analogy:
Imagine React has a to-do list (Fiber nodes).
Instead of doing all tasks at once, it does them in chunks,
checking in between if there’s something more urgent to do.

------------------------------------------------------------

📌 Summary:
React Fiber is the internal engine that gives React its power to manage
updates smoothly, prioritize work, and keep the app responsive.
It replaced the old stack-based algorithm with a linked-list based structure.

*/
