import React, { useState } from 'react';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
    </div>
  );
};

export default LoginControl;
