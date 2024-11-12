// // src/context/Context.js
// import React, { createContext, useContext, useState } from 'react';

// const Context1 = createContext();

// export const AuthProvider = ({ children }) => {
//     const [Email, setEmail] = useState(''); 

//     return (
//         <Context1.Provider value={{ Email, setEmail }}>
//             {children}
//         </Context1.Provider>
//     );
// };

// export const useUser=()=>useContext(Context1)


import React, { createContext, useContext, useState, useEffect } from 'react';

const Context1 = createContext();

export const AuthProvider = ({ children }) => {
    // Check localStorage for the saved email on initial load
    const [Email, setEmail] = useState(() => {
        const savedEmail = localStorage.getItem('email');
        return savedEmail ? savedEmail : ''; // Default to empty if not found
    });

    // Store the email in localStorage whenever it changes
    useEffect(() => {
        if (Email) {
            localStorage.setItem('email', Email);
        }
    }, [Email]);

    return (
        <Context1.Provider value={{ Email, setEmail }}>
            {children}
        </Context1.Provider>
    );
};

export const useUser = () => useContext(Context1);

