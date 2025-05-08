// HOC.js
import React from 'react';

/*
 * ✅ HOC Definition:
 * A Higher-Order Component is a function that takes a component and returns a new component.
 * It is used for code reuse and adding behavior to existing components.
 */
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    const upperName = props.name.toUpperCase();
    return <WrappedComponent {...props} name={upperName} />;
  };
};

// 🔹 Normal Component
const UserGreeting = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

// 🔹 Enhanced Component using HOC
const LoggedUserGreeting = withLogger(UserGreeting);

const HOC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Higher-Order Component (HOC) Example</h1>

      {/* This logs props to console before rendering */}
      <LoggedUserGreeting name="Jeevan" />
    </div>
  );
};

export default HOC;
