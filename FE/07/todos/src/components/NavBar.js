import React from 'react';
import { Row } from 'react-bootstrap';
import NavElement from './NavElement';

const style = {
  display: 'flex',
  alignItems: 'center',
};

function NavBar() {
  return(
    <Row>
      <div style={style}>
        <NavElement path='/' name='Home' />
        <NavElement path='/about' name='About' />
        <NavElement path='/posts' name='Posts' />
        <NavElement path='/login' name='Login' />
      </div>
    </Row>
  );
};

export default NavBar;
