import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    border: '1px solid black',
    margin: '5px',
    flex: 1,
    textAlign: 'center',
}

function NavElement(props) {
  return(
    <Link style={style} to={props.path}>{props.name}</Link>
  );
};

export default NavElement;