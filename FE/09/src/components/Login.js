import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { user, login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://blog.hk.tlu.ee/login', loginData);
      login(response.data.token);
      setMessage({
        variant: 'success',
        message: 'Oled edukalt sisse logitud'
      });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
      setMessage({
        variant: 'warning',
        message: error.response.data.message
      });
      setLoginData({ ...loginData, password: ''  });
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
      <Row>
        <Col>
          <Card style={{ width: '20rem', padding: '20px' }}>
            <Card.Body>
              <Card.Title className="text-center display-6">Logi sisse</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Sisesta email" 
                    value={loginData.email}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Parool</Form.Label>
                  <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Sisesta parool" 
                    value={loginData.password}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                  Logi sisse
                </Button>
              </Form>
              {message && <Alert style={{marginTop: '10px'}} variant={message.variant} className='text-center'>{message.message}</Alert>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
