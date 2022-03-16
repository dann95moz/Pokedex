import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginEmailPassword, loginGoogle } from '../actions/actionLogin';
import { logoutAsync } from '../actions/actionLogin';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Login() {
    const history = useHistory();

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, password));



    }

    const handleGoogle = () => {
        dispatch(loginGoogle());

    }
    const handleLogout = () => {
        dispatch(logoutAsync())
        console.log("deslogueado");
        <Link to={"/users"}></Link>


    }

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    autoComplete="true"
                    name="password"
                    value={password}
                    onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
            <Button onClick={() => handleLogout()}>salir</Button>

            <Container className="auth__social-networks">
                <Link to={"/users"}><Container
                    className="google-btn"
                    onClick={handleGoogle}

                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container></Link>
            </Container>
            <Link to="/registro">Registrarse</Link>

        </Form>

    );
}

export default Login;