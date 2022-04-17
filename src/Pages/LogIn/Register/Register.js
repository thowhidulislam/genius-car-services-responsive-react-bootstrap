import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
    }
    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Enter your name' />
                <input type="email" name="email" id="" placeholder='Enter your email here' />
                <input type="password" name="password" id="" placeholder='Enter your password here' />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div >
    );
};

export default Register;