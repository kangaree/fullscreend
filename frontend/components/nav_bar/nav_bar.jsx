import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <nav className="header-nav">
        <ul>
          <li><Link className="nav-link" to="/login">{currentUser.username}</Link></li>
          <button onClick={logout}>Log Out</button>
          <li><Link className="nav-link" to="/">Activity</Link></li>
          <li><Link className="nav-link" to="/shows">Shows</Link></li>
          <li><Link className="nav-link" to="/lists">Lists</Link></li>
          <li><Link className="nav-link" to="/users">People</Link></li >
        </ul>
        <input type="text" />
      </nav>
    </div>
  ) : (
      <nav className="header-nav">
        <ul>
          <li><Link className="nav-link" to="/login">Sign In</Link></li>
          <li><Link className="nav-link" to="/signup">Create Account</Link></li>
          <li><Link className="nav-link" to="/shows">Shows</Link></li>
          <li><Link className="nav-link" to="/lists">Lists</Link></li>
          <li><Link className="nav-link" to="/users">People</Link></li >
        </ul>
          <input type="text" />
      </nav>
    );

  return (
    <header className="nav-bar">
      <Link to="/">
        <div className="nav-logo-text">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/%D0%A3%D0%AD%D0%98%D0%A2.svg" />
          <h1 className="logo">Fullscreend</h1>
        </div>
      </Link>
      <div>
        {display}
      </div>
    </header>
  );
};
