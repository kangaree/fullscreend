import React from 'react';
import { Link } from 'react-router-dom';
import ShowsSearchContainer from '../shows_search/shows_search_container';

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
      <nav className="header-nav">
        <ul>
          <li><Link className="nav-link" to="/">
            <span className="nav-profile-pic"><img src={currentUser.id % 10 === 7 ? window.profSnowball : (currentUser.id % 10 === 6 ? window.profSanta : (currentUser.id % 10 === 5 ? window.profGrandma : (currentUser.id % 10 === 4 ? window.profGrandpa : (currentUser.id % 10 === 3 ? window.profMaggie : (currentUser.id % 10 === 2 ? window.profBart : (currentUser.id % 10 === 1 ? window.profLisa : (currentUser.id % 10 === 0 ? window.profMarge : (currentUser.id % 10 === 8 ? window.profTV : window.profHomer))))))))} /></span>
            {" " + currentUser.username}
          </Link></li>
          <li><a className="nav-link" onClick={logout}>Log Out</a></li>
          <li><Link className="nav-link" to="/reviews">Activity</Link></li>
          <li><Link className="nav-link" to="/shows">Shows</Link></li>
          <li><Link className="nav-link" to="/lists">Lists</Link></li>
          <li><Link className="nav-link" to="/biglist">People</Link></li >
          <li className="nav-search-input"><ShowsSearchContainer /></li>
        </ul>
      </nav>
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
          <img src="https://s3.amazonaws.com/fullscreend/fullscreendtest.svg" />
          <h1 className="logo">Fullscreend</h1>
        </div>
      </Link>
      <div>
        {display}
      </div>
    </header>
  );
};
