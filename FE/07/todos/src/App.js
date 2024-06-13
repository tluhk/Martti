import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <Container>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Container>

  );
}

export default App;
