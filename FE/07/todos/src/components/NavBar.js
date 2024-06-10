import React from 'react';
import NavElement from './NavElement';

const style = {
  display: 'flex',
  alignItems: 'center',
};

function NavBar() {
  return(
    <div style={style}>
      <NavElement path='/' name='Home' />
      <NavElement path='/about' name='About' />
      <NavElement path='/login' name='Login' />
    </div>
  );
};

export default NavBar;
