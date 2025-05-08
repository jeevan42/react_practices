// 🔹 1. React.memo
// ❓ Question:

// What is React.memo and when would you use it?

// ✅ Answer:

// React.memo is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders by doing a shallow comparison of props.
// It's useful when a component is pure and its re-rendering depends only on props, especially in performance-critical parts of an app.

// 🔁 Example Use:

const MyComponent = React.memo(({ value }) => {
  console.log('Rendered');
  return <div>{value}</div>;
});