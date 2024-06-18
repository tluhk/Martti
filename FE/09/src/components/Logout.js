import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
      logout();
      navigate('/login');
    };

    return (
        <Button onClick={handleLogout} variant='primary' size='sm'>Logout</Button>
    );
};

export default Logout;
