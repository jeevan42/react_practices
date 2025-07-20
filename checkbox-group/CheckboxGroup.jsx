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