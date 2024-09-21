import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/Firebase';
import './Signin.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError(''); 

        
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
        
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log('Logged in:', { email });

            
            localStorage.setItem('userId', user.uid);

            
            navigate('/AdmissionForm');
        } catch (err) {
            console.error('Login failed:', err.message);

            
            console.log(`Error code: ${err.code}, Error message: ${err.message}`);

            
            switch (err.code) {
                case 'auth/wrong-password':
                    setError('Incorrect password. Please try again.');
                    break;
                case 'auth/user-not-found':
                    setError('No user found with this email.');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email format.');
                    break;
                case 'auth/network-request-failed':
                    setError('Network error. Please check your connection.');
                    break;
                case 'auth/too-many-requests':
                    setError('Too many unsuccessful attempts. Please try again later.');
                    break;
                default:
                    setError('Failed to Sign in. Please try again.');
                    break;
            }
        }
    };

    return (
        <div className="container">
            <div className="left-side">
                <div className="logo">
                    <img src="https://st2.depositphotos.com/1496387/7584/v/450/depositphotos_75844607-education-schooling-vector-logo-design-template-students-graduates-or-school-college-university-icon-flat-illustration.jpg" alt="Logo" />
                </div>
                <h1>Welcome to Learning  Management System</h1>
                <img height={500} src="https://www.shutterstock.com/image-vector/boy-studying-computer-books-doing-260nw-2122102106.jpg" alt="Background" className="background-image" />
            </div>

            <div className="right-side">
                <h1>Sign In</h1>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    
                    {error && <p className="error-message">{error}</p>}

                    <button
                        type="button"
                        onClick={handleLogin}
                        // disabled={!email || !password}
                    >
                        Sign In
                    </button>
                </form>
              
                <p style={{textDecoration:"underline"}} className="signup-link" onClick={() => navigate('/signup')}>Sign Up</p>
            </div>
        </div>
    );
};

export default Signin;