// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

/*
✅ React Router Overview:
- BrowserRouter: Top-level component that enables routing using the browser history.
- Routes: Wrapper for <Route> components.
- Route: Defines a path and the component to render.
- useNavigate: Hook to programmatically navigate between routes.
*/

// 🟢 Home Page Component
const Home = () => {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate('/form');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToForm}>Go to Form</button>
    </div>
  );
};

// 🟢 Form Page (Controlled Component)
const FormPage = () => {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
    navigate('/');
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{' '}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// 🔁 Router Setup
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
