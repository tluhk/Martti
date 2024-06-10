import React, { useState } from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  // const [password, setPassword] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    
    });
  }

/*   function handlePasswordChange(event) {
    setPassword(event.target.value);
  } */

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post('https://blog.hk.tlu.ee/login', login);
    console.log(response.data);
    if (response.data.success) {
      localStorage.setItem('token', response.data.token);
      navigate('/');
    }
  }

  return (
    <Container>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
