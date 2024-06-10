import React from 'react';
import Todos from './Todos';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        <NavBar />
      </Row>
      <Row className='text-center'>
        <h1>Pealkiri</h1>
      </Row>
      <Row>
        <Col md={9}>
          <Todos />
        </Col>
        <Col md={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
