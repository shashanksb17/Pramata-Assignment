import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

function Signup() {
  const navigate = useNavigate(); // React Router hook for navigation
  const [name, setName] = useState(''); // State for name input
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input

  // Function to handle signup
  const handleSignup = async () => {
    const formData = { name, email, password };

    try {
      const response = await fetch('https://album-app.onrender.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
      console.log(response)

      if (!response.ok) {
        // Handle non-2xx responses
        const responseData = await response.json();
        throw new Error(responseData.message || 'Failed to register user');
      }

      // Display a success message using SweetAlert2
      MySwal.fire(
        'User Registered Successfully',
        'Please click the button!',
        'success'
      )
    } catch (error) {
      console.error('Signup error:', error);

      // Handle different types of errors and show appropriate alerts
      if (error instanceof TypeError) {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Please check your internet connection.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message || 'Something went wrong!',
          footer: 'Why do I have this issue',
        });
      }
    }
  };

  // JSX component rendering
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state on input change
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
          />
        </div>
        <button onClick={handleSignup}>Sign Up</button> {/* Call handleSignup when button is clicked */}
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
