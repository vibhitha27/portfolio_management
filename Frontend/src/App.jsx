// src/App.jsx
import React from 'react';
import Register from './components/Register';
import GetPortfolio from './components/GetPortfolio';
import Login from './components/Login';
import { AuthProvider } from './context/Context';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <AuthProvider>
      <Login />
      <Portfolio/>
      <GetPortfolio/>
    </AuthProvider>
  );
}

export default App;
