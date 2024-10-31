import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Validation simple
        if (!email || !password) {
            setError("Veuillez remplir tous les champs");
            return;
        }
        // Ajoutez ici la logique pour authentifier l'utilisateur
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="login-container">
            <h2>Connexion</h2>
            {error && <p className="error-message">{error}</p>}
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
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;
