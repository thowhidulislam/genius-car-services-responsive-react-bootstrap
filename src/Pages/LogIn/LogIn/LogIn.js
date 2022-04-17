import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const refEmail = useRef('')
    const refPassword = useRef('')
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const email = refEmail.current.value;
        const password = refPassword.current.value;

        console.log(email, password)
    }

    const navigateRegister = event => {
        event.preventDefault()
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-primary text-center'>Please login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={refEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={refPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default LogIn;