import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../Config/Firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import './Signup.css';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        setError(''); 

        if (!firstName || !lastName || !email || !password) {
            setError('All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                firstName,
                lastName,
                email,
            });

            console.log('User signed up and data stored:', user.uid);
            navigate('/');
        } catch (err) {
            console.error('Error during signup:', err);
            setError('Failed to sign up. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="left-side">
                <div className="logo">
                    <img src="
                    https://st2.depositphotos.com/1496387/7584/v/450/depositphotos_75844607-education-schooling-vector-logo-design-template-students-graduates-or-school-college-university-icon-flat-illustration.jpg" alt="Logo" />
                </div>
                <h1>Welcome to Learning  Management System</h1>
                <img height={500} src="https://www.shutterstock.com/image-vector/boy-studying-computer-books-doing-260nw-2122102106.jpg" alt="Background" className="background-image" />
            </div>

            <div className="right-side">
                <h1>Signup</h1>
                <form>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

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
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                   

                    
                    {error && <p className="error-message">{error}</p>}

                    <button
                        type="button"
                        onClick={handleSignup}
                       
                    >
                        Signup
                    </button>
                </form>
                
                <p className="login-link" onClick={() => navigate('/')}>Already have a profile?</p>
            </div>
        </div>
    );
};

export default Signup;