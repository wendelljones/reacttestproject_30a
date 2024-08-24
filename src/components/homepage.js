import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../styles/homepage.css';

function Homepage() {
    return (
            <div>
                <h1>Welcome to my React site</h1>
                <h4>Please visit the <Link to="/googlemap">Google Map</Link> page</h4>
                <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            );
}

export default Homepage;