import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <ul className="footer-links-text">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/credit">Credit</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="footer-links-logos"><p>logos</p></div>
            </div>
            <p className="footer-credit"> Fullscreend. Made by a fan of tv and Letterboxd in NY, NY. TV data from TMDb. </p>
        </footer>
    );
};
