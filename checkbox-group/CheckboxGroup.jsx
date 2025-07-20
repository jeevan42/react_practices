/**
 * ✅ CheckboxGroup Component
 * 
 * 📌 Description:
 * This React component demonstrates a basic checkbox hierarchy system with one parent checkbox 
 * and two child checkboxes. It ensures proper syncing between the parent and its children based 
 * on user interaction.
 * 
 * 🧠 Behavior:
 * - When **all child checkboxes** are checked manually, the parent checkbox becomes automatically checked.
 * - When the **parent checkbox** is unchecked, all children get automatically unchecked as well.
 * - If any **child checkbox** is unchecked, the parent gets automatically unchecked.
 * 
 * 💡 Use Case:
 * This is commonly seen in forms where selecting a group of options (like permissions or categories)
 * requires selecting all child items, or deselecting the group deselects all sub-options.
 * 
 * 📁 Suitable for practice repositories, demo UIs, or as a base for a more dynamic checkbox tree.
 */

import React, { useState } from 'react';

const CheckboxGroup = () => {
  const [parentChecked, setParentChecked] = useState(false);
  const [children, setChildren] = useState({
    child1: false,
    child2: false
  });

  const handleParentChange = () => {
    const newState = !parentChecked;
    setParentChecked(newState);
    setChildren({
      child1: newState,
      child2: newState
    });
  };

  const handleChildChange = (e) => {
    const { name, checked } = e.target;
    const newChildren = {
      ...children,
      [name]: checked
    };
    setChildren(newChildren);

    // Auto-check parent if all children are checked
    const allChecked = Object.values(newChildren).every(Boolean);
    setParentChecked(allChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={parentChecked}
          onChange={handleParentChange}
        />
        Parent Checkbox
      </label>

      <div style={{ marginLeft: 20 }}>
        <label>
          <input
            type="checkbox"
            name="child1"
            checked={children.child1}
            onChange={handleChildChange}
          />
          Child 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="child2"
            checked={children.child2}
            onChange={handleChildChange}
          />
          Child 2
        </label>
      </div>
    </div>
  );
};

export default CheckboxGroup;