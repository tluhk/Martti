import React, { useState } from 'react';
import './Question.css';
import { Col, Card } from 'react-bootstrap';

function Question(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    console.log(isFlipped);
  };

  return (
    <Col md={2}>
        <div className={`flippable-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className='front'>
        <Card>
          <Card.Body>Tagumine pool</Card.Body>
        </Card>
      </div>
      <div className='back'>
        <Card>
          <Card.Body>{props.question}</Card.Body>
        </Card>
      </div>
    </div>
    </Col>
  );
}

export default Question;
