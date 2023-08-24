// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';

import Swal from 'sweetalert2';
import './Signup.css';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Signup() {
    const navigate = useNavigate(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const formData = { name, email, password };

    try {
      const response = await fetch('https://homestead.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)

      if (response.message=="User registered successfully") {
        const data = await response.json();
        MySwal.fire(
          'User Registered Successfully',
          'Please click the button!',
          'success'
        )
      } else {
        const errorData = await response.json();
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorData.message || 'Failed to Register User',
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
        </div>
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
  
}

export default Signup;
