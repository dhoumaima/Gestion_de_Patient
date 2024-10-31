import React, { useState } from 'react';
import './Login.css';
import backgroundImage from '../images/Background.jpg';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple validation
        if (!email || !password) {
            setError("Veuillez remplir tous les champs");
            return;
        }
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="login-page">
            <div className="login-image">
               
            <img src={backgroundImage} alt="Login Visual" />
            </div>
            <div className="login-form">
                <h2>Connexion</h2>
              
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Entrez votre email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
