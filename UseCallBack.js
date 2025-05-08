// 🔹 3. useCallback
// ❓ Question:

// What's the purpose of useCallback and how is it different from useMemo?

// ✅ Answer:

// useCallback returns a memoized function. It's useful when you're passing callbacks to child components to prevent re-renders due to changing function references.
// It's like useMemo, but specifically for functions.

// 📦 Example Use:

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
