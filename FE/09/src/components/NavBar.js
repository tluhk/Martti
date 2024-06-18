import React, { useState, useEffect, useContext } from 'react';
import { Container, Nav, Navbar, NavbarCollapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { AuthContext } from './AuthContext';

function NavBar() {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ marginBottom: '10px' }}>
      <Container>
        <Navbar.Brand as={Link} to='/'>Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/posts'>Posts</Nav.Link>
            {user?.role === 'admin' && <Nav.Link as={Link} to='/users'>Users</Nav.Link>}
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Navbar.Collapse className="justify-content-end">
            {user ? (
              <Logout />
            ) : (
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            )}
            {user && <Navbar.Text>{user.email}</Navbar.Text>}
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
