import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <footer className="footer">
            <Link to="/about">About</Link>
            <Link to="/help">Help</Link>
            <Link to="/credit">Credit</Link>
            <Link to="/contact">Contact</Link>
        </footer>
    );
};
