// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUpPage from './components/SignUpPage';
import Register from './components/Register';
import GetPortfolio from './components/GetPortfolio';
import Login from './components/Login';
import HomePage from './components/HomePage';
import PortfolioCreation from './components/PortfolioCreation';
import Portfolio from './components/Portfolio';
import DashboardPage from './components/DashboardPage';
import { AuthProvider } from './context/Context';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/portfoliocreation" element={<PortfolioCreation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/get-portfolio" element={<GetPortfolio />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

