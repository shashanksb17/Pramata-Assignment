// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import Swal from 'sweetalert2';

import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://album-app.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        localStorage.setItem("albumUserToken",data.token)
        MySwal.fire(
            'User Loggedin Successfully',
            'Please click the button!',
            'success'
          )
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
