import React from 'react';
import './App.css'; 

function Login() {
  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
      <p>Pas de compte ? <a href="/signup">Créer un compte</a></p>
    </div>
  );
}

export default Login;
