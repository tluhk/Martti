import React, { useState } from 'react';

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogoutClick = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div>
      <p onClick={handleLogoutClick}>Logout</p>
    </div>
  );
};

export default Logout;