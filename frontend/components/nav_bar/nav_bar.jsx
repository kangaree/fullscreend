import React from 'react';
import { Link } from 'react-router-dom';
import ShowsSearchContainer from '../shows_search/shows_search_container';

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <nav className="header-nav">
        <ul>
          <li><Link className="nav-link" to="/">{currentUser.username}</Link></li>
          <li><a className="nav-link" onClick={logout}>Log Out</a></li>
          <li><Link className="nav-link" to="/reviews">Activity</Link></li>
          <li><Link className="nav-link" to="/shows">Shows</Link></li>
          <li><Link className="nav-link" to="/lists">Lists</Link></li>
          <li><Link className="nav-link" to="/biglist">People</Link></li >
          <li className="nav-search-input"><ShowsSearchContainer /></li>
        </ul>
      </nav>
    </div>
  ) : (
      <nav className="header-nav">
        <ul>
          <li><a className="nav-link" onClick={() => openModal({ modal_type: 'login' })}>Sign In</a></li>
          <li><a className="nav-link" onClick={() => openModal({ modal_type: 'signup' })}>Create Account</a></li>
          <li><Link className="nav-link" to="/shows">Shows</Link></li>
          <li><Link className="nav-link" to="/lists">Lists</Link></li>
          <li><Link className="nav-link" to="/biglist">People</Link></li >
          <li className="nav-search-input"><ShowsSearchContainer /></li>
        </ul>
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
