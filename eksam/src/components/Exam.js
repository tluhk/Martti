import React from 'react';
import { Row } from 'react-bootstrap';
import data from '../data/data';
import Question from './Question';

function Exam() {
  return (
    <Row>
      <h1>Exam</h1>
      <div>
      {
        data.sjta.questions.map((question, index) => {
          return <Question key={index} question={question} />
        })
      }
      </div>
    </Row>
  );
}

export default Exam;
