import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Siia tuleb sisselogimise loogika.
    console.log('Sisselogimine:', login);
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
                    value={login.email}
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
                    value={login.password}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                  Logi sisse
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
