// ContextApi.jsx
import React, { createContext, useContext, useState } from 'react';

/*
✅ Context API in React:
- Allows you to share state globally without passing props down manually (prop drilling).
- Useful for themes, auth state, language, etc.

🧠 Main Parts:
1. Create context with `createContext()`
2. Wrap components with `Context.Provider`
3. Access context with `useContext()`
*/

// 1. Create Context
const UserContext = createContext();

// 2. Create Provider Component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState('Jeevan');

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// 3. Consumer Component (reads context)
const Profile = () => {
    const { user } = useContext(UserContext);
    return <h3>Welcome, {user}!</h3>;
};

// 4. Updater Component (modifies context)
const ChangeUser = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <button onClick={() => setUser(user === 'Jeevan' ? 'Ron' : 'Jeevan')}>
            Change User Name
        </button>
    );
};

// 5. Final Combined Component
const ContextApi = () => {
    return (
        <UserProvider>
            <div style={{ padding: '20px' }}>
                <h2>React Context API Example</h2>
                <Profile />
                <ChangeUser />
            </div>
        </UserProvider>
    );
};

export default ContextApi;
