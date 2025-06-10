/**
 * 🧠 Concept: Controlled vs Uncontrolled Components in React
 *
 * ---------------------------------------------------------
 * 📘 Definition:
 *
 * 🔹 Controlled Components:
 *   - Form elements are controlled by React state.
 *   - Value is set using `value` prop.
 *   - Updated via `onChange` handlers.
 *
 * 🔹 Uncontrolled Components:
 *   - DOM handles its own state.
 *   - Value accessed via `ref`.
 *   - Simpler, but less control.
 *
 * ---------------------------------------------------------
 * ✅ Controlled Input Example
 */

import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Input: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

/**
 * 🔍 Key Points:
 * - React has full control.
 * - Good for validation, dynamic input handling.
 * - More code, but better for large forms.
 */

/**
 * ---------------------------------------------------------
 * 🟡 Uncontrolled Input Example using useRef
 */

import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Input: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: <input type="text" ref={nameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

/**
 * 🔍 Key Points:
 * - Less code.
 * - React doesn't track input state.
 * - Not suitable for real-time validations or complex form logic.
 */

/**
 * ---------------------------------------------------------
 * 🔄 When to Use What?
 * 
 * 🔹 Controlled:
 *   - When input value affects other UI parts.
 *   - For validations, conditionals, dynamic inputs.
 *   - When form state must be submitted or analyzed.
 *
 * 🔹 Uncontrolled:
 *   - For quick simple inputs.
 *   - When migrating from non-React code.
 *   - File inputs, or integrating with 3rd-party libs.
 */

/**
 * ---------------------------------------------------------
 * 📝 Summary Table:
 *
 * | Feature                | Controlled             | Uncontrolled          |
 * |------------------------|------------------------|------------------------|
 * | State management       | React (`useState`)     | DOM (`ref`)            |
 * | Code complexity        | More verbose           | Simpler                |
 * | Validation support     | Easy                   | Manual                 |
 * | Initial value          | `value={...}`          | `defaultValue={...}`   |
 * | Real-time sync         | Yes                    | No                     |
 * | React devtools support | Full tracking          | Limited                |
 *
 */

export { ControlledForm, UncontrolledForm };
