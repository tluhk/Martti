import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Exam from './components/Exam';

function App() {
  return (
    <Container className='text-center'>
      <Exam />
    </Container>
  );
}

export default App;
