/**
 * ✅ CheckboxTree Component
 * 
 * 📌 Description:
 * A dynamic and recursive React component that renders a hierarchical tree of checkboxes 
 * (Parent → Child → Sub-child...) with automatic parent-child syncing behavior.
 * 
 * 🧠 Behavior:
 * - Each node in the tree has a `checked` state and an optional list of children.
 * - Checking a parent auto-checks all its children recursively.
 * - If all children of a node are checked, the parent auto-checks.
 * - If any child is unchecked, the parent is also unchecked automatically.
 * 
 * 💡 Use Case:
 * Ideal for nested permissions, categories, modules access, feature toggles, etc.
 * This structure supports infinite nesting and clean recursive rendering.
 * 
 * 📁 Suitable for real-world apps, admin panels, or practice repos involving tree data and checkbox logic.
 */

import React, { useState } from 'react';

const CheckboxNode = ({ node, onChange }) => {
  const handleChange = (e) => {
    const checked = e.target.checked;
    onChange(node, checked);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <label>
        <input
          type="checkbox"
          checked={node.checked}
          onChange={handleChange}
        />
        {node.label}
      </label>
      {node.children &&
        node.children.map((child) => (
          <CheckboxNode key={child.id} node={child} onChange={onChange} />
        ))}
    </div>
  );
};

const CheckboxTree = () => {
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      label: 'Parent',
      checked: false,
      children: [
        { id: 2, label: 'Child 1', checked: false },
        {
          id: 3,
          label: 'Child 2',
          checked: false,
          children: [
            { id: 4, label: 'Sub-child 1', checked: false },
            { id: 5, label: 'Sub-child 2', checked: false }
          ]
        }
      ]
    }
  ]);

  const updateTree = (nodes, targetNode, checked) => {
    return nodes.map((node) => {
      if (node.id === targetNode.id) {
        return {
          ...node,
          checked,
          children: node.children ? updateTree(node.children, {}, checked) : []
        };
      }

      if (node.children) {
        const updatedChildren = updateTree(node.children, targetNode, checked);

        // Auto-update parent based on children
        const allChildrenChecked = updatedChildren.every((child) => child.checked);
        return {
          ...node,
          checked: allChildrenChecked,
          children: updatedChildren
        };
      }

      return node;
    });
  };

  const handleCheckboxChange = (targetNode, checked) => {
    const updated = updateTree(treeData, targetNode, checked);
    setTreeData(updated);
  };

  return (
    <div>
      {treeData.map((node) => (
        <CheckboxNode key={node.id} node={node} onChange={handleCheckboxChange} />
      ))}
    </div>
  );
};

export default CheckboxTree;