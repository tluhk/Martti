import React from 'react';
import { Col, Card } from 'react-bootstrap';

function Question(props) {
  return (
    <Col>
      <Card>
        <Card.Body>{ props.question }</Card.Body>
      </Card>
    </Col>
  );
}

export default Question;
