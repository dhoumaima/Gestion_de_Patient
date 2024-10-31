import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './SignIn/Login';
import './App.css';

function Home() {
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="app-container">
            <h1>Vous avez un compte</h1>
            <button className="login-button" onClick={handleNavigateToLogin}>Connecter</button>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
