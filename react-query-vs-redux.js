/**
 * 🧠 Concept: React Query vs Redux - State Management Comparison
 *
 * ------------------------------------------------------------
 * 🧾 Why Compare?
 * - Both are popular state management solutions in React
 * - They solve different but overlapping problems
 * - Choosing the right tool impacts developer experience and app performance
 * 
 * 🔍 Key Difference: 
 * - Redux is a general-purpose state container
 * - React Query is specialized for server state
 */

/**
 * 🛠 Implementation Comparison
 */

// ========== Redux Example ==========
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 1. Define slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 }
  }
});

// 2. Create store
const store = configureStore({
  reducer: counterSlice.reducer
});

// ========== React Query Example ==========
import { useQuery } from 'react-query';

function fetchUserData() {
  return fetch('/api/user').then(res => res.json());
}

function UserProfile() {
  const { data, isLoading, error } = useQuery('userData', fetchUserData);
  
  // ... component logic
}

/**
 * 🧪 When to Use Each?
 */

function ComparisonTable() {
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>📊 React Query vs Redux</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={{ padding: "0.75rem", textAlign: "left", border: "1px solid #ddd" }}>Criteria</th>
            <th style={{ padding: "0.75rem", textAlign: "left", border: "1px solid #ddd" }}>React Query</th>
            <th style={{ padding: "0.75rem", textAlign: "left", border: "1px solid #ddd" }}>Redux</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><strong>Primary Use Case</strong></td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Server state management</td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Client state management</td>
          </tr>
          <tr>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><strong>Data Fetching</strong></td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Built-in caching, deduping, background updates</td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Requires manual implementation</td>
          </tr>
          <tr>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><strong>Boilerplate</strong></td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Minimal</td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Significant</td>
          </tr>
          <tr>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><strong>DevTools</strong></td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Basic</td>
            <td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Excellent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/**
 * 🧵 Summary:
 * 
 * ✅ Use React Query when:
 * - Dealing with async server state
 * - Want caching, background updates, and automatic refetching
 * - Don't want to manage loading/error states manually
 * 
 * ✅ Use Redux when:
 * - Need a single source of truth for client state
 * - Need complex state transformations
 * - Need time-travel debugging
 * 
 * 💡 Pro Tip: They can be used together! 
 * - React Query for server state
 * - Redux for UI state and business logic
 */

export { ComparisonTable };
