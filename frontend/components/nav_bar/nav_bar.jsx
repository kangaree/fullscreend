import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    );

  return (
    <header className="nav-bar">
      <Link to="/"><h1 className="logo">Fullscreend</h1></Link>
      <div>
        {display}
      </div>
    </header>
  );
};
