import React, { useState, useEffect } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import data from '../data/data';

const questions = data.sjta.questions;


const getRandomIndex = (excludeIndex, length) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === excludeIndex);
  return newIndex;
};

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => getRandomIndex(prevIndex, questions.length));
      }, 50)

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  useEffect(() => {
    setCurrentQuestion(questions[index]);
  }, [index]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <Container className="text-center my-5">
      <Card onClick={handleToggle}>
        <Card.Body>
          <Card.Title>Vastatav teema</Card.Title>
          <Card.Text>{currentQuestion}</Card.Text>
          <Button variant="primary" onClick={handleToggle}>
            {isRunning ? 'Stop' : 'Start'}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Questions;