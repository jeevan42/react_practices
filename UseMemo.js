// 🔹 2. useMemo
// ❓ Question:

// What is useMemo and how is it different from React.memo?

// ✅ Answer:

// useMemo is a React hook that memoizes the result of a computation between renders.
// It's useful when you want to avoid expensive calculations on every render.
// Unlike React.memo (which memoizes components), useMemo memoizes values or computed results.

// 🧠 Example Use:

const expensiveValue = useMemo(() => computeHeavy(input), [input]);
// ➕ Add:

// Always use it when the calculation is expensive and dependencies are stable.