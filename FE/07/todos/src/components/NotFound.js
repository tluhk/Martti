import React from 'react';
import NavBar from './NavBar';
import { Container, Row } from 'react-bootstrap';

function NotFound() {
  return (
    <Container>
      <Row>
        <NavBar />
      </Row>
      <Row>
        <h1>404 Not Found</h1>
      </Row>
    </Container>
  );
}

export default NotFound;
