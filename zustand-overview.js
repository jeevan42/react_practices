/*
📘 Zustand - Definition:
Zustand is a small, fast, and scalable state management library for React apps.

Why Zustand?
- Simpler than Redux
- No boilerplate code
- Works with hooks

Example:
const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}

Zustand is great for both small and medium projects.
*/
