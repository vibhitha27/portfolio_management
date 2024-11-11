// src/context/Context.js
import React, { createContext, useContext, useState } from 'react';

const Context1 = createContext();

export const AuthProvider = ({ children }) => {
    const [Email, setEmail] = useState(''); // Use Email here (uppercase)

    return (
        <Context1.Provider value={{ Email, setEmail }}>
            {children}
        </Context1.Provider>
    );
};

export const useUser=()=>useContext(Context1)
